"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[152727],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,g=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return r?t.createElement(g,p(p({ref:n},c),{},{components:r})):t.createElement(g,p({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=r[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},821830:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-PROPERTY",language:"zh-CN"},p=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY",title:"SHOW-PROPERTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROPERTY",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-PROPERTY",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-RESTORE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE"},next:{title:"SHOW-TRIGGERS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TRIGGERS"}},i={},s=[{value:"SHOW-PROPERTY",id:"show-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-property"},"SHOW-PROPERTY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW PROPERTY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u7528\u6237\u7684\u5c5e\u6027"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROPERTY [FOR user] [LIKE key]\nSHOW ALL PROPERTIES [LIKE key]\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"user")),(0,a.yg)("p",{parentName:"li"}," \u67e5\u770b\u6307\u5b9a\u7528\u6237\u7684\u5c5e\u6027\u3002 \u5982\u679c\u672a\u6307\u5b9a\uff0c\u8bf7\u68c0\u67e5\u5f53\u524d\u7528\u6237\u7684\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"LIKE")),(0,a.yg)("p",{parentName:"li"}," \u6a21\u7cca\u5339\u914d\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u540d\u6765\u5b8c\u6210\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"ALL")," "),(0,a.yg)("p",{parentName:"li"}," \u67e5\u770b\u6240\u6709\u7528\u6237\u7684\u5c5e\u6027(\u4ece2.0.3\u7248\u672c\u5f00\u59cb\u652f\u6301)"))),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show property like'%connection%';\n+----------------------+-------+\n| Key                  | Value |\n+----------------------+-------+\n| max_user_connections | 100   |\n+----------------------+-------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Key")),(0,a.yg)("p",{parentName:"li"},"\u5c5e\u6027\u540d.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Value")),(0,a.yg)("p",{parentName:"li"},"\u5c5e\u6027\u503c."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show all properties like "%connection%";\n+-------------------+--------------------------------------+\n| User              | Properties                           |\n+-------------------+--------------------------------------+\n| root              | {"max_user_connections": "100"}      |\n| admin             | {"max_user_connections": "100"}      |\n| default_cluster:a | {"max_user_connections": "1000"}     |\n+-------------------+--------------------------------------+\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"User")),(0,a.yg)("p",{parentName:"li"},"\u7528\u6237\u540d.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Properties")),(0,a.yg)("p",{parentName:"li"},"\u5bf9\u5e94\u7528\u6237\u5404\u4e2aproperty\u7684key:value."))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b jack \u7528\u6237\u7684\u5c5e\u6027"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROPERTY FOR 'jack'\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b jack \u7528\u6237\u5bfc\u5165cluster\u76f8\u5173\u5c5e\u6027"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROPERTY FOR 'jack' LIKE '%load_cluster%'\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6240\u6709\u7528\u6237\u5bfc\u5165cluster\u76f8\u5173\u5c5e\u6027"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL PROPERTIES LIKE '%load_cluster%'\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, PROPERTY, ALL\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);