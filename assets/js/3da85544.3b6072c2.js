"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69967],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),y=r,c=m["".concat(p,".").concat(y)]||m[y]||g[y]||i;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},900027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const i={title:"Hive",language:"en"},l=void 0,o={unversionedId:"lakehouse/datalake-building/hive-build",id:"version-3.0/lakehouse/datalake-building/hive-build",title:"Hive",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/lakehouse/datalake-building/hive-build.md",sourceDirName:"lakehouse/datalake-building",slug:"/lakehouse/datalake-building/hive-build",permalink:"/docs/3.0/lakehouse/datalake-building/hive-build",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Hive",language:"en"},sidebar:"docs",previous:{title:"TPCDS",permalink:"/docs/3.0/lakehouse/datalake-analytics/tpcds"},next:{title:"Iceberg",permalink:"/docs/3.0/lakehouse/datalake-building/iceberg-build"}},p={},s=[{value:"Metadata Creation and Deletion",id:"metadata-creation-and-deletion",level:2},{value:"Catalog",id:"catalog",level:3},{value:"Database",id:"database",level:3},{value:"Table",id:"table",level:3},{value:"Data Operations",id:"data-operations",level:2},{value:"INSERT",id:"insert",level:3},{value:"INSERT OVERWRITE",id:"insert-overwrite",level:3},{value:"CTAS (CREATE TABLE AS SELECT)",id:"ctas-create-table-as-select",level:3},{value:"Transaction Mechanism",id:"transaction-mechanism",level:2},{value:"Concurrent Writing Mechanism",id:"concurrent-writing-mechanism",level:3},{value:"HDFS File Operations",id:"hdfs-file-operations",level:3},{value:"Relevant Parameters",id:"relevant-parameters",level:2},{value:"BE",id:"be",level:3}],d={toc:s},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Starting from version 2.1.3, Doris supports DDL and DML operations for Hive. Users can directly create databases and tables in Hive through Doris and write data into Hive tables. With this feature, users can perform complete data queries and write operations on Hive through Doris, further helping to simplify the data lake integrated architecture."),(0,r.yg)("p",null,"This article introduces Hive operations supported in Doris, including syntax and usage notes."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This is an experimental feature.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Before using, please set:"),(0,r.yg)("br",null),"set global enable_nereids_planner = true;",(0,r.yg)("p",{parentName:"admonition"},"set global enable_fallback_to_original_planner = false;"),(0,r.yg)("br",null),"For clusters upgraded from old versions, these variables may change."),(0,r.yg)("h2",{id:"metadata-creation-and-deletion"},"Metadata Creation and Deletion"),(0,r.yg)("h3",{id:"catalog"},"Catalog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'CREATE CATALOG [IF NOT EXISTS] hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.21.16.47:7004",\n    "hadoop.username" = "hadoop",\n    "fs.defaultFS" = "hdfs://172.21.16.47:4007"\n);\n')),(0,r.yg)("p",{parentName:"li"},"  Note, if you need to create Hive tables or write data through Doris, you must explicitly include the ",(0,r.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")," property in the Catalog properties. If creating the Catalog is only for querying, this parameter can be omitted."),(0,r.yg)("p",{parentName:"li"},"  For more parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/lakehouse/datalake-analytics/hive"},"Hive Catalog"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Drop"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"DROP CATALOG [IF EXISTS] hive;\n")),(0,r.yg)("p",{parentName:"li"},"  Deleting a Catalog does not delete any database or table information in Hive. It merely removes the mapping to this Hive cluster in Doris."))),(0,r.yg)("h3",{id:"database"},"Database"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create"),(0,r.yg)("p",{parentName:"li"},"  You can switch to the corresponding Catalog and execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE DATABASE")," statement:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"SWITCH hive;\nCREATE DATABASE [IF NOT EXISTS] hive_db;\n")),(0,r.yg)("p",{parentName:"li"},"  You can also create using the fully qualified name or specify the location, as:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"CREATE DATABASE [IF NOT EXISTS] hive.hive_db;\n\nCREATE DATABASE [IF NOT EXISTS] hive.hive_db\nPROPERTIES ('location'='hdfs://172.21.16.47:4007/path/to/db/');\n")),(0,r.yg)("p",{parentName:"li"},"  Later, you can view the Database's Location information using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE DATABASE")," command:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"mysql> SHOW CREATE DATABASE hive_db;\n+----------+---------------------------------------------------------------------------------------------+\n| Database | Create Database                                                                             |\n+----------+---------------------------------------------------------------------------------------------+\n| hive_db  | CREATE DATABASE `hive_db` LOCATION 'hdfs://172.21.16.47:4007/usr/hive/warehouse/hive_db.db' |\n+----------+---------------------------------------------------------------------------------------------+\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Drop"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"DROP DATABASE [IF EXISTS] hive.hive_db;\n")),(0,r.yg)("p",{parentName:"li"},"  Note that for Hive Databases, all tables within the Database must be deleted first, otherwise an error will occur. This operation will also delete the corresponding Database in Hive."))),(0,r.yg)("h3",{id:"table"},"Table"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create"),(0,r.yg)("p",{parentName:"li"},"  Doris supports creating partitioned or non-partitioned tables in Hive."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"-- Create unpartitioned hive table\nCREATE TABLE unpartitioned_table (\n  `col1` BOOLEAN COMMENT 'col1',\n  `col2` INT COMMENT 'col2',\n  `col3` BIGINT COMMENT 'col3',\n  `col4` CHAR(10) COMMENT 'col4',\n  `col5` FLOAT COMMENT 'col5',\n  `col6` DOUBLE COMMENT 'col6',\n  `col7` DECIMAL(9,4) COMMENT 'col7',\n  `col8` VARCHAR(11) COMMENT 'col8',\n  `col9` STRING COMMENT 'col9'\n)  ENGINE=hive\nPROPERTIES (\n  'file_format'='parquet'\n);\n\n-- Create partitioned hive table\n-- The partition columns must be in table's column definition list\nCREATE TABLE partition_table (\n  `col1` BOOLEAN COMMENT 'col1',\n  `col2` INT COMMENT 'col2',\n  `col3` BIGINT COMMENT 'col3',\n  `col4` DECIMAL(2,1) COMMENT 'col4',\n  `pt1` VARCHAR COMMENT 'pt1',\n  `pt2` VARCHAR COMMENT 'pt2'\n)  ENGINE=hive\nPARTITION BY LIST (pt1, pt2) ()\nPROPERTIES (\n  'file_format'='orc',\n  'compression'='zlib'\n);\n")),(0,r.yg)("p",{parentName:"li"},"  After creation, you can view the Hive table creation statement using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," command."),(0,r.yg)("p",{parentName:"li"},"  Note, unlike Hive's table creation statements. In Doris, when creating a Hive partitioned table, the partition columns must also be included in the Table's Schema. At the same time, the partition columns must be at the end of all schemas and in the same order."),(0,r.yg)("p",{parentName:"li"},"  :::tip"),(0,r.yg)("p",{parentName:"li"},"  For some Hive clusters that enable ACID transaction features by default, after using Doris to create a table, the table attribute ",(0,r.yg)("inlineCode",{parentName:"p"},"transactional")," will be true. However, Doris only supports some features of Hive transaction tables, which may cause the problem that Doris itself cannot read the Hive created by Doris. Therefore, it is necessary to explicitly add: ",(0,r.yg)("inlineCode",{parentName:"p"},'"transactional" = "false"')," in the table creation properties to create a non-transactional Hive table:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"CREATE TABLE non_acid_table(\n  `col1` BOOLEAN COMMENT 'col1',\n  `col2` INT COMMENT 'col2',\n  `col3` BIGINT COMMENT 'col3'\n)  ENGINE=hive\nPROPERTIES (\n  'transactional'='false',\n);\n")),(0,r.yg)("p",{parentName:"li"},"  :::")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Drop"),(0,r.yg)("p",{parentName:"li"},"  You can drop a Hive table using the ",(0,r.yg)("inlineCode",{parentName:"p"},"DROP TABLE")," statement. Currently, deleting the table also removes the data, including partition data.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Column Types"),(0,r.yg)("p",{parentName:"li"},"  The column types used when creating Hive tables in Doris correspond to those in Hive as follows:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris"),(0,r.yg)("th",{parentName:"tr",align:null},"Hive"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")))),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"Column types can only be nullable by default, NOT NULL is not supported."))),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"Hive 3.0 supports setting default values. If you need to set default values, you need to explicitly add ",(0,r.yg)("inlineCode",{parentName:"li"},'"hive.version" = "3.0.0"')," in the Catalog properties."))),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"After inserting data, if the types are not compatible, such as ",(0,r.yg)("inlineCode",{parentName:"li"},"'abc'")," being inserted into a numeric type, it will be converted to a null value before insertion.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Partitions"),(0,r.yg)("p",{parentName:"li"},"  The partition types in Hive correspond to the List partition in Doris. Therefore, when creating a Hive partitioned table in Doris, you need to use the List partition table creation statement, but there is no need to explicitly enumerate each partition. When writing data, Doris will automatically create the corresponding Hive partition based on the values of the data."),(0,r.yg)("p",{parentName:"li"},"  Supports creating single-column or multi-column partitioned tables.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"File Formats"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Parquet"),(0,r.yg)("li",{parentName:"ul"},"ORC (default)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Compression Formats"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Parquet: snappy(default), zstd, plain. (plain means no compression is used.)"),(0,r.yg)("li",{parentName:"ul"},"ORC: snappy, zlib(default), zstd, plain. (plain means no compression is used.)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Storage Medium"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"HDFS"),(0,r.yg)("li",{parentName:"ul"},"Object Storage")))),(0,r.yg)("h2",{id:"data-operations"},"Data Operations"),(0,r.yg)("p",null,"Data can be written into Hive tables through INSERT statements."),(0,r.yg)("p",null,"Supports writing to Hive tables created by Doris or existing Hive tables with supported format."),(0,r.yg)("p",null,"For partitioned tables, data will automatically be written to the corresponding partition or new partitions will be created."),(0,r.yg)("p",null,"Currently, writing to specific partitions is not supported."),(0,r.yg)("h3",{id:"insert"},"INSERT"),(0,r.yg)("p",null,"The INSERT operation appends data to the target table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'INSERT INTO hive_tbl values (val1, val2, val3, val4);\nINSERT INTO hive.hive_db.hive_tbl SELECT col1, col2 FROM internal.db1.tbl1;\n\nINSERT INTO hive_tbl(col1, col2) values (val1, val2);\nINSERT INTO hive_tbl(col1, col2, partition_col1, partition_col2) values (1, 2, "beijing", "2023-12-12");\n')),(0,r.yg)("h3",{id:"insert-overwrite"},"INSERT OVERWRITE"),(0,r.yg)("p",null,"The INSERT OVERWRITE operation completely overwrites the existing data in the table with new data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT OVERWRITE TABLE VALUES(val1, val2, val3, val4)\nINSERT OVERWRITE TABLE hive.hive_db.hive_tbl(col1, col2) SELECT col1, col2 FROM internal.db1.tbl1;\n")),(0,r.yg)("h3",{id:"ctas-create-table-as-select"},"CTAS (CREATE TABLE AS SELECT)"),(0,r.yg)("p",null,"A Hive table can be created and populated with data using the ",(0,r.yg)("inlineCode",{parentName:"p"},"CTAS (CREATE TABLE AS SELECT)")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE TABLE hive_ctas ENGINE=hive AS SELECT * FROM other_table;\n")),(0,r.yg)("p",null,"CTAS supports specifying file formats, partitioning methods, and other information, such as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE hive_ctas ENGINE=hive\nPARTITION BY LIST (pt1, pt2) ()\nAS SELECT col1,pt1,pt2 FROM part_ctas_src WHERE col1>0;\n\nCREATE TABLE hive.hive_db.hive_ctas (col1,col2,pt1) ENGINE=hive\nPARTITION BY LIST (pt1) ()\nPROPERTIES (\n"file_format"="parquet",\n"compression"="zstd"\n)\nAS SELECT col1,pt1 as col2,pt2 as pt1 FROM test_ctas.part_ctas_src WHERE col1>0;\n')),(0,r.yg)("h2",{id:"transaction-mechanism"},"Transaction Mechanism"),(0,r.yg)("p",null,"Write operations to Hive are placed in a separate transaction. Until the transaction is committed, the data is not visible externally. Only after committing the transaction do the table's related operations become visible to others."),(0,r.yg)("p",null,"Transactions ensure the atomicity of operations\u2014all operations within a transaction either succeed completely or fail altogether."),(0,r.yg)("p",null,"Transactions do not fully guarantee isolation of operations; they strive to minimize the inconsistency window by separating file system operations from metadata operations on the Hive Metastore."),(0,r.yg)("p",null,"For example, in a transaction involving multiple partition modifications of a Hive table, if the task is divided into two batches, and the first batch is completed but the second batch has not yet started, the partitions from the first batch are already visible externally, and can be read, but the second batch partitions cannot."),(0,r.yg)("p",null,"If any anomalies occur during the transaction commit process, the transaction will be directly rolled back, including modifications to HDFS files and metadata in the Hive Metastore, without requiring further action from the user."),(0,r.yg)("h3",{id:"concurrent-writing-mechanism"},"Concurrent Writing Mechanism"),(0,r.yg)("p",null,"Currently, Doris supports concurrent writing using multiple insert statements. However, it is important to note that users need to control concurrent writing to avoid potential conflicts."),(0,r.yg)("p",null,"As ordinary non-transactional Hive tables lack a complete transaction mechanism. From the Doris transaction mechanism described earlier, we know that the current implementation in Doris can only make efforts to minimize the possible inconsistency time window and cannot guarantee true ACID properties. Therefore, concurrent writing to Hive in Doris may lead to data consistency issues."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"INSERT")," Concurrent Operations"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"INSERT")," is a data append operation. When ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT")," is executed concurrently, it will not cause conflicts, and the operations will produce the expected results.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"INSERT OVERWRITE")," Concurrent Operations"),(0,r.yg)("p",{parentName:"li"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT OVERWRITE")," is used for concurrent writing to the same table or partition, it may lead to data loss or corruption, and the result may be uncertain."),(0,r.yg)("p",{parentName:"li"},"There are generally the following solutions:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"For partitioned tables, data can be written into different partitions, and concurrent operations on different partitions will not cause conflicts."),(0,r.yg)("li",{parentName:"ul"},"For non-partitioned tables, ",(0,r.yg)("inlineCode",{parentName:"li"},"INSERT")," can be executed simultaneously without using ",(0,r.yg)("inlineCode",{parentName:"li"},"INSERT OVERWRITE"),", thus avoiding conflicts."),(0,r.yg)("li",{parentName:"ul"},"For potentially conflicting operations, users need to control on the business side to ensure that only one write operation is being performed at the same time.")))),(0,r.yg)("h3",{id:"hdfs-file-operations"},"HDFS File Operations"),(0,r.yg)("p",null,"Data in Hive tables on HDFS is usually written first to a temporary directory, then operations like ",(0,r.yg)("inlineCode",{parentName:"p"},"rename")," are used to commit the files finally. Here, we detail the specific operations on files in HDFS during different data operations."),(0,r.yg)("p",null,"The format of the temporary directory is: ",(0,r.yg)("inlineCode",{parentName:"p"},"/tmp/.doris_staging/<username>/<uuid>")),(0,r.yg)("p",null,"The format of the written data file names is: ",(0,r.yg)("inlineCode",{parentName:"p"},"<query-id>_<uuid>-<index>.<compress-type>.<file-type>")),(0,r.yg)("p",null,"Below, we describe the file operations in various cases."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Non-partitioned table"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Append"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Target table directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table1"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Temporary file: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/f02247cb662846038baae272af5eeb05/b35fdbcea3a4e39-86d1f36987ef1492_7e3985bf-9de9-4fc7-b84e-adf11aa08756-0.orc")),(0,r.yg)("p",{parentName:"li"},"During the commit phase, all temporary files are moved to the target table directory.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Overwrite"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Target table directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table1"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Temporary file: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/f02247cb662846038baae272af5eeb05/b35fdbcea3a4e39-86d1f36987ef1492_7e3985bf-9de9-4fc7-b84e-adf11aa08756-0.orc")),(0,r.yg)("p",{parentName:"li"},"Commit phase:"))),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"The target table directory is renamed to a temporary target table directory: ",(0,r.yg)("inlineCode",{parentName:"li"},"hdfs://ns/usr/hive/warehouse/example.db/_temp_b35fdbcea3a4e39-86d1f36987ef1492_table1")),(0,r.yg)("li",{parentName:"ol"},"The temporary directory is renamed to the target table directory."),(0,r.yg)("li",{parentName:"ol"},"The temporary target table directory is deleted."))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Partitioned table"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add (Add to a new partition)"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Target table directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table2/part_col=2024-01-01"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Temporary file: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/a7eac7505d7a42fdb06cb9ef1ea3e912/par1=a/d678a74d232345e0-b659e2fb58e86ffd_549ad677-ee75-4fa1-b8a6-3e821e1dae61-0.orc")),(0,r.yg)("p",{parentName:"li"},"During the commit phase, the temporary directory is renamed to the target table directory.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Append (Write data to an existing partition)"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Target table directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table2/part_col=2024-01-01"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Temporary file: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/a7eac7505d7a42fdb06cb9ef1ea3e912/par1=a/d678a74d232345e0-b659e2fb58e86ffd_549ad677-ee75-4fa1-b8a6-3e821e1dae61-0.orc")),(0,r.yg)("p",{parentName:"li"},"During the commit phase, files from the temporary directory are moved to the target table directory.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Overwrite (Overwrite an existing partition)"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Target table directory: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/usr/hive/warehouse/example.db/table2/part_col=2024-01-01"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Temporary file: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ns/tmp/.doris_staging/root/a7eac7505d7a42fdb06cb9ef1ea3e912/par1=a/d678a74d232345e0-b659e2fb58e86ffd_549ad677-ee75-4fa1-b8a6-3e821e1dae61-0.orc")),(0,r.yg)("p",{parentName:"li"},"Commit phase:"))),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"The target table partition directory is renamed to a temporary partition directory: ",(0,r.yg)("inlineCode",{parentName:"li"},"hdfs://ns/usr/hive/warehouse/example.db/table2/_temp_d678a74d232345e0-b659e2fb58e86ffd_part_col=2024-01-01")),(0,r.yg)("li",{parentName:"ol"},"The temporary partition directory is renamed to the target table partition directory."),(0,r.yg)("li",{parentName:"ol"},"The temporary partition directory is deleted.")))))),(0,r.yg)("h2",{id:"relevant-parameters"},"Relevant Parameters"),(0,r.yg)("h3",{id:"be"},"BE"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hive_sink_max_file_size")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum file size for data files. When the volume of written data exceeds this size, the current file is closed, and a new file is opened for continued writing."),(0,r.yg)("td",{parentName:"tr",align:null},"1GB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_max_partition_nums_per_writer")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of partitions that can be written by each Instance on a BE node."),(0,r.yg)("td",{parentName:"tr",align:null},"128")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_non_partition_write_scaling_data_processed_threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"Threshold of data volume for starting scaling-write in non-partitioned tables. For every increase of ",(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_non_partition_write_scaling_data_processed_threshold")," in data volume, a new writer (instance) will be engaged for writing. The scaling-write mechanism aims to use a different number of writers (instances) based on the volume of data to increase the throughput of concurrent writing. When the volume of data is small, it also saves resources and reduces the number of files produced as much as possible."),(0,r.yg)("td",{parentName:"tr",align:null},"25MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_data_processed_rebalance_threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum data volume threshold for triggering rebalance in partitioned tables. If ",(0,r.yg)("inlineCode",{parentName:"td"},"current accumulated data volume")," - ",(0,r.yg)("inlineCode",{parentName:"td"},"data volume accumulated since the last rebalance or from the start")," >= ",(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_data_processed_rebalance_threshold"),", rebalancing is triggered. If there is a significant difference in the final file sizes, you can reduce this threshold to increase balance. However, too small a threshold may increase the cost of rebalancing and potentially affect performance."),(0,r.yg)("td",{parentName:"tr",align:null},"25MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table_sink_partition_write_min_partition_data_processed_rebalance_threshold")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum data volume threshold per partition for rebalancing in partitioned tables. If ",(0,r.yg)("inlineCode",{parentName:"td"},"current partition's data volume")," >= ",(0,r.yg)("inlineCode",{parentName:"td"},"threshold")," * ",(0,r.yg)("inlineCode",{parentName:"td"},"number of tasks allocated to the current partition"),", rebalancing for that partition begins. If there is a significant difference in the final file sizes, you can reduce this threshold to increase balance. However, too small a threshold may increase the cost of rebalancing and potentially affect performance."),(0,r.yg)("td",{parentName:"tr",align:null},"15MB")))))}g.isMDXComponent=!0}}]);