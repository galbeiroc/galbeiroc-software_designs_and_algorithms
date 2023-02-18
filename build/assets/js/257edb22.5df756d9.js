"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[7920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:8},o="7. \ud83d\udcda Home Task",l={unversionedId:"building-blocks-of-oop-part-1/hometask",id:"building-blocks-of-oop-part-1/hometask",title:"7. \ud83d\udcda Home Task",description:"The home task should be done using TypeScript.",source:"@site/docs/2-building-blocks-of-oop-part-1/hometask.md",sourceDirName:"2-building-blocks-of-oop-part-1",slug:"/building-blocks-of-oop-part-1/hometask",permalink:"/docs/building-blocks-of-oop-part-1/hometask",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"6. Object-oriented Design Introduction",permalink:"/docs/building-blocks-of-oop-part-1/object-oriented_design_introduction"},next:{title:"1. Composition",permalink:"/docs/building-blocks-of-oop-part-2/composition"}},s={},p=[{value:"Specific Steps",id:"specific-steps",level:2},{value:"Evaluation criteria",id:"evaluation-criteria",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"7--home-task"},"7. \ud83d\udcda Home Task"),(0,a.kt)("p",null,"The home task should be done using TypeScript."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The starter code for the home task is located in ",(0,a.kt)("em",{parentName:"p"},"docs/2-building-blocks-of-oop-part-1/hometask")," folder")),(0,a.kt)("h2",{id:"specific-steps"},"Specific Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Point")," class, which creates 2 dimensional point with coordinates. It\nshould contain:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"two instance variables ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"y"),";"),(0,a.kt)("li",{parentName:"ul"},"default constructor which creates a point at the location of (0, 0);"),(0,a.kt)("li",{parentName:"ul"},"overloaded constructor (use multiple constructors declaration for Typescript)\nwhich creates a point by ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," coordinates;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toString()")," method should return a ",(0,a.kt)("inlineCode",{parentName:"li"},"Point")," class stringified representation in\nformat: ",(0,a.kt)("inlineCode",{parentName:"li"},'"(x, y)"'),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"distance()")," method should be overloaded (use multiple methods declaration for\nTypescript) with next implementations:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"no args: distance from this point to (0, 0);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"distance(other: Point)")," - distance from this point to a given instance of\n",(0,a.kt)("inlineCode",{parentName:"li"},"Point"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"distance(x, y)")," - distance from this point to a given point (x, y).")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create abstract superclass called ",(0,a.kt)("inlineCode",{parentName:"li"},"Shape"),", which contains:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"two protected instance variables: ",(0,a.kt)("inlineCode",{parentName:"li"},"color")," (string), ",(0,a.kt)("inlineCode",{parentName:"li"},"filled"),"\n(boolean) and ",(0,a.kt)("inlineCode",{parentName:"li"},"points")," (Point[]);"),(0,a.kt)("li",{parentName:"ul"},"overloaded constructor (use multiple constructors declaration for Typescript): a\nconstructor that takes a list of ",(0,a.kt)("inlineCode",{parentName:"li"},"points")," and initializes the color to ",(0,a.kt)("inlineCode",{parentName:"li"},'"green"'),"\nand filled to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," by default, and a constructor that takes a list of ",(0,a.kt)("inlineCode",{parentName:"li"},"points"),",\nthe ",(0,a.kt)("inlineCode",{parentName:"li"},"color")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"filled")," properties;"),(0,a.kt)("li",{parentName:"ul"},"Make sure that the ",(0,a.kt)("inlineCode",{parentName:"li"},"Shape")," has at least 3 points (2 points is just a line)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toString()")," method that returns ",(0,a.kt)("inlineCode",{parentName:"li"},'"A Shape with color of xxx and filled/Not\nfilled. Points: (x1, y1), (x2, y2)..."'),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getPerimeter()")," that calculates the perimeter using ",(0,a.kt)("inlineCode",{parentName:"li"},"Point.distance")," method;")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create class ",(0,a.kt)("inlineCode",{parentName:"li"},"Triangle")," that takes 3 points as it's vertices. Triangle must inherit\n",(0,a.kt)("inlineCode",{parentName:"li"},"Shape")," abstract class. ",(0,a.kt)("inlineCode",{parentName:"li"},"Triangle")," should contain:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a constructor (use multiple constructors declaration for Typescript) which creates\n",(0,a.kt)("inlineCode",{parentName:"li"},"Triangle")," class using three instances of ",(0,a.kt)("inlineCode",{parentName:"li"},"Point")," class, may also provide color and\nfilled properties;"),(0,a.kt)("li",{parentName:"ul"},"override ",(0,a.kt)("inlineCode",{parentName:"li"},"toString()")," method, it should return a ",(0,a.kt)("inlineCode",{parentName:"li"},"Triangle")," class stringified\nrepresentation in format ",(0,a.kt)("inlineCode",{parentName:"li"},'"Triangle[v1=(x1, y1),v2=(x2, y2),v3=(x3, y3)]"'),";"),(0,a.kt)("li",{parentName:"ul"},"override ",(0,a.kt)("inlineCode",{parentName:"li"},"getType()")," method, which prints ",(0,a.kt)("inlineCode",{parentName:"li"},'"equilateral triangle"')," if all the three\nsides are equal, ",(0,a.kt)("inlineCode",{parentName:"li"},'"isosceles triangle"')," if any two of the three sides are equal, or\n",(0,a.kt)("inlineCode",{parentName:"li"},'"scalene triangle"')," if all sides are different.")),(0,a.kt)("h2",{id:"evaluation-criteria"},"Evaluation criteria"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Only some classes were implemented."),(0,a.kt)("li",{parentName:"ol"},"Some classes were not implemented."),(0,a.kt)("li",{parentName:"ol"},"Some required methods are missing. All ",(0,a.kt)("inlineCode",{parentName:"li"},"@ts-nocheck")," comments are removed and there are no TypeScript warnings exist after that."),(0,a.kt)("li",{parentName:"ol"},"All tasks are implemented to a full extent and all tests are passed successfully (",(0,a.kt)("inlineCode",{parentName:"li"},"npm run test"),"). All ",(0,a.kt)("inlineCode",{parentName:"li"},"@ts-nocheck")," comments are removed and there are no TypeScript warnings exist after that.")))}m.isMDXComponent=!0}}]);