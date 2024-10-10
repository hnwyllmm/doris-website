"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[107930],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>E});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,E=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(E,o(o({ref:t},u),{},{components:n})):a.createElement(E,o({ref:t},u))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},437340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ALTER-SYSTEM-DECOMMISSION-BACKEND",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND",id:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND",title:"ALTER-SYSTEM-DECOMMISSION-BACKEND",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND",permalink:"/docs/dev/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-SYSTEM-DECOMMISSION-BACKEND",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/docs/dev/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND"},next:{title:"ALTER-SYSTEM-DROP-FOLLOWER",permalink:"/docs/dev/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-FOLLOWER"}},i={},c=[{value:"ALTER-SYSTEM-DECOMMISSION-BACKEND",id:"alter-system-decommission-backend",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-system-decommission-backend"},"ALTER-SYSTEM-DECOMMISSION-BACKEND"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER SYSTEM DECOMMISSION BACKEND"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"The node offline operation is used to safely log off the node. The operation is asynchronous. If successful, the node is eventually removed from the metadata. If it fails, the logout will not be done (only for admins!)"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Find backend through host and port")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DECOMMISSION BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Find backend through backend_id")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DECOMMISSION BACKEND "id1","id2"...;\n')),(0,r.yg)("p",null,"  illustrate:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"host can be a hostname or an ip address"),(0,r.yg)("li",{parentName:"ol"},"heartbeat_port is the heartbeat port of the node"),(0,r.yg)("li",{parentName:"ol"},"The node offline operation is used to safely log off the node. The operation is asynchronous. If successful, the node is eventually removed from the metadata. If it fails, the logout will not be completed."),(0,r.yg)("li",{parentName:"ol"},"You can manually cancel the node offline operation. See CANCEL DECOMMISSION")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Offline two nodes"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DECOMMISSION BACKEND "host1:port", "host2:port";\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DECOMMISSION BACKEND "id1", "id2";\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, DECOMMISSION, BACKEND, ALTER SYSTEM\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);