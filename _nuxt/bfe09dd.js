(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{212:function(t,e,n){"use strict";var o=n(2),r=n(448);o.default.use(r.a)},214:function(t,e,n){"use strict";e.a={appId:"LA1L89ESU7",apiKey:"a8dc3bccca1af99f7a77ea55f7dd9f4d"}},215:function(t,e,n){"use strict";n(67),n(31),n(62),n(50);var o=n(26),r=n(35),c=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"xml2html",value:function(data,t){return data?data=data.split("&lt;").join("<").split("&gt;").join(">").replace("<head",'<p class="teiHead"><b').replace("</head>","</b></p>").split("<lb/>").join("<br/>").split("<date").join('<span class="'.concat(t?"teiDate":"",'"')).split("</date>").join("</span>").split("<persName").join('<span class="'.concat(t?"teiPersName":"",'"')).split("</persName>").join("</span>").split("<place").join('<span class="'.concat(t?"teiPlaceName":"",'"')).split("</placeName>").join("</span>").split("<time").join('<span class="'.concat(t?"teiTime":"",'"')).split("</time>").join("</span>"):null}},{key:"formatArrayValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", ";if(null==t)return"";if(1===t.length)return t[0];var n=t.join(e);return n}},{key:"truncate",value:function(t,e){return t&&t["@id"]?"":(t=String(t)).length<=e?t:t.substring(0,e)+"..."}}]),t}();e.a=function(t,e){e("utils",new c)}},255:function(t,e,n){var content=n(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("50f9c72e",content,!0,{sourceMap:!1})},263:function(t,e,n){var content=n(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("56b15182",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n(297),n(49);var o=n(15),r=n(26),c=n(35),l=n(41),d=n(34),f=n(28),v=n(13),m=n(170),h=n(98);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(l.a)(d,t);var e,n=_(d);function d(){var t;return Object(r.a)(this,d),(t=n.apply(this,arguments)).fab=!1,t.drawer=!1,t.baseUrl="https://nakamura196.github.io/jdta",t.siteName="JDTA非公式アプリ",t.github="https://github.com/nakamura196/jpsearch2",t.userName=null,t.userPic=null,t.dialog=!1,t.dialog4login=!1,t}return Object(c.a)(d,[{key:"created",value:function(){this.onAuthStateChanged()}},{key:"onScroll",value:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}}},{key:"toTop",value:function(){this.$vuetify.goTo(0)}},{key:"signInWithGoogle",value:function(){this.$store.dispatch("login"),this.dialog4login=!this.dialog4login}},{key:"onAuthStateChanged",value:function(){var t=this;h.a.auth().onAuthStateChanged((function(e){t.userName=e?e.displayName:null,t.userPic=e?e.photoURL:null,t.isSignedIn=!!e}))}},{key:"signOut",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.auth().signOut();case 2:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"isSignedIn",get:function(){return this.$store.getters.getIsSignedIn},set:function(t){this.$store.commit("setSignedIn",t)}}]),d}(m.Vue),k=y=j([Object(m.Component)({components:{}})],y),w=(n(358),n(99)),N=n(134),x=n.n(N),O=n(484),P=n(492),I=n(485),S=n(289),U=n(491),T=n(486),V=n(205),A=n(206),C=n(127),E=n(207),R=n(96),L=n(487),D=n(490),$=n(489),F=n(488),J=n(290),M=n(291),B=n.n(M),H=n(164),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("v-navigation-drawer",{attrs:{app:"",temporary:!0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{link:"",to:t.localePath({name:"index"}),exact:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:t.localePath({name:"search"})}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-account")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("agential")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:t.localePath({name:"count"})}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-chart-bar")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("タイプ別アイテム数")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",target:"_blank",href:"https://www.enpaku-jdta.jp/"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-database")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("JAPAN DIGITAL THEATRE ARCHIVES")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",target:"_blank",href:"snorql"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-database")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("RDFストア")))])],1)],1)],1)],1)],1),t._v(" "),n("v-app-bar",{attrs:{dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",[n("nuxt-link",{staticStyle:{color:"inherit","text-decoration":"inherit"},attrs:{to:t.localePath({name:"index"})}},[t._v("\n          "+t._s(t.$t(t.siteName))+"\n        ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{depressed:"",btn:""}},o),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-translate")]),t._v(" "),"xs"!=t.$vuetify.breakpoint.name?[t._v("\n              "+t._s("ja"==t.$i18n.locale?"日本語":"English"))]:t._e(),t._v(" "),n("v-icon",{staticClass:"ml-2"},[t._v("mdi-menu-down")])],2)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],1)],1)],1)],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("v-footer",{staticClass:"mt-5",attrs:{dark:!0}},[n("v-container",{staticClass:"text-center my-5"},[n("p",{staticClass:"my-0"},[n("nuxt-link",{staticStyle:{color:"white"},attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.$t(t.siteName)))])],1)])],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",large:"",color:"error"},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-arrow-up")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;x()(component,{VApp:O.a,VAppBar:P.a,VAppBarNavIcon:I.a,VBtn:S.a,VContainer:U.a,VFooter:T.a,VIcon:V.a,VList:A.a,VListItem:C.a,VListItemAction:E.a,VListItemContent:R.a,VListItemTitle:R.b,VMain:L.a,VMenu:D.a,VNavigationDrawer:$.a,VSpacer:F.a,VToolbarTitle:J.a}),B()(component,{Scroll:H.b})},313:function(t,e,n){n(314),t.exports=n(315)},337:function(t,e,n){"use strict";n(255)},338:function(t,e,n){(e=n(18)(!1)).push([t.i,"h1[data-v-63e85905]{font-size:20px}",""]),t.exports=e},358:function(t,e,n){"use strict";n(263)},359:function(t,e,n){(e=n(18)(!1)).push([t.i,".teiDate{background-color:#bbdefb}.teiTime{background-color:#fff9c4}.teiPersName{background-color:#ffccbc}.teiPlaceName{background-color:#c8e6c9}a{text-decoration:none}",""]),t.exports=e},409:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return d})),n.d(e,"actions",(function(){return f})),n.d(e,"getters",(function(){return v}));n(58),n(22),n(69),n(70);var o=n(98),r=o.a.firestore(),c=r.collection("todos"),l=function(){return{userUid:"",userName:"",userPic:"",todos:[],numbers:[],isSignedIn:!1}},d={setUserUid:function(t,e){t.userUid=e},setUserName:function(t,e){t.userName=e},addTodo:function(t,e){t.todos.push(e)},addNumber:function(t,e){t.numbers.push(e)},clearTodo:function(t){t.todos=[]},setSignedIn:function(t,e){t.isSignedIn=e},setUserPic:function(t,e){t.userPic=e}},f={login:function(t){var e=t.commit,n=new o.a.auth.GoogleAuthProvider;o.a.auth().signInWithPopup(n).then((function(t){var n=t.user;e("setUserUid",n.uid),e("setUserName",n.displayName),e("setUserPic",n.photoURL)})).catch((function(t){var e=t.code;console.log("error : "+e)}))},fetchTodos:function(t){var e=t.commit;c.get().then((function(t){t.forEach((function(t){e("addTodo",t.data())}))})).catch((function(t){console.log("error : "+t)}))},addTodo:function(t,e){var n=t.commit;c.add({todo:e.todo,limit:e.limit}).then((function(t){n("addTodo",e)})).catch((function(t){console.error("Error adding document: ",t)}))},addNumber:function(t,e){var n=t.commit;r.collection(e.parent).doc(e.id).set({values:e.values}).then((function(t){n("addNumber",e)})).catch((function(t){console.error("Error adding document: ",t)}))}},v={getUserUid:function(t){return t.userUid},getUserName:function(t){return t.userName},getTodos:function(t){return t.todos},getIsSignedIn:function(t){return t.isSignedIn},getUserPic:function(t){return t.userPic}}},414:function(t,e,n){var map={"./en":[307,2],"./en.json":[307,2],"./ja":[308,3],"./ja.json":[308,3]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(map)},o.id=414,t.exports=o},434:function(t,e,n){var map={"./ja":199,"./ja.js":199};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=434},87:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(337),n(99)),c=n(134),l=n.n(c),d=n(484),f=n(491),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-container",{staticClass:"my-10"},[404===t.error.statusCode?n("h1",[t._v("\n      "+t._s(t.pageNotFound)+"\n    ")]):n("h1",[t._v("\n      "+t._s(t.otherError)+"\n    ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)],1)}),[],!1,null,"63e85905",null);e.a=component.exports;l()(component,{VApp:d.a,VContainer:f.a})},98:function(t,e,n){"use strict";var o=n(169);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyBOOt8xvbTh5JAJ4kJxPD_6ohcyb0LfR7k",authDomain:"genji2022.firebaseapp.com",databaseURL:"https://genji2022.firebaseio.com",projectId:"genji2022",storageBucket:"genji2022.appspot.com",messagingSenderId:"52466352397",appId:"1:52466352397:web:cdc45cbe4b1ab3f96df044"}),e.a=o.a}},[[313,18,8,19]]]);