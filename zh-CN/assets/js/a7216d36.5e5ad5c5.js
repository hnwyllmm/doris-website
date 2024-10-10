"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[168373],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(n),g=r,d=c["".concat(p,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},240382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(58168),r=(n(296540),n(15680));const i={title:"\u8fc1\u79fb tablet",language:"zh-CN"},l=void 0,s={unversionedId:"admin-manual/open-api/be-http/tablet-migration",id:"admin-manual/open-api/be-http/tablet-migration",title:"\u8fc1\u79fb tablet",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/be-http/tablet-migration.md",sourceDirName:"admin-manual/open-api/be-http",slug:"/admin-manual/open-api/be-http/tablet-migration",permalink:"/zh-CN/docs/dev/admin-manual/open-api/be-http/tablet-migration",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8fc1\u79fb tablet",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u8be2 tablet \u5206\u5e03",permalink:"/zh-CN/docs/dev/admin-manual/open-api/be-http/tablet-distribution"},next:{title:"\u67e5\u8be2 tablet \u4fe1\u606f",permalink:"/zh-CN/docs/dev/admin-manual/open-api/be-http/tablet-info"}},p={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u63d0\u4ea4\u7ed3\u679c",id:"\u63d0\u4ea4\u7ed3\u679c",level:3},{value:"\u6267\u884c\u72b6\u6001",id:"\u6267\u884c\u72b6\u6001",level:3},{value:"Examples",id:"examples",level:2}],u={toc:o},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/tablet_migration?goal={enum}&tablet_id={int}&schema_hash={int}&disk={string}")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u5728 BE \u8282\u70b9\u4e0a\u8fc1\u79fb\u5355\u4e2a tablet \u5230\u6307\u5b9a\u78c1\u76d8"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"goal")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"run"),"\uff1a\u63d0\u4ea4\u8fc1\u79fb\u4efb\u52a1"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"status"),"\uff1a\u67e5\u8be2\u4efb\u52a1\u7684\u6267\u884c\u72b6\u6001"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"tablet_id"),"\n\u9700\u8981\u8fc1\u79fb\u7684 tablet \u7684 id")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"schema_hash"),"\nschema hash")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"disk"),"\n\u76ee\u6807\u78c1\u76d8\u3002    "))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("h3",{id:"\u63d0\u4ea4\u7ed3\u679c"},"\u63d0\u4ea4\u7ed3\u679c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Success",\n        msg: "migration task is successfully submitted."\n    }\n')),(0,r.yg)("p",null,"\u6216"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Fail",\n        msg: "Migration task submission failed"\n    }\n')),(0,r.yg)("h3",{id:"\u6267\u884c\u72b6\u6001"},"\u6267\u884c\u72b6\u6001"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Success",\n        msg: "migration task is running",\n        dest_disk: "xxxxxx"\n    }\n')),(0,r.yg)("p",null,"\u6216"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Success",\n        msg: "migration task has finished successfully",\n        dest_disk: "xxxxxx"\n    }\n')),(0,r.yg)("p",null,"\u6216"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'    {\n        status: "Success",\n        msg: "migration task failed.",\n        dest_disk: "xxxxxx"\n    }\n')),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'```shell\ncurl "http://127.0.0.1:8040/api/tablet_migration?goal=run&tablet_id=123&schema_hash=333&disk=/disk1"\n\n```\n')))}m.isMDXComponent=!0}}]);