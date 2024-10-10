"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[419616],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||y[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},789225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(58168),o=(n(296540),n(15680));const a={title:"High-Concurrency Point Query",language:"en"},i=void 0,l={unversionedId:"query/high-concurrent-point-query",id:"query/high-concurrent-point-query",title:"High-Concurrency Point Query",description:"\x3c!--",source:"@site/docs/query/high-concurrent-point-query.md",sourceDirName:"query",slug:"/query/high-concurrent-point-query",permalink:"/docs/dev/query/high-concurrent-point-query",draft:!1,tags:[],version:"current",frontMatter:{title:"High-Concurrency Point Query",language:"en"},sidebar:"docs",previous:{title:"Pipeline Execution Engine",permalink:"/docs/dev/query/pipeline/pipeline-execution-engine"},next:{title:"TOPN Query Optimization",permalink:"/docs/dev/query/topn-query"}},s={},u=[{value:"Background",id:"background",level:2},{value:"Row Store Format",id:"row-store-format",level:2},{value:"Accelerate point query for unique model",id:"accelerate-point-query-for-unique-model",level:2},{value:"Using <code>PreparedStatement</code>",id:"using-preparedstatement",level:2},{value:"Enable row cache",id:"enable-row-cache",level:2},{value:"Performance optimization",id:"performance-optimization",level:2},{value:"QA",id:"qa",level:2}],c={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"high-concurrency-point-query"},"High-Concurrency Point Query"),(0,o.yg)("h2",{id:"background"},"Background"),(0,o.yg)("p",null,"Doris is built on a columnar storage format engine. In high-concurrency service scenarios, users always want to retrieve entire rows of data from the system. However, when tables are wide, the columnar format greatly amplifies random read IO. Doris query engine and planner are too heavy for some simple queries, such as point queries. A short path needs to be planned in the FE's query plan to handle such queries. FE is the access layer service for SQL queries, written in Java. Parsing and analyzing SQL also leads to high CPU overhead for high-concurrency queries. To solve these problems, we have introduced row storage, short query path, and PreparedStatement in Doris. Below is a guide to enable these optimizations."),(0,o.yg)("h2",{id:"row-store-format"},"Row Store Format"),(0,o.yg)("p",null,"We support a row format for olap table to reduce point lookup io cost,\nbut to enable this format, you need to spend more disk space for row format store.\nCurrently, we store row in an extra column called ",(0,o.yg)("inlineCode",{parentName:"p"},"row column")," for simplicity.\nThe Row Storage mode can only be turned on when creating a table. You need to specify the following properties in the property of the table creation statement:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,o.yg)("h2",{id:"accelerate-point-query-for-unique-model"},"Accelerate point query for unique model"),(0,o.yg)("p",null,"The above row storage is used to enable the Merge-On-Write strategy under the Unique model to reduce the IO overhead during enumeration. When ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_unique_key_merge_on_write")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"store_row_column")," are enabled when creating a Unique table, the query of the primary key will take a short path to optimize SQL execution, and only one RPC is required to complete the query. The following is an example of enabling the Merge-On-Write strategy under the Unique model by combining the query and row existence:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `tbl_point_query` (\n    `key` int(11) NULL,\n    `v1` decimal(27, 9) NULL,\n    `v2` varchar(30) NULL,\n    `v3` varchar(30) NULL,\n    `v4` date NULL,\n    `v5` datetime NULL,\n    `v6` float NULL,\n    `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key)` BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1",\n    "enable_unique_key_merge_on_write" = "true",\n    "light_schema_change" = "true",\n    "store_row_column" = "true"\n);\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"enable_unique_key_merge_on_write")," should be enabled, since we need primary key for quick point lookup in storage engine"),(0,o.yg)("li",{parentName:"ol"},"when condition only contains primary key like ",(0,o.yg)("inlineCode",{parentName:"li"},"select * from tbl_point_query where key = 123"),", such query will go through the short fast path"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"light_schema_change")," should also been enabled since we rely on ",(0,o.yg)("inlineCode",{parentName:"li"},"column unique id")," of each column when doing a point query."),(0,o.yg)("li",{parentName:"ol"},"It only supports equality queries on the key column of a single table and does not support joins or nested subqueries. The WHERE condition should consist of the key column alone and be an equality comparison. It can be considered as a type of key-value query."),(0,o.yg)("li",{parentName:"ol"},"Enabling rowstore may lead to space expansion and occupy more disk space. For scenarios where querying only specific columns is needed, starting from Doris 2.1, it is recommended to use ",(0,o.yg)("inlineCode",{parentName:"li"},'"row_store_columns"="key,v1,v2"')," to specify certain columns for rowstore storage. Queries can then selectively access these columns, for example:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SELECT key, v1, v2 FROM tbl_point_query WHERE key = 1\n")),(0,o.yg)("h2",{id:"using-preparedstatement"},"Using ",(0,o.yg)("inlineCode",{parentName:"h2"},"PreparedStatement")),(0,o.yg)("p",null,"In order to reduce CPU cost for parsing query SQL and SQL expressions, we provide ",(0,o.yg)("inlineCode",{parentName:"p"},"PreparedStatement")," feature in FE fully compatible with mysql protocol (currently only support point queries like above mentioned).Enable it will pre caculate PreparedStatement SQL and expresions and caches it in a session level memory buffer and will be reused later on.We could improve 4x+ performance by using ",(0,o.yg)("inlineCode",{parentName:"p"},"PreparedStatement")," when CPU became hotspot doing such queries.Bellow is an JDBC example of using ",(0,o.yg)("inlineCode",{parentName:"p"},"PreparedStatement"),"."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Setup JDBC url and enable server side prepared statement")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"url = jdbc:mysql://127.0.0.1:9030/ycsb?useServerPrepStmts=true\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Using ",(0,o.yg)("inlineCode",{parentName:"li"},"PreparedStatement"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'// use `?` for placement holders, readStatement should be reused\nPreparedStatement readStatement = conn.prepareStatement("select * from tbl_point_query where key = ?");\n...\nreadStatement.setInt(1,1234);\nResultSet resultSet = readStatement.executeQuery();\n...\nreadStatement.setInt(1,1235);\nresultSet = readStatement.executeQuery();\n...\n')),(0,o.yg)("h2",{id:"enable-row-cache"},"Enable row cache"),(0,o.yg)("p",null,"Doris has a page-level cache that stores data for a specific column in each page. Therefore, the page cache is a column-based cache. For the row storage mentioned earlier, a row contains data for multiple columns, and the cache may be evicted by large queries, which can reduce the hit rate. To increase the hit rate of the row cache, a separate row cache is introduced, which reuses the LRU cache mechanism in Doris to ensure memory usage. You can enable it by specifying the following BE configuration:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"disable_storage_row_cache")," : Whether to enable the row cache. It is not enabled by default."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"row_cache_mem_limit")," : Specifies the percentage of memory occupied by the row cache. The default is 20% of memory.")),(0,o.yg)("h2",{id:"performance-optimization"},"Performance optimization"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Generally, it is effective to improve query processing capabilities by increasing the number of Observers."),(0,o.yg)("li",{parentName:"ol"},"Query load balancing: During the enumeration, if it is found that the FE CPU that accepts enumeration requests is used too high, or the request response becomes slow, you can use jdbc load balance for load balancing, and distribute the requests to multiple nodes to share the pressure (and also You can use other methods for query load balancing configuration, such as Nginx, proxySQL)"),(0,o.yg)("li",{parentName:"ol"},"By directing the query requests to the Observer role to share the request pressure of high-concurrency queries and reducing the number of query requests sent to the fe master, it can usually solve the problem of the time-consuming fluctuation of the Fe Master node query to obtain better performance and stability")),(0,o.yg)("h2",{id:"qa"},"QA"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"How to confirm that the configuration is correct and short path optimization using concurrent enumeration is used\nA: explain sql, when SHORT-CIRCUIT appears in the execution plan, it proves that short path optimization is used",(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> explain select * from tbl_point_query where `key` = -2147481418 ;                                                                                                                                \n      +-----------------------------------------------------------------------------------------------+                                                                                                       \n      | Explain String(Old Planner)                                                                   |                                                                                                       \n      +-----------------------------------------------------------------------------------------------+                                                                                                       \n      | PLAN FRAGMENT 0                                                                               |                                                                                                       \n      |   OUTPUT EXPRS:                                                                               |                                                                                                       \n      |     `test`.`tbl_point_query`.`key`                                                            |                                                                                                       \n      |     `test`.`tbl_point_query`.`v1`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v2`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v3`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v4`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v5`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v6`                                                             |                                                                                                       \n      |     `test`.`tbl_point_query`.`v7`                                                             |                                                                                                       \n      |   PARTITION: UNPARTITIONED                                                                    |                                                                                                       \n      |                                                                                               |                                                                                                       \n      |   HAS_COLO_PLAN_NODE: false                                                                   |                                                                                                       \n      |                                                                                               |                                                                                                       \n      |   VRESULT SINK                                                                                |                                                                                                       \n      |      MYSQL_PROTOCAL                                                                           |                                                                                                       \n      |                                                                                               |                                                                                                       \n      |   0:VOlapScanNode                                                                             |                                                                                                       \n      |      TABLE: test.tbl_point_query(tbl_point_query), PREAGGREGATION: ON                         |                                                                                                       \n      |      PREDICATES: `key` = -2147481418 AND `test`.`tbl_point_query`.`__DORIS_DELETE_SIGN__` = 0 |                                                                                                       \n      |      partitions=1/1 (tbl_point_query), tablets=1/1, tabletList=360065                         |                                                                                                       \n      |      cardinality=9452868, avgRowSize=833.31323, numNodes=1                                    |                                                                                                       \n      |      pushAggOp=NONE                                                                           |                                                                                                       \n      |      SHORT-CIRCUIT                                                                            |                                                                                                       \n      +-----------------------------------------------------------------------------------------------+\n"))),(0,o.yg)("li",{parentName:"ol"},"How to confirm that prepared statement is effective\nA: After sending the request to Doris, find the corresponding query request in fe.audit.log and find Stmt=EXECUTE(), indicating that prepared statement is effective",(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-text"},"2024-01-02 11:15:51,248 [query] |Client=192.168.1.82:53450|User=root|Db=test|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=49|ScanBytes=0|ScanRows=0|ReturnRows=1|StmtId=51|QueryId=b63d30b908f04dad-ab4a\n   3ba21d2c776b|IsQuery=true|isNereids=false|feIp=10.16.10.6|Stmt=EXECUTE(-2147481418)|CpuTimeMS=0|SqlHash=eee20fa2ac13a4f93bd4503a87921024|peakMemoryBytes=0|SqlDigest=|TraceId=|WorkloadGroup=|FuzzyVaria\n   bles=\n"))),(0,o.yg)("li",{parentName:"ol"},"Can non-primary key queries use special optimization of high-concurrency point lookups?\nA: No, high-concurrency query only targets the equivalent query of the key column, and the query cannot contain join or nested subqueries."),(0,o.yg)("li",{parentName:"ol"},"Is useServerPrepStmts useful in ordinary queries?\nA: Prepared Statement currently only takes effect when primary key is checked."),(0,o.yg)("li",{parentName:"ol"},"Does optimizer selection require global settings?\nA: When using prepared statement for query, Doris will choose the query method with the best performance, and there is no need to manually set the optimizer.")))}y.isMDXComponent=!0}}]);