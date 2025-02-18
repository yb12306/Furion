﻿// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using Furion.Reflection;
using Microsoft.CodeAnalysis;
using System.Reflection;

namespace Furion.ViewEngine;

/// <summary>
/// 视图编译构建器
/// </summary>
[SuppressSniffer]
public class ViewEngineOptionsBuilder : IViewEngineOptionsBuilder
{
    /// <summary>
    /// 视图编译选项
    /// </summary>
    public ViewEngineOptions Options { get; set; }

    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="options"></param>
    public ViewEngineOptionsBuilder(ViewEngineOptions options = null)
    {
        Options = options ?? new ViewEngineOptions();
    }

    /// <summary>
    /// 添加程序集引用
    /// </summary>
    /// <param name="assemblyName"></param>
    public void AddAssemblyReferenceByName(string assemblyName)
    {
        var assembly = Reflect.GetAssembly(assemblyName);
        AddAssemblyReference(assembly);
    }

    /// <summary>
    /// 添加程序集引用
    /// </summary>
    /// <param name="assembly"></param>
    public void AddAssemblyReference(Assembly assembly)
    {
        Options.ReferencedAssemblies.Add(assembly);
    }

    /// <summary>
    /// 添加程序集引用
    /// </summary>
    /// <param name="type"></param>
    public void AddAssemblyReference(Type type)
    {
        AddAssemblyReference(type.Assembly);

        foreach (var argumentType in type.GenericTypeArguments)
        {
            AddAssemblyReference(argumentType);
        }
    }

    /// <summary>
    /// 添加元数据引用
    /// </summary>
    /// <param name="reference"></param>
    public void AddMetadataReference(MetadataReference reference)
    {
        Options.MetadataReferences.Add(reference);
    }

    /// <summary>
    /// 添加 Using
    /// </summary>
    /// <param name="namespaceName"></param>
    public void AddUsing(string namespaceName)
    {
        Options.DefaultUsings.Add(namespaceName);
    }

    /// <summary>
    /// 添加继承类型
    /// </summary>
    /// <param name="type"></param>
    public void Inherits(Type type)
    {
        Options.Inherits = RenderTypeName(type);
        AddAssemblyReference(type);
    }

    /// <summary>
    /// 渲染类型名
    /// </summary>
    /// <param name="type"></param>
    /// <returns></returns>
    private string RenderTypeName(Type type)
    {
        var result = type.Namespace + "." + type.Name;

        if (result.Contains('`'))
        {
            result = result[..result.IndexOf("`")];
        }

        if (type.GenericTypeArguments.Length == 0)
        {
            return result;
        }

        return result + "<" + string.Join(",", type.GenericTypeArguments.Select(RenderTypeName)) + ">";
    }
}