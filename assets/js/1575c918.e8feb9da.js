"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[226486],{15680:(n,e,t)=>{t.d(e,{xA:()=>u,yg:()=>f});var r=t(296540);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),s=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(c.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=s(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:e},u),{},{components:t})):r.createElement(f,i({ref:e},u))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[p]="string"==typeof n?n:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},641113:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const a={title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",id:"version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",language:"en"},sidebar:"docs",previous:{title:"BITMAP_AND_COUNT",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-and-count"},next:{title:"ORTHOGONAL_BITMAP_UNION_COUNT",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count"}},c={},s=[{value:"bitmap_and_not_count,bitmap_andnot_count",id:"bitmap_and_not_countbitmap_andnot_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(n){let{components:e,...t}=n;return(0,o.yg)(p,(0,r.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"bitmap_and_not_countbitmap_andnot_count"},"bitmap_and_not_count,bitmap_andnot_count"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND_NOT_COUNT(BITMAP lhs, BITMAP rhs)")),(0,o.yg)("p",null,"Calculate the set after lhs minus intersection of two input bitmaps, return the new bitmap size."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select bitmap_and_not_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT,BITMAP\n")))}m.isMDXComponent=!0}}]);