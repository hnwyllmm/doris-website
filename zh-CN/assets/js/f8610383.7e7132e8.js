"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[507870],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),y=l,m=p["".concat(o,".").concat(y)]||p[y]||d[y]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=y;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[p]="string"==typeof e?e:l,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},270580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(58168),l=(t(296540),t(15680));const i={title:"date_ceil",language:"zh-CN"},a=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/date-ceil",id:"version-3.0/sql-manual/sql-functions/date-time-functions/date-ceil",title:"date_ceil",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/date-ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date-ceil",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/date-ceil",draft:!1,tags:[],version:"3.0",frontMatter:{title:"date_ceil",language:"zh-CN"},sidebar:"docs",previous:{title:"year_floor",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/year-floor"},next:{title:"second_ceil",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/second-ceil"}},o={},s=[{value:"date_ceil",id:"date_ceil",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practices",id:"best-practices",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"date_ceil"},"date_ceil"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_CEIL(DATETIME datetime, INTERVAL period type)")),(0,l.yg)("p",null,"\u5c06\u65e5\u671f\u8f6c\u5316\u4e3a\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u7684\u6700\u8fd1\u4e0a\u53d6\u6574\u65f6\u523b\u3002"),(0,l.yg)("p",null,"datetime \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,l.yg)("p",null,"period \u53c2\u6570\u662f\u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u591a\u5c11\u4e2a\u5355\u4f4d\u7ec4\u6210\uff0c\u5f00\u59cb\u7684\u65f6\u95f4\u8d77\u70b9\u4e3a0001-01-01T00:00:00."),(0,l.yg)("p",null,"type \u53c2\u6570\u53ef\u4ee5\u662f\u4e0b\u5217\u503c\uff1aYEAR, MONTH, DAY, HOUR, MINUTE, SECOND."),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 second);\n+--------------------------------------------------------------+\n| second_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:28:20                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 minute);\n+--------------------------------------------------------------+\n| minute_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 hour);\n+------------------------------------------------------------+\n| hour_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-13 23:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 day);\n+-----------------------------------------------------------+\n| day_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-----------------------------------------------------------+\n| 2023-07-15 00:00:00                                       |\n+-----------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 month);\n+-------------------------------------------------------------+\n| month_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-12-01 00:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 year);\n+------------------------------------------------------------+\n| year_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2026-01-01 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"DATE_CEIL,DATE,CEIL\n")),(0,l.yg)("h3",{id:"best-practices"},"Best Practices"),(0,l.yg)("p",null,"\u8fd8\u53ef\u53c2\u9605\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./second_ceil"},"second_ceil")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./minute_ceil"},"minute_ceil")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./hour_ceil"},"hour_ceil")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./day_ceil"},"day_ceil")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./month_ceil"},"month_ceil")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./year_ceil"},"year_ceil"))))}d.isMDXComponent=!0}}]);