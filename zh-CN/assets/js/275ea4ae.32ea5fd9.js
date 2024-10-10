"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10253],{15680:(n,e,t)=>{t.d(e,{xA:()=>c,yg:()=>y});var r=t(296540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var A=r.createContext({}),s=function(n){var e=r.useContext(A),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=s(n.components);return r.createElement(A.Provider,{value:e},n.children)},g="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,A=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),g=s(t),u=a,y=g["".concat(A,".").concat(u)]||g[u]||p[u]||o;return t?r.createElement(y,i(i({ref:e},c),{},{components:t})):r.createElement(y,i({ref:e},c))}));function y(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var A in e)hasOwnProperty.call(e,A)&&(l[A]=e[A]);l.originalType=n,l[g]="string"==typeof n?n:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},397:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>A,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const o={title:"MAP_AGG",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/map-agg",id:"version-2.1/sql-manual/sql-functions/aggregate-functions/map-agg",title:"MAP_AGG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/map-agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/map-agg",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/map-agg",draft:!1,tags:[],version:"2.1",frontMatter:{title:"MAP_AGG",language:"zh-CN"},sidebar:"docs",previous:{title:"FOREACH",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/foreach"},next:{title:"BITMAP_AGG",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/bitmap-agg"}},A={},s=[{value:"MAP_AGG",id:"map_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},g="wrapper";function p(n){let{components:e,...t}=n;return(0,a.yg)(g,(0,r.A)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"map_agg"},"MAP_AGG"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"MAP_AGG(expr1, expr2)")),(0,a.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a map, \u7531 expr1 \u4f5c\u4e3a\u952e\uff0cexpr2 \u4f5c\u4e3a\u5bf9\u5e94\u7684\u503c\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'MySQL > select `n_nationkey`, `n_name`, `n_regionkey` from `nation`;\n+-------------+----------------+-------------+\n| n_nationkey | n_name         | n_regionkey |\n+-------------+----------------+-------------+\n|           0 | ALGERIA        |           0 |\n|           1 | ARGENTINA      |           1 |\n|           2 | BRAZIL         |           1 |\n|           3 | CANADA         |           1 |\n|           4 | EGYPT          |           4 |\n|           5 | ETHIOPIA       |           0 |\n|           6 | FRANCE         |           3 |\n|           7 | GERMANY        |           3 |\n|           8 | INDIA          |           2 |\n|           9 | INDONESIA      |           2 |\n|          10 | IRAN           |           4 |\n|          11 | IRAQ           |           4 |\n|          12 | JAPAN          |           2 |\n|          13 | JORDAN         |           4 |\n|          14 | KENYA          |           0 |\n|          15 | MOROCCO        |           0 |\n|          16 | MOZAMBIQUE     |           0 |\n|          17 | PERU           |           1 |\n|          18 | CHINA          |           2 |\n|          19 | ROMANIA        |           3 |\n|          20 | SAUDI ARABIA   |           4 |\n|          21 | VIETNAM        |           2 |\n|          22 | RUSSIA         |           3 |\n|          23 | UNITED KINGDOM |           3 |\n|          24 | UNITED STATES  |           1 |\n+-------------+----------------+-------------+\n\nMySQL > select `n_regionkey`, map_agg(`n_nationkey`, `n_name`) from `nation` group by `n_regionkey`;\n+-------------+---------------------------------------------------------------------------+\n| n_regionkey | map_agg(`n_nationkey`, `n_name`)                                          |\n+-------------+---------------------------------------------------------------------------+\n|           1 | {1:"ARGENTINA", 2:"BRAZIL", 3:"CANADA", 17:"PERU", 24:"UNITED STATES"}    |\n|           0 | {0:"ALGERIA", 5:"ETHIOPIA", 14:"KENYA", 15:"MOROCCO", 16:"MOZAMBIQUE"}    |\n|           3 | {6:"FRANCE", 7:"GERMANY", 19:"ROMANIA", 22:"RUSSIA", 23:"UNITED KINGDOM"} |\n|           4 | {4:"EGYPT", 10:"IRAN", 11:"IRAQ", 13:"JORDAN", 20:"SAUDI ARABIA"}         |\n|           2 | {8:"INDIA", 9:"INDONESIA", 12:"JAPAN", 18:"CHINA", 21:"VIETNAM"}          |\n+-------------+---------------------------------------------------------------------------+\n\nMySQL > select n_regionkey, map_agg(`n_name`, `n_nationkey` % 5) from `nation` group by `n_regionkey`;\n+-------------+------------------------------------------------------------------------+\n| n_regionkey | map_agg(`n_name`, (`n_nationkey` % 5))                                 |\n+-------------+------------------------------------------------------------------------+\n|           2 | {"INDIA":3, "INDONESIA":4, "JAPAN":2, "CHINA":3, "VIETNAM":1}          |\n|           0 | {"ALGERIA":0, "ETHIOPIA":0, "KENYA":4, "MOROCCO":0, "MOZAMBIQUE":1}    |\n|           3 | {"FRANCE":1, "GERMANY":2, "ROMANIA":4, "RUSSIA":2, "UNITED KINGDOM":3} |\n|           1 | {"ARGENTINA":1, "BRAZIL":2, "CANADA":3, "PERU":2, "UNITED STATES":4}   |\n|           4 | {"EGYPT":4, "IRAN":0, "IRAQ":1, "JORDAN":3, "SAUDI ARABIA":0}          |\n+-------------+------------------------------------------------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"MAP_AGG"))}p.isMDXComponent=!0}}]);