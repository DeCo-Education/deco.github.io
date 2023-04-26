"use strict";(self.webpackChunkde_co_docs=self.webpackChunkde_co_docs||[]).push([[4502],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"k-security-basics",title:"Chill n Learn 2. Knowledge - Security Basics",sidebar_position:1},c="Chill n Learn 2: Knowledge - Security Basics",l={unversionedId:"into-the-woods/waterfall1-basic-design-principles/k-security-basics",id:"into-the-woods/waterfall1-basic-design-principles/k-security-basics",title:"Chill n Learn 2. Knowledge - Security Basics",description:"Imagine you put all your money into a bank. And the next day, it got robbed and you lose all your money. As crypto is tightly tied to a person's wellbeing. You wouldn't want to put your coins in a faulty dApp protocol. That being said, you don't want to build a faulty dApp protocol filled with security issues and lose the confidence of your customers.",source:"@site/docs/into-the-woods/waterfall1-basic-design-principles/2-k-security-basics.md",sourceDirName:"into-the-woods/waterfall1-basic-design-principles",slug:"/into-the-woods/waterfall1-basic-design-principles/k-security-basics",permalink:"/deco-docs/docs/into-the-woods/waterfall1-basic-design-principles/k-security-basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"k-security-basics",title:"Chill n Learn 2. Knowledge - Security Basics",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chill n Learn 1. Knowledge - Scalability Basics",permalink:"/deco-docs/docs/into-the-woods/waterfall1-basic-design-principles/k-scalability-basics"},next:{title:"Chill n Learn 3. Knowledge - Modular Guard Scripts",permalink:"/deco-docs/docs/into-the-woods/waterfall1-basic-design-principles/k-organization-basics"}},u={},p=[],d={toc:p};function y(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chill-n-learn-2-knowledge---security-basics"},"Chill n Learn 2: Knowledge - Security Basics"),(0,i.kt)("p",null,"Imagine you put all your money into a bank. And the next day, it got robbed and you lose all your money. As crypto is tightly tied to a person's wellbeing. You wouldn't want to put your coins in a faulty dApp protocol. That being said, you don't want to build a faulty dApp protocol filled with security issues and lose the confidence of your customers."),(0,i.kt)("p",null,"This can be prevented by ensuring the security of your dApp is top notch."),(0,i.kt)("p",null,"The easiest and best way to ensure that your smart contracts are resilient is to ensure that it's pathways towards the next txs are strictly defined."),(0,i.kt)("p",null,"What does this mean?"),(0,i.kt)("p",null,"It means that you should compose your smart contracts so that if tx can be spent in conditions A, B and C. It should never be able to be spent by an unknown condition D!"),(0,i.kt)("p",null,"The best advice is to be meticulous in composing your smart contract, and think of all the edge cases that you can possibly think of."),(0,i.kt)("p",null,"Or you can test your contracts."),(0,i.kt)("p",null,"The best way to test your contracts is to create the mock transaction, and sign the transaction. If the box with the contract is not spendable, the transaction should fail. If it does not fail, you found a security bug."),(0,i.kt)("p",null,"These transactions are easier to compose by utilizing Chained Transactions."),(0,i.kt)("p",null,"Create the boxes with the contracts, and then use the function .getOutputsToSpend and use those newly built input boxes to test your protocol."),(0,i.kt)("p",null,"Happy Debugging."))}y.isMDXComponent=!0}}]);