"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[533252],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=l,m=u["".concat(i,".").concat(g)]||u[g]||d[g]||r;return n?t.createElement(m,o(o({ref:a},c),{},{components:n})):t.createElement(m,o({ref:a},c))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},143137:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=n(58168),l=(n(296540),n(15680));const r={title:"\u914d\u7f6e\u8ba1\u7b97\u96c6\u7fa4\u90e8\u7f72",language:"zh-CN"},o=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc",id:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc",title:"\u914d\u7f6e\u8ba1\u7b97\u96c6\u7fa4\u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc",draft:!1,tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u8ba1\u7b97\u96c6\u7fa4\u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"\u914d\u7f6e FE \u90e8\u7f72",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-fe"},next:{title:"Doris on AWS",permalink:"/zh-CN/docs/dev/install/cluster-deployment/doris-on-aws"}},i={},p=[{value:"\u6307\u5b9a\u8ba1\u7b97\u96c6\u7fa4\u540d\u79f0",id:"\u6307\u5b9a\u8ba1\u7b97\u96c6\u7fa4\u540d\u79f0",level:2},{value:"\u914d\u7f6e\u591a\u8ba1\u7b97\u96c6\u7fa4",id:"\u914d\u7f6e\u591a\u8ba1\u7b97\u96c6\u7fa4",level:2},{value:"\u914d\u7f6e\u670d\u52a1\u8ba1\u7b97\u8d44\u6e90",id:"\u914d\u7f6e\u670d\u52a1\u8ba1\u7b97\u8d44\u6e90",level:2},{value:"\u914d\u7f6e\u6301\u4e45\u5316\u5b58\u50a8",id:"\u914d\u7f6e\u6301\u4e45\u5316\u5b58\u50a8",level:2},{value:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6",id:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u81ea\u52a8\u6dfb\u52a0\u914d\u7f6e",id:"\u81ea\u52a8\u6dfb\u52a0\u914d\u7f6e",level:3},{value:"\u670d\u52a1\u50a8\u5b58\u914d\u7f6e",id:"\u670d\u52a1\u50a8\u5b58\u914d\u7f6e",level:3},{value:"\u6302\u8f7d\u5b9a\u5236\u5316 ConfigMap",id:"\u6302\u8f7d\u5b9a\u5236\u5316-configmap",level:3}],c={toc:p},u="wrapper";function d(e){let{components:a,...n}=e;return(0,l.yg)(u,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u5b58\u7b97\u5206\u79bb\u8ba1\u7b97\u96c6\u7fa4\uff08 Compute Cluster \uff09\u8d1f\u8d23\u6570\u636e\u5bfc\u5165\u5e76\u7f13\u5b58\u5bf9\u8c61\u5b58\u50a8\u4e2d\u7684\u6570\u636e\u3002\u8ba1\u7b97\u96c6\u7fa4\u4e4b\u95f4\u76f8\u4e92\u9694\u79bb\u3002"),(0,l.yg)("h2",{id:"\u6307\u5b9a\u8ba1\u7b97\u96c6\u7fa4\u540d\u79f0"},"\u6307\u5b9a\u8ba1\u7b97\u96c6\u7fa4\u540d\u79f0"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u90e8\u7f72\u4e00\u5957\u6700\u7b80\u8ba1\u7b97\u96c6\u7fa4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  computeClusters:\n  - name: cc1\n    image: {beImage}\n    replicas: 1\n")),(0,l.yg)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u90e8\u7f72\u4e00\u5957\u8ba1\u7b97\u96c6\u7fa4\u540d\u79f0\u4e3a cc1 \u7684\u8ba1\u7b97\u96c6\u7fa4\u3002\u8ba1\u7b97\u96c6\u7fa4\u7684\u90e8\u7f72\u4f9d\u8d56 FE \u670d\u52a1\u90e8\u7f72\u5b8c\u6210\u3002\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u4f9d\u8d56\u5143\u6570\u636e\u670d\u52a1\u90e8\u7f72\u5b8c\u6210\u3002\u4e0a\u8ff0\u6837\u4f8b\u53d8\u91cf\u89e3\u91ca\u5982\u4e0b\uff1a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"{beImage}")," \u4e3a\u90e8\u7f72 BE \u670d\u52a1\u7684 image \u3002"),(0,l.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"cc1 \u4e3a\u8ba1\u7b97\u96c6\u7fa4\u7684\u540d\u79f0\uff0c\u6267\u884c sql \u7684\u8fc7\u7a0b\u4e2d\u53ef\u901a\u8fc7\u8ba1\u7b97\u96c6\u7fa4\u540d\u79f0\u9009\u5b9a\u60f3\u8981\u4f7f\u7528\u7684\u96c6\u7fa4\u3002")),(0,l.yg)("h2",{id:"\u914d\u7f6e\u591a\u8ba1\u7b97\u96c6\u7fa4"},"\u914d\u7f6e\u591a\u8ba1\u7b97\u96c6\u7fa4"),(0,l.yg)("p",null,"\u4e00\u4e2a ",(0,l.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u8d44\u6e90\u53ef\u90e8\u7f72\u591a\u5957\u8ba1\u7b97\u96c6\u7fa4\uff0c\u6bcf\u5957\u8ba1\u7b97\u96c6\u7fa4\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u5f7c\u6b64\u4e4b\u95f4\u72ec\u81ea\u8fd0\u4f5c\u3002"),(0,l.yg)("p",null,"\u90e8\u7f72\u4e24\u5957\u8ba1\u7b97\u96c6\u7fa4\u6700\u7b80\u90e8\u7f72\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  computeClusters:\n  - name: cc1\n    image: {beImage}\n    replicas: 3\n  - name: cc2\n    image: {beImage}\n    replicas: 2\n")),(0,l.yg)("p",null,"\u4ee5\u4e0a\u4e3a\u4e24\u5957\u8ba1\u7b97\u96c6\u7fa4\u7684\u7b80\u5355\u914d\u7f6e\uff0c\u96c6\u7fa4\u7684\u540d\u79f0\u5206\u522b\u4e3a cc1 \u548c cc2 \u3002\u4f7f\u7528\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u65f6\u53ef\u901a\u8fc7\u8ba1\u7b97\u96c6\u7fa4\u7684\u540d\u79f0\u9009\u62e9\u4f7f\u7528\u54ea\u4e00\u4e2a\u8ba1\u7b97\u96c6\u7fa4\uff0c\u5b9e\u9645\u4f7f\u7528\u4e2d\u53ef\u6309\u7167\u4e1a\u52a1\u7c7b\u522b\u6307\u5b9a\u96c6\u7fa4\u540d\u79f0\u3002"),(0,l.yg)("p",null,"\u4fee\u6539\u5982\u4e0b\u914d\u7f6e\u5230\u9700\u8981","[\u90e8\u7f72\u5b58\u7b97\u5206\u79bb]","(/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#\u90e8\u7f72 DorisDisaggregatedCluster \u8d44\u6e90) ",(0,l.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u8d44\u6e90\u4e2d\uff0c\u53ef\u90e8\u7f72 2 \u5957\u8ba1\u7b97\u96c6\u7fa4\uff0c\u4e00\u5957\u53ef\u90e8\u7f72 3 \u4e2a \u5305\u542b BE \u670d\u52a1\u7684 pod \uff0c \u4e00\u5957\u53ef\u90e8\u7f72 2 \u4e2a\u5305\u542b BE \u670d\u52a1\u7684 pod \u3002 ",(0,l.yg)("inlineCode",{parentName:"p"},"{beImage}")," \u6307\u5b9a\u60f3\u8981\u4f7f\u7528\u7684 BE \u670d\u52a1\u7684 image \u3002"),(0,l.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u591a\u5957\u8ba1\u7b97\u96c6\u7fa4\u4f7f\u7528\u7684 image \u5c3d\u91cf\u4fdd\u6301\u4e00\u81f4\u3002")),(0,l.yg)("h2",{id:"\u914d\u7f6e\u670d\u52a1\u8ba1\u7b97\u8d44\u6e90"},"\u914d\u7f6e\u670d\u52a1\u8ba1\u7b97\u8d44\u6e90"),(0,l.yg)("p",null,"\u8bbe\u7f6e\u6bcf\u4e2a pod \u4e2d BE\uff08\u8ba1\u7b97\u670d\u52a1\uff09\u5bb9\u5668\u53ef\u4f7f\u7528\u7684 CPU \u548c Memory \u8d44\u6e90\u4f7f\u7528\u91cf\u3002\u5728 ",(0,l.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits"},"resources.requests \u548c resources.limits")," \u6307\u5b9a CPU \u548c Memory \u4f7f\u7528\u91cf\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  computeClusters:\n  - name: cc1\n    image: {beImage}\n    requests:\n      cpu: 4\n      memory: 8Gi\n    limits:\n      cpu: 4\n      memory: 8Gi\n")),(0,l.yg)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u6307\u5b9a\u4e86\u540d\u79f0 cc1 \u7684\u8ba1\u7b97\u96c6\u7fa4\u53ef\u4f7f\u7528\u7684\u8ba1\u7b97\u8d44\u6e90\u3002\u53ef\u6839\u636e\u9700\u8981\u586b\u5199\uff0c\u5e76\u914d\u7f6e\u5230","[\u90e8\u7f72\u5b58\u7b97\u5206\u79bb]","(/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#\u90e8\u7f72 DorisDisaggregatedCluster \u8d44\u6e90) ",(0,l.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u8d44\u6e90\u4e2d\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"{beImage}")," \u4e3a\u60f3\u4f7f\u7528\u7684 BE \u955c\u50cf\u3002"),(0,l.yg)("h2",{id:"\u914d\u7f6e\u6301\u4e45\u5316\u5b58\u50a8"},"\u914d\u7f6e\u6301\u4e45\u5316\u5b58\u50a8"),(0,l.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a BE \u670d\u52a1\u4f1a\u4f7f\u7528 EmptyDir \u5b58\u50a8\u6a21\u5f0f\u6765\u7f13\u5b58\u6570\u636e\uff0c\u5728\u771f\u5b9e\u4f7f\u7528\u573a\u666f\u4e0b\u9700\u8981\u6839\u636e\u5b9e\u9645\u9700\u8981\u5b9a\u4e49\u9700\u8981\u7684\u5b58\u50a8\u5927\u5c0f\u4ee5\u53ca\u5e0c\u671b\u4f7f\u7528\u7684 StorageClass \u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  computeClusters:\n  - name: cc1\n    persistentVolume:\n      persistentVolumeClaimSpec:\n        #storageClassName\uff1a{storageClassName}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: "200Gi"\n')),(0,l.yg)("p",null,"\u4e3a\u540d\u79f0 cc1 \u7684\u8ba1\u7b97\u96c6\u7fa4\u914d\u7f6e 200Gi \u7684\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u4f7f\u7528 K8s \u96c6\u7fa4\u4e2d\u9ed8\u8ba4\u7684 StorageClass \u6765\u81ea\u52a8\u521b\u5efa\u5b58\u50a8\u3002\u5982\u679c\u9700\u8981\u6307\u5b9a StorageClass \uff0c\u8bf7\u53d6\u6d88\u6ce8\u91ca\u5c06 storageClassName \u8bbe\u7f6e\u4e3a\u60f3\u8981\u4f7f\u7528\u7684 StorageClass \u7684\u540d\u79f0\u3002"),(0,l.yg)("p",null,"BE \u670d\u52a1\u9ed8\u8ba4 Cache \u914d\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},'file_cache_path = [{"path":"/opt/apache-doris/be/storage","total_size":107374182400,"query_limit":107374182400}]')," \u5b58\u50a8\u5bb9\u91cf\u603b\u53ef\u4f7f\u7528\u5bb9\u91cf\u4e3a 100Gi \uff0c\u67e5\u8be2\u53ef\u4f7f\u7528\u7684\u6700\u5927\u5bb9\u91cf\u4e3a 100Gi \u3002K8s \u90e8\u7f72\u6a21\u5f0f\u4e0b\uff0cDoris-Operator \u4f1a\u4e3a\u6bcf\u4e2a\u8def\u5f84\u6302\u8f7d\u5b9a\u5236\u7684\u6301\u4e45\u5316\u5b58\u50a8\u3002\u5982\u679c\u9700\u8981\u6307\u5b9a\u591a\u4e2a\u8def\u5f84\u6302\u8f7d\u591a\u76d8\u4f5c\u4e3a\u6570\u636e\u7f13\u5b58\uff0c\u8bf7\u53c2\u8003",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc#MA37d8fVKohQffxMYQBcyPSZnZf"},"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6"),"\u3002"),(0,l.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"file_cache_path \u7684\u503c\u5fc5\u987b\u662f\u4e00\u4e2a JSON \u6570\u7ec4\u3002")),(0,l.yg)("h2",{id:"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6"},"\u5b9a\u5236\u5316\u914d\u7f6e\u6587\u4ef6"),(0,l.yg)("p",null,"\u5b58\u7b97\u5206\u79bb\u4e0b\uff0c\u6bcf\u4e2a\u8ba1\u7b97\u96c6\u7fa4\u7684 BE \u670d\u52a1\u9ed8\u8ba4\u4f7f\u7528\u955c\u50cf\u5185\u7684\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\uff0c\u5728 K8s \u90e8\u7f72\u4e2d\u53ef\u4f7f\u7528 ConfigMap \u8d44\u6e90\u6307\u5b9a BE \u542f\u52a8\u914d\u7f6e\u3002"),(0,l.yg)("h3",{id:"\u81ea\u52a8\u6dfb\u52a0\u914d\u7f6e"},"\u81ea\u52a8\u6dfb\u52a0\u914d\u7f6e"),(0,l.yg)("p",null,"\u5b58\u7b97\u5206\u79bb\u4e0b\uff0cBE \u670d\u52a1\u7684\u542f\u52a8\u8bf7\u53c2\u8003",(0,l.yg)("a",{parentName:"p",href:"../../../../../compute-storage-decoupled/creating-cluster#beconf"},"\u5b58\u7b97\u5206\u79bb\u6587\u6863"),"\u8fdb\u884c\u76f8\u5173\u914d\u7f6e\uff0c\u5728 K8s \u90e8\u7f72\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"meta_service_endpoint"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"cloud_unique_id"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"meta_service_use_load_balancer"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_file_cache")," \u65e0\u9700\u586b\u5199\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"meta_service_endpoint")," K8s \u90e8\u7f72\u4e2d\u76f8\u5173\u670d\u52a1\u4f1a\u6839\u636e ",(0,l.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u4e2d\u914d\u7f6e\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedMetaService")," \u4fe1\u606f\u81ea\u52a8\u751f\u6210\u771f\u5b9e\u5730\u5740\u4fe1\u606f\uff0c\u81ea\u52a8\u6dfb\u52a0\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"cloud_unique_id")," K8s \u90e8\u7f72\u4e2d\u76f8\u5173\u670d\u52a1\u81ea\u52a8\u6dfb\u52a0\uff0c\u65e0\u9700\u6307\u5b9a\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"meta_service_use_load_balancer")," K8s \u90e8\u7f72\u4e2d\u76f8\u5173\u670d\u52a1\u4f1a\u81ea\u52a8\u6dfb\u52a0\u9ed8\u8ba4\u503c false \u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"enable_file_cache")," K8s \u90e8\u7f72\u4e2d\u76f8\u5173\u670d\u52a1\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u4e3a true\u3002"),(0,l.yg)("h3",{id:"\u670d\u52a1\u50a8\u5b58\u914d\u7f6e"},"\u670d\u52a1\u50a8\u5b58\u914d\u7f6e"),(0,l.yg)("p",null,"BE \u670d\u52a1\u5728\u5b58\u7b97\u6a21\u5f0f\u4e0b\u5b9a\u5236\u5316\u914d\u7f6e\u542f\u52a8\u914d\u7f6e\uff0c\u5fc5\u987b\u6309\u7167",(0,l.yg)("a",{parentName:"p",href:"../../../../../compute-storage-decoupled/creating-cluster#beconf"},"\u5b58\u7b97\u5206\u79bb\u6587\u6863"),"\u6307\u5b9a ",(0,l.yg)("inlineCode",{parentName:"p"},"file_cache_path"),"\u3002\u5728 K8s \u90e8\u7f72\u4e2d\uff0c\u76f8\u5173\u670d\u52a1\u4f1a\u81ea\u52a8\u6839\u636e",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc#%E9%85%8D%E7%BD%AE%E6%8C%81%E4%B9%85%E5%8C%96%E5%AD%98%E5%82%A8"},"\u6301\u4e45\u5316\u76f8\u5173\u914d\u7f6e"),"\u6302\u8f7d\u6301\u4e45\u5316\u5b58\u50a8\u3002"),(0,l.yg)("p",null,"\u6bd4\u5982\uff1a ",(0,l.yg)("inlineCode",{parentName:"p"},"file_cache_path")," \u914d\u7f6e\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},'file_cache_path = [{"path":"/opt/apache-doris/be/storage","total_size":107374182400,"query_limit":107374182400}]'),"\uff0cDoris-Operator \u76f8\u5173\u670d\u52a1\u81ea\u52a8\u4e3a\u8ba1\u7b97\u670d\u52a1\u6dfb\u52a0\u5b58\u50a8\u914d\u7f6e\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u80fd\u591f\u7533\u8bf7\u5230\u6302\u8f7d\u70b9\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"/opt/apache-doris/be/storage")," \u4e14\u5bb9\u91cf\u4e3a 100Gi \u7684\u78c1\u76d8\u3002"),(0,l.yg)("p",null,"\u5f53 file_cache_path \u4e2d total_size \u5927\u4e8e",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-cluster/config-cc#%E9%85%8D%E7%BD%AE%E6%8C%81%E4%B9%85%E5%8C%96%E5%AD%98%E5%82%A8"},"\u6301\u4e45\u5316\u914d\u7f6e"),"\u7684\u5b58\u50a8\u5bb9\u91cf\uff0cDoris-Operator \u4f1a\u5c06\u6301\u4e45\u5316\u914d\u7f6e\u6539\u4e3a total_size \u7684\u5927\u5c0f\uff0c\u9632\u6b62\u670d\u52a1\u51fa\u73b0\u975e\u9884\u671f\u6545\u969c\u3002"),(0,l.yg)("h3",{id:"\u6302\u8f7d\u5b9a\u5236\u5316-configmap"},"\u6302\u8f7d\u5b9a\u5236\u5316 ConfigMap"),(0,l.yg)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u89c4\u5219\u5236\u5b9a\u597d\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u90e8\u7f72\u5230 ",(0,l.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u90e8\u7f72\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u5e76\u4fee\u6539\u9700\u8981\u90e8\u7f72\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedCluster")," \u8d44\u6e90\u6307\u5b9a\u54ea\u4e00\u4e2a\u8ba1\u7b97\u96c6\u7fa4\u4f7f\u7528\u5b9a\u5236\u5316\u914d\u7f6e\u542f\u52a8\u3002"),(0,l.yg)("p",null,"\u5982\u542f\u52a8\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    # For jdk 17, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_17="-Xmx1024m -DlogPath=$LOG_DIR/jni.log -Xlog:gc*:$LOG_DIR/be.gc.log.$CUR_DATE:time,uptime:filecount=10,filesize=50M -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.security.krb5.debug=true -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -XX:+IgnoreUnrecognizedVMOptions --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.invoke=ALL-UNNAMED --add-opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-opens=java.base/java.net=ALL-UNNAMED --add-opens=java.base/java.nio=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.util.concurrent=ALL-UNNAMED --add-opens=java.base/java.util.concurrent.atomic=ALL-UNNAMED --add-opens=java.base/sun.nio.ch=ALL-UNNAMED --add-opens=java.base/sun.nio.cs=ALL-UNNAMED --add-opens=java.base/sun.security.action=ALL-UNNAMED --add-opens=java.base/sun.util.calendar=ALL-UNNAMED --add-opens=java.security.jgss/sun.security.krb5=ALL-UNNAMED --add-opens=java.management/sun.management=ALL-UNNAMED"\n    file_cache_path = [{"path":"/mnt/disk1/doris_cloud/file_cache","total_size":104857600000,"query_limit":10485760000}, {"path":"/mnt/disk2/doris_cloud/file_cache","total_size":104857600000,"query_limit":10485760000}]\n')),(0,l.yg)("p",null,"\u6307\u5b9a\u8ba1\u7b97\u96c6\u7fa4\u4f7f\u7528\u4e0a\u8ff0 ConfigMap \u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  computeClusters:\n  - name: cc1\n    image: {beImage}\n    configMaps:\n    - name: be-configmap\n      mountPath: "/etc/doris"\n')),(0,l.yg)("p",null,"\u4fee\u6539\u597d\u914d\u7f6e\u540e\uff0c\u5c06\u914d\u7f6e\u4fe1\u606f\u66f4\u65b0\u5230\u90e8\u7f72\u7684 ","[DorisDisaggregatedCluster]","(/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#\u90e8\u7f72 DorisDisaggregatedCluster \u8d44\u6e90)  \u8d44\u6e90\u4e2d\u3002"),(0,l.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u6240\u6709\u7684\u542f\u52a8\u914d\u7f6e\u5fc5\u987b\u6302\u8f7d\u5230 /etc/doris \u76ee\u5f55\u4e0b\u3002")))}d.isMDXComponent=!0}}]);