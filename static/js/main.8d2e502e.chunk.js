(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){e.exports=a(303)},185:function(e,t,a){},291:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(70),c=a.n(o),i=a(22),l=a(15),s=a(138),m=a(62),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SERVICE":var a=(new Date).toLocaleString();return e.concat(Object(m.a)({},t.service,{date:a}));case"DELETE_SERVICE":return e.filter(function(e){return e.date!==t.service});default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"LOGIN":return!0;case"LOGOUT":return!1;default:return e}},p=Object(l.b)({services:u,authenticate:d,form:s.a}),E=Object(l.c)(p,{services:[],authenticate:!1},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=(a(185),a(51)),v=a(52),f=a(58),b=a(53),g=a(61),y=a(54),w=a(308),O=a(305),S=a(306),j=a(307),x=Object(y.createMuiTheme)({palette:{primary:{main:"#5151cc"},secondary:{main:"rgb(254, 100, 45)"}}}),L=a(137),_=a(136),R=a(92),A=a.n(R),N=a(91),k=a.n(N),T=a(93),C=a.n(T),D=a(90),I=a.n(D),G=a(143),B=a.n(G),V=a(142),F=a.n(V),P=a(31),q=a.n(P),U=a(16),M=a.n(U),W=function(e){var t=e.input,a=e.meta,n=a.error,o=a.touched,c=e.label;return r.a.createElement("div",{style:{margin:12}},r.a.createElement(I.a,{error:n&&o},r.a.createElement(k.a,{htmlFor:c},c),r.a.createElement(A.a,{id:c,inputProps:Object(m.a)({},t),type:"password"===t.name?"password":"text",startAdornment:r.a.createElement(C.a,{position:"start"},"password"===t.name?r.a.createElement(F.a,null):r.a.createElement(B.a,null))})),n&&o&&r.a.createElement(M.a,{style:{color:"red"}},n))},X=function(e){var t=e.handleSubmit;return r.a.createElement("div",{style:{padding:"40px 20px 25px 20px",borderRadius:5,backgroundColor:"white"}},r.a.createElement("form",{onSubmit:t},r.a.createElement(M.a,{component:"h2",variant:"display1",gutterBottom:!0},"Services"),r.a.createElement(L.a,{name:"userName",label:"Username",component:W,type:"text"}),r.a.createElement(L.a,{name:"password",type:"password",label:"Password",component:W}),r.a.createElement(q.a,{variant:"contained",size:"large",color:"secondary",type:"submit",style:{margin:8,color:"white"}},"Login")))},z=X=Object(_.a)({form:"login",validate:function(e){var t=e.userName,a=e.password,n={};return t||(n.userName="Required"),a||(n.password="Required"),n}})(X),J=(a(291),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).submit=function(e){var t=a.props,n=t.login,r=t.history;"liftit"===e.userName&&"contratame"===e.password?(n(e),r.push("/dashboard")):alert("Incorrect user or password")},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(z,{onSubmit:this.submit})))}}]),t}(n.Component)),$=Object(i.b)(function(e){return{isAuth:e.authenticate}},function(e){return{login:function(t){e(function(e){return{type:"LOGIN",user:e}}(t))}}})(J),H=a(71),K=a(64),Q=a.n(K),Y=a(146),Z=a.n(Y),ee=a(145),te=a.n(ee),ae=function(e){var t=e.input,a=e.meta,n=a.error,o=a.touched,c=e.label;return r.a.createElement("div",{style:{margin:10,width:200}},r.a.createElement(I.a,{error:n&&o},r.a.createElement(k.a,{htmlFor:c},c),r.a.createElement(A.a,{id:c,multiline:"description"===t.name,inputProps:Object(m.a)({},t),startAdornment:r.a.createElement(C.a,{position:"start"},"description"===t.name?r.a.createElement(te.a,{style:{color:"gray"}}):r.a.createElement(Z.a,{style:{color:"gray"}}))})),n&&o&&r.a.createElement(M.a,{style:{color:"red"}},n))},ne=function(e){var t=e.handleSubmit;return r.a.createElement("div",{style:{padding:"25px 15px 20px 15px",borderRadius:5,margin:"20px auto",width:210,border:"1px solid lightGray",backgroundColor:"white"}},r.a.createElement("form",{onSubmit:t},r.a.createElement(M.a,{component:"h2",variant:"display1",gutterBottom:!0},"New service"),r.a.createElement(L.a,{name:"description",type:"textarea",label:"Description",component:ae}),r.a.createElement(L.a,{name:"from",type:"textarea",label:"From",component:ae}),r.a.createElement(L.a,{name:"to",type:"textarea",label:"To",component:ae}),r.a.createElement(q.a,{variant:"contained",color:"secondary",type:"submit",style:{margin:8,color:"white",width:205}},"Create")))},re=ne=Object(_.a)({form:"service",validate:function(e){var t=e.description,a=e.from,n=e.to,r={};return t||(r.description="Required"),a||(r.from="Required"),n||(r.to="Required"),r}})(ne),oe=a(147),ce=a.n(oe),ie=a(148),le=a.n(ie);var se=Object(y.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes,a=e.handleLogout;return r.a.createElement("div",{className:t.root},r.a.createElement(ce.a,{position:"static"},r.a.createElement(le.a,null,r.a.createElement(M.a,{variant:"h6",color:"inherit",className:t.grow},"SERVICES APP"),r.a.createElement(q.a,{color:"inherit",onClick:a},"Logout"))))}),me=a(95),ue=a.n(me),de=a(150),pe=a.n(de),Ee=a(151),he=a.n(Ee),ve=a(149),fe=a.n(ve),be=function(e){var t=e.description,a=e.from,n=e.to,o=e.date,c=e.handler;return r.a.createElement(ue.a,{style:{width:260,margin:7}},r.a.createElement("div",{style:{padding:10}},r.a.createElement(M.a,{variant:"title",color:"secondary",gutterBottom:!0},t),r.a.createElement(M.a,{component:"p"},r.a.createElement("span",{style:{fontWeight:"bold"}},"From: ")," ",a),r.a.createElement(M.a,{component:"p"},r.a.createElement("span",{style:{fontWeight:"bold"}},"To: ")," ",n)),r.a.createElement(fe.a,{disableActionSpacing:!0},r.a.createElement(M.a,{variant:"body1",color:"textSecondary"},o),r.a.createElement(q.a,{style:{marginLeft:"auto",color:"red"},onClick:function(){return c(o)}},"Delete")))};var ge=function(e){var t=e.services,a=e.deleteService;return 0===t.length?r.a.createElement(ue.a,{style:{height:350,width:500,marginLeft:"auto",marginRight:"auto"}},r.a.createElement(pe.a,null,r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/sr/8/8b/Google_Maps_screenshot.png",alt:"map"}),r.a.createElement(he.a,null,r.a.createElement(M.a,{align:"center",component:"h1",color:"secondary",variant:"display1",style:{marginTop:0,fontSize:"5vh"},gutterBottom:!0},"Get start =>")))):r.a.createElement(Q.a,{container:!0},t.map(function(e){return r.a.createElement(be,Object.assign({},e,{handler:a,key:e.description}))}))},ye=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).submit=function(e){var t=a.props,n=t.addService,r=t.resetForm;n(e),r()},a.deleteService=function(e){return a.props.deleteService(e)},a.handleLogout=function(){var e=a.props,t=e.logout,n=e.history;t({user:"liftit"}),n&&n.push("/")},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.services;return r.a.createElement("div",null,r.a.createElement(se,{handleLogout:this.handleLogout}),r.a.createElement(Q.a,{container:!0,style:{marginTop:20}},r.a.createElement(Q.a,{item:!0,xs:12,md:8},r.a.createElement(M.a,{align:"center",component:"h2",variant:"display1",gutterBottom:!0},"My Services"),r.a.createElement(ge,{services:e,deleteService:this.deleteService})),r.a.createElement(Q.a,{item:!0,xs:4},r.a.createElement(re,{onSubmit:this.submit}))))}}]),t}(n.Component),we=Object(i.b)(function(e){return{services:e.services}},function(e){return{addService:function(t){e(function(e){return{type:"ADD_SERVICE",service:e}}(t))},deleteService:function(t){e(function(e){return{type:"DELETE_SERVICE",service:e}}(t))},resetForm:function(){e(Object(H.a)("service"))},logout:function(t){e(function(e){return{type:"LOGOUT",user:e}}(t))}}})(ye),Oe=function(e){var t=e.isAuth;return r.a.createElement(w.a,{path:"/dashboard",render:function(){return!0===t?r.a.createElement(we,null):r.a.createElement(O.a,{to:"/"})}})},Se=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(y.MuiThemeProvider,{theme:x},r.a.createElement(S.a,null,r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(w.a,{exact:!0,path:"/",component:$}),r.a.createElement(Oe,{isAuth:this.props.isAuth})))))}}]),t}(n.Component),je=Object(i.b)(function(e){return{isAuth:e.authenticate}})(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=document.getElementById("root");c.a.render(r.a.createElement(i.a,{store:E},r.a.createElement(je,null)),xe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,2,1]]]);
//# sourceMappingURL=main.8d2e502e.chunk.js.map