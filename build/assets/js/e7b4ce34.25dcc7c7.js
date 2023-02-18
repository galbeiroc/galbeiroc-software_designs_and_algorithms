"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="2. Duck Typing",s={unversionedId:"building-blocks-of-oop-part-2/duck_typing",id:"building-blocks-of-oop-part-2/duck_typing",title:"2. Duck Typing",description:'Duck typing in computer programming is an application of the duck test \u2014 "If it walks like a duck and it quacks like a duck, then it must be a duck" \u2014 to determine whether an object can be used for a particular purpose.',source:"@site/docs/3-building-blocks-of-oop-part-2/duck_typing.md",sourceDirName:"3-building-blocks-of-oop-part-2",slug:"/building-blocks-of-oop-part-2/duck_typing",permalink:"/docs/building-blocks-of-oop-part-2/duck_typing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1. Composition",permalink:"/docs/building-blocks-of-oop-part-2/composition"},next:{title:"3. Mixins",permalink:"/docs/building-blocks-of-oop-part-2/mixins"}},p={},c=[{value:"2.1 If It Walks Like a Duck and Talks Like a Duck Then It&#39;s a Duck",id:"21-if-it-walks-like-a-duck-and-talks-like-a-duck-then-its-a-duck",level:2},{value:"2.2 Finding the Duck",id:"22-finding-the-duck",level:2},{value:"2.3 Writing Code that Relies on Ducks",id:"23-writing-code-that-relies-on-ducks",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-duck-typing"},"2. Duck Typing"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Duck typing in computer programming is an application of the duck test \u2014 "If it walks like a duck and it quacks like a duck, then it must be a duck" \u2014 to determine whether an object can be used for a particular purpose.'),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Duck_typing"},"Wikipedia"))),(0,a.kt)("h2",{id:"21-if-it-walks-like-a-duck-and-talks-like-a-duck-then-its-a-duck"},"2.1 If It Walks Like a Duck and Talks Like a Duck Then It's a Duck"),(0,a.kt)("p",null,"To better understand the meaning of this phrase let us analyze it using one of previous examples based on the UML-diagram below: "),(0,a.kt)("p",null,"Figure 2.1 - Trip \u2013 Mechanic interaction"),(0,a.kt)("img",{width:"500",src:n(1132).Z,alt:"Trip \u2013 Mechanic interaction"}),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Trip")," class earlier had to do few calls of Mechanic class method, now those calls are combined into single ",(0,a.kt)("inlineCode",{parentName:"p"},"prepareBicycles")," method call, as you can see on Figure 2.1. But if we will need to prepare something besides bicycles, then our code may look like on example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 2.1"',title:'"Listing','2.1"':!0},"class Mechanic {}\nclass TripCoordinator {}\nclass Driver {}\n\nclass Trip {\n  bicycles;\n  customers;\n  vehicle;\n\n  prepare(prepares: object[]) {\n    return prepares.map((preparer) => {\n      switch (preparer.constructor) {\n        case Mechanic:\n          return preparer.prepareBicycles(this.bicycles);\n        case TripCoordinator:\n          return preparer.buyFood(this.customers);\n        case Driver:\n          preparer.fillTank(this.vehicle);\n\n          return preparer.fillWaterTank(this.vehicle);\n      }\n    });\n  }\n}\n")),(0,a.kt)("p",null,"When introducing new preparers in addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"Mechanic"),", like ",(0,a.kt)("inlineCode",{parentName:"p"},"TripCoordinator")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Driver")," you will notice how dramatically increased the number of dependencies in prepare method. Now it knows every class name, classes' methods' names and their arguments because it needs to prepare some specific things before the trip. What is even worse, is the fact that this type of code only will increase its size and dependencies number with time, it is the easiest way for developer to add another switch case to already existing cases."),(0,a.kt)("h2",{id:"22-finding-the-duck"},"2.2 Finding the Duck"),(0,a.kt)("p",null,"We have identified the problem which we need to solve, and now we need to minimize dependencies number to make Trip functionality easily extensible without usage of switch-case operator and other similar approaches. Analyzing existing functionality, we may notice something common between all the preparers, something, that each of them does, but at the same time what they are not. To understand what the instance is we are talking about, let us look on the UML-diagram on Figure 2.2:"),(0,a.kt)("p",null,"Figure 2.2 - Missing Preparer type"),(0,a.kt)("img",{width:"700",src:n(5144).Z,alt:"Missing Preparer type"}),(0,a.kt)("p",null,"Every preparer class is responsible for preparing something for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Trip"),", so we can try to extract some ",(0,a.kt)("inlineCode",{parentName:"p"},"Preparer")," abstraction and call it a duck type. As a result we have something similar to an interface, but actually it is just a role which can be applied to some specific class in some specific moment of time, and we cannot say that every ",(0,a.kt)("inlineCode",{parentName:"p"},"Preparer")," class is a part of some types' hierarchy. This is the exact moment when we can extract our duck types, the next step is to review changes in code, which is required to extract the duck type. Our refactoring will be based on the UML-diagram from Figure 2.3:"),(0,a.kt)("p",null,"Figure 2.3 - Trip \u2013 Preparer interaction"),(0,a.kt)("img",{width:"500",src:n(385).Z,alt:"Trip \u2013 Preparer interaction"}),(0,a.kt)("p",null,"When we finish the refactoring, every ",(0,a.kt)("inlineCode",{parentName:"p"},"Preparer")," will have ",(0,a.kt)("inlineCode",{parentName:"p"},"prepareTrip")," method which takes ",(0,a.kt)("inlineCode",{parentName:"p"},"Trip")," instance as an argument so every preparer can take needed data from the instance. Below you can see the refactoring result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 2.2"',title:'"Listing','2.2"':!0},"class Trip {\n  prepare(prepares: { prepareTrip(trip: Trip) }[]) {\n    prepares.map((preparer) => {\n      preparer.prepareTrip(this);\n    });\n  }\n}\n\nclass Driver {}\n\nclass Mechanic {\n  prepareTrip(trip: Trip) {\n    trip.bicycles.map((bicycle) => {\n      this.prepareBicycle(bicycle);\n    });\n  }\n}\n\nclass TripCoordinator {\n  prepareTrip(trip: Trip) {\n    this.buyFood(trip);\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Trip")," class changed the most, we have removed all the dependencies on specific implementations of other classes, now every ",(0,a.kt)("inlineCode",{parentName:"p"},"Preparer")," only need to have ",(0,a.kt)("inlineCode",{parentName:"p"},"prepareTrip")," method so Trip class will not change anymore with addition of new preparers."),(0,a.kt)("h2",{id:"23-writing-code-that-relies-on-ducks"},"2.3 Writing Code that Relies on Ducks"),(0,a.kt)("p",null,"To sum up the information about duck types we will try to make a list of main points which helps us to write a code using duck types."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Recognizing Hidden Ducks. You need to timely understand where the duck types are hidden and how to extract them, pay attention to the next places in the code:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Case statements that switch on class."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"instanceof")," operator."),(0,a.kt)("li",{parentName:"ul"},"Checking the method exists (",(0,a.kt)("inlineCode",{parentName:"li"},"if (obj.someMethod) { obj.someMethod() }"),");"))),(0,a.kt)("li",{parentName:"ol"},'Placing Trust in Your Ducks. Let client code trust the duck type, in lack of the trust client code means the next: "I know who you are, so I know what you do". Such knowledge transforms into tight coupling between classes which results into non extensible code. Flexible applications built on top of objects which works on trust \u2013 your goal as a developer is to make those objects reliable, to let the trust work.'),(0,a.kt)("li",{parentName:"ol"},"Documenting Duck Types. Preparer duck type and its open interface is a specific part of the design, but at the same time it is a virtual part of code, because it is neither a class nor a real interface. Preparers are an abstraction, just a convention which gives you the powerful system design tool, but this abstraction makes code less obvious. When you create a duck type, you must document and cover it with tests."),(0,a.kt)("li",{parentName:"ol"},"Sharing Code between Ducks. In our example shared is only ",(0,a.kt)("inlineCode",{parentName:"li"},"prepareTrip")," method, but when you start using duck types, you may notice that some part of the functionality is common for all the types. Share such functionality using mixins and other available approaches."),(0,a.kt)("li",{parentName:"ol"},"Choosing Your Ducks Wisely. The last point, as always, tells us that you do not need to create duck types just to have them. You need to find a balance between resources required for the refactoring, benefit gained, support simplicity and code clarity.")))}u.isMDXComponent=!0},5144:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/missing_preparer_type-92b009ef320c644286382f9be9c14ddc.jpg"},1132:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/trip-mechanic_interaction-1c2df703e13a9d114ae689191069549d.jpg"},385:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/trip-preparer_interaction-1f6a0c88930bc1e24dc4a9d849bb4381.jpg"}}]);