"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[589914],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),i=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},g=function(e){var n=i(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),c=i(t),y=l,d=c["".concat(o,".").concat(y)]||c[y]||m[y]||r;return t?a.createElement(d,u(u({ref:n},g),{},{components:t})):a.createElement(d,u({ref:n},g))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,u=new Array(r);u[0]=y;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:l,u[1]=p;for(var i=2;i<r;i++)u[i]=t[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},343038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var a=t(58168),l=(t(296540),t(15680));const r={title:"\u8ba1\u7b97\u7ec4\u64cd\u4f5c",language:"zh-CN"},u=void 0,p={unversionedId:"compute-storage-decoupled/managing-compute-cluster",id:"compute-storage-decoupled/managing-compute-cluster",title:"\u8ba1\u7b97\u7ec4\u64cd\u4f5c",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/compute-storage-decoupled/managing-compute-cluster.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/managing-compute-cluster",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/managing-compute-cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8ba1\u7b97\u7ec4\u64cd\u4f5c",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7ba1\u7406 Storage Vault",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/managing-storage-vault"},next:{title:"\u6570\u636e\u7f13\u5b58",permalink:"/zh-CN/docs/dev/compute-storage-decoupled/file-cache"}},o={},i=[{value:"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u7ec4",id:"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u7ec4",level:2},{value:"\u6dfb\u52a0\u8ba1\u7b97\u7ec4",id:"\u6dfb\u52a0\u8ba1\u7b97\u7ec4",level:2},{value:"\u6388\u4e88\u8ba1\u7b97\u7ec4\u8bbf\u95ee\u6743\u9650",id:"\u6388\u4e88\u8ba1\u7b97\u7ec4\u8bbf\u95ee\u6743\u9650",level:2},{value:"\u64a4\u9500\u8ba1\u7b97\u7ec4\u8bbf\u95ee\u6743\u9650",id:"\u64a4\u9500\u8ba1\u7b97\u7ec4\u8bbf\u95ee\u6743\u9650",level:2},{value:"\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4",id:"\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4",level:2},{value:"\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u7684\u9009\u62e9\u673a\u5236",id:"\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u7684\u9009\u62e9\u673a\u5236",level:2},{value:"\u5207\u6362\u8ba1\u7b97\u7ec4",id:"\u5207\u6362\u8ba1\u7b97\u7ec4",level:2},{value:"\u8ba1\u7b97\u7ec4\u6269\u7f29\u5bb9",id:"\u8ba1\u7b97\u7ec4\u6269\u7f29\u5bb9",level:2}],g={toc:i},c="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(c,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u5728\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e0b\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u8ba1\u7b97\u8282\u70b9 (BE) \u7ec4\u6210\u4e00\u4e2a\u8ba1\u7b97\u7ec4 (Compute Group)\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u8ba1\u7b97\u7ec4\uff0c\u5176\u4e2d\u6d89\u53ca\u7684\u64cd\u4f5c\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u7ec4"),(0,l.yg)("li",{parentName:"ul"},"\u8ba1\u7b97\u7ec4\u6388\u6743"),(0,l.yg)("li",{parentName:"ul"},"\u5728\u7528\u6237\u7ea7\u522b\u7ed1\u5b9a\u8ba1\u7b97\u7ec4 (",(0,l.yg)("inlineCode",{parentName:"li"},"default_compute_group"),") \u4ee5\u8fbe\u5230\u7528\u6237\u7ea7\u522b\u7684\u9694\u79bb\u6548\u679c")),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"\u6ce8\u610f"),"\n3.0.2 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\u53eb\u505a\u8ba1\u7b97\u96c6\u7fa4\uff08Compute Cluster\uff09\u3002"),(0,l.yg)("h2",{id:"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u7ec4"},"\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u7ec4"),(0,l.yg)("p",null,"\u53ef\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW COMPUTE GROUPS")," \u67e5\u770b\u5f53\u524d\u4ed3\u5e93\u62e5\u6709\u7684\u6240\u6709\u8ba1\u7b97\u7ec4\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW COMPUTE GROUPS;\n")),(0,l.yg)("h2",{id:"\u6dfb\u52a0\u8ba1\u7b97\u7ec4"},"\u6dfb\u52a0\u8ba1\u7b97\u7ec4"),(0,l.yg)("p",null,"\u5728\u6dfb\u52a0 BE \u65f6\uff0c\u4f1a\u81ea\u52a8\u6dfb\u52a0\u8ba1\u7b97\u7ec4\u3002"),(0,l.yg)("h2",{id:"\u6388\u4e88\u8ba1\u7b97\u7ec4\u8bbf\u95ee\u6743\u9650"},"\u6388\u4e88\u8ba1\u7b97\u7ec4\u8bbf\u95ee\u6743\u9650"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"GRANT USAGE_PRIV ON COMPUTE GROUP {compute_group_name} TO {user}\n")),(0,l.yg)("h2",{id:"\u64a4\u9500\u8ba1\u7b97\u7ec4\u8bbf\u95ee\u6743\u9650"},"\u64a4\u9500\u8ba1\u7b97\u7ec4\u8bbf\u95ee\u6743\u9650"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"REVOKE USAGE_PRIV ON COMPUTE GROUP {compute_group_name} FROM {user}\n")),(0,l.yg)("h2",{id:"\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4"},"\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4"),(0,l.yg)("p",null,"\u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SET PROPERTY 'default_compute_group' = '{clusterName}';\n")),(0,l.yg)("p",null,"\u4e3a\u5176\u4ed6\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff08\u6b64\u64cd\u4f5c\u9700\u8981 Admin \u6743\u9650\uff09\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SET PROPERTY FOR {user} 'default_compute_group' = '{clusterName}';\n")),(0,l.yg)("p",null,"\u67e5\u770b\u5f53\u524d\u7528\u6237\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff0c\u8fd4\u56de\u7ed3\u679c\u4e2d",(0,l.yg)("inlineCode",{parentName:"p"},"default_compute_group")," \u7684\u503c\u5373\u4e3a\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROPERTY;\n")),(0,l.yg)("p",null,"\u67e5\u770b\u5176\u4ed6\u7528\u6237\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff0c\u6b64\u64cd\u4f5c\u9700\u8981\u5f53\u524d\u7528\u6237\u5177\u5907\u76f8\u5173\u6743\u9650\uff0c\u8fd4\u56de\u7ed3\u679c\u4e2d",(0,l.yg)("inlineCode",{parentName:"p"},"default_compute_group")," \u7684\u503c\u5373\u4e3a\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROPERTY FOR {user};\n")),(0,l.yg)("p",null,"\u67e5\u770b\u5f53\u524d\u4ed3\u5e93\u4e0b\u6240\u6709\u53ef\u7528\u7684\u8ba1\u7b97\u7ec4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW COMPUTE GROUPS;\n")),(0,l.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u7528\u6237\u62e5\u6709 Admin \u89d2\u8272\uff0c\u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"CREATE USER jack IDENTIFIED BY '123456' DEFAULT ROLE \"admin\""),"\uff0c\u5219\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e3a\u81ea\u8eab\u4ee5\u53ca\u5176\u4ed6\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff1b"),(0,l.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u67e5\u770b\u81ea\u8eab\u4ee5\u53ca\u5176\u4ed6\u7528\u6237\u7684 ",(0,l.yg)("inlineCode",{parentName:"li"},"PROPERTY"),"\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u7528\u6237\u65e0 Admin \u89d2\u8272\uff0c\u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"CREATE USER jack1 IDENTIFIED BY '123456'"),"\uff0c\u5219\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e3a\u81ea\u8eab\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff1b"),(0,l.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u67e5\u770b\u81ea\u8eab\u7684 ",(0,l.yg)("inlineCode",{parentName:"li"},"PROPERTY"),"\uff1b"),(0,l.yg)("li",{parentName:"ul"},"\u65e0\u6cd5\u67e5\u770b\u6240\u6709\u8ba1\u7b97\u7ec4\uff0c\u56e0\u8be5\u64cd\u4f5c\u9700\u8981 ",(0,l.yg)("inlineCode",{parentName:"li"},"GRANT ADMIN")," \u6743\u9650\u3002"))),(0,l.yg)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u7528\u6237\u672a\u914d\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff0c\u73b0\u6709\u7cfb\u7edf\u5728\u6267\u884c\u6570\u636e\u8bfb\u5199\u64cd\u4f5c\u65f6\u5c06\u4f1a\u89e6\u53d1\u9519\u8bef\u3002\u4e3a\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0c\u7528\u6237\u53ef\u901a\u8fc7\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"li"},"use @cluster")," \u547d\u4ee4\u6765\u6307\u5b9a\u5f53\u524d Context \u6240\u4f7f\u7528\u7684\u8ba1\u7b97\u7ec4\uff0c\u6216\u8005\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},"SET PROPERTY")," \u8bed\u53e5\u6765\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u7528\u6237\u5df2\u914d\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff0c\u4f46\u968f\u540e\u8be5\u96c6\u7fa4\u88ab\u5220\u9664\uff0c\u5219\u5728\u6267\u884c\u6570\u636e\u8bfb\u5199\u64cd\u4f5c\u65f6\u540c\u6837\u4f1a\u89e6\u53d1\u9519\u8bef\u3002\u7528\u6237\u53ef\u901a\u8fc7\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"li"},"use @cluster")," \u547d\u4ee4\u6765\u91cd\u65b0\u6307\u5b9a\u5f53\u524d Context \u6240\u4f7f\u7528\u7684\u8ba1\u7b97\u7ec4\uff0c\u6216\u8005\u5229\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},"SET PROPERTY")," \u8bed\u53e5\u6765\u66f4\u65b0\u9ed8\u8ba4\u96c6\u7fa4\u8bbe\u7f6e\u3002"))),(0,l.yg)("h2",{id:"\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u7684\u9009\u62e9\u673a\u5236"},"\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u7684\u9009\u62e9\u673a\u5236"),(0,l.yg)("p",null,"\u5f53\u7528\u6237\u672a\u660e\u786e\u8bbe\u7f6e\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u65f6\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u4e3a\u7528\u6237\u9009\u62e9\u4e00\u4e2a\u5177\u6709 Active BE \u4e14\u7528\u6237\u5177\u6709\u4f7f\u7528\u6743\u9650\u7684\u8ba1\u7b97\u7ec4\u3002\u5728\u7279\u5b9a\u4f1a\u8bdd\u4e2d\u786e\u5b9a\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u540e\uff0c\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u5c06\u5728\u8be5\u4f1a\u8bdd\u671f\u95f4\u4fdd\u6301\u4e0d\u53d8\uff0c\u9664\u975e\u7528\u6237\u663e\u5f0f\u66f4\u6539\u4e86\u9ed8\u8ba4\u8bbe\u7f6e\u3002"),(0,l.yg)("p",null,"\u5728\u4e0d\u540c\u6b21\u7684\u4f1a\u8bdd\u4e2d\uff0c\u82e5\u53d1\u751f\u4ee5\u4e0b\u60c5\u51b5\uff0c\u7cfb\u7edf\u53ef\u80fd\u4f1a\u81ea\u52a8\u66f4\u6539\u7528\u6237\u7684\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7528\u6237\u5931\u53bb\u4e86\u5728\u4e0a\u6b21\u4f1a\u8bdd\u4e2d\u6240\u9009\u62e9\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u7684\u4f7f\u7528\u6743\u9650"),(0,l.yg)("li",{parentName:"ul"},"\u6709\u8ba1\u7b97\u7ec4\u88ab\u6dfb\u52a0\u6216\u79fb\u9664"),(0,l.yg)("li",{parentName:"ul"},"\u4e0a\u6b21\u6240\u9009\u62e9\u7684\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u4e0d\u518d\u5177\u6709 Active BE")),(0,l.yg)("p",null,"\u5176\u4e2d\uff0c\u60c5\u51b5\u4e00\u548c\u60c5\u51b5\u4e8c\u5fc5\u5b9a\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u81ea\u52a8\u9009\u62e9\u7684\u9ed8\u8ba4\u8ba1\u7b97\u7ec4\u66f4\u6539\uff0c\u60c5\u51b5\u4e09\u53ef\u80fd\u4f1a\u5bfc\u81f4\u66f4\u6539\u3002"),(0,l.yg)("h2",{id:"\u5207\u6362\u8ba1\u7b97\u7ec4"},"\u5207\u6362\u8ba1\u7b97\u7ec4"),(0,l.yg)("p",null,"\u7528\u6237\u53ef\u5728\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e2d\u6307\u5b9a\u4f7f\u7528\u7684\u6570\u636e\u5e93\u548c\u8ba1\u7b97\u7ec4\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"USE { [catalog_name.]database_name[@compute_group_name] | @compute_group_name }\n")),(0,l.yg)("p",null,"\u82e5\u6570\u636e\u5e93\u6216\u8ba1\u7b97\u7ec4\u540d\u79f0\u5305\u542b\u662f\u4fdd\u7559\u5173\u952e\u5b57\uff0c\u9700\u7528\u53cd\u5f15\u53f7\u5c06\u76f8\u5e94\u7684\u540d\u79f0 ``` \u5305\u56f4\u3002"),(0,l.yg)("h2",{id:"\u8ba1\u7b97\u7ec4\u6269\u7f29\u5bb9"},"\u8ba1\u7b97\u7ec4\u6269\u7f29\u5bb9"),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BACKEND")," \u4ee5\u53ca ",(0,l.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM DECOMMISION BACKEND")," \u6dfb\u52a0\u6216\u8005\u5220\u9664 BE \u5b9e\u73b0\u8ba1\u7b97\u7ec4\u7684\u6269\u7f29\u5bb9\u3002"))}m.isMDXComponent=!0}}]);