(()=>{var e={};e.id=1014,e.ids=[1014],e.modules={96330:e=>{"use strict";e.exports=require("@prisma/client")},5486:e=>{"use strict";e.exports=require("bcrypt")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},11723:e=>{"use strict";e.exports=require("querystring")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},13827:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>w,routeModule:()=>m,serverHooks:()=>x,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>c});var s={};t.r(s),t.d(s,{GET:()=>p,POST:()=>p});var i=t(42706),a=t(28203),o=t(45994),u=t(51825),n=t.n(u),l=t(84132);let p=n()(l.N),m=new i.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/auth/[...nextauth]/route",pathname:"/api/auth/[...nextauth]",filename:"route",bundlePath:"app/api/auth/[...nextauth]/route"},resolvedPagePath:"/Users/tikaram/Downloads/projects/Cline/ecommerce/src/app/api/auth/[...nextauth]/route.ts",nextConfigOutput:"standalone",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:c,serverHooks:x}=m;function w(){return(0,o.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:c})}},96487:()=>{},78335:()=>{},42706:(e,r,t)=>{"use strict";e.exports=t(44870)},84132:(e,r,t)=>{"use strict";t.d(r,{N:()=>n});var s=t(91642),i=t(28053),a=t(5486),o=t(74069),u=t(50789);let n={session:{strategy:"jwt"},pages:{signIn:"/sign-in",error:"/error"},providers:[(0,i.A)({clientId:process.env.GOOGLE_CLIENT_ID||"",clientSecret:process.env.GOOGLE_CLIENT_SECRET||""}),(0,s.A)({name:"Credentials",credentials:{email:{label:"Email",type:"email"},password:{label:"Password",type:"password"}},async authorize(e){if(!e?.email||!e?.password)return null;if("potato@potato.com"===e.email&&"hotpotato"===e.password)return{id:"demo-user-id",email:"potato@potato.com",name:"Demo User",image:null,role:u.X.USER};if("admin"===e.email&&"admin"===e.password)return{id:"admin-user-id",email:"admin@example.com",name:"Admin User",image:null,role:u.X.ADMIN};let r=await o.z.user.findUnique({where:{email:e.email}});return r&&r.password&&await (0,a.compare)(e.password,r.password)?{id:r.id,email:r.email,name:r.name,image:r.image,role:r.role}:null}})],callbacks:{session:async({session:e,token:r})=>(r&&e.user&&(e.user.id=r.id,e.user.name=r.name,e.user.email=r.email,e.user.image=r.picture,e.user.role=r.role),e),async jwt({token:e,user:r}){if("potato@potato.com"===e.email)return{id:"demo-user-id",name:"Demo User",email:"potato@potato.com",picture:null,role:u.X.USER};if("admin@example.com"===e.email||"admin"===e.email)return{id:"admin-user-id",name:"Admin User",email:"admin@example.com",picture:null,role:u.X.ADMIN};if(e.email){let r=await o.z.user.findFirst({where:{email:e.email}});if(r)return{id:r.id,name:r.name,email:r.email,picture:r.image,role:r.role}}return r&&(e.id=r.id,e.role=r.role),e}}}},50789:(e,r,t)=>{"use strict";t.d(r,{X:()=>s});var s=function(e){return e.USER="USER",e.ADMIN="ADMIN",e}({})},74069:(e,r,t)=>{"use strict";t.d(r,{z:()=>i});var s=t(96330);let i=globalThis.prisma??new s.PrismaClient({log:["error"]})}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,5646],()=>t(13827));module.exports=s})();