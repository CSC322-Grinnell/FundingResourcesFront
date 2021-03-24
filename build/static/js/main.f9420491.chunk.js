(this.webpackJsonpfunding_frontend=this.webpackJsonpfunding_frontend||[]).push([[0],{669:function(e,n,t){},674:function(e,n,t){},677:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(13),r=t.n(o),s=t(81),c=t(351),l=t(78),u=t.n(l),d=t(383),j=t.n(d),b=(t(669),t(241)),h=t(9),m=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("svg",Object(b.a)(Object(b.a)({viewBox:"0 0 100 100"},e),{},{children:Object(h.jsx)("path",{d:"M90.9 58.2c-3.8 18.9-20.1 32.7-39.7 33-22 .4-40.7-17-41.9-39C8 28.5 26.9 8.8 50.4 8.8c19 0 35.5 13.1 40 31.2.3 1.2 1.4 2.1 2.7 2.1 1.8 0 3.1-1.7 2.7-3.5C90.6 18.1 72 3.3 50.4 3.3c-27.2 0-49 23.4-46.6 51.1 2.1 23 21 41.2 44 42.4C71.6 98 91.7 81.9 96.2 59.4c.3-1.7-1-3.3-2.7-3.3-1.3-.1-2.4.8-2.6 2.1z"})}))})};function g(){var e=[{label:"Source",name:"source"},{label:"Funding Name",name:"funding_name"},{label:"Purpose Of Funding",name:"description"},{label:"Max Grant Amount",name:"amount"},{label:"Eligibility Requirements",name:"eligible"},{label:"Deadline",name:"deadline"},{label:"Contact Person",name:"contact_person"},{label:"Web Address",name:"web",options:{customBodyRender:function(e,n,t){return Object(h.jsx)("a",{href:e,children:"Official website"})}}}],n=Object(a.useState)([]),t=Object(s.a)(n,2),i=t[0],o=t[1],r={selectableRows:"none",customToolbar:function(e){e.displayData;return Object(h.jsx)(c.a,{children:"Add a resource"})}};return Object(a.useEffect)((function(){u.a.get("https://frozen-tor-16945.herokuapp.com/resource",{withCredentials:!0}).then((function(e){o(e.data),console.log(e.data)})).catch((function(e){console.error(e)}))}),[]),0===i.length?Object(h.jsx)(m,{width:"50",fill:"black",className:"animate-spin"}):Object(h.jsx)(j.a,{title:"Find a funding resource that works for you!",data:i,columns:e,options:r})}var p=t(700),f=t(350),x=t(360),O=t(23),v=i.a.createContext({}),w=Object(f.a)((function(e){return{root:{flexGrow:1},appBar:{backgroundColor:"#121212"},menuButton:{marginRight:e.spacing(2)},logo:{cursor:"pointer",height:"3em"},menuItems:{position:"fixed",right:0}}}));function C(){var e=w(),n=Object(O.g)();return Object(h.jsx)(v.Consumer,{children:function(t){return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(p.a,{className:e.appBar,position:"static",children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)("img",{alt:"logo",src:"CFR_Logo.png",className:e.logo,onClick:function(){n.push("/")}}),t.logged_in?Object(h.jsx)("div",{className:e.menuItems,children:Object(h.jsx)(c.a,{onClick:function(){n.push("/")},color:"inherit",children:"Logout"})}):Object(h.jsxs)("div",{className:e.menuItems,children:[Object(h.jsx)(c.a,{onClick:function(){n.push("/login")},color:"inherit",children:"Login"}),Object(h.jsx)(c.a,{onClick:function(){n.push("/signup")},color:"inherit",children:"Sign Up"})]})]})})})}})}C.defaultProps={logged_in:!1};var y=t(701),k=t(703),_=t(362),z=t(72),D=Object(f.a)((function(e){return{container:{padding:e.spacing(3),position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}));function S(e){var n=e.updateUserData,t=(e.user,D()),i=Object(a.useState)({email:"",password:""}),o=Object(s.a)(i,2),r=o[0],l=o[1],d=function(e){var n={};n[e.target.name]=e.target.value,l((function(e){return Object.assign(e,n)}))},j=function(e){e.preventDefault();var t=r.email,a=r.password;console.log(t,a),u.a.post("https://frozen-tor-16945.herokuapp.com/sessions",{user:{email:t,password:a}},{withCredentials:!0,credentials:"same-origin"}).then((function(e){console.log("registration res",e),n(e.data)})).catch((function(e){console.log("registration error",e)}))};return Object(h.jsx)(v.Consumer,{children:function(e){return Object(h.jsxs)(y.a,{className:t.container,maxWidth:"xs",children:[Object(h.jsxs)("form",{onSubmit:j,children:[Object(h.jsxs)(k.a,{container:!0,spacing:3,children:[Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsxs)(k.a,{container:!0,spacing:2,children:[Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsx)(_.a,{fullWidth:!0,label:"Email",name:"email",size:"small",variant:"outlined",required:!0,onChange:d})}),Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsx)(_.a,{fullWidth:!0,label:"Password",name:"password",size:"small",type:"password",variant:"outlined",required:!0,onChange:d})})]})}),Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsx)(c.a,{color:"secondary",fullWidth:!0,type:"submit",variant:"contained",children:"Log in"})})]}),Object(h.jsxs)("div",{style:{marginTop:"1em"},children:["Don't have an account? ",Object(h.jsx)(z.b,{to:"/signup",children:"Create one now."})]})]}),e.logged_in?Object(h.jsx)(O.a,{to:"/"}):null]})}})}var W=Object(f.a)((function(e){return{container:{padding:e.spacing(3),position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}}));function N(){var e=W(),n=Object(a.useState)({email:"",password:"",password_confirmation:"",registrationErrors:""}),t=Object(s.a)(n,2),i=t[0],o=t[1],r=function(e){var n={};n[e.target.name]=e.target.value,o((function(e){return Object.assign(e,n)})),console.log(i)};return Object(h.jsx)(y.a,{className:e.container,maxWidth:"xs",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=i.email,t=i.password,a=i.password_confirmation;console.log(n,t,a),u.a.post("https://frozen-tor-16945.herokuapp.com/registrations",{user:{email:n,password:t,password_confirmation:a}},{withCredentials:!0}).then((function(e){console.log("registration res",e)})).catch((function(e){console.log("registration error",e)}))},children:[Object(h.jsxs)(k.a,{container:!0,spacing:3,children:[Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsxs)(k.a,{container:!0,spacing:2,children:[Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsx)(_.a,{fullWidth:!0,label:"Email",name:"email",size:"small",variant:"outlined",type:"email",required:!0,onChange:r})}),Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsx)(_.a,{fullWidth:!0,label:"Password",name:"password",size:"small",type:"password",variant:"outlined",required:!0,onChange:r})}),Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsx)(_.a,{fullWidth:!0,label:"Confirm Password",name:"password_confirmation",size:"small",type:"password",variant:"outlined",required:!0,onChange:r})})]})}),Object(h.jsx)(k.a,{item:!0,xs:12,children:Object(h.jsx)(c.a,{color:"secondary",fullWidth:!0,type:"submit",variant:"contained",children:"Sign up"})})]}),Object(h.jsxs)("div",{style:{marginTop:"1em"},children:["Already have an account? ",Object(h.jsx)(z.b,{to:"/login",children:"Log in."})]})]})})}t(674);function P(){var e=Object(a.useState)({}),n=Object(s.a)(e,2),t=n[0],i=n[1],o=function(e){i(e)};return Object(a.useEffect)((function(){console.log("Hello first"),u.a.get("https://frozen-tor-16945.herokuapp.com/logged_in",{withCredentials:!0,credentials:"same-origin"}).then((function(e){console.log("registration res",e),o(e.data),console.log(t)})).catch((function(e){console.log("registration error",e)}))}),[]),Object(h.jsx)(v.Provider,{value:t,children:Object(h.jsxs)(z.a,{children:[Object(h.jsx)(C,{}),Object(h.jsxs)(O.d,{children:[Object(h.jsx)(O.b,{exact:!0,path:"/",component:function(){return Object(h.jsx)(g,{updateUserData:o})}}),Object(h.jsx)(O.b,{exact:!0,path:"/login",component:function(){return Object(h.jsx)(S,{updateUserData:o})}}),Object(h.jsx)(O.b,{exact:!0,path:"/signup",component:function(){return Object(h.jsx)(N,{updateUserData:o})}}),Object(h.jsx)(O.b,{path:"/",render:function(){return Object(h.jsx)("div",{children:"404"})}})]})]})})}var F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,705)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),a(e),i(e),o(e),r(e)}))};t(675);r.a.render(Object(h.jsx)(P,{}),document.getElementById("root")),F()}},[[677,1,2]]]);
//# sourceMappingURL=main.f9420491.chunk.js.map