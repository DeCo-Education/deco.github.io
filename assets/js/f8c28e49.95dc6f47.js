"use strict";(self.webpackChunkde_co_docs=self.webpackChunkde_co_docs||[]).push([[6669],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,N=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(N,i(i({ref:t},k),{},{components:n})):a.createElement(N,i({ref:t},k))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"too-box-focused-guard-script-framework",title:"Box Focused Guard Script Framework",sidebar_position:1},p="Box Focused Guard Script Framework",s={unversionedId:"guide-book/species0-resources/too-box-focused-guard-script-framework",id:"guide-book/species0-resources/too-box-focused-guard-script-framework",title:"Box Focused Guard Script Framework",description:"Guard scripts determines whether a box is spendable in a transaction. This design focuses on the component within a box and allow the components written down to guide the ErgoScript implementation of the Guard Script.",source:"@site/docs/guide-book/species0-resources/2-too-box-focused-guard-script-framework.md",sourceDirName:"guide-book/species0-resources",slug:"/guide-book/species0-resources/too-box-focused-guard-script-framework",permalink:"/deco-docs/docs/guide-book/species0-resources/too-box-focused-guard-script-framework",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"too-box-focused-guard-script-framework",title:"Box Focused Guard Script Framework",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Species Dex 0: Resources",permalink:"/deco-docs/docs/category/species-dex-0-resources"},next:{title:"ErgoScript Language Spec",permalink:"/deco-docs/docs/guide-book/species0-resources/too-ergoscript-lang-spec"}},k={},m=[{value:"Framework + Example",id:"framework--example",level:2},{value:"Building the ErgoScript",id:"building-the-ergoscript",level:2},{value:"Blank Guard Script Framework",id:"blank-guard-script-framework",level:2},{value:"PinLock Contract Guard Script Framework",id:"pinlock-contract-guard-script-framework",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"box-focused-guard-script-framework"},"Box Focused Guard Script Framework"),(0,r.kt)("p",null,"Guard scripts determines whether a box is spendable in a transaction. This design focuses on the component within a box and allow the components written down to guide the ErgoScript implementation of the Guard Script."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"List out",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Value"),(0,r.kt)("li",{parentName:"ol"},"Tokens"),(0,r.kt)("li",{parentName:"ol"},"Registers"),(0,r.kt)("li",{parentName:"ol"},"Actions")))),(0,r.kt)("h2",{id:"framework--example"},"Framework + Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value"),": 0.1 Ergs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Token List:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sample NFT Name",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Identification NFT - 1")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Registers"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R4")," \u2192 Personal Details"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType - Coll[Coll","[Byte]","]"),(0,r.kt)("li",{parentName:"ol"},"Data List",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"First Name"),(0,r.kt)("li",{parentName:"ol"},"Last Name"),(0,r.kt)("li",{parentName:"ol"},"Address")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R5")," \u2192 Age, HOB and Grades"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType - Coll","[Long]"),(0,r.kt)("li",{parentName:"ol"},"Data List",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Age"),(0,r.kt)("li",{parentName:"ol"},"HOB (Height of Birth)"),(0,r.kt)("li",{parentName:"ol"},"Math Score")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R6")," \u2192 Joined DeCo"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType - Boolean",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Took DeCo Layman Course")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R7")," \u2192 Records"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Last Recorded Height")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Actions List:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grows Older Every Year"),(0,r.kt)("p",{parentName:"li"},"INPUTS Position: 0"),(0,r.kt)("p",{parentName:"li"},"Trigger Condition:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"When all other conditions fail (an else condition)")),(0,r.kt)("p",{parentName:"li"},"Contract Conditions:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Condition 1: Everything stays the same other than the age"),(0,r.kt)("li",{parentName:"ol"},"Condition 2: Can only increment by ",(0,r.kt)("em",{parentName:"li"},"n"),", where n = ((Current Height - HOB)/(Height in a year)) - Age"),(0,r.kt)("li",{parentName:"ol"},"Condition 3: Self reproducing box in OUTPUTS(0)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Math Score changed after tests"),(0,r.kt)("p",{parentName:"li"},"INPUTS Position: 0"),(0,r.kt)("p",{parentName:"li"},"Trigger Condition:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Test Score Identification Token in INPUTS (1)")),(0,r.kt)("p",{parentName:"li"},"Contract Conditions:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Condition 1: Everything stays the same other than the Math Score"),(0,r.kt)("li",{parentName:"ol"},"Condition 2: Math score is from Test Score Box R4","[Long]"),(0,r.kt)("li",{parentName:"ol"},"Condition 3: Self reproducing box in OUTPUTS(0)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Decided to take DeCo Layman Course"),(0,r.kt)("p",{parentName:"li"},"INPUTS Position: 0"),(0,r.kt)("p",{parentName:"li"},"Trigger Condition:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If DeCo award NFT is in INPUTS(1)")),(0,r.kt)("p",{parentName:"li"},"Contract Conditions:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Condition 1: Math Score >= 98"),(0,r.kt)("li",{parentName:"ol"},"Condition 3: Self reproducing box in OUTPUTS(0)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Box Conditions:")),(0,r.kt)("p",null,"Persisted data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Identification Token"),(0,r.kt)("li",{parentName:"ol"},"Personal details")),(0,r.kt)("p",null,"Other Conditions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Records updated for every Tx")),(0,r.kt)("h2",{id:"building-the-ergoscript"},"Building the ErgoScript"),(0,r.kt)("p",null,"After forming the framework. Take the actions and refer to its components to design the ErgoScript for the Guard Script."),(0,r.kt)("p",null,"Fill the Box Conditions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"{\n    val persistIdentificationToken = allOf(Coll(\n        // ._1 == Id, ._2 == quantity\n        SELF._tokens(0)._1 == OUTPUTS(0)._tokens(0)._1,\n        SELF._tokens(0)._2 == OUTPUTS(0)._tokens(0)._2\n    ))\n\n    val persistPersonalDetails =\n        SELF.R4[Coll[Coll[Byte]] == OUTPUTS(0).R4[Coll[Coll[Byte]]\n\n    val recordsUpdated =\n        OUTPUTS(0).R7 == HEIGHT\n\n    val boxConditionsCheck = allOf(Coll(\n        persistIdentificationToken,\n        persistPersonalDetails,\n        recordsUpdated))\n\n    val ageNHOBCheck = allOf(Coll(\n        SELF.R5[Coll[Long]].get(0) == OUTPUTS(0).R5[Coll[Long]].get(0),\n        SELF.R5[Coll[Long]].get(1) == OUTPUTS(0).R5[Coll[Long]].get(1)\n    ))\n\n    val mathScoreCheck =\n        SELF.R5[Coll[Long]].get(2) == OUTPUTS(0).R5[Coll[Long]].get(2)\n\n    val deCoAwardCheck =\n        SELF.R6[Boolean].get == OUTPUTS(0).R5[Boolean].get\n\n    if (INPUTS(1)._tokens(0)._1 == deCoNFTAwardToken) {\n        sigmaProp(allOf(Coll(\n            boxConditionsCheck,\n            ageNHOBCheck,\n            SELF.R5[Coll[Long]].get(2) >= 98\n        )))\n    } else if (INPUTS(1)._tokens(0)._1 ==  testScoreIdentification) {\n        sigmaProp(allOf(Coll(\n            boxConditionCheck,\n            ageNHOBCheck,\n            OUTPUTS(0).R5[Coll[Long]].get(2) == INPUTS(1).R4[Long].get\n        ))\n    } else {\n        val maxAge = (HEIGHT - SELF.R5[Coll[Long]].get(1))/(heightInAYear)\n        val ageNotExceedMaxAge = OUTPUTS(0).R5[Coll[Long]].get(0) <= maxAge\n\n        sigmaProp(allOf(Coll(\n            boxConditionsCheck,\n            deCoAwardCheck,\n            mathScoreCheck,\n            ageNotExceedMaxAge\n        ))\n    }\n}\n")),(0,r.kt)("h2",{id:"blank-guard-script-framework"},"Blank Guard Script Framework"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value"),": {insert} Ergs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Token List:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sample NFT Name",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Identification NFT - 1")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Registers"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R4")," \u2192"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType -"),(0,r.kt)("li",{parentName:"ol"},"Data List",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R5")," \u2192"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType -"),(0,r.kt)("li",{parentName:"ol"},"Data List",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R6")," \u2192"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType -",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R7")," \u2192"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType -")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Actions List:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"{Action}"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"INPUTS Position"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"OUTPUTS Position"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Trigger Condition"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Contract Conditions"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Condition 1:"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"{Action}"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"INPUTS Position"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"OUTPUTS Position"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Trigger Condition"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Contract Conditions"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Condition 1:"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"{Action}"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"INPUTS Position"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"OUTPUTS Position"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Trigger Condition"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Contract Conditions"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Condition 1:")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Box Conditions:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Persisted data")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"}),(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Other Conditions")),(0,r.kt)("h2",{id:"pinlock-contract-guard-script-framework"},"PinLock Contract Guard Script Framework"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value"),": X (Depends on what the user put in) Ergs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Registers"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R4")," \u2192 Pin of the box (Hashed)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType - Coll","[Byte]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R5")," \u2192 TimeFrame for Pin to be changed (If block height is Larger than this height, then pin cannot be changed)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DataType - Long")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Actions List:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Box can be spent only if the Output box pin is the same as the current box")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"INPUTS Position"),": 0"),(0,r.kt)("p",{parentName:"li"},"Trigger Conditions:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Proposition Byte is not the same \u2192 Pin Lock is being spent to become a user box",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Therefore, the propositionBytes is not the same")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Contract Conditions"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Condition 1: R4 of self (Hashed Pin) == Hashed R4 of OUTPUTS(0)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pin of the box can be changed within a certain height (timeframe)")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"INPUTS Position"),": 0"),(0,r.kt)("p",{parentName:"li"},"Triggering Condition:"),(0,r.kt)("p",{parentName:"li"},"Anything else other than 1"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Contract Conditions"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Condition 1: Block Height cannot be larger than R5\u2019s Height",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Code: ",(0,r.kt)("em",{parentName:"li"},"HEIGHT < SELF.R5","[Long]",".get")))),(0,r.kt)("li",{parentName:"ol"},"Condition 2: Pin has to be different",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Comparing against OUTPUTS(0) \u2192 Newly Generated PinLock Box"),(0,r.kt)("li",{parentName:"ol"},"Code: ",(0,r.kt)("em",{parentName:"li"},"SELF.R4[Coll","[Byte]","].get \u2260 OUTPUTS(0).R4[Coll","[Byte]","].get"))))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Box Conditions:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Persisted data")),(0,r.kt)("p",null,"Pin Change Expiry Height cannot be changed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Comparing against OUTPUTS(0) \u2192 Newly Generated PinLock Box"),(0,r.kt)("li",{parentName:"ol"},"Code: SELF.R5","[Long]",".get == OUTPUTS(0).R5","[Long]",".get")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"{\n\n        // Triggering condition for Scenario 1\n        val isPinLockBoxRedeemed = SELF.propositionBytes != OUTPUTS(0).propositionBytes\n\n        if (isPinLockBoxRedeemed) {\n            // Redeem PinLock Box\n            val isPinCorrect = SELF.R4[Coll[Byte]].get == black2b256(OUTPUTS(0).R4[Coll[Byte]].get)\n            sigmaProp(isPinCorrect)\n        } else {\n            // Change Pin\n            val isExpiryHeightSame = SELF.R5[Long].get == OUTPUTS(0).R5[Long].get\n            val isExpiryTimePassed = HEIGHT < SELF.R5[Long.get\n            val isPinDifferent = SELF.R4[Coll[Byte]].get != OUTPUTS(0).R4[Coll[Byte]].get\n\n            sigmaProp(allOf(Coll(\n                isExpiryHeightSame,\n                isExpiryTimePassed,\n                isPinDifferent)))\n        }\n}\n")))}d.isMDXComponent=!0}}]);