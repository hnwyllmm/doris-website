"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[968217],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),y=r,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ADMIN-CHECK-TABLET",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CHECK-TABLET",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CHECK-TABLET",title:"ADMIN-CHECK-TABLET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CHECK-TABLET.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CHECK-TABLET",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CHECK-TABLET",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ADMIN-CHECK-TABLET",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"},next:{title:"SHOW TABLET DIAGNOSIS",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS"}},o={},c=[{value:"ADMIN-CHECK-TABLET",id:"admin-check-tablet",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-check-tablet"},"ADMIN-CHECK-TABLET"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN CHECK TABLET"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u4e00\u7ec4 tablet \u6267\u884c\u6307\u5b9a\u7684\u68c0\u67e5\u64cd\u4f5c"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN CHECK TABLET (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...");\n')),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5fc5\u987b\u6307\u5b9a tablet id \u5217\u8868\u4ee5\u53ca PROPERTIES \u4e2d\u7684 type \u5c5e\u6027\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u76ee\u524d type \u4ec5\u652f\u6301\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"consistency: \u5bf9tablet\u7684\u526f\u672c\u6570\u636e\u4e00\u81f4\u6027\u8fdb\u884c\u68c0\u67e5\u3002\u8be5\u547d\u4ee4\u4e3a\u5f02\u6b65\u547d\u4ee4\uff0c\u53d1\u9001\u540e\uff0cDoris \u4f1a\u5f00\u59cb\u6267\u884c\u5bf9\u5e94 tablet \u7684\u4e00\u81f4\u6027\u68c0\u67e5\u4f5c\u4e1a\u3002\u6700\u7ec8\u7684\u7ed3\u679c\uff0c\u5c06\u4f53\u73b0\u5728 ",(0,r.yg)("inlineCode",{parentName:"li"},'SHOW PROC "/cluster_health/tablet_health";')," \u7ed3\u679c\u4e2d\u7684 InconsistentTabletNum \u5217\u3002")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bf9\u6307\u5b9a\u7684\u4e00\u7ec4 tablet \u8fdb\u884c\u526f\u672c\u6570\u636e\u4e00\u81f4\u6027\u68c0\u67e5"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, CHECK, TABLET\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);