// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using System.Reflection;

namespace Furion.VirtualFileServer;

/// <summary>
/// 虚拟文件服务静态类
/// </summary>
[SuppressSniffer]
public static class FS
{
    /// <summary>
    /// 获取物理文件提供器
    /// </summary>
    /// <param name="root"></param>
    /// <param name="serviceProvider"></param>
    /// <returns></returns>
    public static IFileProvider GetPhysicalFileProvider(string root, IServiceProvider serviceProvider = default)
    {
        return GetFileProvider(FileProviderTypes.Physical, root, serviceProvider);
    }

    /// <summary>
    /// 获取嵌入资源文件提供器
    /// </summary>
    /// <param name="assembly"></param>
    /// <param name="serviceProvider"></param>
    /// <returns></returns>
    public static IFileProvider GetEmbeddedFileProvider(Assembly assembly, IServiceProvider serviceProvider = default)
    {
        return GetFileProvider(FileProviderTypes.Embedded, assembly, serviceProvider);
    }

    /// <summary>
    /// 文件提供器
    /// </summary>
    /// <param name="fileProviderTypes"></param>
    /// <param name="args"></param>
    /// <param name="serviceProvider"></param>
    /// <returns></returns>
    public static IFileProvider GetFileProvider(FileProviderTypes fileProviderTypes, object args, IServiceProvider serviceProvider = default)
    {
        var fileProviderResolve = App.GetService<Func<FileProviderTypes, object, IFileProvider>>(serviceProvider ?? App.RootServices);
        return fileProviderResolve(fileProviderTypes, args);
    }

    /// <summary>
    /// 根据文件名获取文件的 ContentType 或 MIME
    /// </summary>
    /// <param name="fileName">文件名（带拓展）</param>
    /// <param name="contentType">ContentType 或 MIME</param>
    /// <returns></returns>
    public static bool TryGetContentType(string fileName, out string contentType)
    {
        return InitialContentTypeProvider().TryGetContentType(fileName, out contentType);
    }

    /// <summary>
    /// 初始化文件 ContentType 提供器
    /// </summary>
    /// <returns></returns>
    public static FileExtensionContentTypeProvider InitialContentTypeProvider()
    {
        var fileExtensionProvider = new FileExtensionContentTypeProvider();
        fileExtensionProvider.Mappings[".iec"] = "application/octet-stream";
        fileExtensionProvider.Mappings[".patch"] = "application/octet-stream";
        fileExtensionProvider.Mappings[".apk"] = "application/vnd.android.package-archive";
        fileExtensionProvider.Mappings[".pem"] = "application/x-x509-user-cert";
        fileExtensionProvider.Mappings[".gzip"] = "application/x-gzip";
        fileExtensionProvider.Mappings[".7zip"] = "application/zip";
        fileExtensionProvider.Mappings[".jpg2"] = "image/jp2";
        fileExtensionProvider.Mappings[".wps"] = "application/kswps";
        fileExtensionProvider.Mappings[".et"] = "application/kset";
        fileExtensionProvider.Mappings[".dps"] = "application/ksdps";
        fileExtensionProvider.Mappings[".cdr"] = "application/x-coreldraw";
        fileExtensionProvider.Mappings[".shtml"] = "text/html";
        fileExtensionProvider.Mappings[".php"] = "application/x-httpd-php";
        fileExtensionProvider.Mappings[".php3"] = "application/x-httpd-php";
        fileExtensionProvider.Mappings[".php4"] = "application/x-httpd-php";
        fileExtensionProvider.Mappings[".phtml"] = "application/x-httpd-php";

        return fileExtensionProvider;
    }
}