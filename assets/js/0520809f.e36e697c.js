"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[566617],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,y=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},189628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const l={title:"CEIL",language:"en"},o=void 0,a={unversionedId:"sql-manual/sql-functions/numeric-functions/ceil",id:"version-2.0/sql-manual/sql-functions/numeric-functions/ceil",title:"CEIL",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/numeric-functions/ceil.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/ceil",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/ceil",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CEIL",language:"en"},sidebar:"docs",previous:{title:"LN",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/ln"},next:{title:"FLOOR",permalink:"/docs/2.0/sql-manual/sql-functions/numeric-functions/floor"}},c={},s=[{value:"ceil",id:"ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ceil"},"ceil"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT ceil(DOUBLE x)"),"\nReturns the smallest integer value greater than or equal to ",(0,i.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"The other alias for this function are ",(0,i.yg)("inlineCode",{parentName:"p"},"dceil")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ceiling"),".")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select ceil(1);\n+-----------+\n| ceil(1.0) |\n+-----------+\n|         1 |\n+-----------+\nmysql> select ceil(2.4);\n+-----------+\n| ceil(2.4) |\n+-----------+\n|         3 |\n+-----------+\nmysql> select ceil(-10.3);\n+-------------+\n| ceil(-10.3) |\n+-------------+\n|         -10 |\n+-------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"CEIL, DCEIL, CEILING\n")))}m.isMDXComponent=!0}}]);