(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8974],{3483:(e,t,s)=>{Promise.resolve().then(s.bind(s,8856))},8856:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f,dynamic:()=>p});var r=s(5155),a=s(8173),i=s.n(a),o=s(5565),n=s(2115),l=s(9827),c=s(709);let d=(0,l.v)()((0,c.Zr)((e,t)=>({messages:[],isOpen:!1,isLoading:!1,addMessage:s=>{let{messages:r}=t();e({messages:[...r,s]})},setIsOpen:t=>e({isOpen:t}),setIsLoading:t=>e({isLoading:t}),clearMessages:()=>e({messages:[]})}),{name:"chatbot-storage"}));function m(){let{messages:e,addMessage:t,setIsOpen:s,isLoading:a,setIsLoading:i,clearMessages:o}=d(),[l,c]=(0,n.useState)(""),m=(0,n.useRef)(null);(0,n.useEffect)(()=>{var e;null===(e=m.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[e]);let h=async s=>{if(s.preventDefault(),!l.trim()||a)return;let r={role:"user",content:l};t(r),c(""),i(!0);try{let s=await fetch("/api/chatbot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[...e,r]})});if(!s.ok)throw Error("Failed to get response from chatbot");let a=await s.json();t({role:"assistant",content:a.response})}catch(e){console.error("Error sending message:",e),t({role:"assistant",content:"Sorry, I'm having trouble connecting right now. Please try again later."})}finally{i(!1)}};return(0,r.jsxs)("div",{className:"fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-lg border bg-white shadow-xl sm:w-[400px]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between border-b bg-gray-900 px-4 py-3 text-white",children:[(0,r.jsx)("h3",{className:"font-medium",children:"Customer Support"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("button",{onClick:()=>o(),className:"rounded-md p-1 hover:bg-gray-800","aria-label":"Clear chat",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M3 6h18"}),(0,r.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,r.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]})}),(0,r.jsx)("button",{onClick:()=>s(!1),className:"rounded-md p-1 hover:bg-gray-800","aria-label":"Close chat",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M18 6 6 18"}),(0,r.jsx)("path",{d:"m6 6 12 12"})]})})]})]}),(0,r.jsx)("div",{className:"flex-1 overflow-y-auto p-4",children:0===e.length?(0,r.jsxs)("div",{className:"flex h-full flex-col items-center justify-center text-center text-gray-500",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mb-4 h-12 w-12",children:(0,r.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),(0,r.jsx)("p",{className:"mb-2 font-medium",children:"How can I help you today?"}),(0,r.jsx)("p",{className:"text-sm",children:"Ask me about products, shipping, returns, or anything else you need assistance with."})]}):(0,r.jsxs)("div",{className:"space-y-4",children:[e.map((e,t)=>(0,r.jsx)("div",{className:"flex ".concat("user"===e.role?"justify-end":"justify-start"),children:(0,r.jsx)("div",{className:"max-w-[80%] rounded-lg px-4 py-2 ".concat("user"===e.role?"bg-gray-900 text-white":"bg-gray-100 text-gray-900"),children:(0,r.jsx)("p",{className:"whitespace-pre-wrap",children:e.content})})},t)),a&&(0,r.jsx)("div",{className:"flex justify-start",children:(0,r.jsx)("div",{className:"max-w-[80%] rounded-lg bg-gray-100 px-4 py-2 text-gray-900",children:(0,r.jsxs)("div",{className:"flex space-x-1",children:[(0,r.jsx)("div",{className:"h-2 w-2 animate-bounce rounded-full bg-gray-400"}),(0,r.jsx)("div",{className:"h-2 w-2 animate-bounce rounded-full bg-gray-400",style:{animationDelay:"0.2s"}}),(0,r.jsx)("div",{className:"h-2 w-2 animate-bounce rounded-full bg-gray-400",style:{animationDelay:"0.4s"}})]})})}),(0,r.jsx)("div",{ref:m})]})}),(0,r.jsx)("form",{onSubmit:h,className:"border-t p-4",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{type:"text",value:l,onChange:e=>c(e.target.value),placeholder:"Type your message...",className:"flex-1 rounded-l-md border border-r-0 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900",disabled:a}),(0,r.jsx)("button",{type:"submit",className:"rounded-r-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 disabled:opacity-50",disabled:a||!l.trim(),children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"m22 2-7 20-4-9-9-4Z"}),(0,r.jsx)("path",{d:"M22 2 11 13"})]})})]})})]})}function h(){let{isOpen:e,setIsOpen:t}=d();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>t(!0),className:"fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800","aria-label":"Open chat",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6",children:(0,r.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),e&&(0,r.jsx)(m,{})]})}var u=s(3697),g=s(7334),x=s(9615);let p="force-dynamic";function f(){let{addItem:e}=(0,g.x)(),{products:t}=(0,x.Q)(),s=t.filter(e=>e.isFeatured).slice(0,4),a=s.length>0?s:t.slice(0,4),l=t=>{e({id:(0,u.A)(),productId:t.id,name:t.name,price:"string"==typeof t.price?parseFloat(t.price):t.price,quantity:1,image:t.image||null})};return(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("section",{className:"relative bg-gray-900 py-24 text-white",children:(0,r.jsx)("div",{className:"container mx-auto px-4",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-12 md:grid-cols-2",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,r.jsx)("h1",{className:"mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl",children:"Discover Quality Products for Every Need"}),(0,r.jsx)("p",{className:"mb-8 text-lg text-gray-300",children:"Shop our curated collection of premium products with fast shipping and exceptional customer service."}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,r.jsx)(i(),{href:"/products",className:"rounded-md bg-white px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-100",children:"Shop Now"}),(0,r.jsx)(i(),{href:"/categories",className:"rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10",children:"Browse Categories"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("div",{className:"relative h-80 w-full max-w-md overflow-hidden rounded-lg md:h-96",children:(0,r.jsx)(o.default,{src:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60",alt:"Hero image showing various products",fill:!0,priority:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, 50vw"})})})]})})}),(0,r.jsx)("section",{className:"py-16",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsx)("h2",{className:"mb-12 text-center text-3xl font-bold",children:"Shop by Category"}),(0,r.jsx)("div",{className:"grid grid-cols-2 gap-6 md:grid-cols-4",children:[{name:"Electronics",image:"https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60"},{name:"Clothing",image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=60"},{name:"Home & Kitchen",image:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60"},{name:"Beauty",image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60"}].map((e,t)=>(0,r.jsxs)(i(),{href:"/categories/".concat(e.name.toLowerCase().replace(/\s+/g,"-")),className:"group overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md",children:[(0,r.jsx)("div",{className:"aspect-square w-full bg-gray-100 relative",children:(0,r.jsx)(o.default,{src:e.image,alt:"".concat(e.name," category"),fill:!0,sizes:"(max-width: 768px) 50vw, 25vw",className:"object-cover transition-transform group-hover:scale-105"})}),(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:e.name}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Shop Now →"})]})]},t))})]})}),(0,r.jsx)("section",{className:"bg-gray-50 py-16",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsx)("h2",{className:"mb-8 text-2xl font-bold",children:"Featured Products"}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",children:a.map(e=>(0,r.jsxs)(i(),{href:"/shop/products/".concat(e.id),className:"group overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md",children:[(0,r.jsx)("div",{className:"aspect-square w-full bg-gray-100 relative overflow-hidden",children:e.image&&""!==e.image.trim()?(0,r.jsx)(o.default,{src:e.image,alt:e.name,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",className:"object-cover"}):(0,r.jsx)("div",{className:"flex h-full w-full items-center justify-center bg-gray-200",children:(0,r.jsx)("span",{className:"text-gray-400",children:"No image"})})}),(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:e.name}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:e.categoryName||e.category}),(0,r.jsxs)("div",{className:"mt-2 flex items-center justify-between",children:[(0,r.jsxs)("span",{className:"text-lg font-bold",children:["$","string"==typeof e.price?parseFloat(e.price).toFixed(2):e.price.toFixed(2)]}),(0,r.jsx)("button",{onClick:t=>{t.preventDefault(),l(e)},className:"rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800",children:"Add to Cart"})]})]})]},e.id))}),(0,r.jsx)("div",{className:"mt-12 text-center",children:(0,r.jsx)(i(),{href:"/shop/products",className:"rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800",children:"View All Products"})})]})}),(0,r.jsx)("section",{className:"py-16",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsx)("h2",{className:"mb-12 text-center text-3xl font-bold",children:"Why Shop With Us"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-3",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,r.jsx)("div",{className:"mb-4 rounded-full bg-gray-100 p-4",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6",children:[(0,r.jsx)("path",{d:"M5 12.55a11 11 0 0 1 14.08 0"}),(0,r.jsx)("path",{d:"M1.42 9a16 16 0 0 1 21.16 0"}),(0,r.jsx)("path",{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}),(0,r.jsx)("line",{x1:"12",y1:"20",x2:"12",y2:"20"})]})}),(0,r.jsx)("h3",{className:"mb-2 text-xl font-medium",children:"Free Shipping"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Enjoy free shipping on all orders over $50. No minimum purchase required."})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,r.jsx)("div",{className:"mb-4 rounded-full bg-gray-100 p-4",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6",children:(0,r.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),(0,r.jsx)("h3",{className:"mb-2 text-xl font-medium",children:"Secure Payments"}),(0,r.jsx)("p",{className:"text-gray-600",children:"All transactions are secure and encrypted. Shop with confidence."})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,r.jsx)("div",{className:"mb-4 rounded-full bg-gray-100 p-4",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6",children:(0,r.jsx)("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})})}),(0,r.jsx)("h3",{className:"mb-2 text-xl font-medium",children:"24/7 Support"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Our customer support team is available 24/7 to assist you with any questions."})]})]})]})}),(0,r.jsx)("section",{className:"bg-gray-50 py-16",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsx)("h2",{className:"mb-12 text-center text-3xl font-bold",children:"What Our Customers Say"}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-3",children:[{name:"Sarah Johnson",text:"I've been shopping here for years and the quality of products and service is consistently excellent. Highly recommend!"},{name:"Michael Chen",text:"Fast shipping and great customer service. The products are exactly as described and the prices are competitive."},{name:"Emily Rodriguez",text:"The variety of products is amazing and the website is so easy to navigate. Will definitely be a repeat customer!"}].map((e,t)=>(0,r.jsxs)("div",{className:"rounded-lg bg-white p-6 shadow-sm",children:[(0,r.jsx)("div",{className:"mb-4 flex",children:[1,2,3,4,5].map(e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",className:"h-5 w-5 text-yellow-400",children:(0,r.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})},e))}),(0,r.jsxs)("p",{className:"mb-4 text-gray-600",children:['"',e.text,'"']}),(0,r.jsx)("p",{className:"font-medium",children:e.name})]},t))})]})}),(0,r.jsx)("section",{className:"py-16",children:(0,r.jsx)("div",{className:"container mx-auto px-4",children:(0,r.jsxs)("div",{className:"rounded-lg bg-gray-900 p-8 text-center text-white md:p-12",children:[(0,r.jsx)("h2",{className:"mb-4 text-3xl font-bold",children:"Join Our Newsletter"}),(0,r.jsx)("p",{className:"mb-6 text-gray-300",children:"Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals."}),(0,r.jsxs)("form",{className:"mx-auto flex max-w-md flex-col gap-2 sm:flex-row",children:[(0,r.jsx)("input",{type:"email",placeholder:"Your email address",className:"w-full rounded-md border-0 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"}),(0,r.jsx)("button",{type:"submit",className:"rounded-md bg-white px-6 py-2 font-medium text-gray-900 hover:bg-gray-100",children:"Subscribe"})]})]})})}),(0,r.jsx)(n.Suspense,{fallback:null,children:(0,r.jsx)(h,{})})]})}},9615:(e,t,s)=>{"use strict";s.d(t,{ProductProvider:()=>n,Q:()=>l});var r=s(5155),a=s(2115);let i=(0,a.createContext)(void 0),o=[{id:"1",name:"Wireless Headphones",description:"Premium wireless headphones with noise cancellation",price:199.99,category:"electronics",categoryName:"Electronics",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",stock:100,isFeatured:!0,isOnSale:!1},{id:"2",name:"Smart Watch",description:"Track your fitness and stay connected",price:249.99,category:"electronics",categoryName:"Electronics",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",stock:50,isFeatured:!1,isOnSale:!0}];function n(e){let{children:t}=e,[s,n]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(()=>{try{let e=localStorage.getItem("products");e?n(JSON.parse(e)):(n(o),localStorage.setItem("products",JSON.stringify(o)))}catch(e){console.error("Error loading products:",e),n(o)}})()},[]),(0,a.useEffect)(()=>{let e=localStorage.getItem("adminUpdatedProducts");if(e)try{let t=JSON.parse(e),r=[...s];t.forEach(e=>{let t=r.findIndex(t=>t.id===e.id);-1!==t?r[t]=e:r.push(e)}),n(r),localStorage.setItem("products",JSON.stringify(r)),localStorage.removeItem("adminUpdatedProducts")}catch(e){console.error("Error syncing admin products:",e)}},[s]),(0,r.jsx)(i.Provider,{value:{products:s,addProduct:e=>{let t=[...s,e];n(t),localStorage.setItem("products",JSON.stringify(t))},updateProduct:e=>{let t=s.map(t=>t.id===e.id?e:t);n(t),localStorage.setItem("products",JSON.stringify(t))},deleteProduct:e=>{let t=s.filter(t=>t.id!==e);n(t),localStorage.setItem("products",JSON.stringify(t))},getProduct:e=>s.find(t=>t.id===e),refreshProducts:()=>{try{let e=localStorage.getItem("products");e&&n(JSON.parse(e))}catch(e){console.error("Error refreshing products:",e)}}},children:t})}function l(){let e=(0,a.useContext)(i);if(void 0===e)throw Error("useProducts must be used within a ProductProvider");return e}},7334:(e,t,s)=>{"use strict";s.d(t,{x:()=>i});var r=s(9827),a=s(709);let i=(0,r.v)()((0,a.Zr)((e,t)=>({items:[],addItem:s=>{let{items:r}=t();r.find(e=>e.productId===s.productId&&e.variantId===s.variantId)?e({items:r.map(e=>e.productId===s.productId&&e.variantId===s.variantId?{...e,quantity:e.quantity+s.quantity}:e)}):e({items:[...r,s]})},removeItem:s=>{let{items:r}=t();e({items:r.filter(e=>e.id!==s)})},updateQuantity:(s,r)=>{let{items:a}=t();e({items:a.map(e=>e.id===s?{...e,quantity:r}:e)})},clearCart:()=>e({items:[]}),getTotalItems:()=>{let{items:e}=t();return e.reduce((e,t)=>e+t.quantity,0)},getTotalPrice:()=>{let{items:e}=t();return e.reduce((e,t)=>e+t.price*t.quantity,0)}}),{name:"cart-storage"}))},3697:(e,t,s)=>{"use strict";let r;s.d(t,{A:()=>n});let a={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},i=new Uint8Array(16),o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));let n=function(e,t,s){if(a.randomUUID&&!t&&!e)return a.randomUUID();let n=(e=e||{}).random??e.rng?.()??function(){if(!r){if("undefined"==typeof crypto||!crypto.getRandomValues)throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");r=crypto.getRandomValues.bind(crypto)}return r(i)}();if(n.length<16)throw Error("Random bytes length must be >= 16");if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){if((s=s||0)<0||s+16>t.length)throw RangeError(`UUID byte range ${s}:${s+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[s+e]=n[e];return t}return function(e,t=0){return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}(n)}},709:(e,t,s)=>{"use strict";s.d(t,{Zr:()=>a});let r=e=>t=>{try{let s=e(t);if(s instanceof Promise)return s;return{then:e=>r(e)(s),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>r(t)(e)}}},a=(e,t)=>(s,a,i)=>{let o,n={storage:function(e,t){let s;try{s=e()}catch(e){return}return{getItem:e=>{var t;let r=e=>null===e?null:JSON.parse(e,void 0),a=null!=(t=s.getItem(e))?t:null;return a instanceof Promise?a.then(r):r(a)},setItem:(e,t)=>s.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>s.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,d=new Set,m=n.storage;if(!m)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`),s(...e)},a,i);let h=()=>{let e=n.partialize({...a()});return m.setItem(n.name,{state:e,version:n.version})},u=i.setState;i.setState=(e,t)=>{u(e,t),h()};let g=e((...e)=>{s(...e),h()},a,i);i.getInitialState=()=>g;let x=()=>{var e,t;if(!m)return;l=!1,c.forEach(e=>{var t;return e(null!=(t=a())?t:g)});let i=(null==(t=n.onRehydrateStorage)?void 0:t.call(n,null!=(e=a())?e:g))||void 0;return r(m.getItem.bind(m))(n.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===n.version)return[!1,e.state];if(n.migrate){let t=n.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;let[r,i]=e;if(s(o=n.merge(i,null!=(t=a())?t:g),!0),r)return h()}).then(()=>{null==i||i(o,void 0),o=a(),l=!0,d.forEach(e=>e(o))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{n={...n,...e},e.storage&&(m=e.storage)},clearStorage:()=>{null==m||m.removeItem(n.name)},getOptions:()=>n,rehydrate:()=>x(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},n.skipHydration||x(),o||g}},9827:(e,t,s)=>{"use strict";s.d(t,{v:()=>l});var r=s(2115);let a=e=>{let t;let s=new Set,r=(e,r)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=r?r:"object"!=typeof a||null===a)?a:Object.assign({},t,a),s.forEach(s=>s(t,e))}},a=()=>t,i={setState:r,getState:a,getInitialState:()=>o,subscribe:e=>(s.add(e),()=>s.delete(e))},o=t=e(r,a,i);return i},i=e=>e?a(e):a,o=e=>e,n=e=>{let t=i(e),s=e=>(function(e,t=o){let s=r.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return r.useDebugValue(s),s})(t,e);return Object.assign(s,t),s},l=e=>e?n(e):n}},e=>{var t=t=>e(e.s=t);e.O(0,[8173,5565,8441,1517,7358],()=>t(3483)),_N_E=e.O()}]);