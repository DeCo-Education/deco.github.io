"use strict";(self.webpackChunkde_co_docs=self.webpackChunkde_co_docs||[]).push([[8355],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"k-organization-basics",title:"Chill n Learn 3. Knowledge - Modular Guard Scripts",sidebar_position:2},l="Chill n Learn 3: Knowledge - Modular Guard Scripts",c={unversionedId:"into-the-woods/waterfall1-basic-design-principles/k-organization-basics",id:"into-the-woods/waterfall1-basic-design-principles/k-organization-basics",title:"Chill n Learn 3. Knowledge - Modular Guard Scripts",description:"Imagine if you have a remote control. Wouldnt it be cool if it can be utilized to control multiple things? Like changing the radio channel to channel one, or changing the tv channel to channel ten. All using the same remote control.",source:"@site/docs/into-the-woods/waterfall1-basic-design-principles/3-k-modular-guard-scripts.md",sourceDirName:"into-the-woods/waterfall1-basic-design-principles",slug:"/into-the-woods/waterfall1-basic-design-principles/k-organization-basics",permalink:"/deco-docs/docs/into-the-woods/waterfall1-basic-design-principles/k-organization-basics",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"k-organization-basics",title:"Chill n Learn 3. Knowledge - Modular Guard Scripts",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Chill n Learn 2. Knowledge - Security Basics",permalink:"/deco-docs/docs/into-the-woods/waterfall1-basic-design-principles/k-security-basics"}},d={},u=[{value:"Pros and Cons",id:"pros-and-cons",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chill-n-learn-3-knowledge---modular-guard-scripts"},"Chill n Learn 3: Knowledge - Modular Guard Scripts"),(0,a.kt)("p",null,"Imagine if you have a remote control. Wouldnt it be cool if it can be utilized to control multiple things? Like changing the radio channel to channel one, or changing the tv channel to channel ten. All using the same remote control."),(0,a.kt)("p",null,"Boxes can be composed in the same way. The essence of a box is that it carries a set of data. If the data can be persisted or modify in a way where it is useful in an ecosystem, then you wouldn't need to build 10 different remote controls (boxes) for parts of the protocol that can utilize it."),(0,a.kt)("p",null,"This is what we call ",(0,a.kt)("strong",{parentName:"p"},"Modular Guard Scripts"),"."),(0,a.kt)("p",null,"These guard scripts are attached to boxes and allow it to be modular in ways where you can build a whole new system and utilize these same boxes."),(0,a.kt)("p",null,"This can be done by writing guard scripts that have pre-defined pathways, but pathways that are flexible enough for it to be reusable."),(0,a.kt)("p",null,"A quick example is Exle's SLTLendBox. SLTLendBox takes a single lender and notes down the loan detail for the lender and borrower."),(0,a.kt)("p",null,"However, since a single lender equates to a single address. The Exle team composed the smart contract so that it does not limit to only PK addresses, but any guard script addresses too."),(0,a.kt)("p",null,"This allows them to build a CrowdFund system which allows many users to fund the same loan (with methods of redeeming the token after), without altering the SLTLendBox guard script."),(0,a.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,a.kt)("p",null,"The pro for this system is that a well-designed modular system does not need extra maintenance of an older system when a newer system is introduced. It's a plug and play system, and you don't need to rework everything from scratch."),(0,a.kt)("p",null,"However, the biggest issue with this type of guard scripts is that it can get complex really quickly. And not only that, more features means that it will introduce more security bugs."),(0,a.kt)("p",null,"Therefore, if you ever go with this approach, make sure you evaluate the pros and cons before going with it."))}h.isMDXComponent=!0}}]);