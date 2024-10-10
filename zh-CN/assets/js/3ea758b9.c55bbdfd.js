"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[439195],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>c});var i=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,r=function(e,a){if(null==e)return{};var t,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var a=i.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=s(e.components);return i.createElement(o.Provider,{value:a},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},g=i.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(t),g=r,c=h["".concat(o,".").concat(g)]||h[g]||m[g]||n;return t?i.createElement(c,p(p({ref:a},u),{},{components:t})):i.createElement(c,p({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,p=new Array(n);p[0]=g;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[h]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<n;s++)p[s]=t[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},838621:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=t(58168),r=(t(296540),t(15680));const n={title:"Apache Doris 2.1.4 just released",summary:"In this update, we have optimized various functional experiences for data lakehouse, with a focus on resolving the abnormal memory usage issue in the previous version.",description:"In this update, we have optimized various functional experiences for data lakehouse scenarios, with a focus on resolving the abnormal memory usage issue in the previous version.",date:"2024-06-26",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.1.4.jpg"},p=void 0,l={permalink:"/zh-CN/blog/release-note-2.1.4",source:"@site/blog/release-note-2.1.4.md",title:"Apache Doris 2.1.4 just released",description:"In this update, we have optimized various functional experiences for data lakehouse scenarios, with a focus on resolving the abnormal memory usage issue in the previous version.",date:"2024-06-26T00:00:00.000Z",formattedDate:"2024\u5e746\u670826\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 2.1.4 just released",summary:"In this update, we have optimized various functional experiences for data lakehouse, with a focus on resolving the abnormal memory usage issue in the previous version.",description:"In this update, we have optimized various functional experiences for data lakehouse scenarios, with a focus on resolving the abnormal memory usage issue in the previous version.",date:"2024-06-26",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.1.4.jpg"},prevItem:{title:"Apache Doris version 2.0.12 has been released",permalink:"/zh-CN/blog/release-note-2.0.12"},nextItem:{title:"Why Apache Doris is the best open source alternative to Rockset",permalink:"/zh-CN/blog/apache-doris-vs-rockset"}},o={authorsImageUrls:[void 0]},s=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"Query Optimizer",id:"query-optimizer",level:3},{value:"Lakehouse",id:"lakehouse",level:3},{value:"Asynchronous Materialized Views",id:"asynchronous-materialized-views",level:3},{value:"Others",id:"others",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Query Optimizer",id:"query-optimizer-1",level:3},{value:"Query Execution",id:"query-execution",level:3},{value:"Asynchronous Materialized Views",id:"asynchronous-materialized-views-1",level:3},{value:"Semi-structured",id:"semi-structured",level:3},{value:"Primary Key",id:"primary-key",level:3},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Data Import",id:"data-import",level:3},{value:"Data Management",id:"data-management",level:3},{value:"Memory Management",id:"memory-management",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Others",id:"others-1",level:3},{value:"Credits",id:"credits",level:2}],u={toc:s},h="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(h,(0,i.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Dear community, Apache Doris version 2.1.4 was released on June 26, 2024. In this update, we have optimized various functional experiences for data lakehouse scenarios, with a focus on resolving the abnormal memory usage issue in the previous version. Additionally, we have implemented several improvemnents and bug fixes to enhance the stability.  Welcome to download and use it."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"GitHub Release:")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,r.yg)("h2",{id:"behavior-changes"},"Behavior changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Non-existent files will be ignored when querying external tables such as Hive. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35319"},"#35319")),(0,r.yg)("p",{parentName:"li"},"The file list is obtained from the meta cache, and it may not be consistent with the actual file list."),(0,r.yg)("p",{parentName:"li"},"Ignoring non-existent files helps to avoid query errors.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"By default, creating a Bitmap Index will no longer be automatically changed to an Inverted Index. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35521"},"#35521")),(0,r.yg)("p",{parentName:"li"},"This behavior is controlled by the FE configuration item ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_create_bitmap_index_as_inverted_index"),", which defaults to false.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When starting FE and BE processes using ",(0,r.yg)("inlineCode",{parentName:"p"},"--console"),", all logs will be output to the standard output and differentiated by prefixes indicating the log type. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35679"},"#35679")),(0,r.yg)("p",{parentName:"li"},"For more infomation, please see the documentations:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/admin-manual/log-management/fe-log"},"Log Management - FE Log"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/admin-manual/log-management/be-log"},"Log Management - BE Log"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If no table comment is provided when creating a table, the default comment will be empty instead of using the table type as the default comment. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36025"},"#36025"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The default precision of DECIMALV3 has been adjusted from (9, 0) to (38, 9) to maintain compatibility with the version in which this feature was initially released. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36316"},"#36316")))),(0,r.yg)("h2",{id:"new-features"},"New features"),(0,r.yg)("h3",{id:"query-optimizer"},"Query Optimizer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support FE flame graph tool"),(0,r.yg)("p",{parentName:"li"},"For more information, see the ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/developer-guide/fe-profiler"},"documentation"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT DISTINCT")," to be used with aggregation.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support single table query rewrite without ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY"),". This is useful for complex filters or expressions. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35242"},"#35242"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The new optimizer fully supports point query functionality ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36205"},"#36205"),"."))),(0,r.yg)("h3",{id:"lakehouse"},"Lakehouse"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support native reader of Apache Paimon deletion vector  ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35241"},"#35241"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support using Resource in Table Valued Functions ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35139"},"#35139"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Access controller with Hive Ranger plugin supports Data Mask"))),(0,r.yg)("h3",{id:"asynchronous-materialized-views"},"Asynchronous Materialized Views"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support partition roll-up during construction. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/31812"},"#31812"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support triggered updates during construction. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34548"},"#34548"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support specifying the ",(0,r.yg)("inlineCode",{parentName:"p"},"store_row_column")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_medium")," attribute during construction. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35860"},"#35860"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Transparent rewrite supports single table asynchronous materialized views. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34646"},"#34646"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Transparent rewrite supports ",(0,r.yg)("inlineCode",{parentName:"p"},"AGG_STATE")," type aggregation roll-up. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35026"},"#35026")))),(0,r.yg)("h3",{id:"others"},"Others"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Added function ",(0,r.yg)("inlineCode",{parentName:"p"},"replace_empty"),". "),(0,r.yg)("p",{parentName:"li"},"For more information, see ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/sql-manual/sql-functions/string-functions/replace_empty"},"documentation"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support ",(0,r.yg)("inlineCode",{parentName:"p"},"show storage policy using")," statement."),(0,r.yg)("p",{parentName:"li"},"For more information, see ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING/"},"documentation"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support JVM metrics on the BE side."),(0,r.yg)("p",{parentName:"li"},"By setting ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_jvm_monitor=true")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"be.conf")," to enable this feature."))),(0,r.yg)("h2",{id:"improvements"},"Improvements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Supported creating inverted indexes for columns with Chinese names. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36321"},"#36321"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Estimate memory consumed by segment cache more accurately so that unused memory can be released more quickly. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35751"},"#35751"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Filter empty partitions before exporting tables to remote storage. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35542"},"#35542"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Optimize routine load task allocation algorithm to balance the load among Backends. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34778"},"#34778"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Provide hints when a related variable is not found during a set operation. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35775"},"#35775"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support placing Java UDF jar files in the FE's ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_lib")," directory for default loading. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35984"},"#35984"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add a timeout global variable ",(0,r.yg)("inlineCode",{parentName:"p"},"audit_plugin_load_timeout")," for audit log load jobs.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Optimize the performance of transparent rewrite planning for asynchronous materialized views.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Optimize the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT")," operation that when the source is empty, the BE will not execute. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34418"},"#34418"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support fetching file lists of Hive/Hudi tables in batches. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35107"},"#35107")))),(0,r.yg)("h2",{id:"bug-fixes"},"Bug fixes"),(0,r.yg)("h3",{id:"query-optimizer-1"},"Query Optimizer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where SQL cache returns old results after truncating a partition. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34698"},"#34698"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where casting from JSON to other types did not correctly handle nullable attributes. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34707"},"#34707"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed occasional DATETIMEV2 literal simplification errors. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35153"},"#35153"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where ",(0,r.yg)("inlineCode",{parentName:"p"},"COUNT(*)")," could not be used in window functions. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35220"},"#35220"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where nullable attributes could be incorrect when all ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," statements under ",(0,r.yg)("inlineCode",{parentName:"p"},"UNION ALL")," have no ",(0,r.yg)("inlineCode",{parentName:"p"},"FROM")," clause. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35074"},"#35074"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where ",(0,r.yg)("inlineCode",{parentName:"p"},"bitmap in join")," and subquery unnesting could not be used simultaneously. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35435"},"#35435"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the performance issue where filter conditions could not be pushed down to the CTE producer in specific situations. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35463"},"#35463"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where aggregate combinators written in uppercase could not be found. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35540"},"#35540"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the performance issue where window functions were not properly pruned by column pruning. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35504"},"#35504"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where queries might parse incorrectly leading to wrong results when multiple tables with the same name but in different databases appeared simultaneously in the query. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35571"},"#35571"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the query error caused by generating runtime filters during schema table scans. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35655"},"#35655"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where nested correlated subqueries could not execute because the join condition was folded into a null literal. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35811"},"#35811"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the occasional issue where decimal literals were set with incorrect precision during planning. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36055"},"#36055"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the occasional issue where multiple layers of aggregation were merged incorrectly during planning. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36145"},"#36145"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the occasional issue where the input-output mismatch error occurred after aggregate expansion planning. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36207"},"#36207"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the occasional issue where ",(0,r.yg)("inlineCode",{parentName:"p"},"<=>")," was incorrectly converted to ",(0,r.yg)("inlineCode",{parentName:"p"},"="),". ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36521"},"#36521")))),(0,r.yg)("h3",{id:"query-execution"},"Query Execution"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where the query hangs if the limited rows are reached on the pipeline engine and memory is not released. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35746"},"#35746"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the BE coredump when ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_decimal256")," is true but falls back to the old planner. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35731"},"#35731")))),(0,r.yg)("h3",{id:"asynchronous-materialized-views-1"},"Asynchronous Materialized Views"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where asynchronous materialized views caused backup and restore exceptions. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35703"},"#35703"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where partition rewrite could lead to incorrect results. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35236"},"#35236")))),(0,r.yg)("h3",{id:"semi-structured"},"Semi-structured"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed the core dump problem when a VARIANT with an empty key is used. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/35671"},"#35671")),(0,r.yg)("li",{parentName:"ul"},"Bitmap and BloomFilter index should not perform light index changes. ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/35225"},"#35225"))),(0,r.yg)("h3",{id:"primary-key"},"Primary Key"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where an exception BE restart occurred in the case of partial column updates during import, which could result in duplicate keys. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35678"},"#35678"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where BE might core dump during clone operations when memory is tight. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34702"},"#34702")))),(0,r.yg)("h3",{id:"lakehouse-1"},"Lakehouse"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where a Hive table could not be created with a fully qualified name such as ",(0,r.yg)("inlineCode",{parentName:"p"},"ctl.db.tbl")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34984"},"#34984"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where the Hive metastore connection did not close when refreshing ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35426"},"#35426"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed a potential meta replay issue when upgrading from 2.0.x to 2.1.x. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35532"},"#35532"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where the Table Valued Function could not read an empty snappy compressed file. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34926"},"#34926"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where unable to read Parquet files with invalid min-max column statistics ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35041"},"#35041"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where unable to handle pushdown predicates with null-aware functions in the Parquet/ORC reader ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35335"},"#35335"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue about the order of partition columns when creating a Hive table ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35347"},"#35347"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where writing to a Hive table on S3 failed when partition values contained spaces ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35645"},"#35645"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue about incorrect scheme of Aliyun OSS endpoint ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34907"},"#34907"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where the Parquet format Hive table written by Doris could not be read by Hive ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34981"},"#34981"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where unable to read ORC files after the schema change of a Hive table ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35583"},"#35583"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where unable to read Paimon tables via JNI after the schema change of the Paimon table ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35309"},"#35309"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue of too small Row Groups in Parquet format files written out. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36042"},"#36042")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36143"},"#36143"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where unable to read Paimon tables after schema changes ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36049"},"#36049"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where unable to read Hive Parquet format tables after schema changes ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36182"},"#36182"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the FE OOM issue caused by Hadoop FS cache ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36403"},"#36403"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where FE could not start after enabling the Hive Metastore Listener ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36533"},"#36533"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue of query performance degradation with a large number of files ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36431"},"#36431"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the timezone issue when reading the timestamp column type in Iceberg ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36435"},"#36435"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed DATETIME conversion error and data path error on Iceberg Table. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35708"},"#35708"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support retain and pass the additional user-defined properties fo Table Valued Functions to the S3 SDK. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35515"},"#35515")))),(0,r.yg)("h3",{id:"data-import"},"Data Import"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where ",(0,r.yg)("inlineCode",{parentName:"p"},"CANCEL LOAD")," did not work ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35352"},"#35352"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where a null pointer error in the Publish phase of load transactions prevented the load from completing ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35977"},"#35977"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue with bRPC serializing large data files when sent via HTTP ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36169"},"#36169")))),(0,r.yg)("h3",{id:"data-management"},"Data Management"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the isseu that the resource tag in ConnectionContext was not set after forwarding DDL or DML to master FE. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35618"},"#35618"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where the restored table name was incorrect when ",(0,r.yg)("inlineCode",{parentName:"p"},"lower_case_table_names")," was enabled ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35508"},"#35508"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where ",(0,r.yg)("inlineCode",{parentName:"p"},"admin clean trash")," could not work ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35271"},"#35271"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where a storage policy could not be deleted from a partition ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35874"},"#35874"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue of data loss when importing into a multi-replica automatic partition table ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36586"},"#36586"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where the partition column of a table changed when querying or inserting into an automatic partition table using the old optimizer ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36514"},"#36514")))),(0,r.yg)("h3",{id:"memory-management"},"Memory Management"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue of frequent errors in the logs due to failure in obtaining Cgroup meminfo. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35425"},"#35425"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where the Segment cache size was uncontrolled when using BloomFilter, leading to abnormal process memory growth. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34871"},"#34871")))),(0,r.yg)("h3",{id:"permissions"},"Permissions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where permission settings were ineffective after enabling case-insensitive table names. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36557"},"#36557"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where setting LDAP passwords through non-Master FE nodes did not take effect. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36598"},"#36598"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where authorization could not be checked for the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT COUNT(*)")," statement. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35465"},"#35465")))),(0,r.yg)("h3",{id:"others-1"},"Others"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed the issue where the client JDBC program could not close the connection if the MySQL connection was broken. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36616"},"#36616"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed MySQL protocol compatibility issue with the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW PROCEDURE STATUS")," statement. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35350"},"#35350"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"libevent")," now forces Keepalive to solve the issue of connection leaks in certain situations. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36088"},"#36088")))),(0,r.yg)("h2",{id:"credits"},"Credits"),(0,r.yg)("p",null,"Thanks to every one who contributes to this release."),(0,r.yg)("p",null,"@airborne12, @amorynan, @AshinGau, @BePPPower, @BiteTheDDDDt, @ByteYue, @caiconghui, @CalvinKirs, @cambyzju, @catpineapple, @cjj2010, @csun5285, @DarvenDuan, @dataroaring, @deardeng, @Doris-Extras, @eldenmoon, @englefly, @feiniaofeiafei, @felixwluo, @freemandealer, @Gabriel39, @gavinchou, @GoGoWen, @HappenLee, @hello-stephen, @hubgeter, @hust-hhb, @jacktengg, @jackwener, @jeffreys-cat, @Jibing-Li, @kaijchen, @kaka11chen, @Lchangliang, @liaoxin01, @LiBinfeng-01, @lide-reed, @luennng, @luwei16, @mongo360, @morningman, @morrySnow, @mrhhsg, @Mryange, @mymeiyi, @nextdreamblue, @platoneko, @qidaye, @qzsee, @seawinde, @shuke987, @sollhui, @starocean999, @suxiaogang223, @TangSiyang2001, @Thearas, @Vallishp, @w41ter, @wangbo, @whutpencil, @wsjz, @wuwenchi, @xiaokang, @xiedeyantu, @XieJiann, @xinyiZzz, @XuPengfei-1020, @xy720, @xzj7019, @yiguolei, @yongjinhou, @yujun777, @Yukang-Lian, @Yulei-Yang, @zclllyybb, @zddr, @zfr9527, @zgxme, @zhangbutao, @zhangstar333, @zhannngchen, @zhiqiang-hhhh, @zy-kkk, @zzzxl1993"))}m.isMDXComponent=!0}}]);