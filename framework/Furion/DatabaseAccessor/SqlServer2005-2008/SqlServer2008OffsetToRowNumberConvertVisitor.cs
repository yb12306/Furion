﻿// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using System.Linq.Expressions;
using System.Reflection;

namespace Microsoft.EntityFrameworkCore.Query;

/// <summary>
/// 处理 .Skip().Take() 表达式问题
/// </summary>
internal class SqlServer2008OffsetToRowNumberConvertVisitor : ExpressionVisitor
{
    /// <summary>
    /// 筛选列访问器
    /// </summary>
    private static readonly MethodInfo GenerateOuterColumnAccessor;

    /// <summary>
    /// 引用 TableReferenceExpression 类型
    /// </summary>
    private static readonly Type TableReferenceExpressionType;

    /// <summary>
    /// 表达式根节点
    /// </summary>
    private readonly Expression root;

    /// <summary>
    /// Sql 表达式工厂
    /// </summary>
    private readonly ISqlExpressionFactory sqlExpressionFactory;

    /// <summary>
    /// 静态构造函数
    /// </summary>
    static SqlServer2008OffsetToRowNumberConvertVisitor()
    {
        var method = typeof(SelectExpression).GetMethod("GenerateOuterColumn", BindingFlags.NonPublic | BindingFlags.Instance);

        if (!typeof(ColumnExpression).IsAssignableFrom(method?.ReturnType))
            throw new InvalidOperationException("SelectExpression.GenerateOuterColumn() is not found.");

        TableReferenceExpressionType = method.GetParameters().First().ParameterType;
        GenerateOuterColumnAccessor = method;
    }

    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="root"></param>
    /// <param name="sqlExpressionFactory"></param>
    public SqlServer2008OffsetToRowNumberConvertVisitor(Expression root, ISqlExpressionFactory sqlExpressionFactory)
    {
        this.root = root;
        this.sqlExpressionFactory = sqlExpressionFactory;
    }

    /// <summary>
    /// 替换表达式
    /// </summary>
    /// <param name="node"></param>
    /// <returns></returns>
    protected override Expression VisitExtension(Expression node)
    {
        if (node is ShapedQueryExpression shapedQueryExpression)
        {
            return shapedQueryExpression.Update(Visit(shapedQueryExpression.QueryExpression), shapedQueryExpression.ShaperExpression);
        }
        if (node is SelectExpression se)
            node = VisitSelect(se);
        return base.VisitExtension(node);
    }

    /// <summary>
    /// 更新 Select 语句
    /// </summary>
    /// <param name="selectExpression"></param>
    /// <returns></returns>
    private Expression VisitSelect(SelectExpression selectExpression)
    {
        var oldOffset = selectExpression.Offset;
        if (oldOffset == null)
            return selectExpression;

        var oldLimit = selectExpression.Limit;
        var oldOrderings = selectExpression.Orderings;

        // 在子查询中 OrderBy 必须写 Top 数量
        var newOrderings = oldOrderings.Count > 0 && (oldLimit != null || selectExpression == root)
            ? oldOrderings.ToList()
            : new List<OrderingExpression>();

        // 更新表达式
        selectExpression = selectExpression.Update(selectExpression.Projection.ToList(),
                                                   selectExpression.Tables.ToList(),
                                                   selectExpression.Predicate,
                                                   selectExpression.GroupBy.ToList(),
                                                   selectExpression.Having,
                                                   orderings: newOrderings,
                                                   limit: null,
                                                   offset: null);
        var rowOrderings = oldOrderings.Count != 0 ? oldOrderings
            : new[] { new OrderingExpression(new SqlFragmentExpression("(SELECT 1)"), true) };

        selectExpression.PushdownIntoSubquery();

        var subQuery = (SelectExpression)selectExpression.Tables[0];
        var projection = new RowNumberExpression(Array.Empty<SqlExpression>(), rowOrderings, oldOffset.TypeMapping);
        var left = GenerateOuterColumnAccessor.Invoke(subQuery
            , new object[]
            {
                Activator.CreateInstance(TableReferenceExpressionType, new object[] { subQuery,subQuery.Alias }),
                projection,
                "row",
                true
            }) as ColumnExpression;

        selectExpression.ApplyPredicate(sqlExpressionFactory.GreaterThan(left, oldOffset));

        if (oldLimit != null)
        {
            if (oldOrderings.Count == 0)
            {
                selectExpression.ApplyPredicate(sqlExpressionFactory.LessThanOrEqual(left, sqlExpressionFactory.Add(oldOffset, oldLimit)));
            }
            else
            {
                // 这里不支持子查询的 OrderBy 操作
                selectExpression.ApplyLimit(oldLimit);
            }
        }
        return selectExpression;
    }
}