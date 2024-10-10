"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[315371],{15680:(e,n,r)=>{r.d(n,{xA:()=>y,yg:()=>d});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},y=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return r?t.createElement(d,l(l({ref:n},y),{},{components:r})):t.createElement(d,l({ref:n},y))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},394730:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const o={title:"ARRAY_WITH_CONSTANT",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-with-constant",id:"version-3.0/sql-manual/sql-functions/array-functions/array-with-constant",title:"ARRAY_WITH_CONSTANT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/array-functions/array-with-constant.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-with-constant",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-with-constant",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_WITH_CONSTANT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_JOIN",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-join"},next:{title:"ARRAY_ENUMERATE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-enumerate"}},i={},c=[{value:"array_with_constant",id:"array_with_constant",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_with_constant"},"array_with_constant"),(0,a.yg)("p",null,"array_with_constant\narray_repeat"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_with_constant(n, T)\nARRAY<T> array_repeat(T, n)\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b n \u4e2a\u91cd\u590d\u7684 T \u5e38\u91cf\u3002array_repeat \u4e0e array_with_constant \u529f\u80fd\u76f8\u540c\uff0c\u7528\u6765\u517c\u5bb9 hive \u8bed\u6cd5\u683c\u5f0f\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_with_constant(2, \"hello\"), array_repeat(\"hello\", 2);\n+---------------------------------+--------------------------+\n| array_with_constant(2, 'hello') | array_repeat('hello', 2) |\n+---------------------------------+--------------------------+\n| ['hello', 'hello']              | ['hello', 'hello']       |\n+---------------------------------+--------------------------+\n1 row in set (0.04 sec)\n\nmysql> select array_with_constant(3, 12345), array_repeat(12345, 3);\n+-------------------------------+------------------------+\n| array_with_constant(3, 12345) | array_repeat(12345, 3) | \n+-------------------------------+------------------------+\n| [12345, 12345, 12345]         | [12345, 12345, 12345]  |\n+-------------------------------+------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_with_constant(3, null), array_repeat(null, 3);\n+------------------------------+-----------------------+\n| array_with_constant(3, NULL) | array_repeat(NULL, 3) |\n+------------------------------+-----------------------+\n| [NULL, NULL, NULL]           |  [NULL, NULL, NULL]   |\n+------------------------------+-----------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_with_constant(null, 3), array_repeat(3, null);\n+------------------------------+-----------------------+\n| array_with_constant(NULL, 3) | array_repeat(3, NULL) |\n+------------------------------+-----------------------+\n| []                           | []                    |\n+------------------------------+-----------------------+\n1 row in set (0.01 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,WITH_CONSTANT,ARRAY_WITH_CONSTANT,ARRAY_REPEAT"))}p.isMDXComponent=!0}}]);