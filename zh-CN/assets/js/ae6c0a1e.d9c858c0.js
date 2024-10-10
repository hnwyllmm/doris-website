"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[893543],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=l,y=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[f]="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),l=(t(296540),t(15680));const i={title:"ifnull",language:"zh-CN"},o=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/ifnull",id:"version-1.2/sql-manual/sql-functions/conditional-functions/ifnull",title:"ifnull",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/conditional-functions/ifnull.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/ifnull",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/conditional-functions/ifnull",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ifnull",language:"zh-CN"},sidebar:"docs",previous:{title:"if",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/conditional-functions/if"},next:{title:"nvl",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/conditional-functions/nvl"}},u={},c=[{value:"ifnull",id:"ifnull",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},f="wrapper";function p(e){let{components:n,...t}=e;return(0,l.yg)(f,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"ifnull"},"ifnull"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ifnull(expr1, expr2)")),(0,l.yg)("p",null,"\u5982\u679c expr1 \u7684\u503c\u4e0d\u4e3a NULL \u5219\u8fd4\u56de expr1\uff0c\u5426\u5219\u8fd4\u56de expr2"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select ifnull(1,0);\n+--------------+\n| ifnull(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n\nmysql> select ifnull(null,10);\n+------------------+\n| ifnull(NULL, 10) |\n+------------------+\n|               10 |\n+------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"IFNULL"))}p.isMDXComponent=!0}}]);