(()=>{var e={};e.id=3571,e.ids=[3571],e.modules={96330:e=>{"use strict";e.exports=require("@prisma/client")},5486:e=>{"use strict";e.exports=require("bcrypt")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},33873:e=>{"use strict";e.exports=require("path")},11723:e=>{"use strict";e.exports=require("querystring")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},90785:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>c});var s=t(70260),o=t(28203),a=t(25155),i=t.n(a),n=t(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let c=["",{children:["products",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,26648)),"/Users/tikaram/Downloads/projects/Cline/ecommerce/src/app/products/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"/Users/tikaram/Downloads/projects/Cline/ecommerce/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/tikaram/Downloads/projects/Cline/ecommerce/src/app/products/page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/products/page",pathname:"/products",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},89828:(e,r,t)=>{Promise.resolve().then(t.bind(t,26648))},71268:(e,r,t)=>{Promise.resolve().then(t.bind(t,87540))},87540:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var s=t(45512),o=t(58009),a=t(28531),i=t.n(a),n=t(45103),l=t(90993),c=t(18569),d=t(13989),p=t(47344);function u(){let{products:e}=(0,d.Q)(),{data:r}=(0,l.useSession)(),{addItem:t}=(0,p.x)(),[a,u]=(0,o.useState)(1),[m,x]=(0,o.useState)(""),[h,g]=(0,o.useState)("name"),[f,v]=(0,o.useState)("asc"),b=e.filter(e=>""===m||e.name.toLowerCase().includes(m.toLowerCase())||e.description.toLowerCase().includes(m.toLowerCase())||e.categoryName.toLowerCase().includes(m.toLowerCase())).sort((e,r)=>{let t=e[h],s=r[h];return"string"==typeof t&&"string"==typeof s?"asc"===f?t.localeCompare(s):s.localeCompare(t):"asc"===f?Number(t)-Number(s):Number(s)-Number(t)}),y=Math.ceil(b.length/12),w=b.slice((a-1)*12,12*a),j=e=>{u(e),window.scrollTo({top:0,behavior:"smooth"})},N=(e,r)=>{e.preventDefault(),e.stopPropagation(),t({id:`${r.id}-${Date.now()}`,productId:r.id,name:r.name,price:"string"==typeof r.price?parseFloat(r.price):r.price,image:r.image,quantity:1})};return(0,s.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,s.jsx)("h1",{className:"mb-8 text-3xl font-bold",children:"All Products"}),(0,s.jsxs)("div",{className:"mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:"text",placeholder:"Search products...",value:m,onChange:e=>{x(e.target.value),u(1)},className:"w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:w-64"}),(0,s.jsx)("svg",{className:"absolute left-3 top-2.5 h-5 w-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)("label",{htmlFor:"sort",className:"text-sm font-medium text-gray-700",children:"Sort by:"}),(0,s.jsxs)("select",{id:"sort",value:`${h}-${f}`,onChange:e=>{let r=e.target.value;"price-asc"===r?(g("price"),v("asc")):"price-desc"===r?(g("price"),v("desc")):"name-asc"===r?(g("name"),v("asc")):"name-desc"===r&&(g("name"),v("desc"))},className:"rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500",children:[(0,s.jsx)("option",{value:"name-asc",children:"Name (A-Z)"}),(0,s.jsx)("option",{value:"name-desc",children:"Name (Z-A)"}),(0,s.jsx)("option",{value:"price-asc",children:"Price (Low to High)"}),(0,s.jsx)("option",{value:"price-desc",children:"Price (High to Low)"})]})]})]}),0===b.length?(0,s.jsx)("div",{className:"my-12 text-center",children:(0,s.jsx)("p",{className:"text-lg text-gray-600",children:"No products found matching your criteria."})}):(0,s.jsx)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:w.map(e=>(0,s.jsxs)(i(),{href:`/products/${e.id}`,className:"group overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md",children:[(0,s.jsxs)("div",{className:"aspect-square w-full relative bg-gray-100",children:[e.image&&(0,s.jsx)(n.default,{src:e.image,alt:e.name,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",className:"object-cover"}),r?.user?.role===c.X.ADMIN&&(0,s.jsx)("div",{className:"absolute right-2 top-2 z-10",onClick:e=>e.stopPropagation(),children:(0,s.jsx)("button",{onClick:r=>{r.preventDefault(),r.stopPropagation(),window.location.href=`/admin/products/edit/${e.id}`},className:"flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100",children:(0,s.jsx)("svg",{className:"h-4 w-4 text-gray-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})})})})]}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("h3",{className:"text-lg font-medium",children:e.name}),(0,s.jsx)("p",{className:"mt-1 text-sm text-gray-500 line-clamp-2",children:e.description}),(0,s.jsxs)("div",{className:"mt-2 flex items-center justify-between",children:[(0,s.jsxs)("span",{className:"text-lg font-bold",children:["$","string"==typeof e.price?parseFloat(e.price).toFixed(2):e.price.toFixed(2)]}),(0,s.jsx)("button",{onClick:r=>N(r,e),className:"rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800",children:"Add to Cart"})]})]})]},e.id))}),y>1&&(0,s.jsx)("div",{className:"mt-8 flex justify-center",children:(0,s.jsxs)("nav",{className:"flex items-center space-x-2",children:[(0,s.jsx)("button",{onClick:()=>j(Math.max(1,a-1)),disabled:1===a,className:"rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50",children:"Previous"}),Array.from({length:y},(e,r)=>r+1).map(e=>(0,s.jsx)("button",{onClick:()=>j(e),className:`rounded-md px-3 py-2 text-sm font-medium ${a===e?"bg-gray-900 text-white":"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"}`,children:e},e)),(0,s.jsx)("button",{onClick:()=>j(Math.min(y,a+1)),disabled:a===y,className:"rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50",children:"Next"})]})})]})}},18569:(e,r,t)=>{"use strict";t.d(r,{X:()=>s});var s=function(e){return e.USER="USER",e.ADMIN="ADMIN",e}({})},26648:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/tikaram/Downloads/projects/Cline/ecommerce/src/app/products/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/tikaram/Downloads/projects/Cline/ecommerce/src/app/products/page.tsx","default")},70440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(88077);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,5646,1831,5013,8077,5103,4768],()=>t(90785));module.exports=s})();