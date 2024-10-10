"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[618074],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(296540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=l,y=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return r?t.createElement(y,i(i({ref:n},u),{},{components:r})):t.createElement(y,i({ref:n},u))}));function y(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:l,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98088:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=r(58168),l=(r(296540),r(15680));const a={title:"FIELD",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/field",id:"version-3.0/sql-manual/sql-functions/string-functions/field",title:"FIELD",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/field.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/field",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/field",draft:!1,tags:[],version:"3.0",frontMatter:{title:"FIELD",language:"en"},sidebar:"docs",previous:{title:"OVERLAY",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/overlay"},next:{title:"FIND_IN_SET",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/find-in-set"}},o={},c=[{value:"field",id:"field",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...r}=e;return(0,l.yg)(d,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"field"},"field"),(0,l.yg)("p",null,"field"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"field(Expr e, param1, param2, param3,.....)")),(0,l.yg)("p",null,"In the order by clause, you can use custom sorting to arrange the data in expr in the specified param1, 2, and 3 order.\nThe data not in the param parameter will not participate in sorting, but will be placed first.\nYou can use asc and desc to control the overall order.\nIf there is a NULL value, you can use nulls first, nulls last to control the order of nulls."),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select k1,k7 from baseall where k1 in (1,2,3) order by field(k1,2,1,3);\n+------+------------+\n| k1   | k7         |\n+------+------------+\n|    2 | wangyu14   |\n|    1 | wangjing04 |\n|    3 | yuanyuan06 |\n+------+------------+\n\nmysql> select class_name from class_test order by field(class_name,'Suzi','Ben','Henry');\n+------------+\n| class_name |\n+------------+\n| Suzi       |\n| Suzi       |\n| Ben        |\n| Ben        |\n| Henry      |\n| Henry      |\n+------------+\n\nmysql> select class_name from class_test order by field(class_name,'Suzi','Ben','Henry') desc;\n+------------+\n| class_name |\n+------------+\n| Henry      |\n| Henry      |\n| Ben        |\n| Ben        |\n| Suzi       |\n| Suzi       |\n+------------+\n\nmysql> select class_name from class_test order by field(class_name,'Suzi','Ben','Henry') nulls first;\n+------------+\n| class_name |\n+------------+\n| null       |\n| Suzi       |\n| Suzi       |\n| Ben        |\n| Ben        |\n| Henry      |\n| Henry      |\n+------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"field\n")))}p.isMDXComponent=!0}}]);