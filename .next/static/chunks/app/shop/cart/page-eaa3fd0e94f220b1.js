(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{9519:(e,t,s)=>{Promise.resolve().then(s.bind(s,2316))},2316:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5155),a=s(2115),n=s(8173),l=s.n(n),i=s(7334);function d(){let{items:e,removeItem:t,updateQuantity:s,getTotalItems:n,getTotalPrice:d}=(0,i.x)(),[c,o]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{o(!0)},[]),c)?0===e.length?(0,r.jsxs)("div",{className:"container mx-auto px-4 py-16 text-center",children:[(0,r.jsx)("h1",{className:"mb-4 text-2xl font-bold",children:"Your Cart is Empty"}),(0,r.jsx)("p",{className:"mb-8",children:"Looks like you haven't added any products to your cart yet."}),(0,r.jsx)(l(),{href:"/products",className:"rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800",children:"Continue Shopping"})]}):(0,r.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,r.jsx)("h1",{className:"mb-8 text-3xl font-bold",children:"Shopping Cart"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-8 lg:grid-cols-12",children:[(0,r.jsxs)("div",{className:"lg:col-span-8",children:[(0,r.jsxs)("div",{className:"rounded-lg border",children:[(0,r.jsx)("div",{className:"border-b px-6 py-4",children:(0,r.jsxs)("h2",{className:"text-lg font-medium",children:["Cart Items (",n(),")"]})}),(0,r.jsx)("ul",{className:"divide-y",children:e.map(e=>(0,r.jsx)("li",{className:"p-6",children:(0,r.jsxs)("div",{className:"flex flex-col gap-4 sm:flex-row",children:[(0,r.jsx)("div",{className:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100"}),(0,r.jsxs)("div",{className:"flex flex-1 flex-col",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-base font-medium",children:e.name}),e.variantName&&(0,r.jsxs)("p",{className:"mt-1 text-sm text-gray-500",children:["Variant: ",e.variantName]}),(0,r.jsxs)("p",{className:"mt-1 text-sm text-gray-500",children:["$",e.price.toFixed(2)," each"]})]}),(0,r.jsxs)("p",{className:"text-base font-medium",children:["$",(e.price*e.quantity).toFixed(2)]})]}),(0,r.jsxs)("div",{className:"mt-4 flex flex-1 items-end justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center border",children:[(0,r.jsx)("button",{className:"flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-100",onClick:()=>s(e.id,Math.max(1,e.quantity-1)),children:"-"}),(0,r.jsx)("input",{type:"number",min:"1",value:e.quantity,onChange:t=>s(e.id,Math.max(1,parseInt(t.target.value)||1)),className:"h-8 w-12 border-x text-center"}),(0,r.jsx)("button",{className:"flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-100",onClick:()=>s(e.id,e.quantity+1),children:"+"})]}),(0,r.jsx)("button",{type:"button",className:"text-sm font-medium text-gray-500 hover:text-gray-700",onClick:()=>t(e.id),children:"Remove"})]})]})]})},e.id))})]}),(0,r.jsxs)("div",{className:"mt-6 flex justify-between",children:[(0,r.jsx)(l(),{href:"/products",className:"text-sm font-medium text-gray-900 hover:underline",children:"← Continue Shopping"}),(0,r.jsx)("button",{type:"button",className:"text-sm font-medium text-gray-500 hover:text-gray-700",onClick:()=>i.x.getState().clearCart(),children:"Clear Cart"})]})]}),(0,r.jsxs)("div",{className:"lg:col-span-4",children:[(0,r.jsxs)("div",{className:"rounded-lg border",children:[(0,r.jsx)("div",{className:"border-b px-6 py-4",children:(0,r.jsx)("h2",{className:"text-lg font-medium",children:"Order Summary"})}),(0,r.jsxs)("div",{className:"px-6 py-4",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Subtotal"}),(0,r.jsxs)("p",{className:"text-sm font-medium",children:["$",d().toFixed(2)]})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Shipping"}),(0,r.jsx)("p",{className:"text-sm font-medium",children:"Calculated at checkout"})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Tax"}),(0,r.jsx)("p",{className:"text-sm font-medium",children:"Calculated at checkout"})]}),(0,r.jsx)("div",{className:"border-t pt-4",children:(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("p",{className:"text-base font-medium",children:"Order Total"}),(0,r.jsxs)("p",{className:"text-base font-medium",children:["$",d().toFixed(2)]})]})})]}),(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsx)(l(),{href:"/checkout",className:"block w-full rounded-md bg-gray-900 px-6 py-3 text-center text-base font-medium text-white hover:bg-gray-800",children:"Proceed to Checkout"})})]})]}),(0,r.jsxs)("div",{className:"mt-6 rounded-lg border",children:[(0,r.jsx)("div",{className:"border-b px-6 py-4",children:(0,r.jsx)("h2",{className:"text-lg font-medium",children:"Promo Code"})}),(0,r.jsx)("div",{className:"px-6 py-4",children:(0,r.jsxs)("form",{className:"flex",children:[(0,r.jsx)("input",{type:"text",placeholder:"Enter promo code",className:"flex-1 rounded-l-md border border-r-0 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"}),(0,r.jsx)("button",{type:"submit",className:"rounded-r-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800",children:"Apply"})]})})]})]})]})]}):null}},7334:(e,t,s)=>{"use strict";s.d(t,{x:()=>n});var r=s(9827),a=s(709);let n=(0,r.v)()((0,a.Zr)((e,t)=>({items:[],addItem:s=>{let{items:r}=t();r.find(e=>e.productId===s.productId&&e.variantId===s.variantId)?e({items:r.map(e=>e.productId===s.productId&&e.variantId===s.variantId?{...e,quantity:e.quantity+s.quantity}:e)}):e({items:[...r,s]})},removeItem:s=>{let{items:r}=t();e({items:r.filter(e=>e.id!==s)})},updateQuantity:(s,r)=>{let{items:a}=t();e({items:a.map(e=>e.id===s?{...e,quantity:r}:e)})},clearCart:()=>e({items:[]}),getTotalItems:()=>{let{items:e}=t();return e.reduce((e,t)=>e+t.quantity,0)},getTotalPrice:()=>{let{items:e}=t();return e.reduce((e,t)=>e+t.price*t.quantity,0)}}),{name:"cart-storage"}))},709:(e,t,s)=>{"use strict";s.d(t,{Zr:()=>a});let r=e=>t=>{try{let s=e(t);if(s instanceof Promise)return s;return{then:e=>r(e)(s),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>r(t)(e)}}},a=(e,t)=>(s,a,n)=>{let l,i={storage:function(e,t){let s;try{s=e()}catch(e){return}return{getItem:e=>{var t;let r=e=>null===e?null:JSON.parse(e,void 0),a=null!=(t=s.getItem(e))?t:null;return a instanceof Promise?a.then(r):r(a)},setItem:(e,t)=>s.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>s.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},d=!1,c=new Set,o=new Set,m=i.storage;if(!m)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),s(...e)},a,n);let u=()=>{let e=i.partialize({...a()});return m.setItem(i.name,{state:e,version:i.version})},x=n.setState;n.setState=(e,t)=>{x(e,t),u()};let h=e((...e)=>{s(...e),u()},a,n);n.getInitialState=()=>h;let p=()=>{var e,t;if(!m)return;d=!1,c.forEach(e=>{var t;return e(null!=(t=a())?t:h)});let n=(null==(t=i.onRehydrateStorage)?void 0:t.call(i,null!=(e=a())?e:h))||void 0;return r(m.getItem.bind(m))(i.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===i.version)return[!1,e.state];if(i.migrate){let t=i.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;let[r,n]=e;if(s(l=i.merge(n,null!=(t=a())?t:h),!0),r)return u()}).then(()=>{null==n||n(l,void 0),l=a(),d=!0,o.forEach(e=>e(l))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{i={...i,...e},e.storage&&(m=e.storage)},clearStorage:()=>{null==m||m.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>p(),hasHydrated:()=>d,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(o.add(e),()=>{o.delete(e)})},i.skipHydration||p(),l||h}},9827:(e,t,s)=>{"use strict";s.d(t,{v:()=>d});var r=s(2115);let a=e=>{let t;let s=new Set,r=(e,r)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=r?r:"object"!=typeof a||null===a)?a:Object.assign({},t,a),s.forEach(s=>s(t,e))}},a=()=>t,n={setState:r,getState:a,getInitialState:()=>l,subscribe:e=>(s.add(e),()=>s.delete(e))},l=t=e(r,a,n);return n},n=e=>e?a(e):a,l=e=>e,i=e=>{let t=n(e),s=e=>(function(e,t=l){let s=r.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return r.useDebugValue(s),s})(t,e);return Object.assign(s,t),s},d=e=>e?i(e):i}},e=>{var t=t=>e(e.s=t);e.O(0,[8173,8441,1517,7358],()=>t(9519)),_N_E=e.O()}]);