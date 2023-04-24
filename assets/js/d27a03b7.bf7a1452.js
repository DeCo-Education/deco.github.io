"use strict";(self.webpackChunkde_co_docs=self.webpackChunkde_co_docs||[]).push([[3603],{3905:function(n,e,t){t.d(e,{Zo:function(){return d},kt:function(){return p}});var o=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=o.createContext({}),l=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},d=function(n){var e=l(n.components);return o.createElement(c.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,c=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),h=l(t),p=i,u=h["".concat(c,".").concat(p)]||h[p]||f[p]||a;return t?o.createElement(u,r(r({ref:e},d),{},{components:t})):o.createElement(u,r({ref:e},d))}));function p(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,r=new Array(a);r[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:i,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9580:function(n,e,t){t.r(e),t.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),r=["components"],s={id:"k-off-chain-on-chain-appkit",title:"Lesson 2. Knowledge - On-chain & Off-chain",sidebar_position:2},c=void 0,l={unversionedId:"into-the-woods/trail3-multi-stage-txs-n-contracts/k-off-chain-on-chain-appkit",id:"into-the-woods/trail3-multi-stage-txs-n-contracts/k-off-chain-on-chain-appkit",title:"Lesson 2. Knowledge - On-chain & Off-chain",description:"Lesson 3: Understanding On-Chain and Off-Chain Components in Ergo Blockchain Development",source:"@site/docs/into-the-woods/trail3-multi-stage-txs-n-contracts/3-k-off-chain-on-chain-appkit.md",sourceDirName:"into-the-woods/trail3-multi-stage-txs-n-contracts",slug:"/into-the-woods/trail3-multi-stage-txs-n-contracts/k-off-chain-on-chain-appkit",permalink:"/deco-docs/docs/into-the-woods/trail3-multi-stage-txs-n-contracts/k-off-chain-on-chain-appkit",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"k-off-chain-on-chain-appkit",title:"Lesson 2. Knowledge - On-chain & Off-chain",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lesson 1. Knowledge - What is a Multi Stage Tx",permalink:"/deco-docs/docs/into-the-woods/trail3-multi-stage-txs-n-contracts/k-what-is-a-multi-stage-tx"},next:{title:"Lesson 4. Self-Study - Box Design Framework & ErgoScript Lang Spec",permalink:"/deco-docs/docs/into-the-woods/trail3-multi-stage-txs-n-contracts/ss-boxdesign-n-langspec"}},d={},f=[{value:"Lesson 3: Understanding On-Chain and Off-Chain Components in Ergo Blockchain Development",id:"lesson-3-understanding-on-chain-and-off-chain-components-in-ergo-blockchain-development",level:3},{value:"What is On-Chain?",id:"what-is-on-chain",level:2},{value:"What is Off-Chain?",id:"what-is-off-chain",level:2},{value:"Example: Transaction Bot",id:"example-transaction-bot",level:2}],h={toc:f};function p(n){var e=n.components,t=(0,i.Z)(n,r);return(0,a.kt)("wrapper",(0,o.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"lesson-3-understanding-on-chain-and-off-chain-components-in-ergo-blockchain-development"},"Lesson 3: Understanding On-Chain and Off-Chain Components in Ergo Blockchain Development"),(0,a.kt)("p",null,"On-chain and off-chain are essential terms in Ergo Blockchain development, and understanding their differences is crucial to building effective decentralized applications (dApps). In this lesson, we will dive deeper into on-chain and off-chain components and their functions."),(0,a.kt)("h2",{id:"what-is-on-chain"},"What is On-Chain?"),(0,a.kt)("p",null,"On-chain refers to the parts of a dApp that exist directly on the blockchain. This includes smart contracts that are attached to boxes and data stored in the registers of those boxes. When designing a dApp, it is common to start with creating the transactions, followed by the development of smart contracts to enable the decentralized operation of the dApp on the blockchain."),(0,a.kt)("h2",{id:"what-is-off-chain"},"What is Off-Chain?"),(0,a.kt)("p",null,"Off-chain refers to parts of a dApp that do not exist on the blockchain. Many UTxOs require a system to process boxes and move them to the next stage, and this is where off-chain systems come into play. These systems usually involve REST endpoints and bots that perform several crucial functions, including:"),(0,a.kt)("p",null,"Retrieving data from the blockchain\nComposing transactions for users to sign\nProcessing transactions that are ready to move to the next stage of the dApp scenario"),(0,a.kt)("h2",{id:"example-transaction-bot"},"Example: Transaction Bot"),(0,a.kt)("p",null,"One example of an off-chain system is a transaction bot, which can help automate the process of composing and processing transactions. The Exle Tx Bot is a useful example of this kind of system. You can learn more about the Exle Tx Bot and its architecture by visiting their documentation: Exle Tx Bot"),(0,a.kt)("p",null,"By understanding the differences between on-chain and off-chain components and their functions, developers can build more effective and efficient dApps on the Ergo Blockchain."))}p.isMDXComponent=!0}}]);