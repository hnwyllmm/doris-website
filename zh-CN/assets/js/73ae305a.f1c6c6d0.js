"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[168160],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>O});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,O=c["".concat(s,".").concat(y)]||c[y]||p[y]||l;return n?r.createElement(O,o(o({ref:t},m),{},{components:n})):r.createElement(O,o({ref:t},m))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},545825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW COMPUTE GROUPS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-COMPUTE-GROUPS",id:"version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-COMPUTE-GROUPS",title:"SHOW COMPUTE GROUPS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-COMPUTE-GROUPS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-COMPUTE-GROUPS",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Show-Statements/SHOW-COMPUTE-GROUPS",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW COMPUTE GROUPS",language:"zh-CN"}},s={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2},{value:"Keywords",id:"keywords",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"SHOW COMPUTE GROUPS \u547d\u4ee4\u7528\u4e8e\u663e\u793a\u7cfb\u7edf\u4e2d\u6240\u6709\u5df2\u914d\u7f6e\u7684\u8ba1\u7b97\u7ec4\u7684\u4fe1\u606f\u3002\u8ba1\u7b97\u7ec4\u662f\u7528\u4e8e\u7ba1\u7406\u548c\u7ec4\u7ec7\u8ba1\u7b97\u8d44\u6e90\u7684\u903b\u8f91\u5355\u5143\uff0c\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u66f4\u6709\u6548\u5730\u5206\u914d\u548c\u4f7f\u7528\u7cfb\u7edf\u8d44\u6e90\u3002"),(0,a.yg)("p",null,"\u6b64\u547d\u4ee4\u53ef\u4ee5\u5e2e\u52a9\u7ba1\u7406\u5458\u548c\u7528\u6237\u5feb\u901f\u4e86\u89e3\u7cfb\u7edf\u4e2d\u73b0\u6709\u7684\u8ba1\u7b97\u7ec4\u914d\u7f6e\uff0c\u5305\u62ec\u6bcf\u4e2a\u8ba1\u7b97\u7ec4\u7684\u540d\u79f0\u3001\u5c5e\u6027\u548c\u5176\u4ed6\u76f8\u5173\u4fe1\u606f\u3002\u8fd9\u5bf9\u4e8e\u8d44\u6e90\u7ba1\u7406\u3001\u6027\u80fd\u4f18\u5316\u548c\u7cfb\u7edf\u76d1\u63a7\u975e\u5e38\u6709\u7528\u3002"),(0,a.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"    SHOW COMPUTE GROUPS\n")),(0,a.yg)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.yg)("p",null,"\u6b64\u547d\u4ee4\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6\uff0c\u5305\u542b\u4ee5\u4e0b\u5217\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Name"),": \u8ba1\u7b97\u7ec4\u7684\u540d\u79f0\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"IsCurrent"),": \u662f\u5426\u5f53\u524d\u5de5\u4f5c\u8ba1\u7b97\u7ec4\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Users"),": \u663e\u793a\u6709\u6743\u9650\u4f7f\u7528\u8be5\u8ba1\u7b97\u7ec4\u7684\u7528\u6237\u5217\u8868\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"BackendNum"),": \u663e\u793a\u5f53\u524d\u5206\u914d\u7ed9\u8be5\u8ba1\u7b97\u7ec4\u7684\u540e\u7aef\uff08\u8ba1\u7b97\u8282\u70b9\uff09\u6570\u91cf\u3002")),(0,a.yg)("h2",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../Administration-Statements/ALTER-SYSTEM-ADD-BACKEND.md"},"ALTER SYSTEM ADD BACKEND")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/GRANT"},"GRANT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/REVOKE"},"REVOKE")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../Administration-Statements/SET-DEFAULT-COMPUTE-GROUP.md"},"SET DEFAULT COMPUTE GROUP"))),(0,a.yg)("h2",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, COMPUTE GROUPS\n")))}p.isMDXComponent=!0}}]);