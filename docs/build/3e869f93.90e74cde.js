(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),r=(n(0),n(89));const o={id:"dbcontext",title:"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",sidebar_label:"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},i={unversionedId:"dbcontext",id:"dbcontext",isDocsHomePage:!1,title:"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",description:"\u5728 EF Core \u9879\u76ee\u4e2d\uff0c\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7 DbContext \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5904\u7406\u7684\u3002",source:"@site/docs\\dbcontext.mdx",permalink:"/fur/docs/dbcontext",editUrl:"https://gitee.com/monksoul/Fur/tree/alpha/docs/docs/dbcontext.mdx",sidebar_label:"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",sidebar:"docs",previous:{title:"2.2 \u9009\u9879",permalink:"/fur/docs/options"}},b=[{value:"\u5173\u4e8e DbContext",id:"\u5173\u4e8e-dbcontext",children:[{value:"\u4e3b\u8981\u4f5c\u7528",id:"\u4e3b\u8981\u4f5c\u7528",children:[]},{value:"\u521b\u5efa DbContext \u4e0a\u4e0b\u6587",id:"\u521b\u5efa-dbcontext-\u4e0a\u4e0b\u6587",children:[]}]},{value:"\u5173\u4e8e FurDbContext",id:"\u5173\u4e8e-furdbcontext",children:[]},{value:"\u67e5\u770b\u4e24\u8005\u7684\u533a\u522b",id:"\u67e5\u770b\u4e24\u8005\u7684\u533a\u522b",children:[{value:"\u521b\u5efa FurDbContext \u4e0a\u4e0b\u6587",id:"\u521b\u5efa-furdbcontext-\u4e0a\u4e0b\u6587",children:[]}]},{value:"\u521d\u59cb\u5316\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"\u521d\u59cb\u5316\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[{value:"\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32",id:"\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32",children:[]},{value:"\u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"\u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]}]}],c={rightToc:b};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"EF Core")," \u9879\u76ee\u4e2d\uff0c\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5904\u7406\u7684\u3002"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"\u5173\u4e8e-dbcontext"},"\u5173\u4e8e DbContext"),Object(r.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u662f\u5b9e\u4f53\u7c7b\u548c\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u6865\u6881\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u4e3b\u8981\u8d1f\u8d23\u4e0e\u6570\u636e\u4ea4\u4e92\u3002"),Object(r.b)("h3",{id:"\u4e3b\u8981\u4f5c\u7528"},"\u4e3b\u8981\u4f5c\u7528"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5305\u542b\u6240\u6709\u7684\u5b9e\u4f53\u6620\u5c04\u5230\u6570\u636e\u5e93\u8868\u7684\u5b9e\u4f53\u96c6 (",Object(r.b)("inlineCode",{parentName:"p"},"DbSet<TEntity>"),")")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5c06 ",Object(r.b)("inlineCode",{parentName:"p"},"LINQ-to-Entities")," \u67e5\u8be2\u8f6c\u6362\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"SQL\u67e5\u8be2")," \u5e76\u5c06\u5176\u53d1\u9001\u5230\u6570\u636e\u5e93")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u8ddf\u8e2a\u6bcf\u4e2a\u5b9e\u4f53\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u51fa\u6765\u540e\u53d1\u751f\u7684\u4fee\u6539\u53d8\u5316")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u57fa\u4e8e\u5b9e\u4f53\u72b6\u6001\u6267\u884c\u63d2\u5165\u3001\u66f4\u65b0\u548c\u5220\u9664\u64cd\u4f5c\u5230\u6570\u636e\u5e93\u4e2d"))),Object(r.b)("h3",{id:"\u521b\u5efa-dbcontext-\u4e0a\u4e0b\u6587"},"\u521b\u5efa DbContext \u4e0a\u4e0b\u6587"),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"EF Core")," \u4e2d\uff0c\u6240\u6709\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u90fd\u9700\u8981\u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext"),"\uff0c\u4f4d\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore")," \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{3-4,7,12,18-19}","{3-4,7,12,18-19}":!0}),'public class FurBookContext : DbContext\n{\n    public FurBookContext(DbContextOptions<BloggingContext> options)\n        : base(options)\n    { }\n\n    public DbSet<Book> Books { get; set; }\n\n    // \u914d\u7f6e\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u53ca\u8fde\u63a5\u5b57\u7b26\u4e32\u7b49\u4fe1\u606f\n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n    {\n        optionsBuilder.UseSqlite("Server=localhost;Database=Fur;User=sa;Password=000000;MultipleActiveResultSets=True;");\n    }\n\n    // \u914d\u7f6e\u5b9e\u4f53\u4fe1\u606f\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        modelBuilder.Entity<Book>()\n            .HasKey(b => b.Id);\n    }\n}\n')),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"EF Core")," \u9ed8\u8ba4\u63d0\u4f9b\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u5728\u5b9e\u73b0\u67d0\u4e9b\u573a\u666f\u4e0b\u5b9e\u73b0\u6781\u5176\u590d\u6742\uff0c\u5982\uff1a",Object(r.b)("strong",{parentName:"p"},"\u591a\u79df\u6237\uff0c\u4e3b\u4ece\u5e93/\u8bfb\u5199\u5206\u79bb\uff0c\u591a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),"\u3002"),Object(r.b)("p",{parentName:"div"},"\u6240\u4ee5\uff0c",Object(r.b)("strong",{parentName:"p"},"Fur \u6846\u67b6\u63a8\u8350\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"strong"},"FurDbContext<TDbContext, TDbContextLocator>"))))),Object(r.b)("h2",{id:"\u5173\u4e8e-furdbcontext"},"\u5173\u4e8e FurDbContext"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FurDbContext<TDbContext, TDbContextLocator>")," \u662f Fur \u6846\u67b6\u57fa\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u62bd\u8c61\u51fa\u7684\u5b50\u7c7b\u5e76\u62e5\u6709\u524d\u8005\u5168\u90e8\u529f\u80fd\u7684\u540c\u65f6\u8fd8\u652f\u6301",Object(r.b)("strong",{parentName:"p"},"\u591a\u79df\u6237\uff0c\u4e3b\u4ece\u5e93/\u8bfb\u5199\u5206\u79bb\uff0c\u591a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),"\u7b49\u590d\u6742\u64cd\u4f5c\u3002"),Object(r.b)("h2",{id:"\u67e5\u770b\u4e24\u8005\u7684\u533a\u522b"},"\u67e5\u770b\u4e24\u8005\u7684\u533a\u522b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"FurDbContext")," \u662f \u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u7684\u62bd\u8c61\u5b50\u7c7b\uff0c\u672c\u8eab\u65e0\u5b9e\u73b0")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"FurDbContext")," \u521d\u59cb\u5316\u9700\u63d0\u4f9b \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff0c\u8fd9\u662f\u548c ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u6700\u5927\u7684\u533a\u522b\uff0c\u5173\u4e8e \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668 \u5c06\u5728\u4e0b\u4e00\u7ae0\u8282\u8bf4\u660e")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"FurDbContext")," \u652f\u6301\u81ea\u52a8\u914d\u7f6e\u8868\u3001\u89c6\u56fe\u3001\u51fd\u6570\u3001\u5b58\u50a8\u8fc7\u7a0b\u914d\u7f6e")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"FurDbContext")," \u652f\u6301\u79cd\u5b50\u6570\u636e\u3001\u67e5\u8be2\u62e6\u622a\u5668\u3001\u5168\u5c40\u62e6\u622a\u5668\u7b49\u914d\u7f6e")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"FurDbContext")," \u652f\u6301\u66f4\u591a\u672a\u6765\u7279\u6027"))),Object(r.b)("p",null,"\u6240\u4ee5\uff0c\u5728 Fur \u6846\u67b6\u4e2d\uff0c",Object(r.b)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"strong"},"FurDbContext"),"\u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u800c\u4e0d\u662f ",Object(r.b)("inlineCode",{parentName:"strong"},"DbContext")),"\u3002"),Object(r.b)("h3",{id:"\u521b\u5efa-furdbcontext-\u4e0a\u4e0b\u6587"},"\u521b\u5efa FurDbContext \u4e0a\u4e0b\u6587"),Object(r.b)("p",null,"\u521b\u5efa FurDbContext \u4e0a\u4e0b\u6587\u9700\u8981\u7ee7\u627f ",Object(r.b)("inlineCode",{parentName:"p"},"FurDbContext<TDbContext, TDbContextLocator>")," \u5e76\u63d0\u4f9b \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u3002"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5c0f\u63d0\u793a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5728 Fur \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63d0\u4f9b\u4e86\u9ed8\u8ba4 \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff1a",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"FurDbContextLocator"))))),Object(r.b)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{6,8}","{6,8}":!0}),"using Fur.DatabaseAccessor.Contexts;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core.DbContexts\n{\n    public class FurSqlServerDbContext : FurDbContext<FurSqlServerDbContext, FurDbContextLocator>\n    {\n        public FurSqlServerDbContext(DbContextOptions<FurSqlServerDbContext> options): base(options)\n        {\n        }\n    }\n}\n")),Object(r.b)("p",null,"\u53ea\u9700\u8981\u5be5\u5be5\u51e0\u884c\u4ee3\u7801\uff0c\u5373\u53ef\u521d\u59cb\u5316\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u540e\u671f\u4e1a\u52a1\u53d1\u5c55\u4e5f\u65e0\u9700\u4fee\u6539\u8be5\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u3002\ud83d\ude02 \u5c31\u662f\u8fd9\u4e48\u7b80\u5355\uff01"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5b58\u653e\u4f4d\u7f6e")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5efa\u8bae\u653e\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Fur.Entityframework.Core")," \u5c42\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"DbContexts")," \u76ee\u5f55\u4e0b\u3002"))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u552f\u4e00\u4ee3\u4ef7")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"FurDbContext")," \u76f8\u5bf9 ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u552f\u4e00\u7684\u4ee3\u4ef7\u662f\u9700\u8981\u63d0\u4f9b \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff0c\u4f46\u662f\u540e\u7eed\u5e26\u6765\u7684\u6536\u76ca\u786e\u662f\u65e0\u91cf\u7684\u3002"))),Object(r.b)("h2",{id:"\u521d\u59cb\u5316\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"\u521d\u59cb\u5316\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(r.b)("p",null,"\u6211\u4eec\u521b\u5efa\u597d \u6570\u636e\u5e93\u4e0a\u4e0b\u6587 \u7c7b\u540e\uff0c\u9700\u8981\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Fur.Web.Host")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u7c7b\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"void ConfigureServices(IServiceCollection services)")," \u65b9\u6cd5\u4e2d\u521d\u59cb\u5316\u3002"),Object(r.b)("p",null,"\u4f46\u662f\uff0cFur \u6846\u67b6\u63d0\u4f9b\u4e86\u66f4\u52a0\u4fbf\u6377\u7684\u65b9\u5f0f\uff0c\u5982\uff1a"),Object(r.b)("h3",{id:"\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32"},"\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{10-13}","{10-13}":!0}),'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information"\n    }\n  },\n  "AllowedHosts": "*",\n  // \u8fde\u63a5\u5b57\u7b26\u4e32\n  "ConnectionStrings": {\n    "FurConnectionString": "Server=localhost;Database=Fur;User=sa;Password=000000;MultipleActiveResultSets=True;"\n  },\n\n  ...\n}\n')),Object(r.b)("h3",{id:"\u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"\u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(r.b)("p",null,"\u6253\u5f00 ",Object(r.b)("inlineCode",{parentName:"p"},"Fur.EntityFramework.Core.DbContextServiceCollectionExtensions.cs")," \u6587\u4ef6\uff0c\u5e76\u5199\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{15-16}","{15-16}":!0}),'using Fur.DatabaseAccessor.Filters;\nusing Fur.EntityFramework.Core.DbContexts;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.Configuration;\n\nnamespace Microsoft.Extensions.DependencyInjection\n{\n    public static class DbContextServiceCollectionExtensions\n    {\n        public static IServiceCollection AddFurDbContextPool(this IServiceCollection services)\n        {\n            // Other codes\n\n            services.AddFurSqlServerDbContextPool<FurSqlServerDbContext>(\n                configuration.GetConnectionString("FurConnectionString"), env);\n\n            return services;\n        }\n    }\n}\n')),Object(r.b)("hr",null),Object(r.b)("p",null,"\ud83d\ude00\ud83d\ude01\ud83d\ude02\ud83e\udd23\ud83d\ude03\ud83d\ude04\ud83d\ude0d\ud83d\ude0e"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(r.b)("inlineCode",{parentName:"p"},"DbContext")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/zh-cn/ef/core/miscellaneous/configuring-dbcontext"}),"EF Core - \u914d\u7f6e DbContext")," \u7ae0\u8282\u3002"))))}l.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?r.a.createElement(u,b(b({ref:t},l),{},{components:n})):r.a.createElement(u,b({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);