"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1254],{1540:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],s={id:"db",title:"2. Db \u9759\u6001\u7c7b",sidebar_label:"2. Db \u9759\u6001\u7c7b"},i=void 0,c={unversionedId:"global/db",id:"global/db",title:"2. Db \u9759\u6001\u7c7b",description:"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",source:"@site/docs/global/db.mdx",sourceDirName:"global",slug:"/global/db",permalink:"/furion/docs/global/db",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/global/db.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"db",title:"2. Db \u9759\u6001\u7c7b",sidebar_label:"2. Db \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"1. App \u9759\u6001\u7c7b",permalink:"/furion/docs/global/app"},next:{title:"3. DataValidator \u9759\u6001\u7c7b",permalink:"/furion/docs/global/datavalidator"}},u={},p=[{value:"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",id:"21-\u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",level:2},{value:"2.2 \u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8",id:"22-\u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8",level:2},{value:"2.3 \u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8",id:"23-\u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8",level:2},{value:"2.4 \u83b7\u53d6 <code>Sql</code> \u4ed3\u50a8",id:"24-\u83b7\u53d6-sql-\u4ed3\u50a8",level:2},{value:"2.5 \u83b7\u53d6 <code>Sql</code> \u5b9a\u4f4d\u5668\u4ed3\u50a8",id:"25-\u83b7\u53d6-sql-\u5b9a\u4f4d\u5668\u4ed3\u50a8",level:2},{value:"2.6 \u83b7\u53d6 <code>Sql</code> \u4ee3\u7406\u5bf9\u8c61",id:"26-\u83b7\u53d6-sql-\u4ee3\u7406\u5bf9\u8c61",level:2},{value:"2.7 \u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"27-\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",level:2},{value:"2.8 \u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"28-\u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",level:2},{value:"2.9 \u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"29-\u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",level:2},{value:"2.10 \u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"210-\u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",level:2},{value:"2.11 \u6839\u636e\u5b9a\u4f4d\u5668\u7c7b\u578b\u83b7\u53d6\u4ed3\u50a8",id:"211-\u6839\u636e\u5b9a\u4f4d\u5668\u7c7b\u578b\u83b7\u53d6\u4ed3\u50a8",level:2},{value:"2.12 \u83b7\u53d6 <code>\u4e3b\u4ece\u5e93</code> \u4ed3\u50a8",id:"212-\u83b7\u53d6-\u4e3b\u4ece\u5e93-\u4ed3\u50a8",level:2},{value:"2.13 \u83b7\u53d6 <code>Sql</code> \u4e3b\u5e93\u5b9a\u4f4d\u5668\u4ed3\u50a8",id:"213-\u83b7\u53d6-sql-\u4e3b\u5e93\u5b9a\u4f4d\u5668\u4ed3\u50a8",level:2},{value:"2.14 \u83b7\u53d6\u7279\u5b9a\u5b9a\u4f4d\u5668\u4ed3\u50a8",id:"214-\u83b7\u53d6\u7279\u5b9a\u5b9a\u4f4d\u5668\u4ed3\u50a8",level:2}],b={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"21-\u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8"},"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var repository = Db.GetRepository();\n")),(0,a.kt)("h2",{id:"22-\u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8"},"2.2 \u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var entityRepository = Db.GetRepository<TEntity>();\n")),(0,a.kt)("h2",{id:"23-\u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8"},"2.3 \u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var locatorRepository = Db.GetRepository<TEntity, TDbContextLocator>();\n")),(0,a.kt)("h2",{id:"24-\u83b7\u53d6-sql-\u4ed3\u50a8"},"2.4 \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Sql")," \u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var sqlRepository = Db.GetSqlRepository();\n")),(0,a.kt)("h2",{id:"25-\u83b7\u53d6-sql-\u5b9a\u4f4d\u5668\u4ed3\u50a8"},"2.5 \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Sql")," \u5b9a\u4f4d\u5668\u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var sqlLocatorRepository = Db.GetSqlRepository<TDbContextLocator>();\n")),(0,a.kt)("h2",{id:"26-\u83b7\u53d6-sql-\u4ee3\u7406\u5bf9\u8c61"},"2.6 \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Sql")," \u4ee3\u7406\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var sqlProxy= Db.GetSqlProxy<TSqlDispatchProxy>();\n")),(0,a.kt)("h2",{id:"27-\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.7 \u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var dbContext = Db.GetDbContext();\n")),(0,a.kt)("h2",{id:"28-\u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.8 \u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var locatorDbContext = Db.GetDbContext<TDbContextLocator>();\nvar locatorDbContext2 = Db.GetDbContext(typeof(TDbContextLocator));\n")),(0,a.kt)("h2",{id:"29-\u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.9 \u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var dbContext = Db.GetNewDbContext();\n")),(0,a.kt)("h2",{id:"210-\u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.10 \u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var locatorDbContext = Db.GetNewDbContext<TDbContextLocator>();\nvar locatorDbContext2 = Db.GetNewDbContext(typeof(TDbContextLocator));\n")),(0,a.kt)("h2",{id:"211-\u6839\u636e\u5b9a\u4f4d\u5668\u7c7b\u578b\u83b7\u53d6\u4ed3\u50a8"},"2.11 \u6839\u636e\u5b9a\u4f4d\u5668\u7c7b\u578b\u83b7\u53d6\u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var repository = Db.GetRepository<TEntity>(dbContextLocatorType);\n")),(0,a.kt)("h2",{id:"212-\u83b7\u53d6-\u4e3b\u4ece\u5e93-\u4ed3\u50a8"},"2.12 \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"\u4e3b\u4ece\u5e93")," \u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var msRepository = Db.GetMSRepository();\n")),(0,a.kt)("h2",{id:"213-\u83b7\u53d6-sql-\u4e3b\u5e93\u5b9a\u4f4d\u5668\u4ed3\u50a8"},"2.13 \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Sql")," \u4e3b\u5e93\u5b9a\u4f4d\u5668\u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var msLocatorRepository = Db.GetMSRepository<TMasterDbContextLocator>();\n")),(0,a.kt)("h2",{id:"214-\u83b7\u53d6\u7279\u5b9a\u5b9a\u4f4d\u5668\u4ed3\u50a8"},"2.14 \u83b7\u53d6\u7279\u5b9a\u5b9a\u4f4d\u5668\u4ed3\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var msLocatorRepository = Db.GetDbRepository<TDbContextLocator>();\n")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(r),d=o,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);