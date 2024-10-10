"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[842257],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>f});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),s=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(o.Provider,{value:r},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(o,".").concat(u)]||m[u]||y[u]||i;return n?t.createElement(f,l(l({ref:r},c),{},{components:n})):t.createElement(f,l({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},775389:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=n(58168),a=(n(296540),n(15680));const i={title:"MySQL \u5b89\u5168\u4f20\u8f93",language:"zh-CN"},l=void 0,p={unversionedId:"admin-manual/privilege-ldap/certificate",id:"version-2.0/admin-manual/privilege-ldap/certificate",title:"MySQL \u5b89\u5168\u4f20\u8f93",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/privilege-ldap/certificate.md",sourceDirName:"admin-manual/privilege-ldap",slug:"/admin-manual/privilege-ldap/certificate",permalink:"/zh-CN/docs/2.0/admin-manual/privilege-ldap/certificate",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MySQL \u5b89\u5168\u4f20\u8f93",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8ba4\u8bc1\u548c\u9274\u6743",permalink:"/zh-CN/docs/2.0/admin-manual/privilege-ldap/user-privilege"},next:{title:"HTTP \u5b89\u5168\u4f20\u8f93",permalink:"/zh-CN/docs/2.0/admin-manual/privilege-ldap/fe-certificate"}},o={},s=[{value:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6",id:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6",level:2}],c={toc:s},m="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(m,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris \u5f00\u542f SSL \u529f\u80fd\u9700\u8981\u914d\u7f6e CA \u5bc6\u94a5\u8bc1\u4e66\u548c Server \u7aef\u5bc6\u94a5\u8bc1\u4e66\uff0c\u5982\u9700\u5f00\u542f\u53cc\u5411\u8ba4\u8bc1\uff0c\u8fd8\u9700\u751f\u6210 Client \u7aef\u5bc6\u94a5\u8bc1\u4e66\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684 CA \u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u4f4d\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/ca_certificate.p12"),"\uff0c\u9ed8\u8ba4\u5bc6\u7801\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"doris"),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 FE \u914d\u7f6e\u6587\u4ef6",(0,a.yg)("inlineCode",{parentName:"p"},"conf/fe.conf"),"\uff0c\u6dfb\u52a0",(0,a.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_ca_certificate = /path/to/your/certificate"),"\u4fee\u6539 CA \u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_ca_certificate_password = your_password"),"\u6dfb\u52a0\u5bf9\u5e94\u60a8\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u7684\u5bc6\u7801\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684 Server \u7aef\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u4f4d\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/server_certificate.p12"),"\uff0c\u9ed8\u8ba4\u5bc6\u7801\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"doris"),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 FE \u914d\u7f6e\u6587\u4ef6",(0,a.yg)("inlineCode",{parentName:"p"},"conf/fe.conf"),"\uff0c\u6dfb\u52a0",(0,a.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_server_certificate = /path/to/your/certificate"),"\u4fee\u6539 Server \u7aef\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_server_certificate_password = your_password"),"\u6dfb\u52a0\u5bf9\u5e94\u60a8\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u7684\u5bc6\u7801\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u751f\u6210\u4e86\u4e00\u4efd Client \u7aef\u7684\u5bc6\u94a5\u8bc1\u4e66\uff0c\u5206\u522b\u5b58\u653e\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/client-key.pem"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/client_certificate/"),"\u3002"))),(0,a.yg)("h2",{id:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6"},"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6"),(0,a.yg)("p",null,"\u9664\u4e86 Doris \u9ed8\u8ba4\u7684\u8bc1\u4e66\u6587\u4ef6\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"openssl"),"\u751f\u6210\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66\u6587\u4ef6\u3002\u6b65\u9aa4\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/creating-ssl-files-using-openssl.html"},"MySQL \u751f\u6210 SSL \u8bc1\u4e66"),"\n\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u751f\u6210 CA\u3001Server \u7aef\u548c Client \u7aef\u7684\u5bc6\u94a5\u548c\u8bc1\u4e66")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# \u751f\u6210CA certificate\nopenssl genrsa 2048 > ca-key.pem\nopenssl req -new -x509 -nodes -days 3600 \\\n        -key ca-key.pem -out ca.pem\n\n# \u751f\u6210server certificate, \u5e76\u7528\u4e0a\u8ff0CA\u7b7e\u540d\n# server-cert.pem = public key, server-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout server-key.pem -out server-req.pem\nopenssl rsa -in server-key.pem -out server-key.pem\nopenssl x509 -req -in server-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem\n\n# \u751f\u6210client certificate, \u5e76\u7528\u4e0a\u8ff0CA\u7b7e\u540d\n# client-cert.pem = public key, client-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout client-key.pem -out client-req.pem\nopenssl rsa -in client-key.pem -out client-key.pem\nopenssl x509 -req -in client-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u9a8c\u8bc1\u521b\u5efa\u7684\u8bc1\u4e66\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"openssl verify -CAfile ca.pem server-cert.pem client-cert.pem\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u5c06\u60a8\u7684 CA \u5bc6\u94a5\u548c\u8bc1\u4e66\u548c Sever \u7aef\u5bc6\u94a5\u548c\u8bc1\u4e66\u5206\u522b\u5408\u5e76\u5230 PKCS#12 (P12) \u5305\u4e2d\u3002\u60a8\u4e5f\u53ef\u4ee5\u6307\u5b9a\u67d0\u4e2a\u8bc1\u4e66\u683c\u5f0f\uff0c\u9ed8\u8ba4 PKCS12\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 conf/fe.conf \u914d\u7f6e\u6587\u4ef6\uff0c\u6dfb\u52a0\u53c2\u6570 ssl_trust_store_type \u6307\u5b9a\u8bc1\u4e66\u683c\u5f0f")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# \u6253\u5305CA\u5bc6\u94a5\u548c\u8bc1\u4e66\nopenssl pkcs12 -inkey ca-key.pem -in ca.pem -export -out ca_certificate.p12\n\n# \u6253\u5305Server\u7aef\u5bc6\u94a5\u548c\u8bc1\u4e66\nopenssl pkcs12 -inkey server-key.pem -in server-cert.pem -export -out server_certificate.p12\n")),(0,a.yg)("admonition",{title:"Note",type:"info"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/api-connect/2018.x?topic=overview-generating-self-signed-certificate-using-openssl"},"\u53c2\u8003\u6587\u6863"))))}y.isMDXComponent=!0}}]);