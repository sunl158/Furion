﻿// MIT License
//
// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

namespace Furion.DatabaseAccessor;

/// <summary>
/// 实体执行部件
/// </summary>
public sealed partial class EntityExecutePart<TEntity>
    where TEntity : class, IPrivateEntity, new()
{
    /// <summary>
    /// 设置实体
    /// </summary>
    /// <param name="entity"></param>
    /// <returns></returns>
    public EntityExecutePart<TEntity> SetEntity(TEntity entity)
    {
        Entity = entity;
        return this;
    }

    /// <summary>
    /// 设置数据库执行作用域
    /// </summary>
    /// <param name="serviceProvider"></param>
    /// <returns></returns>
    public EntityExecutePart<TEntity> SetContextScoped(IServiceProvider serviceProvider)
    {
        if (serviceProvider != null) ContextScoped = serviceProvider;
        return this;
    }

    /// <summary>
    /// 设置数据库上下文定位器
    /// </summary>
    /// <typeparam name="TDbContextLocator"></typeparam>
    /// <returns></returns>
    public EntityExecutePart<TEntity> Change<TDbContextLocator>()
        where TDbContextLocator : class, IDbContextLocator
    {
        return Change(typeof(TDbContextLocator));
    }

    /// <summary>
    /// 设置数据库上下文定位器
    /// </summary>
    /// <returns></returns>
    public EntityExecutePart<TEntity> Change(Type dbContextLocator)
    {
        if (dbContextLocator != null) DbContextLocator = dbContextLocator;
        return this;
    }
}