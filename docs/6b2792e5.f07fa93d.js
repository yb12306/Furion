(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(198)),i={id:"encryption",title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",sidebar_label:"20. \u6570\u636e\u52a0\u89e3\u5bc6"},o={unversionedId:"encryption",id:"encryption",isDocsHomePage:!1,title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",description:"20.1 \u6570\u636e\u52a0\u89e3\u5bc6",source:"@site/docs\\encryption.mdx",slug:"/encryption",permalink:"/docs/encryption",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/encryption.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1612799211,sidebar_label:"20. \u6570\u636e\u52a0\u89e3\u5bc6",sidebar:"docs",previous:{title:"19. \u8fdc\u7a0b\u8bf7\u6c42",permalink:"/docs/http"},next:{title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316",permalink:"/docs/local-language"}},b=[{value:"20.1 \u6570\u636e\u52a0\u89e3\u5bc6",id:"201-\u6570\u636e\u52a0\u89e3\u5bc6",children:[]},{value:"20.2 \u5185\u7f6e\u52a0\u5bc6\u7c7b\u578b",id:"202-\u5185\u7f6e\u52a0\u5bc6\u7c7b\u578b",children:[]},{value:"20.2 \u52a0\u89e3\u5bc6\u4f7f\u7528",id:"202-\u52a0\u89e3\u5bc6\u4f7f\u7528",children:[{value:"20.2.1 <code>MD5</code> \u52a0\u5bc6",id:"2021-md5-\u52a0\u5bc6",children:[]},{value:"20.2.2 <code>DESC</code> \u52a0\u89e3\u5bc6",id:"2022-desc-\u52a0\u89e3\u5bc6",children:[]},{value:"20.2.3 <code>AES</code> \u52a0\u89e3\u5bc6",id:"2023-aes-\u52a0\u89e3\u5bc6",children:[]},{value:"20.2.4 <code>JWT</code> \u52a0\u89e3\u5bc6",id:"2024-jwt-\u52a0\u89e3\u5bc6",children:[]}]},{value:"20.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"203-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"201-\u6570\u636e\u52a0\u89e3\u5bc6"},"20.1 \u6570\u636e\u52a0\u89e3\u5bc6"),Object(c.b)("p",null,"\u7531\u4e8e\u73b0\u5728\u7684\u4e92\u8054\u7f51\u8d8a\u5177\u53d1\u8fbe\uff0c\u6570\u636e\u6210\u4e3a\u4e86\u6211\u4eec\u751f\u6d3b\u7684\u4e00\u90e8\u5206\uff0c\u5f53\u7136\u4e5f\u5e26\u6765\u4e86\u5f88\u591a\u6570\u636e\u5b89\u5168\u6027\u7684\u95ee\u9898\uff0c\u6bd4\u5982\u7528\u6237\u5bc6\u7801\u660e\u6587\u5b58\u50a8\uff0c\u7528\u6237\u4fe1\u606f\u660e\u6587\u5b58\u5728\u5728\u6d4f\u89c8\u5668 ",Object(c.b)("inlineCode",{parentName:"p"},"cookies")," \u4e2d\u7b49\u7b49\u4e0d\u5b89\u5168\u64cd\u4f5c\u3002"),Object(c.b)("p",null,"\u6240\u4ee5\uff0c\u5bf9\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u662f\u7cfb\u7edf\u5f00\u53d1\u5fc5\u8981\u7684\u73af\u8282\u3002"),Object(c.b)("h2",{id:"202-\u5185\u7f6e\u52a0\u5bc6\u7c7b\u578b"},"20.2 \u5185\u7f6e\u52a0\u5bc6\u7c7b\u578b"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"MD5")," \u52a0\u5bc6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"DESC")," \u52a0\u89e3\u5bc6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AES")," \u52a0\u89e3\u5bc6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"JWT")," \u52a0\u89e3\u5bc6")),Object(c.b)("h2",{id:"202-\u52a0\u89e3\u5bc6\u4f7f\u7528"},"20.2 \u52a0\u89e3\u5bc6\u4f7f\u7528"),Object(c.b)("h3",{id:"2021-md5-\u52a0\u5bc6"},"20.2.1 ",Object(c.b)("inlineCode",{parentName:"h3"},"MD5")," \u52a0\u5bc6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u6d4b\u8bd5 MD5 \u52a0\u5bc6\uff0c\u6bd4\u8f83\nvar md5Hash = MD5Encryption.Encrypt("\u767e\u5c0f\u50e7");  // \u52a0\u5bc6\nvar isEqual = MD5Encryption.Compare("\u767e\u5c0f\u50e7", md5Hash); // \u6bd4\u8f83\nreturn (md5Hash, isEqual);\n')),Object(c.b)("h3",{id:"2022-desc-\u52a0\u89e3\u5bc6"},"20.2.2 ",Object(c.b)("inlineCode",{parentName:"h3"},"DESC")," \u52a0\u89e3\u5bc6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u6d4b\u8bd5 DESC \u52a0\u89e3\u5bc6\nvar descHash = DESCEncryption.Encrypt("\u767e\u5c0f\u50e7", "Furion"); // \u52a0\u5bc6\nvar str = DESCEncryption.Decrypt(descHash, "Furion");  // \u89e3\u5bc6\nreturn (descHash, str);\n')),Object(c.b)("h3",{id:"2023-aes-\u52a0\u89e3\u5bc6"},"20.2.3 ",Object(c.b)("inlineCode",{parentName:"h3"},"AES")," \u52a0\u89e3\u5bc6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u6d4b\u8bd5 AES \u52a0\u89e3\u5bc6\nvar key = Guid.NewGuid().ToString("N"); // \u5bc6\u94a5\uff0c\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e20\u4f4d\n\nvar aesHash = AESEncryption.Encrypt("\u767e\u5c0f\u50e7", key); // \u52a0\u5bc6\nvar str2 = AESEncryption.Decrypt(aesHash, key); // \u89e3\u5bc6\nreturn (aesHash, str2);\n')),Object(c.b)("h3",{id:"2024-jwt-\u52a0\u89e3\u5bc6"},"20.2.4 ",Object(c.b)("inlineCode",{parentName:"h3"},"JWT")," \u52a0\u89e3\u5bc6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var token = JWTEncryption.Encrypt(new Dictionary<string, object>()  // \u52a0\u5bc6\n            {\n                { "UserId", user.Id },\n                { "Account",user.Account }\n            });\n\nvar tokenData = JWTEncryption.ReadJwtToken("\u4f60\u7684token");  // \u89e3\u5bc6\n\nvar (isValid, tokenData) = JWTEncryption.Validate("\u4f60\u7684token"); // \u9a8c\u8bc1token\u6709\u6548\u671f\n')),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"JWTEncryption")," \u52a0\u89e3\u5bc6\u5e76\u672a\u5305\u542b\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9700\u8981\u5b89\u88c5 ",Object(c.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"Furion.Extras.Authentication.JwtBearer")," \u62d3\u5c55\u5305\u3002"))),Object(c.b)("h2",{id:"203-\u53cd\u9988\u4e0e\u5efa\u8bae"},"20.3 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0},198:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||c;return t?r.a.createElement(m,o(o({ref:n},l),{},{components:t})):r.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=u;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);