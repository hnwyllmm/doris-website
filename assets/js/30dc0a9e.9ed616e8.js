"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[380994],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},290313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const o={title:"Release 2.0.10",language:"en"},i=void 0,l={unversionedId:"releasenotes/v2.0/release-2.0.10",id:"releasenotes/v2.0/release-2.0.10",title:"Release 2.0.10",description:"\x3c!--",source:"@site/docs/releasenotes/v2.0/release-2.0.10.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.10",permalink:"/docs/dev/releasenotes/v2.0/release-2.0.10",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.0.10",language:"en"},sidebar:"releasenotes",previous:{title:"Release 2.0.11",permalink:"/docs/dev/releasenotes/v2.0/release-2.0.11"},next:{title:"Release 2.0.9",permalink:"/docs/dev/releasenotes/v2.0/release-2.0.9"}},s={},p=[{value:"Improvement and Optimizations",id:"improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Thanks to our community users and developers, about 83 improvements and bug fixes have been made in Doris 2.0.10 version."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,a.yg)("h2",{id:"improvement-and-optimizations"},"Improvement and Optimizations"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"This enhancement introduces the ",(0,a.yg)("inlineCode",{parentName:"p"},"read_only")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"super_read_only")," variables to the database system, ensuring compatibility with MySQL's read-only modes.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"When the check status is not IO_ERROR, the disk path should not be added to the broken list. This ensures that only disks with actual I/O errors are marked as broken.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"When performing a Create Table As Select (CTAS) operation from an external table, convert the ",(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR")," column to ",(0,a.yg)("inlineCode",{parentName:"p"},"STRING")," type.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Support mapping Paimon column type "ROW" to Doris type "STRUCT"')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Choose disk tolerate with little skew when creating tablet")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Write editlog to ",(0,a.yg)("inlineCode",{parentName:"p"},"set replica drop")," to avoid confusing status on follower FE")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Make the schema change memory space adaptive to avoid memory over limit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Inverted index 'unicode' tokenizer supports configuration to exclude stop words"))),(0,a.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.9...2.0.10"},"GitHub")," ."),(0,a.yg)("h2",{id:"credits"},"Credits"),(0,a.yg)("p",null,"Thanks to all who contributed to this release:"),(0,a.yg)("p",null,"@airborne12, @BePPPower, @ByteYue, @CalvinKirs, @cambyzju, @csun5285, @dataroaring, @deardeng, @DongLiang-0, @eldenmoon, @felixwluo, @HappenLee, @hubgeter, @jackwener, @kaijchen, @kaka11chen, @Lchangliang, @liaoxin01, @LiBinfeng-01, @luennng, @morningman, @morrySnow, @Mryange, @nextdreamblue, @qidaye, @starocean999, @suxiaogang223, @SWJTU-ZhangLei, @w41ter, @xiaokang, @xy720, @yujun777, @Yukang-Lian, @zhangstar333, @zxealous, @zy-kkk, @zzzxl1993"))}m.isMDXComponent=!0}}]);