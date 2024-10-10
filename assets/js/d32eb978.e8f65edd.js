"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[788509],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(58168),i=(n(296540),n(15680));const r={title:"Hive HLL UDF",language:"en"},l=void 0,o={unversionedId:"ecosystem/hive-hll-udf",id:"version-2.1/ecosystem/hive-hll-udf",title:"Hive HLL UDF",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/ecosystem/hive-hll-udf.md",sourceDirName:"ecosystem",slug:"/ecosystem/hive-hll-udf",permalink:"/docs/ecosystem/hive-hll-udf",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Hive HLL UDF",language:"en"},sidebar:"ecosystem",previous:{title:"Hive Bitmap UDF",permalink:"/docs/ecosystem/hive-bitmap-udf"},next:{title:"Apache Superset",permalink:"/docs/ecosystem/bi/apache-superset"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Create a Hive table and insert test data",id:"create-a-hive-table-and-insert-test-data",level:3},{value:"Use Hive HLL UDF:",id:"use-hive-hll-udf",level:3},{value:"Hive HLL UDF Explanation",id:"hive-hll-udf-explanation",level:3},{value:"Importing Hive HLL to Doris",id:"importing-hive-hll-to-doris",level:2},{value:"Method 1: Catalog (Recommended)",id:"method-1-catalog-recommended",level:3},{value:"Method 2: Spark Load",id:"method-2-spark-load",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"hive-hll-udf"},"Hive HLL UDF"),(0,i.yg)("p",null," The Hive HLL UDF provides a set of UDFs for generating HLL operations in Hive tables, which are identical to Doris HLL. Hive HLL can be imported into Doris through Spark HLL Load. For more information about HLL, please refer to Using HLL for Approximate Deduplication.:",(0,i.yg)("a",{parentName:"p",href:"/docs/query/duplicate/using-hll"},"Approximate Deduplication Using HLL")),(0,i.yg)("p",null," Function Introduction:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"UDAF"),(0,i.yg)("p",{parentName:"li"},"\xb7 to_hll: An aggregate function that returns a Doris HLL column, similar to the to_bitmap function"),(0,i.yg)("p",{parentName:"li"},"\xb7 hll_union\uff1aAn aggregate function that calculates the union of groups, returning a Doris HLL column, similar to the bitmap_union function")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"UDF"),(0,i.yg)("p",{parentName:"li"},"   \xb7 hll_cardinality: Returns the number of distinct elements added to the HLL, similar to the bitmap_count function"),(0,i.yg)("p",{parentName:"li"},"Main Purpose:")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Reduce data import time to Doris by eliminating the need for dictionary construction and HLL pre-aggregation")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Save Hive storage by compressing data using HLL, significantly reducing storage costs compared to Bitmap statistics")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Provide flexible HLL operations in Hive, including union and cardinality statistics, and allow the resulting HLL to be directly imported into Doris"),(0,i.yg)("p",{parentName:"li"},"Note:\nHLL statistics are approximate calculations with an error rate of around 1% to 2%."))),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h3",{id:"create-a-hive-table-and-insert-test-data"},"Create a Hive table and insert test data"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Create a test database, e.g., hive_test\nuse hive_test;\n\n-- Create a Hive HLL table\nCREATE TABLE IF NOT EXISTS `hive_hll_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'hll'\n) comment  'comment'\n\n-- Create a normal Hive table and insert test data\nCREATE TABLE IF NOT EXISTS `hive_table`(\n    `k1`   int       COMMENT '',\n    `k2`   String    COMMENT '',\n    `k3`   String    COMMENT '',\n    `uuid` int       COMMENT ''\n) comment  'comment'\n\ninsert into hive_table select 1, 'a', 'b', 12345;\ninsert into hive_table select 1, 'a', 'c', 12345;\ninsert into hive_table select 2, 'b', 'c', 23456;\ninsert into hive_table select 3, 'c', 'd', 34567;\n")),(0,i.yg)("h3",{id:"use-hive-hll-udf"},"Use Hive HLL UDF:"),(0,i.yg)("p",null,"Hive HLL UDF needs to be used in Hive/Spark. First, compile the FE to obtain the hive-udf.jar file.\nCompilation preparation: If you have compiled the ldb source code, you can directly compile the FE. If not, you need to manually install thrift, refer to ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/developer-guide/fe-idea-dev/"},"Setting Up Dec Env for FE - IntelliJ IDEA")," for compilation and installation."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Clone the Doris source code\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n\n-- Install thrift (skip if already installed)\n-- Enter the FE directory\ncd fe\n\n-- Execute the Maven packaging command (all FE submodules will be packaged)\nmvn package -Dmaven.test.skip=true\n-- Or package only the hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n\n-- The packaged hive-udf.jar file will be generated in the target directory\n-- Upload the compiled hive-udf.jar file to HDFS, e.g., to the root directory\nhdfs dfs -put hive-udf/target/hive-udf.jar /\n\n")),(0,i.yg)("p",null,"Then, enter Hive and execute the following SQL statements:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Load the hive hll udf jar package, modify the hostname and port according to your actual situation\nadd jar hdfs://hostname:port/hive-udf.jar;\n\n-- Create UDAF functions\ncreate temporary function to_hll as 'org.apache.doris.udf.ToHllUDAF' USING JAR 'hdfs://hostname:port/hive-udf.jar';\ncreate temporary function hll_union as 'org.apache.doris.udf.HllUnionUDAF' USING JAR 'hdfs://hostname:port/hive-udf.jar';\n\n\n-- Create UDF functions\ncreate temporary function hll_cardinality as 'org.apache.doris.udf.HllCardinalityUDF' USING JAR 'hdfs://node:9000/hive-udf.jar';\n\n\n-- Example: Use the to_hll UDAF to aggregate and generate HLL, and write it to the Hive HLL table\ninsert into hive_hll_table\nselect \n    k1,\n    k2,\n    k3,\n    to_hll(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n\n-- Example: Use hll_cardinality to calculate the number of elements in the HLL\nselect k1, k2, k3, hll_cardinality(uuid) from hive_hll_table;\n+-----+-----+-----+------+\n| k1  | k2  | k3  | _c3  |\n+-----+-----+-----+------+\n| 1   | a   | b   | 1    |\n| 1   | a   | c   | 1    |\n| 2   | b   | c   | 1    |\n| 3   | c   | d   | 1    |\n+-----+-----+-----+------+\n\n-- Example: Use hll_union to calculate the union of groups, returning 3 rows\nselect k1, hll_union(uuid) from hive_hll_table group by k1;\n\n-- Example: Also can merge and then continue to statistics\nselect k3, hll_cardinality(hll_union(uuid)) from hive_hll_table group by k3;\n+-----+------+\n| k3  | _c1  |\n+-----+------+\n| b   | 1    |\n| c   | 2    |\n| d   | 1    |\n+-----+------+\n")),(0,i.yg)("h3",{id:"hive-hll-udf-explanation"},"Hive HLL UDF Explanation"),(0,i.yg)("h2",{id:"importing-hive-hll-to-doris"},"Importing Hive HLL to Doris"),(0,i.yg)("h3",{id:"method-1-catalog-recommended"},"Method 1: Catalog (Recommended)"),(0,i.yg)("p",null,"Create Hive table specified as TEXT format. For Binary type, Hive will save it as a base64 encoded string. At this time, you can use the Hive Catalog to directly import the HLL data into Doris using the ",(0,i.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-functions/hll-functions/hll-from-base64"},"hll_from_base64")," function."),(0,i.yg)("p",null,"Here is a complete example:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Create a Hive table")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `hive_hll_table`(\n`k1`   int       COMMENT '',\n`k2`   String    COMMENT '',\n`k3`   String    COMMENT '',\n`uuid` binary    COMMENT 'hll'\n) stored as textfile\n\n-- then reuse the previous steps to insert data from a normal table into it using the to_hll function\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"/docs/lakehouse/datalake-analytics/hive"},"Create a Doris catalog"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:9083'\n);\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Create a Doris internal table")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `doris_test`.`doris_hll_table`(\n    `k1`   int                   COMMENT '',\n    `k2`   varchar(10)           COMMENT '',\n    `k3`   varchar(10)           COMMENT '',\n    `uuid` HLL  HLL_UNION  COMMENT 'hll'\n)\nAGGREGATE KEY(k1, k2, k3)\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n);\n")),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Import data from Hive to Doris")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"insert into doris_hll_table select k1, k2, k3, hll_from_base64(uuid) from hive.hive_test.hive_hll_table;\n\n-- View the imported data, combining hll_to_base64 for decoding\nselect *, hll_to_base64(uuid) from doris_hll_table;\n+------+------+------+------+---------------------+\n| k1   | k2   | k3   | uuid | hll_to_base64(uuid) |\n+------+------+------+------+---------------------+\n|    1 | a    | b    | NULL | AQFw+a9MhpKhoQ==    |\n|    1 | a    | c    | NULL | AQFw+a9MhpKhoQ==    |\n|    2 | b    | c    | NULL | AQGyB7kbWBxh+A==    |\n|    3 | c    | d    | NULL | AQFYbJB5VpNBhg==    |\n+------+------+------+------+---------------------+\n\n-- Also can use Doris's native HLL functions for statistics, and see that the results are consistent with the previous statistics in Hive\nselect k3, hll_cardinality(hll_union(uuid)) from doris_hll_table group by k3;\n+------+----------------------------------+\n| k3   | hll_cardinality(hll_union(uuid)) |\n+------+----------------------------------+\n| b    |                                1 |\n| d    |                                1 |\n| c    |                                2 |\n+------+----------------------------------+\n\n-- At this time, querying the external table data, i.e., the data before import, can also verify the correctness of the data\nselect k3, hll_cardinality(hll_union(hll_from_base64(uuid))) from hive.hive_test.hive_hll_table group by k3;\n+------+---------------------------------------------------+\n| k3   | hll_cardinality(hll_union(hll_from_base64(uuid))) |\n+------+---------------------------------------------------+\n| d    |                                                 1 |\n| b    |                                                 1 |\n| c    |                                                 2 |\n+------+---------------------------------------------------+\n")),(0,i.yg)("h3",{id:"method-2-spark-load"},"Method 2: Spark Load"),(0,i.yg)("p",null," See details: ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/1.2/data-operate/import/import-way/spark-load-manual"},"Spark Load")," -> Basic operation -> Creating Load (Example 3: when the upstream data source is hive binary type table)"))}p.isMDXComponent=!0}}]);