(function(e){function t(t){for(var n,s,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"12b3":function(e,t,r){"use strict";r("62a1")},2261:function(e,t,r){"use strict";r("f694")},3594:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",[r("router-link",{attrs:{to:"/"}},[e._v("TY Lectures")]),r("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),r("router-view")],1)},i=[],s=r("2591"),o={apiKey:"AIzaSyBzhYMadkj1c3zHiRmKdEvPOt-dbUugXoc",authDomain:"timetable-4d699.firebaseapp.com",projectId:"timetable-4d699",storageBucket:"timetable-4d699.appspot.com",messagingSenderId:"747523004757",appId:"1:747523004757:web:4bdedd6c560b0beb39b7dc",measurementId:"G-231HFKZ2HZ"},c=s["a"].initializeApp(o),u=c,l={name:"App"},d=l,p=(r("034f"),r("2877")),m=Object(p["a"])(d,a,i,!1,null,null,null),h=m.exports,f=(r("d81d"),r("96cf"),r("1da1")),g=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("form",{attrs:{method:"POST"},on:{submit:function(t){return t.preventDefault(),e.signIn(t)}}},[r("span",[r("label",{attrs:{for:"email"}},[e._v("EMAIL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{name:"email",placeholder:"example@service.com",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("span",[r("label",{attrs:{for:"password"}},[e._v("PASSWORD")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"password",placeholder:"•••pwd•••",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{attrs:{type:"submit"}},[e._v("Login")]),""!==e.error.code?r("div",{staticClass:"toast"},[e._v(" "+e._s(e.error.message)+" ")]):e._e()])])])},b=[],w={name:"Login",data:function(){return{email:"",password:"",error:{code:"",message:""}}},methods:{signIn:function(){var e=this;u.auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){console.log(t),localStorage.setItem("UID",t.user.uid),e.$router.push("dashboard")})).catch((function(t){console.error(t),e.error.code=t.code,e.error.message=t.message,setTimeout((function(){e.error.code="",e.error.message=""}),3e3)}))},getUser:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=localStorage.getItem("UID"),e.next=3,u.firestore().collection("users").where("auth_id","==",t).get();case 3:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getUser().then((function(e){return e}));case 2:t=e.sent,0===t.length||void 0===t.length?console.log("Not A Verified User"):this.$router.push("dashboard");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},_=w,k=(r("a941"),Object(p["a"])(_,v,b,!1,null,"a7cb6e08",null)),y=k.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("div",{staticClass:"lectures"},e._l(e.lectures,(function(e,t){return r("LectureCards",{key:t,attrs:{title:e.title,teacher:e.teacher,link:e.link,time:e.time,meeting_id:e.meeting_id,passcode:e.passcode}})})),1)])},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero"},[r("h1",[e._v(" Click On Cards To Start Lecture. "),r("br"),e._v(" This Is Maintained By Students. ")])])}],M=(r("a9e3"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"card",attrs:{href:e.link}},[r("div",{staticClass:"title"},[r("h3",[e._v(e._s(e.title))]),r("h5",[e._v(e._s(e.teacher))])]),r("div",{staticClass:"info"},[r("h5",[e._v(e._s(e.datetime(e.time)))]),r("svg",{staticClass:"arrow",attrs:{width:"61",height:"8",viewBox:"0 0 61 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M60.8536 4.35355C61.0488 4.15829 61.0488 3.84171 60.8536 3.64645L57.6716 0.464466C57.4763 0.269204 57.1597 0.269204 56.9645 0.464466C56.7692 0.659728 56.7692 0.976311 56.9645 1.17157L59.7929 4L56.9645 6.82843C56.7692 7.02369 56.7692 7.34027 56.9645 7.53553C57.1597 7.7308 57.4763 7.7308 57.6716 7.53553L60.8536 4.35355ZM0 4.5H60.5V3.5H0V4.5Z",fill:"white"}})])])])}),C=[],O=(r("a15b"),r("fb6a"),r("4d63"),r("ac1f"),r("25f0"),r("466d"),{name:"LectureCards",props:["title","teacher","link","meeting_id","time","passcode"],methods:{datetime:function(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=new Date(1e3*e.seconds),n=String(r.toLocaleTimeString()),a=n.match("AM")?"AM":"PM",i=new RegExp("\\d{0,2}:","g");n=n.match(i).join("").slice(0,-1);var s=t[r.getMonth()]+" "+String(r.getDate())+" "+String(r.getFullYear())+"  •  "+n+" "+a;return s}}}),L=O,P=(r("12b3"),Object(p["a"])(L,M,C,!1,null,"784ee67c",null)),I=P.exports,j={name:"Home",components:{LectureCards:I},data:function(){return{lectures:[]}},created:function(){var e=this,t=localStorage.getItem("lastFetch");Number((new Date).getTime())<Number(t)+6e5?(console.log("Can't Fetch Within 10 Minutes of Last Fetch"),this.lectures=JSON.parse(localStorage.getItem("lectures"))):this.getLectures().then((function(t){console.log("fetching lectures..."),localStorage.setItem("lastFetch",(new Date).getTime()),localStorage.setItem("lectures",JSON.stringify(t)),e.lectures=t}))},methods:{getLectures:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].firestore().collection("lectures").orderBy("time").get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},R=j,E=(r("69dd"),Object(p["a"])(R,x,S,!1,null,"1eabc87c",null)),N=E.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[e.success?r("div",{staticClass:"toast toast-success"},[e._v("Added Success")]):e._e(),e.failure?r("div",{staticClass:"toast toast-failure"},[e._v("Could Not Add Lecture! Check Console")]):e._e(),r("div",{staticClass:"invitation"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.invitation,expression:"invitation"}],attrs:{name:"zoom",id:"zoomLink",cols:"30",rows:"28"},domProps:{value:e.invitation},on:{change:e.updateValue,input:function(t){t.target.composing||(e.invitation=t.target.value)}}})]),r("form",{staticClass:"data",on:{submit:function(t){return t.preventDefault(),e.saveLecture(t)}}},[r("span",[r("label",{attrs:{for:"link"}},[e._v("JOINING LINK")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lecture.link,expression:"lecture.link"}],attrs:{required:"true",name:"link",placeholder:"Change Link",type:"text"},domProps:{value:e.lecture.link},on:{input:function(t){t.target.composing||e.$set(e.lecture,"link",t.target.value)}}})]),r("div",{staticClass:"row"},[r("span",[r("label",{attrs:{for:"meeting_id"}},[e._v("MEETING ID")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lecture.meeting_id,expression:"lecture.meeting_id"}],attrs:{required:"true",name:"meeting_id",placeholder:"Change Meeting Id",type:"text"},domProps:{value:e.lecture.meeting_id},on:{input:function(t){t.target.composing||e.$set(e.lecture,"meeting_id",t.target.value)}}})]),r("span",[r("label",{attrs:{for:"passcode"}},[e._v("PASSWORD")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lecture.passcode,expression:"lecture.passcode"}],attrs:{required:"true",name:"passcode",placeholder:"Change Passcode",type:"text"},domProps:{value:e.lecture.passcode},on:{input:function(t){t.target.composing||e.$set(e.lecture,"passcode",t.target.value)}}})])]),r("span",[r("label",{attrs:{for:"title"}},[e._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lecture.title,expression:"lecture.title"}],attrs:{required:"true",name:"title",placeholder:"Change Title",type:"text"},domProps:{value:e.lecture.title},on:{input:function(t){t.target.composing||e.$set(e.lecture,"title",t.target.value)}}})]),r("span",[r("label",{attrs:{for:"teacher"}},[e._v("TEACHER")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lecture.teacher,expression:"lecture.teacher"}],attrs:{required:"true",type:"text",name:"teacher",list:"teachers",placeholder:"Write Teacher Name / Select Teacher"},domProps:{value:e.lecture.teacher},on:{input:function(t){t.target.composing||e.$set(e.lecture,"teacher",t.target.value)}}}),r("datalist",{attrs:{id:"teachers"}},[r("option",[e._v(e._s(e.lecture.teacher))]),r("option",[e._v("Gauravi Mam")]),r("option",[e._v("Devang Sir")]),r("option",[e._v("Prashant Sir")]),r("option",[e._v("Riddhi Mam")]),r("option",[e._v("Manish Sir")]),r("option",[e._v("Mrunali Mam")]),r("option",[e._v("Vishesh Sir")]),r("option",[e._v("Jayshree Mam")])])]),r("span",[r("label",{attrs:{for:"time"}},[e._v("TIME")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lecture.time,expression:"lecture.time"}],attrs:{required:"true",name:"time",placeholder:"Format : Dec 14, 2020 01:00 PM",type:"text"},domProps:{value:e.lecture.time},on:{input:function(t){t.target.composing||e.$set(e.lecture,"time",t.target.value)}}})]),r("button",{attrs:{type:"submit"}},[e._v("Add Lecture")])])])},A=[],D=(r("1276"),r("9911"),{name:"Dashboard",data:function(){return{invitationLink:"",lecture:{link:"",meeting_id:"",passcode:"",title:"",teacher:"",time:""},success:!1,failure:!1}},computed:{invitation:{get:function(){return""==this.lecture.link&&""==this.lecture.meeting_id&&""==this.lecture.passcode&&""==this.lecture.title&&""==this.lecture.teacher?"":this.invitationLink},set:function(e){this.invitationLink=String(e),this.updateValue(String(e))}}},methods:{updateValue:function(e){if("change"!==e.type){if(e=String(e),""===e||null===e)return"";if(null===e)return"";var t=new RegExp("https://[\\w\\./\\?=]{0,}","g");this.lecture.link=null===e.match(t)?"":e.match(t)[0],t=new RegExp("\\d{3} \\d{4} \\d{4}","g"),this.lecture.meeting_id=null===e.match(t)?"":e.match(t)[0],t=new RegExp("Passcode: \\w*","g"),this.lecture.passcode=null===e.match(t)?"":e.match(t)[0].substr(10),t=new RegExp("Topic: [a-zA-Z /'.]*","g"),this.lecture.title=null===e.match(t)?"":e.match(t)[0].substr(7),t=new RegExp("(manish|gauravi|mrunali|vishesh|jayshree|prashant|riddhi)","gi");var r=null===e.match(t)?"":e.match(t)[0];switch(r){case"Gauravi":this.lecture.teacher="Gauravi Mam";break;case"Manish":this.lecture.teacher="Manish Sir";break;case"Mrunali":this.lecture.teacher="Mrunali Mam";break;case"Jayshree":this.lecture.teacher="Jayshree Mam";break;case"Riddhi":this.lecture.teacher="Riddhi Mam";break;case"Prashant":this.lecture.teacher="Prashant Sir";break;case"Vishesh":this.lecture.teacher="Vishesh Sir";break;default:t=new RegExp(".{1,}(?=[a-zA-Z])","g"),this.lecture.teacher=null===e.match(t)[0].split("is")?"":e.match(t)[0].split("is")[0];break}t=new RegExp("Time:\\ [\\w\\*\\ ,:]{0,}(AM|PM)","g"),this.lecture.time=null===e.match(t)?"":e.match(t)[0].substr(6)}},saveLecture:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=u.firestore().collection("lectures"),r=new Date(this.lecture.time),n=new s["a"].firestore.Timestamp.fromDate(r),a={link:this.lecture.link,meeting_id:this.lecture.meeting_id,passcode:this.lecture.passcode,teacher:this.lecture.teacher,time:n,title:this.lecture.title},t.add(a).then((function(e){console.log(e),i.lecture.link="",i.lecture.meeting_id="",i.lecture.passcode="",i.lecture.teacher="",i.lecture.time="",i.lecture.title="",e.id?(i.success=!0,i.failure=!1,setTimeout((function(){i.success=!1}),3e3)):(i.failure=!0,i.success=!1,setTimeout((function(){i.failure=!1}),3e3))}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),$=D,J=(r("2261"),Object(p["a"])($,T,A,!1,null,"6c51d8a4",null)),F=J.exports;function V(){return z.apply(this,arguments)}function z(){return z=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=localStorage.getItem("UID"),e.next=3,u.firestore().collection("users").where("auth_id","==",t).get();case 3:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}n["a"].use(g["a"]);var H=[{path:"/",name:"Home",component:N},{path:"/login",name:"Login",component:y},{path:"/Dashboard",name:"Dashboard",component:F,beforeEnter:function(e,t,r){V().then((function(e){0===e.length||void 0===e.length?r({name:"Login"}):r()}))}}],q=new g["a"]({mode:"history",routes:H}),U=r("9483");Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(h)},router:q}).$mount("#app")},"62a1":function(e,t,r){},"69dd":function(e,t,r){"use strict";r("ca4c")},"85ec":function(e,t,r){},a941:function(e,t,r){"use strict";r("3594")},ca4c:function(e,t,r){},f694:function(e,t,r){}});
//# sourceMappingURL=app.1b4d5c7c.js.map