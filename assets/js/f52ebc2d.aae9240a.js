"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[800],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,k=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9080:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Backup and Restore",u={unversionedId:"backup-restore",id:"backup-restore",isDocsHomePage:!1,title:"Backup and Restore",description:"Cloud Backup and Restore",source:"@site/docs/backup-restore.md",sourceDirName:".",slug:"/backup-restore",permalink:"/docs/backup-restore",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/backup-restore.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Internationalization",permalink:"/docs/multi-language-support"},next:{title:"Privacy & Security",permalink:"/docs/privacy"}},p=[{value:"Cloud Backup and Restore",id:"cloud-backup-and-restore",children:[]},{value:"How it Works",id:"how-it-works",children:[]},{value:"Creating a Backup",id:"creating-a-backup",children:[]},{value:"Restoring a Backup",id:"restoring-a-backup",children:[]},{value:"Privacy &amp; Security",id:"privacy--security",children:[]},{value:"Fair Use Policy",id:"fair-use-policy",children:[]},{value:"Self-Hosting the Backup Server",id:"self-hosting-the-backup-server",children:[]},{value:"API",id:"api",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backup-and-restore"},"Backup and Restore"),(0,o.kt)("h3",{id:"cloud-backup-and-restore"},"Cloud Backup and Restore"),(0,o.kt)("p",null,"Dashy has a built-in feature for securely backing up your config to a hosted cloud service, and then restoring it on another instance. This feature is totally optional, and if you do not enable it, then Dashy will not make any external network requests."),(0,o.kt)("p",null,"This is useful not only for backing up your configuration off-site, but it also enables Dashy to be used without having write a YAML config file, and makes it possible to use a public hosted instance, without the need to self-host."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://i.ibb.co/p4pxSqX/dashy-backup-restore.png",width:"600"})),(0,o.kt)("h3",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"All data is encrypted before being sent to the backend. In Dashy, this is done in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/CloudBackup.js"},(0,o.kt)("inlineCode",{parentName:"a"},"CloudBackup.js")),", using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brix/crypto-js"},"crypto.js"),"'s AES method, using the users chosen password as the key. The data is then sent to a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/workers/learning/how-workers-works"},"Cloudflare worker")," (a platform for running serverless functions), and stored in a ",(0,o.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/workers/learning/how-kv-works"},"KV")," data store."),(0,o.kt)("h3",{id:"creating-a-backup"},"Creating a Backup"),(0,o.kt)("p",null,"Once you've got Dashy configured to your preference, open the Backup & Restore menu (click the Cloud icon in the top-right corner). Here you will be prompted to choose a password, which will be used to encrypt your data. If you forget this password, there will be no way to recover your config. After clicking 'Backup' your data will be encrypted, compressed and sent to the hosted cloud service. A backup ID will be returned (in the format of xxxx-xxxx-xxxx-xxxx), this is what you use, along with your password to restore the backup on another system, so take note of it. To update a backup, return to this menu, enter your password, and click 'Update Backup'."),(0,o.kt)("h3",{id:"restoring-a-backup"},"Restoring a Backup"),(0,o.kt)("p",null,"To restore a backup, navigate to the Backup & Restore menu, and under restore, enter your backup ID, and the password you chose. Your config file will be downloaded, decrypted and applied to local storage. "),(0,o.kt)("h3",{id:"privacy--security"},"Privacy & Security"),(0,o.kt)("p",null,"Data is only ever sent to the cloud when the user actively triggers a backup. All transmitted data is first encrypted using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"},"AES"),". Your selected password never leaves your device, and is hashed before being compared. It is only possible to restore a configuration if you have both the backup ID and decryption password."),(0,o.kt)("p",null,"Because the data is encrypted on the client-side (before being sent to the cloud), it is not possible for a man-in-the-middle, government entity, website owner, or even Cloudflare to be able read any of your data. The biggest risk to your data, would be a weak password, or a compromised system."),(0,o.kt)("p",null,"Having said that, although the code uses robust security libraries and is open source- it was never intended to be a security product, and has not been audited, and therefore cannot be considered totally secure -  please keep that in mind."),(0,o.kt)("h3",{id:"fair-use-policy"},"Fair Use Policy"),(0,o.kt)("p",null,"Maximum of 24mb of storage per user. Please do not repeatedly hit the endpoint, as if the quota is exceeded the service may become less available to other users. Abuse may result in your IP being temporarily banned by Cloudflare."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"self-hosting-the-backup-server"},"Self-Hosting the Backup Server"),(0,o.kt)("h4",{id:"quick-start"},"Quick Start"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Wrangler CLI Tool: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i -g @cloudflare/wrangler")),(0,o.kt)("li",{parentName:"ul"},"Log into Cloudflare account: ",(0,o.kt)("inlineCode",{parentName:"li"},"wrangler login")),(0,o.kt)("li",{parentName:"ul"},"Create a new project: ",(0,o.kt)("inlineCode",{parentName:"li"}," wrangler generate my-project")),(0,o.kt)("li",{parentName:"ul"},"Install dependencies: ",(0,o.kt)("inlineCode",{parentName:"li"},"cd my-project")," && ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i"))),(0,o.kt)("h4",{id:"populate-wranglertoml"},"Populate ",(0,o.kt)("inlineCode",{parentName:"h4"},"wrangler.toml")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add your ",(0,o.kt)("inlineCode",{parentName:"li"},"account_id")," (found on the right sidebar of the Workers or Overview Dashboard)"),(0,o.kt)("li",{parentName:"ul"},"Add your ",(0,o.kt)("inlineCode",{parentName:"li"},"zone_id")," (found in the Overview tab of your desired domain on Cloudflare)"),(0,o.kt)("li",{parentName:"ul"},"Add your ",(0,o.kt)("inlineCode",{parentName:"li"},"route"),", which should be a domain or host, supporting a wildcard")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'name = "dashy-worker"\ntype = "javascript"\n\nworkers_dev = true\nroute = "example.com/*"\nzone_id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\naccount_id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\n\nkv_namespaces = [\n  { binding = "DASHY_CLOUD_BACKUP", id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }\n]\n')),(0,o.kt)("h4",{id:"complete-indexjs"},"Complete ",(0,o.kt)("inlineCode",{parentName:"h4"},"index.js")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write code to handle your requests, and interact with any other data sources in this file"),(0,o.kt)("li",{parentName:"ul"},"Generally, this is done within an event listener for 'fetch', and returns a promise",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Example:")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"addEventListener('fetch', event => {\n  event.respondWith(handleRequest(event.request))\n})\n\nasync function handleRequest(request) {\n  return new Response('Hello World!', {\n    headers: { 'content-type': 'text/plain' },\n  })\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For the code used for Dashy's cloud service, see ",(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/Lissy93/d19b43d50f30e02fa25f349cf5cb5ed8#file-index-js"},"here"))),(0,o.kt)("h4",{id:"commands"},"Commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wrangler dev")," - To start the wrangler development server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wrangler publish")," - To publish to your cloudflare account (first run ",(0,o.kt)("inlineCode",{parentName:"li"},"wrangler login"),")")),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("p",null,"There are four endpoints, and to keep things simple, they all use the same base URL/ route."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"GET"))," - Get config for a given user",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backupId")," - The ID of the desired encrypted object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subHash"),"\t- The latter half of the password hash, to verify ownership"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"POST"))," - Save a new config object, and returns ",(0,o.kt)("inlineCode",{parentName:"li"},"backupId"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userData")," - The encrypted, compressed and stringified user config"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subHash")," - The latter half of the password hash, to verify ownership"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"PUT"))," - Update an existing config object",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backupId")," - The ID of the object to update"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subHash"),"\t- Part of the hash, to verify ownership of said object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userData")," - The new data to store"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"DELETE"))," - Delete a specified config object",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backupId")," - The ID of the object to be deleted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subHash"),"\t- Part of the password hash, to verify ownership of the object")))),(0,o.kt)("p",null,"For more info, see the ",(0,o.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/2142819/TzXumzce"},"API Docs"),"."),(0,o.kt)("p",null,"If you are using Postman, you may find this pre-made ",(0,o.kt)("a",{parentName:"p",href:"https://www.getpostman.com/collections/58f79ddb150223f67b35"},"collection")," helpful in getting things setup."))}c.isMDXComponent=!0}}]);