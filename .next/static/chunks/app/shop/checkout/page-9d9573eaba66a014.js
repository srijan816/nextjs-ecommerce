(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7060],{6621:(e,t,s)=>{Promise.resolve().then(s.bind(s,4991))},4991:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(5155),a=s(2115),l=s(8173),d=s.n(l),i=s(7334);function n(){let{items:e,getTotalItems:t,getTotalPrice:s}=(0,i.x)(),[l,n]=(0,a.useState)(!1),[c,o]=(0,a.useState)(1),[m,u]=(0,a.useState)(""),[x,h]=(0,a.useState)(""),[g,y]=(0,a.useState)(""),[p,f]=(0,a.useState)(""),[b,j]=(0,a.useState)(""),[v,N]=(0,a.useState)(""),[w,S]=(0,a.useState)(""),[k,C]=(0,a.useState)(""),[I,F]=(0,a.useState)("United States"),[q,P]=(0,a.useState)(""),[O,E]=(0,a.useState)("credit-card"),[Y,$]=(0,a.useState)(""),[T,U]=(0,a.useState)(""),[_,z]=(0,a.useState)(""),[A,D]=(0,a.useState)(""),[M,H]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{n(!0)},[]),!l)return null;if(0===e.length)return(0,r.jsxs)("div",{className:"container mx-auto px-4 py-16 text-center",children:[(0,r.jsx)("h1",{className:"mb-4 text-2xl font-bold",children:"Your Cart is Empty"}),(0,r.jsx)("p",{className:"mb-8",children:"You need to add items to your cart before checking out."}),(0,r.jsx)(d(),{href:"/products",className:"rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800",children:"Browse Products"})]});let J=t=>{t.preventDefault(),1===c?(o(2),window.scrollTo(0,0)):2===c&&(o(3),window.scrollTo(0,0),console.log("Order submitted:",{customer:{email:m,firstName:x,lastName:g,address:p,apartment:b,city:v,state:w,zipCode:k,country:I,phone:q},payment:{method:O,cardNumber:Y,cardName:T,expiryDate:_,cvv:A},items:e,total:s()}))};return(0,r.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)(d(),{href:"/cart",className:"text-sm text-gray-600 hover:underline",children:"← Back to Cart"})}),(0,r.jsx)("h1",{className:"mb-8 text-3xl font-bold",children:"Checkout"}),(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsxs)("div",{className:"flex w-full max-w-3xl items-center",children:[(0,r.jsxs)("div",{className:"flex flex-1 flex-col items-center",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-full ".concat(c>=1?"bg-gray-900 text-white":"border-2 border-gray-300 text-gray-500"),children:"1"}),(0,r.jsx)("p",{className:"mt-2 text-sm font-medium",children:"Shipping"})]}),(0,r.jsx)("div",{className:"flex-1 border-t-2 border-gray-300"}),(0,r.jsxs)("div",{className:"flex flex-1 flex-col items-center",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-full ".concat(c>=2?"bg-gray-900 text-white":"border-2 border-gray-300 text-gray-500"),children:"2"}),(0,r.jsx)("p",{className:"mt-2 text-sm font-medium",children:"Payment"})]}),(0,r.jsx)("div",{className:"flex-1 border-t-2 border-gray-300"}),(0,r.jsxs)("div",{className:"flex flex-1 flex-col items-center",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-full ".concat(c>=3?"bg-gray-900 text-white":"border-2 border-gray-300 text-gray-500"),children:"3"}),(0,r.jsx)("p",{className:"mt-2 text-sm font-medium",children:"Confirmation"})]})]})})}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-8 lg:grid-cols-12",children:[(0,r.jsxs)("div",{className:"lg:col-span-8",children:[1===c&&(0,r.jsxs)("div",{className:"rounded-lg border",children:[(0,r.jsx)("div",{className:"border-b px-6 py-4",children:(0,r.jsx)("h2",{className:"text-lg font-medium",children:"Shipping Information"})}),(0,r.jsx)("div",{className:"p-6",children:(0,r.jsxs)("form",{onSubmit:J,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email Address"}),(0,r.jsx)("input",{type:"email",id:"email",value:m,onChange:e=>u(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"firstName",className:"block text-sm font-medium text-gray-700",children:"First Name"}),(0,r.jsx)("input",{type:"text",id:"firstName",value:x,onChange:e=>h(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"lastName",className:"block text-sm font-medium text-gray-700",children:"Last Name"}),(0,r.jsx)("input",{type:"text",id:"lastName",value:g,onChange:e=>y(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"address",className:"block text-sm font-medium text-gray-700",children:"Address"}),(0,r.jsx)("input",{type:"text",id:"address",value:p,onChange:e=>f(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"apartment",className:"block text-sm font-medium text-gray-700",children:"Apartment, suite, etc. (optional)"}),(0,r.jsx)("input",{type:"text",id:"apartment",value:b,onChange:e=>j(e.target.value),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"city",className:"block text-sm font-medium text-gray-700",children:"City"}),(0,r.jsx)("input",{type:"text",id:"city",value:v,onChange:e=>N(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"state",className:"block text-sm font-medium text-gray-700",children:"State / Province"}),(0,r.jsx)("input",{type:"text",id:"state",value:w,onChange:e=>S(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"zipCode",className:"block text-sm font-medium text-gray-700",children:"ZIP / Postal Code"}),(0,r.jsx)("input",{type:"text",id:"zipCode",value:k,onChange:e=>C(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"country",className:"block text-sm font-medium text-gray-700",children:"Country"}),(0,r.jsxs)("select",{id:"country",value:I,onChange:e=>F(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900",children:[(0,r.jsx)("option",{value:"United States",children:"United States"}),(0,r.jsx)("option",{value:"Canada",children:"Canada"}),(0,r.jsx)("option",{value:"United Kingdom",children:"United Kingdom"}),(0,r.jsx)("option",{value:"Australia",children:"Australia"}),(0,r.jsx)("option",{value:"Germany",children:"Germany"}),(0,r.jsx)("option",{value:"France",children:"France"}),(0,r.jsx)("option",{value:"Japan",children:"Japan"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone Number"}),(0,r.jsx)("input",{type:"tel",id:"phone",value:q,onChange:e=>P(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"saveInfo",type:"checkbox",checked:M,onChange:e=>H(e.target.checked),className:"h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"}),(0,r.jsx)("label",{htmlFor:"saveInfo",className:"ml-2 block text-sm text-gray-700",children:"Save this information for next time"})]}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)("button",{type:"submit",className:"rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800",children:"Continue to Payment"})})]})})]}),2===c&&(0,r.jsxs)("div",{className:"rounded-lg border",children:[(0,r.jsx)("div",{className:"border-b px-6 py-4",children:(0,r.jsx)("h2",{className:"text-lg font-medium",children:"Payment Information"})}),(0,r.jsx)("div",{className:"p-6",children:(0,r.jsxs)("form",{onSubmit:J,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Payment Method"}),(0,r.jsxs)("div",{className:"mt-2 space-y-2",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"credit-card",name:"payment-method",type:"radio",value:"credit-card",checked:"credit-card"===O,onChange:()=>E("credit-card"),className:"h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900"}),(0,r.jsx)("label",{htmlFor:"credit-card",className:"ml-2 block text-sm text-gray-700",children:"Credit Card"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"paypal",name:"payment-method",type:"radio",value:"paypal",checked:"paypal"===O,onChange:()=>E("paypal"),className:"h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900"}),(0,r.jsx)("label",{htmlFor:"paypal",className:"ml-2 block text-sm text-gray-700",children:"PayPal"})]})]})]}),"credit-card"===O&&(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"cardNumber",className:"block text-sm font-medium text-gray-700",children:"Card Number"}),(0,r.jsx)("input",{type:"text",id:"cardNumber",value:Y,onChange:e=>$(e.target.value),placeholder:"1234 5678 9012 3456",required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"cardName",className:"block text-sm font-medium text-gray-700",children:"Name on Card"}),(0,r.jsx)("input",{type:"text",id:"cardName",value:T,onChange:e=>U(e.target.value),required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"expiryDate",className:"block text-sm font-medium text-gray-700",children:"Expiry Date (MM/YY)"}),(0,r.jsx)("input",{type:"text",id:"expiryDate",value:_,onChange:e=>z(e.target.value),placeholder:"MM/YY",required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"cvv",className:"block text-sm font-medium text-gray-700",children:"CVV"}),(0,r.jsx)("input",{type:"text",id:"cvv",value:A,onChange:e=>D(e.target.value),placeholder:"123",required:!0,className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900"})]})]})]}),"paypal"===O&&(0,r.jsx)("div",{className:"rounded-md bg-blue-50 p-4 text-sm text-blue-700",children:"You will be redirected to PayPal to complete your payment after reviewing your order."})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("button",{type:"button",onClick:()=>o(1),className:"rounded-md border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50",children:"Back to Shipping"}),(0,r.jsx)("button",{type:"submit",className:"rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800",children:"Review Order"})]})]})})]}),3===c&&(0,r.jsxs)("div",{className:"rounded-lg border",children:[(0,r.jsx)("div",{className:"border-b px-6 py-4",children:(0,r.jsx)("h2",{className:"text-lg font-medium",children:"Order Confirmation"})}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsxs)("div",{className:"rounded-md bg-green-50 p-4 text-sm text-green-700",children:[(0,r.jsx)("p",{className:"font-medium",children:"Thank you for your order!"}),(0,r.jsx)("p",{className:"mt-2",children:"Your order has been placed and will be processed shortly. You will receive an email confirmation with your order details."})]}),(0,r.jsxs)("div",{className:"mt-8 space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:"Order Summary"}),(0,r.jsx)("div",{className:"mt-4 rounded-md border",children:(0,r.jsx)("ul",{className:"divide-y",children:e.map(e=>(0,r.jsx)("li",{className:"p-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100"}),(0,r.jsxs)("div",{className:"ml-4",children:[(0,r.jsx)("p",{className:"text-sm font-medium",children:e.name}),e.variantName&&(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Variant: ",e.variantName]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Qty: ",e.quantity," \xd7 $",e.price.toFixed(2)]})]})]}),(0,r.jsxs)("p",{className:"text-sm font-medium",children:["$",(e.price*e.quantity).toFixed(2)]})]})},e.id))})})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:"Shipping Information"}),(0,r.jsxs)("div",{className:"mt-4 rounded-md border p-4",children:[(0,r.jsxs)("p",{children:[x," ",g]}),(0,r.jsx)("p",{children:p}),b&&(0,r.jsx)("p",{children:b}),(0,r.jsxs)("p",{children:[v,", ",w," ",k]}),(0,r.jsx)("p",{children:I}),(0,r.jsx)("p",{children:q}),(0,r.jsx)("p",{children:m})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:"Payment Information"}),(0,r.jsx)("div",{className:"mt-4 rounded-md border p-4",children:"credit-card"===O?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Credit Card"}),(0,r.jsxs)("p",{children:["**** **** **** ",Y.slice(-4)]}),(0,r.jsx)("p",{children:T}),(0,r.jsxs)("p",{children:["Expires: ",_]})]}):(0,r.jsx)("p",{children:"PayPal"})})]})]})]}),(0,r.jsx)("div",{className:"mt-8 flex justify-center",children:(0,r.jsx)(d(),{href:"/",className:"rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800",children:"Continue Shopping"})})]})]})]}),(0,r.jsx)("div",{className:"lg:col-span-4",children:(0,r.jsxs)("div",{className:"rounded-lg border",children:[(0,r.jsx)("div",{className:"border-b px-6 py-4",children:(0,r.jsx)("h2",{className:"text-lg font-medium",children:"Order Summary"})}),(0,r.jsxs)("div",{className:"px-6 py-4",children:[(0,r.jsx)("div",{className:"mb-4 max-h-64 overflow-y-auto",children:(0,r.jsx)("ul",{className:"divide-y",children:e.map(e=>(0,r.jsx)("li",{className:"py-3",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100"}),(0,r.jsxs)("div",{className:"ml-4",children:[(0,r.jsx)("p",{className:"text-sm font-medium",children:e.name}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Qty: ",e.quantity]})]})]}),(0,r.jsxs)("p",{className:"text-sm font-medium",children:["$",(e.price*e.quantity).toFixed(2)]})]})},e.id))})}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Subtotal"}),(0,r.jsxs)("p",{className:"text-sm font-medium",children:["$",s().toFixed(2)]})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Shipping"}),(0,r.jsx)("p",{className:"text-sm font-medium",children:"$0.00"})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Tax"}),(0,r.jsxs)("p",{className:"text-sm font-medium",children:["$",(.1*s()).toFixed(2)]})]}),(0,r.jsx)("div",{className:"border-t pt-4",children:(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("p",{className:"text-base font-medium",children:"Order Total"}),(0,r.jsxs)("p",{className:"text-base font-medium",children:["$",(s()+.1*s()).toFixed(2)]})]})})]})]})]})})]})]})}},7334:(e,t,s)=>{"use strict";s.d(t,{x:()=>l});var r=s(9827),a=s(709);let l=(0,r.v)()((0,a.Zr)((e,t)=>({items:[],addItem:s=>{let{items:r}=t();r.find(e=>e.productId===s.productId&&e.variantId===s.variantId)?e({items:r.map(e=>e.productId===s.productId&&e.variantId===s.variantId?{...e,quantity:e.quantity+s.quantity}:e)}):e({items:[...r,s]})},removeItem:s=>{let{items:r}=t();e({items:r.filter(e=>e.id!==s)})},updateQuantity:(s,r)=>{let{items:a}=t();e({items:a.map(e=>e.id===s?{...e,quantity:r}:e)})},clearCart:()=>e({items:[]}),getTotalItems:()=>{let{items:e}=t();return e.reduce((e,t)=>e+t.quantity,0)},getTotalPrice:()=>{let{items:e}=t();return e.reduce((e,t)=>e+t.price*t.quantity,0)}}),{name:"cart-storage"}))},709:(e,t,s)=>{"use strict";s.d(t,{Zr:()=>a});let r=e=>t=>{try{let s=e(t);if(s instanceof Promise)return s;return{then:e=>r(e)(s),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>r(t)(e)}}},a=(e,t)=>(s,a,l)=>{let d,i={storage:function(e,t){let s;try{s=e()}catch(e){return}return{getItem:e=>{var t;let r=e=>null===e?null:JSON.parse(e,void 0),a=null!=(t=s.getItem(e))?t:null;return a instanceof Promise?a.then(r):r(a)},setItem:(e,t)=>s.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>s.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},n=!1,c=new Set,o=new Set,m=i.storage;if(!m)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),s(...e)},a,l);let u=()=>{let e=i.partialize({...a()});return m.setItem(i.name,{state:e,version:i.version})},x=l.setState;l.setState=(e,t)=>{x(e,t),u()};let h=e((...e)=>{s(...e),u()},a,l);l.getInitialState=()=>h;let g=()=>{var e,t;if(!m)return;n=!1,c.forEach(e=>{var t;return e(null!=(t=a())?t:h)});let l=(null==(t=i.onRehydrateStorage)?void 0:t.call(i,null!=(e=a())?e:h))||void 0;return r(m.getItem.bind(m))(i.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===i.version)return[!1,e.state];if(i.migrate){let t=i.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;let[r,l]=e;if(s(d=i.merge(l,null!=(t=a())?t:h),!0),r)return u()}).then(()=>{null==l||l(d,void 0),d=a(),n=!0,o.forEach(e=>e(d))}).catch(e=>{null==l||l(void 0,e)})};return l.persist={setOptions:e=>{i={...i,...e},e.storage&&(m=e.storage)},clearStorage:()=>{null==m||m.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>g(),hasHydrated:()=>n,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(o.add(e),()=>{o.delete(e)})},i.skipHydration||g(),d||h}},9827:(e,t,s)=>{"use strict";s.d(t,{v:()=>n});var r=s(2115);let a=e=>{let t;let s=new Set,r=(e,r)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=r?r:"object"!=typeof a||null===a)?a:Object.assign({},t,a),s.forEach(s=>s(t,e))}},a=()=>t,l={setState:r,getState:a,getInitialState:()=>d,subscribe:e=>(s.add(e),()=>s.delete(e))},d=t=e(r,a,l);return l},l=e=>e?a(e):a,d=e=>e,i=e=>{let t=l(e),s=e=>(function(e,t=d){let s=r.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return r.useDebugValue(s),s})(t,e);return Object.assign(s,t),s},n=e=>e?i(e):i}},e=>{var t=t=>e(e.s=t);e.O(0,[8173,8441,1517,7358],()=>t(6621)),_N_E=e.O()}]);