"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[330540],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>y});var t=r(296540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,u=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||u;return r?t.createElement(y,o(o({ref:n},s),{},{components:r})):t.createElement(y,o({ref:n},s))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=r.length,o=new Array(u);o[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<u;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},724871:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>a,toc:()=>l});var t=r(58168),i=(r(296540),r(15680));const u={title:"uuid_numeric",language:"en"},o=void 0,a={unversionedId:"sql-manual/sql-functions/numeric-functions/uuid-numeric",id:"version-3.0/sql-manual/sql-functions/numeric-functions/uuid-numeric",title:"uuid_numeric",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/numeric-functions/uuid-numeric.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/uuid-numeric",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/numeric-functions/uuid-numeric",draft:!1,tags:[],version:"3.0",frontMatter:{title:"uuid_numeric",language:"en"},sidebar:"docs",previous:{title:"RUNNING_DIFFERENCE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/numeric-functions/running-difference"},next:{title:"AES_ENCRYPT",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt"}},c={},l=[{value:"uuid_numeric",id:"uuid_numeric",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:l},p="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"uuid_numeric"},"uuid_numeric"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"LARGEINT uuid_numeric()")),(0,i.yg)("p",null,"Return a uuid in type ",(0,i.yg)("inlineCode",{parentName:"p"},"LARGEINT"),". "),(0,i.yg)("p",null,"Note that ",(0,i.yg)("inlineCode",{parentName:"p"},"LARGEINT")," has type Int128, so we could get a negative number from ",(0,i.yg)("inlineCode",{parentName:"p"},"uuid_numeric()"),"."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\nmysql> select uuid_numeric();\n+----------------------------------------+\n| uuid_numeric()                         |\n+----------------------------------------+\n| 82218484683747862468445277894131281464 |\n+----------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"UUID UUID-NUMERIC\n")))}d.isMDXComponent=!0}}]);