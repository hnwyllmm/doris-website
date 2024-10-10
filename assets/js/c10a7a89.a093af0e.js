"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[530195],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>p});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},g=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=m(a),c=l,p=y["".concat(s,".").concat(c)]||y[c]||u[c]||i;return a?n.createElement(p,r(r({ref:t},g),{},{components:a})):n.createElement(p,r({ref:t},g))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[y]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},181513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(58168),l=(a(296540),a(15680));const i={title:"Statistics",language:"en"},r=void 0,o={unversionedId:"query/nereids/statistics",id:"query/nereids/statistics",title:"Statistics",description:"\x3c!--",source:"@site/docs/query/nereids/statistics.md",sourceDirName:"query/nereids",slug:"/query/nereids/statistics",permalink:"/docs/dev/query/nereids/statistics",draft:!1,tags:[],version:"current",frontMatter:{title:"Statistics",language:"en"},sidebar:"docs",previous:{title:"Nereids-the Brand New Planner",permalink:"/docs/dev/query/nereids/nereids-new"},next:{title:"Query Caches Overview",permalink:"/docs/dev/query/query-cache/"}},s={},m=[{value:"1. Collecting Statistics",id:"1-collecting-statistics",level:2},{value:"1.1 Manual Collection Using ANALYZE Statement",id:"11-manual-collection-using-analyze-statement",level:3},{value:"1.2 Automatic Collection",id:"12-automatic-collection",level:3},{value:"2. Job Management",id:"2-job-management",level:2},{value:"2.1 View Analyze Jobs",id:"21-view-analyze-jobs",level:3},{value:"2.2 View Column Statistics Collection Status",id:"22-view-column-statistics-collection-status",level:3},{value:"2.3 View Column Statistics",id:"23-view-column-statistics",level:3},{value:"2.4 Table Collection Overview",id:"24-table-collection-overview",level:3},{value:"2.5 Terminate Statistics Jobs",id:"25-terminate-statistics-jobs",level:3},{value:"3. Session Variables and Configuration Options",id:"3-session-variables-and-configuration-options",level:2},{value:"3.1 Session Variables",id:"31-session-variables",level:3},{value:"3.2 FE Configuration Options",id:"32-fe-configuration-options",level:3},{value:"4. Common Issues",id:"4-common-issues",level:2},{value:"4.1 ANALYZE Submission Error: Stats table not available...",id:"41-analyze-submission-error-stats-table-not-available",level:3},{value:"4.2 Failure of ANALYZE on Large Tables",id:"42-failure-of-analyze-on-large-tables",level:3}],g={toc:m},y="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(y,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"statistics"},"Statistics"),(0,l.yg)("p",null,"Collecting statistics helps the optimizer understand data distribution characteristics. When performing Cost-Based Optimization (CBO), the optimizer uses these statistics to calculate the selectivity of predicates and estimate the cost of each execution plan. This allows for the selection of more optimal plans, significantly improving query efficiency."),(0,l.yg)("p",null,"Currently, the following information is collected for each column:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Information"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"row_count")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Total number of rows")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"data_size")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Total data size")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"avg_size_byte")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Average length of values")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"ndv")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Number of distinct values")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"min")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Minimum value")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"max")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Maximum value")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"null_count")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Number of null values")))),(0,l.yg)("h2",{id:"1-collecting-statistics"},"1. Collecting Statistics"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"11-manual-collection-using-analyze-statement"},"1.1 Manual Collection Using ANALYZE Statement"),(0,l.yg)("p",null,"Doris allows users to manually trigger the collection and update of statistics by submitting the ANALYZE statement."),(0,l.yg)("p",null,"Syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"ANALYZE < TABLE table_name | DATABASE db_name >\n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] ];\n")),(0,l.yg)("p",null,"Where:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"table_name"),": The specified target table. It can be in the format ",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"column_name"),": The specified target column. It must be an existing column in ",(0,l.yg)("inlineCode",{parentName:"li"},"table_name"),". You can specify multiple column names separated by commas."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"sync"),": Collect statistics synchronously. Returns after collection. If not specified, it executes asynchronously and returns a JOB ID."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"sample percent | rows"),": Collect statistics with sampling. You can specify a sampling percentage or a number of sampling rows.")),(0,l.yg)("p",null,"By default (WITH SAMPLE is not specified), a table will be fully analyzed. For relatively large tables (e.g. above 5GiB), from the perspective of system resources, we recommend sampling analyze, and the number of sampled rows is recommended to be no less than 4 million rows. Here are some examples:"),(0,l.yg)("p",null,"Collect statistics for a table with full analyze:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem;\n")),(0,l.yg)("p",null,"Collect statistics for a table with a 10% sampling rate:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE PERCENT 10;\n")),(0,l.yg)("p",null,"Collect statistics for a table with a sample of 100,000 rows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE ROWS 100000;\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"12-automatic-collection"},"1.2 Automatic Collection"),(0,l.yg)("p",null,"This feature has been officially supported since 2.0.3 and is enabled by default. The basic operation logic is described below. After each import transaction commit, Doris records the number of rows updated by the import transaction to estimate the health of the existing table's statistics data (for tables that have not collected statistics, their health is 0). When the health of a table is below 60 (adjustable through the ",(0,l.yg)("inlineCode",{parentName:"p"},"table_stats_health_threshold")," parameter), Doris considers the statistics for that table outdated and triggers statistics collection jobs for that table in subsequent operations. For tables with a health value above 60, no repeated collection is performed."),(0,l.yg)("p",null,"The collection jobs for statistics themselves consume a certain amount of system resources. To minimize the overhead, Doris automatically uses sampling to collect statistics. Automatic sampling defaults to sample 4,194,304 (2^22) rows to reduce the system's burden and complete the collection job as quickly as possible. If you want to sample more rows to obtain a more accurate data distribution, you can increase the sampling row count by adjusting the ",(0,l.yg)("inlineCode",{parentName:"p"},"huge_table_default_sample_rows")," parameter. You can also control the full collection of small tables and the collection interval of large tables through session variables. For detailed configuration, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/dev/query/nereids/statistics#31-session-variables"},"3.1"),"."),(0,l.yg)("p",null,"If you are concerned about automatic collection jobs interfering with your business, you can specify a time frame for the automatic collection jobs to run during low business loads by setting the ",(0,l.yg)("inlineCode",{parentName:"p"},"auto_analyze_start_time")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"auto_analyze_end_time")," parameters according to your needs. You can also completely disable this feature by setting the ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_auto_analyze")," parameter to ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("p",null,"External catalogs do not participate in automatic collection by default. Because external catalogs often contain massive historical data, if they participate in automatic collection, it may occupy too many resources. You can turn on and off the automatic collection of external catalogs by setting the catalog's properties."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='true'); // Turn on\nALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='false'); // Turn off\n")),(0,l.yg)("br",null),(0,l.yg)("h2",{id:"2-job-management"},"2. Job Management"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"21-view-analyze-jobs"},"2.1 View Analyze Jobs"),(0,l.yg)("p",null,"Use ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW ANALYZE")," to view information about statistics collection jobs."),(0,l.yg)("p",null,"Syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},'SHOW [AUTO] ANALYZE < table_name | job_id >\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"AUTO: Show historical information for automatic collection jobs only. Note that, by default, the status of only the last 20,000 completed automatic collection jobs is retained."),(0,l.yg)("li",{parentName:"ul"},"table_name: Table name, specify to view statistics job information for that table. It can be in the format ",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),". When not specified, it returns information for all statistics jobs."),(0,l.yg)("li",{parentName:"ul"},"job_id: Job ID for statistics collection, obtained when executing ",(0,l.yg)("inlineCode",{parentName:"li"},"ANALYZE"),". When not specified, this command returns information for all statistics jobs.")),(0,l.yg)("p",null,"Output:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Column Name"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"job_id")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Job ID")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"catalog_name")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Catalog Name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"db_name")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Database Name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"tbl_name")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Table Name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"col_name")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Column Name List")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"job_type")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Job Type")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"analysis_type")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Analysis Type")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"message")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Job Information")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"last_exec_time_in_ms")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Last Execution Time")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"state")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Job Status")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"schedule_type")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Scheduling Method")))),(0,l.yg)("p",null,"Here's an example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show analyze 245073\\G;\n*************************** 1. row ***************************\n              job_id: 245073\n        catalog_name: internal\n             db_name: default_cluster:tpch\n            tbl_name: lineitem\n            col_name: [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct]\n            job_type: MANUAL\n       analysis_type: FUNDAMENTALS\n             message:\nlast_exec_time_in_ms: 2023-11-07 11:00:52\n               state: FINISHED\n            progress: 16 Finished  |  0 Failed  |  0 In Progress  |  16 Total\n       schedule_type: ONCE\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"22-view-column-statistics-collection-status"},"2.2 View Column Statistics Collection Status"),(0,l.yg)("p",null,"Each collection job can contain one or more tasks, with each task corresponding to the collection of a column. Users can use the following command to view the completion status of statistics collection for each column."),(0,l.yg)("p",null,"Syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ANALYZE TASK STATUS [job_id]\n")),(0,l.yg)("p",null,"Here's an example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> show analyze task status 20038 ;\n+---------+----------+---------+----------------------+----------+\n| task_id | col_name | message | last_exec_time_in_ms | state    |\n+---------+----------+---------+----------------------+----------+\n| 20039   | col4     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20040   | col2     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20041   | col3     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20042   | col1     |         | 2023-06-01 17:22:15  | FINISHED |\n+---------+----------+---------+----------------------+----------+\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"23-view-column-statistics"},"2.3 View Column Statistics"),(0,l.yg)("p",null,"Use ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW COLUMN STATS")," to view various statistics data for columns."),(0,l.yg)("p",null,"Syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n")),(0,l.yg)("p",null,"Where:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"cached: Show statistics information in the current FE memory cache."),(0,l.yg)("li",{parentName:"ul"},"table_name: The target table for collecting statistics. It can be in the format ",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"."),(0,l.yg)("li",{parentName:"ul"},"column_name: Specifies the target column, which must be an existing column in ",(0,l.yg)("inlineCode",{parentName:"li"},"table_name"),". You can specify multiple column names separated by commas.")),(0,l.yg)("p",null,"Here's an example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show column stats lineitem(l_tax)\\G;\n*************************** 1. row ***************************\n  column_name: l_tax\n        count: 6001215.0\n          ndv: 9.0\n     num_null: 0.0\n    data_size: 4.800972E7\navg_size_byte: 8.0\n          min: 0.00\n          max: 0.08\n       method: FULL\n         type: FUNDAMENTALS\n      trigger: MANUAL\n  query_times: 0\n updated_time: 2023-11-07 11:00:46\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"24-table-collection-overview"},"2.4 Table Collection Overview"),(0,l.yg)("p",null,"Use ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW TABLE STATS")," to view an overview of statistics collection for a table."),(0,l.yg)("p",null,"Syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW TABLE STATS table_name;\n")),(0,l.yg)("p",null,"Where:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"table_name: The target table name. It can be in the format ",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),".")),(0,l.yg)("p",null,"Output:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Column Name"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"updated_rows")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Updated rows since the last ANALYZE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"query_times")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Reserved column for recording the number of times the table was queried in future versions")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"row_count")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Number of rows (does not reflect the exact number of rows at the time of command execution)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"updated_time")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Last update time")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"columns")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Columns for which statistics information has been collected")))),(0,l.yg)("p",null,"Here's an example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show table stats lineitem \\G;\n*************************** 1. row ***************************\nupdated_rows: 0\n query_times: 0\n   row_count: 6001215\nupdated_time: 2023-11-07\n     columns: [l_returnflag, l_receiptdate, l_tax, l_shipmode, l_suppkey, l_shipdate, l_commitdate, l_partkey, l_orderkey, l_quantity, l_linestatus, l_comment, l_extendedprice, l_linenumber, l_discount, l_shipinstruct]\n     trigger: MANUAL\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"25-terminate-statistics-jobs"},"2.5 Terminate Statistics Jobs"),(0,l.yg)("p",null,"Use ",(0,l.yg)("inlineCode",{parentName:"p"},"KILL ANALYZE")," to terminate running statistics jobs."),(0,l.yg)("p",null,"Syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"KILL ANALYZE job_id;\n")),(0,l.yg)("p",null,"Where:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"job_id: Job ID for statistics collection. Obtained when performing asynchronous statistics collection using the ",(0,l.yg)("inlineCode",{parentName:"li"},"ANALYZE")," statement, and it can also be obtained through the ",(0,l.yg)("inlineCode",{parentName:"li"},"SHOW ANALYZE")," statement.")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Terminate statistics job with ID 52357.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql> KILL ANALYZE 52357;\n")),(0,l.yg)("br",null),(0,l.yg)("h2",{id:"3-session-variables-and-configuration-options"},"3. Session Variables and Configuration Options"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"31-session-variables"},"3.1 Session Variables"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Session Variable"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_analyze_start_time"),(0,l.yg)("td",{parentName:"tr",align:null},"Start time for automatic statistics collection"),(0,l.yg)("td",{parentName:"tr",align:null},"00:00:00")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_analyze_end_time"),(0,l.yg)("td",{parentName:"tr",align:null},"End time for automatic statistics collection"),(0,l.yg)("td",{parentName:"tr",align:null},"23:59:59")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_auto_analyze"),(0,l.yg)("td",{parentName:"tr",align:null},"Enable automatic collection functionality"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"huge_table_default_sample_rows"),(0,l.yg)("td",{parentName:"tr",align:null},"Sampling rows for large tables"),(0,l.yg)("td",{parentName:"tr",align:null},"4194304")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"huge_table_lower_bound_size_in_bytes"),(0,l.yg)("td",{parentName:"tr",align:null},"Tables with size greater than this value will be automatically sampled during collection of statistics"),(0,l.yg)("td",{parentName:"tr",align:null},"0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"huge_table_auto_analyze_interval_in_millis"),(0,l.yg)("td",{parentName:"tr",align:null},"Controls the minimum time interval for automatic ANALYZE on large tables. Tables with sizes greater than ",(0,l.yg)("inlineCode",{parentName:"td"},"huge_table_lower_bound_size_in_bytes * 5")," will be ANALYZEed only once within this time interval."),(0,l.yg)("td",{parentName:"tr",align:null},"0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_stats_health_threshold"),(0,l.yg)("td",{parentName:"tr",align:null},"Ranges from 0 to 100. If data updates since the last statistics collection exceed ",(0,l.yg)("inlineCode",{parentName:"td"},"(100 - table_stats_health_threshold)%"),", the table's statistics are considered outdated."),(0,l.yg)("td",{parentName:"tr",align:null},"60")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"analyze_timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"Controls the timeout for synchronous ANALYZE in seconds"),(0,l.yg)("td",{parentName:"tr",align:null},"43200")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_analyze_table_width_threshold"),(0,l.yg)("td",{parentName:"tr",align:null},"Controls the maximum width of table that will be auto analyzed. Table with more columns than this value will not be auto analyzed."),(0,l.yg)("td",{parentName:"tr",align:null},"100")))),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"32-fe-configuration-options"},"3.2 FE Configuration Options"),(0,l.yg)("p",null,"The following FE configuration options are typically not a major concern:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"FE Configuration Option"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"analyze_record_limit"),(0,l.yg)("td",{parentName:"tr",align:null},"Controls the persistence of statistics job execution records"),(0,l.yg)("td",{parentName:"tr",align:null},"20000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"stats_cache_size"),(0,l.yg)("td",{parentName:"tr",align:null},"FE-side statistics cache entries"),(0,l.yg)("td",{parentName:"tr",align:null},"500,000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"statistics_simultaneously_running_task_num"),(0,l.yg)("td",{parentName:"tr",align:null},"Number of asynchronous jobs that can run simultaneously"),(0,l.yg)("td",{parentName:"tr",align:null},"3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"statistics_sql_mem_limit_in_bytes"),(0,l.yg)("td",{parentName:"tr",align:null},"Controls the amount of BE memory each statistics SQL can use"),(0,l.yg)("td",{parentName:"tr",align:null},"2,147,483,648 bytes (2 GiB)")))),(0,l.yg)("br",null),(0,l.yg)("h2",{id:"4-common-issues"},"4. Common Issues"),(0,l.yg)("h3",{id:"41-analyze-submission-error-stats-table-not-available"},"4.1 ANALYZE Submission Error: Stats table not available..."),(0,l.yg)("p",null,"When ANALYZE is executed, statistics data is written to the internal table ",(0,l.yg)("inlineCode",{parentName:"p"},"__internal_schema.column_statistics"),". FE checks the tablet status of this table before executing ANALYZE. If there are unavailable tablets, the task is rejected. Please check the BE cluster status if this error occurs."),(0,l.yg)("p",null,"Users can use ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW BACKENDS\\G")," to verify the BE (Backend) status. If the BE status is normal, you can use the command ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW REPLICA STATUS FROM __internal_schema.[tbl_in_this_db]")," to check the tablet status within this database, ensuring that the tablet status is also normal."),(0,l.yg)("h3",{id:"42-failure-of-analyze-on-large-tables"},"4.2 Failure of ANALYZE on Large Tables"),(0,l.yg)("p",null,"Due to resource limitations, ANALYZE on some large tables may timeout or exceed BE memory limits. In such cases, it is recommended to use ",(0,l.yg)("inlineCode",{parentName:"p"},"ANALYZE ... WITH SAMPLE..."),"."))}u.isMDXComponent=!0}}]);