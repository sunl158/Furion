﻿// Copyright (c) 2020-2021 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace Microsoft.Extensions.Hosting;

/// <summary>
/// 配置 Furion 框架初始化
/// </summary>
public static class FurionHostBuilderExtensions
{
    /// <summary>
    /// 初始化框架服务
    /// </summary>
    /// <param name="hostBuilder">主机构建器</param>
    /// <param name="configure">服务提供器配置</param>
    /// <returns></returns>
    public static IHostBuilder UseFurion(this IHostBuilder hostBuilder, Action<HostBuilderContext, AppServiceProviderOptions>? configure = default)
    {
        // 存储命名服务描述器
        _ = hostBuilder.Properties.TryAdd(nameof(NamedServiceProvider), new Dictionary<string, Type>());

        // 添加框架初始配置
        hostBuilder.AddAppConfiguration();

        // 配置初始服务
        hostBuilder.ConfigureServices((context, services) =>
        {
            // 注册 App 全局应用对象服务
            services.AddApp(context.Configuration);

            // 注册框架服务提供器
            services.TryAddTransient(sp => sp.CreateProxy());
        });

        // 配置框架服务提供器工厂
        hostBuilder.UseAppServiceProviderFactory(configure);

        return hostBuilder;
    }
}