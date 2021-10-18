﻿// Copyright (c) 2020-2021 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

namespace Furion.EventBus;

/// <summary>
/// 事件源
/// </summary>
public sealed class EventSource
{
    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="eventId">事件 Id</param>
    public EventSource(string eventId)
    {
        EventId = eventId;
    }

    /// <summary>
    /// 事件 Id
    /// </summary>
    public string EventId { get; internal set; }

    /// <summary>
    /// 事件承载数据
    /// </summary>
    public object? Payload { get; set; }

    /// <summary>
    /// 取消Token标识
    /// </summary>
    public CancellationToken CancellationToken { get; set; }
}