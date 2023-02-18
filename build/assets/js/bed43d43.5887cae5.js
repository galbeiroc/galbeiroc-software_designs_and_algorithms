"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[3654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=i,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(c,o(o({ref:t},h),{},{components:a})):n.createElement(c,o({ref:t},h))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:5},o="4. Heap. Heap Sort. Priority Queue",l={unversionedId:"algorithms-and-data-structures-part-2/heap",id:"algorithms-and-data-structures-part-2/heap",title:"4. Heap. Heap Sort. Priority Queue",description:"The (binary) heap data structure is an array object that we can view as a nearly complete binary tree. Each node of the tree corresponds to an element of the array. The tree is completely filled on all levels except possibly the lowest, which is filled from the left up to a point. An array A that represents a heap is an object with two attributes",source:"@site/docs/8-algorithms-and-data-structures-part-2/heap.md",sourceDirName:"8-algorithms-and-data-structures-part-2",slug:"/algorithms-and-data-structures-part-2/heap",permalink:"/docs/algorithms-and-data-structures-part-2/heap",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3. Divide and Conquer",permalink:"/docs/algorithms-and-data-structures-part-2/divide_and_conquer"},next:{title:"5. Other sorting algorithms",permalink:"/docs/algorithms-and-data-structures-part-2/other_sorting_algorithms"}},p={},s=[{value:"4.1 Heap",id:"41-heap",level:2},{value:"4.2 Maintaining the Heap Property",id:"42-maintaining-the-heap-property",level:2},{value:"4.3 Building a Heap",id:"43-building-a-heap",level:2},{value:"4.4 Heap Sort",id:"44-heap-sort",level:2},{value:"4.5 Priority Queue",id:"45-priority-queue",level:2}],h={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"4-heap-heap-sort-priority-queue"},"4. Heap. Heap Sort. Priority Queue"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"(binary) heap")," data structure is an array object that we can view as a nearly complete binary tree. Each node of the tree corresponds to an element of the array. The tree is completely filled on all levels except possibly the lowest, which is filled from the left up to a point. An array ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," that represents a heap is an object with two attributes: ",(0,i.kt)("inlineCode",{parentName:"p"},"A.length"),", which (as usual) gives the number of elements in the array, and A.heap-size, which represents how many elements in the heap are stored within array A. That is, although ",(0,i.kt)("inlineCode",{parentName:"p"},"A[1 .. A.length]")," may contain numbers, only the elements in ",(0,i.kt)("inlineCode",{parentName:"p"},"A[1 .. A.heap-size]"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"0 \u2264 A.heap-size \u2264 A.length"),", are valid elements of the heap. The root of the tree is ",(0,i.kt)("inlineCode",{parentName:"p"},"A[1]"),", and given the index i of a node, we can easily compute the indices of its parent, left child, and right child:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent: ",(0,i.kt)("inlineCode",{parentName:"li"},"i/2")),(0,i.kt)("li",{parentName:"ul"},"Left: ",(0,i.kt)("inlineCode",{parentName:"li"},"2i")),(0,i.kt)("li",{parentName:"ul"},"Right: ",(0,i.kt)("inlineCode",{parentName:"li"},"2i + 1"))),(0,i.kt)("p",null,"There are two kinds of binary heaps: max-heaps and min-heaps. In both kinds, the values in the nodes satisfy a ",(0,i.kt)("strong",{parentName:"p"},"heap property"),", the specifics of which depend on the kind of heap. In a ",(0,i.kt)("strong",{parentName:"p"},"max-heap"),", the ",(0,i.kt)("strong",{parentName:"p"},"max-heap property")," is that for every node i other than the root: ",(0,i.kt)("inlineCode",{parentName:"p"},"A[Parent(i)] \u2265 A[i]"),". Thus, the largest element in a max-heap is stored at the root, and the subtree rooted at a node contains values no larger than that contained at the node itself. A ",(0,i.kt)("strong",{parentName:"p"},"min-heap")," is organized in the opposite way; the ",(0,i.kt)("strong",{parentName:"p"},"min-heap property")," is that for every node i other than the root: ",(0,i.kt)("inlineCode",{parentName:"p"},"A[Parent(i)] \u2264 A[i]"),". The smallest element in a min-heap is at the root. For the heapsort algorithm, we use max-heaps. Min-heaps commonly implement priority queues."),(0,i.kt)("h2",{id:"41-heap"},"4.1 Heap"),(0,i.kt)("p",null,"What does this heap look like? We have an array that we can represent as a tree. The numbers above the element in the array and the heap are the same, you can see how they are substituted into the leaves."),(0,i.kt)("p",null,"Figure 4.1"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Heap",src:a(5187).Z,width:"437",height:"320"})),(0,i.kt)("p",null,"Figure 4.2"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Heap",src:a(8730).Z,width:"495",height:"264"})),(0,i.kt)("p",null,"It doesn't have to be an array, different programming languages have different data structures. For following example it is more convenient to consider it as an array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Figure 2.1"',title:'"Figure','2.1"':!0},"function maxHeapify(A, i) {\n  let l = left(i);\n  let r = right(i);\n\n  if (l <= A.heapSize && A[l] > A[i]) {\n    largest = l;\n  } else {\n    largest = i;\n  }\n\n  if (r <= A.heapSize && A[r] > A[largest]) {\n    largest = r;\n  }\n\n  if (largest != i) {\n    // exchange A[i] with A[largest]\n    [A[i], A[largest]] = [A[largest], A[i]];\n\n    maxHeapify(A[largest]);\n  }\n}\n")),(0,i.kt)("p",null,"Array ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", which will represent our heap, also has attributes such as length - the number of elements in the array. And heap-size, the number of elements in the heap. The root of the tree is the first element in the array. We can easily calculate all the indexes of the nodes. The parent node or node is ",(0,i.kt)("inlineCode",{parentName:"p"},"i/2"),". The left child is ",(0,i.kt)("inlineCode",{parentName:"p"},"2i")," and the right is ",(0,i.kt)("inlineCode",{parentName:"p"},"2i + 1"),"."),(0,i.kt)("p",null,"There are two types of our heaps. If max hip has the largest root node and the heap goes down, min has a minimum root node and goes up."),(0,i.kt)("p",null,"For heap sorting, max heap is usually used, and min heap is used for building a priority queue."),(0,i.kt)("h2",{id:"42-maintaining-the-heap-property"},"4.2 Maintaining the Heap Property"),(0,i.kt)("p",null,"In order to maintain the max-heap property, we call the function ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify"),". When it is called, ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," assumes that the binary trees rooted at ",(0,i.kt)("inlineCode",{parentName:"p"},"left(i)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"right(i)")," are max-heaps, but that ",(0,i.kt)("inlineCode",{parentName:"p"},"A[i]")," might be smaller than its children, thus violating the max-heap property. Function ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," lets the value at ",(0,i.kt)("inlineCode",{parentName:"p"},"A[i]"),' "float down" in the max-heap so that the subtree rooted at index ',(0,i.kt)("inlineCode",{parentName:"p"},"i")," obeys the max-heap property."),(0,i.kt)("p",null,"Figure 4.3"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Heap",src:a(3089).Z,width:"629",height:"454"})),(0,i.kt)("p",null,"This heap must somehow support itself, for example, when inserting or when deleting elements a heap rebuild should take place. We have a procedure, let's call it ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify"),". When it is called, we assume that the left and right nodes are also maxHeap. But these nodes can be smaller than its children, and we have to let it go down below. As we can see, the second element has ceased to meet the requirement, and we check the left heap until we reach the sheet."),(0,i.kt)("p",null,"At each step, the largest of the elements ",(0,i.kt)("inlineCode",{parentName:"p"},"A[i]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"A[left(i)]"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"A[right(i)]")," is determined, and its index is stored in largest. If ",(0,i.kt)("inlineCode",{parentName:"p"},"A[i]")," is largest, then the subtree rooted at node ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," is already a max-heap and the procedure terminates. Otherwise, one of the two children has the largest element, and ",(0,i.kt)("inlineCode",{parentName:"p"},"A[i]")," is swapped with ",(0,i.kt)("inlineCode",{parentName:"p"},"A[largest]"),", which causes node ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," and its children to satisfy the max-heap property. The node indexed by ",(0,i.kt)("inlineCode",{parentName:"p"},"largest"),", however, now has the original value ",(0,i.kt)("inlineCode",{parentName:"p"},"A[i]"),", and thus the subtree rooted at largest might violate the max-heap property. Consequently, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," recursively on that subtree."),(0,i.kt)("p",null,"The running time of ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," on a subtree of size ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," rooted at a given node ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0398(1)")," time to fix up the relationships among the elements ",(0,i.kt)("inlineCode",{parentName:"p"},"A[i]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"A[left(i)]"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"A[right(i)]"),", plus the time to run ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," on a subtree rooted at one of the children of node ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," (assuming that the recursive call occurs). The children's subtrees each have size at most ",(0,i.kt)("inlineCode",{parentName:"p"},"2n/3")," - the worst case occurs when the bottom level of the tree is exactly half full\u2014and therefore we can describe the running time of ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," by the recurrence:"),(0,i.kt)("div",{className:"formula"},(0,i.kt)("img",{src:"https://latex.codecogs.com/svg.image?T(n)\\leqslant&space;T\\frac{2n}{3}&plus;\\theta(1)",title:"T(n)\\leqslant T\\frac{2n}{3}+\\theta(1)"})),(0,i.kt)("p",null,"The solution to this recurrence, by case ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," of the master theorem is ",(0,i.kt)("inlineCode",{parentName:"p"},"T(n) = O(lgn)"),"."),(0,i.kt)("p",null,"And so, let's analyze the algorithm. We define the largest element of the three, then swap and so on, omit the element. For our first node, we have a Tetta from ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),". For a single node, then we split into under trees and go down under the trees. We have a maximum number of child subtrees, in the worst case, ",(0,i.kt)("inlineCode",{parentName:"p"},"2n/3"),". This is when we go from half to the very bottom.\nThus, the following time is obtained: ",(0,i.kt)("inlineCode",{parentName:"p"},"T(n) = O(lgn)"),". Turning to the master theorem, we get the result: ",(0,i.kt)("inlineCode",{parentName:"p"},"lg6 = 2.6"),". This is a very good result, we need to spend less resources than our operations."),(0,i.kt)("h2",{id:"43-building-a-heap"},"4.3 Building a Heap"),(0,i.kt)("p",null,"The heap should be built using method ",(0,i.kt)("inlineCode",{parentName:"p"},"buildMaxHeap"),". To do this, you need to run the entire array through the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," function. As we see the complexity becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"nlg(n)"),", we have a linear dependency - we apply a function for each element and call ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," itself. We can use the procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," in a bottom-up manner to convert an array ",(0,i.kt)("inlineCode",{parentName:"p"},"A[1..n]"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"n = A.length"),", into a max-heap. The elements in the subarray ",(0,i.kt)("inlineCode",{parentName:"p"},"A[(n/2+1)..n]")," are all leaves of the tree, and so each is a 1-element heap to begin with. The function ",(0,i.kt)("inlineCode",{parentName:"p"},"buildMaxHeap")," goes through the remaining nodes of the tree and runs ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," on each one."),(0,i.kt)("p",null,"We can compute a simple upper bound on the running time of buildMaxHeap:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each call to ",(0,i.kt)("inlineCode",{parentName:"li"},"maxHeapify")," costs ",(0,i.kt)("inlineCode",{parentName:"li"},"O(lgn)")," time."),(0,i.kt)("li",{parentName:"ul"},"Procedure buildMaxHeap makes ",(0,i.kt)("inlineCode",{parentName:"li"},"O(n)")," such calls."),(0,i.kt)("li",{parentName:"ul"},"Thus, the running time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(nlgn)"),". This upper bound, though correct, is not asymptotically tight.")),(0,i.kt)("p",null,"Figure 4.4"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Heap",src:a(1009).Z,width:"460",height:"518"})),(0,i.kt)("p",null,"We have an unsorted array, and we usually start in the middle. Each time the offset is made, the heap gets a complete look."),(0,i.kt)("h2",{id:"44-heap-sort"},"4.4 Heap Sort"),(0,i.kt)("p",null,"The heapsort algorithm starts by using ",(0,i.kt)("inlineCode",{parentName:"p"},"buildMaxHeap")," to build a max-heap on the input array ",(0,i.kt)("inlineCode",{parentName:"p"},"A[1..n]"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"n = A.length"),". Since the maximum element of the array is stored at the root ",(0,i.kt)("inlineCode",{parentName:"p"},"A[1]"),", we can put it into its correct final position by exchanging it with ",(0,i.kt)("inlineCode",{parentName:"p"},"A[n]"),". If we now discard node ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," from the heap \u2014 and we can do so by simply decrementing ",(0,i.kt)("inlineCode",{parentName:"p"},"A.heapSize")," - we observe that the children of the root remain max-heaps, but the new root element might violate the max-heap property. All we need to do is to restore the max-heap property, however, is call ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify"),", which leaves a max-heap in ",(0,i.kt)("inlineCode",{parentName:"p"},"A[1..n-1]"),". The heapsort algorithm then repeats this process for the max-heap of size ",(0,i.kt)("inlineCode",{parentName:"p"},"n - 1")," down to a heap of size ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("p",null,"The heapsort procedure takes time ",(0,i.kt)("inlineCode",{parentName:"p"},"O(nlgn)")," since the call to ",(0,i.kt)("inlineCode",{parentName:"p"},"buildMaxHeap")," takes time ",(0,i.kt)("inlineCode",{parentName:"p"},"O(n)")," and each of the ",(0,i.kt)("inlineCode",{parentName:"p"},"n - 1")," calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeapify")," takes time ",(0,i.kt)("inlineCode",{parentName:"p"},"O(lgn)"),"."),(0,i.kt)("p",null,'Based on this data structure, we can build a sort algorithm called "heap sort". We have to build our heap from some dataset, and then starting from the first elements we put it in the first place and reduce the length with our heap, it remains in the array, but it is not part of the heap. Thus, each time we rebuild our heap, we will sort our array and each time we sort the smaller array. heapsort is thus executed for ',(0,i.kt)("inlineCode",{parentName:"p"},"nlgn"),"."),(0,i.kt)("p",null,"Figure 4.5"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Heap sort",src:a(4230).Z,width:"675",height:"629"})),(0,i.kt)("p",null,"We take the first element and remove it from the heap when we put it first in the array. The tree is automatically rebuilt, now we take the first one again and put it in second place, and so on, until the heap ceases to exist and our array is completely sorted."),(0,i.kt)("h2",{id:"45-priority-queue"},"4.5 Priority Queue"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"priority queue")," is a data structure for maintaining a set ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," of elements, each with an associated value called a ",(0,i.kt)("strong",{parentName:"p"},"key"),". A ",(0,i.kt)("strong",{parentName:"p"},"max-priority queue")," supports the following operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INSERT(S, x)")," inserts the element ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," into the set ",(0,i.kt)("inlineCode",{parentName:"li"},"S"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MAXIMUM(S)")," returns the element of ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," with the largest key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EXTRACT-MAX(S)")," removes and returns the element of ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," with the largest key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INCREASE-KEY(S, x, k)")," increases the value of element ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),"s key to the new value ",(0,i.kt)("inlineCode",{parentName:"li"},"k"),", which is assumed to be at least as large as ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),"s current key value.")),(0,i.kt)("p",null,"This is a very good sort, but in most cases it is not the most optimal sort. But for some reason we are considering it, and all because on the basis of the heap it is very good to build a queue with priority. This is how it is implemented in most programs. For example, where you can use this queue - schedule a job on the server or use an event-driven approach when modeling physical processes with great complexity. For example, an event occurs with a minimum priority, it is executed, the time is recalculated, inserted into the queue, and the event we need appears at the top. Also, there are queues with the highest priority or with the lowest. You can insert an element into it, you can take the maximum element, extract the maximum element, and you can change the priority of some element. For example, processor time, there is a queue of tasks that it executes in one clock cycle, it performs a task, the priority changes - we insert it into the queue and take it with the next priority."))}d.isMDXComponent=!0},5187:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heap_1-7a44aa8fb82dce6a7d4d470cab9a979f.png"},8730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heap_2-7915e4e11e0b3c17068ad1be69dd0445.png"},3089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heap_3-3000b36845c6140d05ab40296961aeb9.png"},1009:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heap_4-2e132f04bc4ad91f2ec3c4028f6c5735.png"},4230:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heap_sort-6a8f7e518a105278bbfe3c0eb1f0f2c2.png"}}]);