﻿// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using System.Data;

namespace Furion.DatabaseAccessor;

/// <summary>
/// Sql 语句执行代理
/// </summary>
[SuppressSniffer]
public class SqlSentenceProxyAttribute : SqlProxyAttribute
{
    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="sql"></param>
    public SqlSentenceProxyAttribute(string sql)
    {
        Sql = sql;
        CommandType = CommandType.Text;
    }

    /// <summary>
    /// Sql 语句
    /// </summary>
    public string Sql { get; set; }

    /// <summary>
    /// 命令类型
    /// </summary>
    public CommandType CommandType { get; set; }
}