"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[335797],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,d=m["".concat(s,".").concat(y)]||m[y]||c[y]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},612770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-ROUTINE-LOAD-TASK",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD-TASK",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD-TASK",title:"SHOW-ROUTINE-LOAD-TASK",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD-TASK.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD-TASK",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD-TASK",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-ROUTINE-LOAD-TASK",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-PROCEDURE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-PROCEDURE"},next:{title:"SHOW-PROC",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-PROC"}},s={},p=[{value:"SHOW-ROUTINE-LOAD-TASK",id:"show-routine-load-task",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-routine-load-task"},"SHOW-ROUTINE-LOAD-TASK"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW ROUTINE LOAD TASK"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u67e5\u770b\u4e00\u4e2a\u6307\u5b9a\u7684 Routine Load \u4f5c\u4e1a\u7684\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u5b50\u4efb\u52a1\u60c5\u51b5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW ROUTINE LOAD TASK\nWHERE JobName = "job_name";\n')),(0,r.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},'              TaskId: d67ce537f1be4b86-abf47530b79ab8e6\n               TxnId: 4\n           TxnStatus: UNKNOWN\n               JobId: 10280\n          CreateTime: 2020-12-12 20:29:48\n    ExecuteStartTime: 2020-12-12 20:29:48\n             Timeout: 20\n                BeId: 10002\nDataSourceProperties: {"0":19}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TaskId"),"\uff1a\u5b50\u4efb\u52a1\u7684\u552f\u4e00 ID\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TxnId"),"\uff1a\u5b50\u4efb\u52a1\u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1 ID\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TxnStatus"),"\uff1a\u5b50\u4efb\u52a1\u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1\u72b6\u6001\u3002\u4e3a null \u65f6\u8868\u793a\u5b50\u4efb\u52a1\u8fd8\u672a\u5f00\u59cb\u8c03\u5ea6\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"JobId"),"\uff1a\u5b50\u4efb\u52a1\u5bf9\u5e94\u7684\u4f5c\u4e1a ID\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CreateTime"),"\uff1a\u5b50\u4efb\u52a1\u7684\u521b\u5efa\u65f6\u95f4\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ExecuteStartTime"),"\uff1a\u5b50\u4efb\u52a1\u88ab\u8c03\u5ea6\u6267\u884c\u7684\u65f6\u95f4\uff0c\u901a\u5e38\u665a\u4e8e\u521b\u5efa\u65f6\u95f4\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Timeout"),"\uff1a\u5b50\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u901a\u5e38\u662f\u4f5c\u4e1a\u8bbe\u7f6e\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_interval")," \u7684\u4e24\u500d\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"BeId"),"\uff1a\u6267\u884c\u8fd9\u4e2a\u5b50\u4efb\u52a1\u7684 BE \u8282\u70b9 ID\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DataSourceProperties"),"\uff1a\u5b50\u4efb\u52a1\u51c6\u5907\u6d88\u8d39\u7684 Kafka Partition \u7684\u8d77\u59cb offset\u3002\u662f\u4e00\u4e2a Json \u683c\u5f0f\u5b57\u7b26\u4e32\u3002Key \u4e3a Partition Id\u3002Value \u4e3a\u6d88\u8d39\u7684\u8d77\u59cb offset\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u540d\u4e3a test1 \u7684\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u7684\u5b50\u4efb\u52a1\u4fe1\u606f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW ROUTINE LOAD TASK WHERE JobName = "test1";\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, ROUTINE, LOAD, TASK\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u547d\u4ee4\uff0c\u53ef\u4ee5\u67e5\u770b\u4e00\u4e2a Routine Load \u4f5c\u4e1a\u5f53\u524d\u6709\u591a\u5c11\u5b50\u4efb\u52a1\u5728\u8fd0\u884c\uff0c\u5177\u4f53\u8fd0\u884c\u5728\u54ea\u4e2a BE \u8282\u70b9\u4e0a\u3002"))}c.isMDXComponent=!0}}]);