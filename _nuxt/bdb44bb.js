(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{496:function(t,e,n){"use strict";n.r(e);n(297);var r=n(26),o=n(41),c=n(34),l=n(28),h=n(13),d=n(298);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=f(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/jpsearch2",t}return n}(d.Vue);v([Object(d.Prop)({default:12})],y.prototype,"cols",void 0),v([Object(d.Prop)({default:3})],y.prototype,"sm",void 0),v([Object(d.Prop)({default:[]})],y.prototype,"list",void 0);var m=y=v([d.Component],y),w=n(99),R=n(134),P=n.n(R),k=n(515),j=n(494),_=n(568),O=n(548),x=n(167),E=n(569),C=n(488),I=n(549),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.list,(function(e,r){return n("v-col",{key:r,attrs:{cols:t.cols,sm:t.sm}},[n("v-card",{staticClass:"mb-4",attrs:{"no-body":"",flat:""}},[e.href?[n("a",{attrs:{target:"_blank",href:e.href}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:e.image,contain:"",width:"100%"}})],1)]:[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:e.image,contain:"",width:"100%"}})],1)],t._v(" "),n("div",{staticClass:"pa-4"},[e.href?[n("a",{attrs:{target:"_blank",href:e.href}},[n("h3",[t._v(t._s(e.label))])])]:[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("h3",[t._v(t._s(e.label))])])],t._v(" "),e.description?n("p",{staticClass:"mt-2 mb-0"},[t._v(t._s(e.description))]):t._e()],2),t._v(" "),e.url?[n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("a",t._g({attrs:{target:"_blank",href:e.url}},o),[n("img",{attrs:{width:"30px",src:t.baseUrl+"/img/icons/rdf-logo.svg"}})])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s("RDF"))])])],1)]:t._e()],2)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;P()(component,{VCard:k.a,VCardActions:j.a,VCol:_.a,VDivider:O.a,VImg:x.a,VRow:E.a,VSpacer:C.a,VTooltip:I.a})},576:function(t,e,n){"use strict";n.r(e);n(27),n(44),n(16),n(297),n(31),n(219),n(217),n(50),n(75),n(49);var r=n(15),o=n(26),c=n(35),l=n(41),h=n(34),d=n(28),f=n(13),v=n(170),y=n(113),m=n.n(y),w=n(496);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var P=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(l.a)(d,t);var e,n,h=R(d);function d(){var t;return Object(o.a)(this,d),(t=h.apply(this,arguments)).endpoint="https://jpsearch.go.jp/rdf/sparql?query=",t.name="keywords",t.type="keyword",t.total=0,t.perPage=24,t.people=[],t.loadingFlag=!0,t.currentPage=1,t.keywordStr="",t}return Object(c.a)(d,[{key:"watchR",value:function(){this.search()}},{key:"getTotal",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.keywordStr,n="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX hpdb: <https://w3id.org/hpdb/api/>\n      PREFIX sh: <http://www.w3.org/ns/shacl#>\n      SELECT DISTINCT (count(distinct ?cho) as ?c) WHERE {\n        ?s ".concat("schema:about"," ?cho .\n        ?cho rdfs:label ?label . \n        ").concat(""!==e?"?label bif:contains '\""+e+"\"'":"","\n      }\n    "),r=this.endpoint+encodeURIComponent(n)+"&output=json",t.next=6,m.a.get(r);case 6:return o=t.sent,t.abrupt("return",Number(o.data.results.bindings[0].c.value));case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"created",value:function(){this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c,l=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadingFlag=!0,e=this.$route.query.keyword||"",this.keywordStr=e,t.next=5,this.getTotal();case 5:n=t.sent,this.total=n,r=Number(this.$route.query.from)||0,this.currentPage=r/this.perPage+1,o=this.lang,c="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX hpdb: <https://w3id.org/hpdb/api/>\n      PREFIX sh: <http://www.w3.org/ns/shacl#>\n      select distinct count(?s) as ?count ?cho ?label ?name ?thumbnail WHERE {\n        ?s ".concat("schema:about"," ?cho . \n        ?cho rdfs:label ?label . \n        optional { ?cho schema:image ?thumbnail . }\n        ").concat("ja"===o?"":"OPTIONAL {?cho schema:name ?name . filter (lang(?name) = 'en')} ","\n        ").concat(""!==e?"?label bif:contains '\""+e+"\"'":"","\n      }\n      ORDER BY RAND()\n      LIMIT ").concat(this.perPage,"\n      OFFSET ").concat(r,"\n    "),m.a.get(this.endpoint+encodeURIComponent(c)+"&output=json").then((function(t){for(var e=[],n=t.data.results.bindings,i=0;i<n.length;i++){var r=n[i],label=r.label.value,o={label:label=r.name?r.name.value:label,path:{name:"keyword",query:{id:r.cho.value}}};r.thumbnail?o.image=r.thumbnail.value:o.image="https://jpsearch.go.jp/assets/img/no-image/curation-no-image_greylighter.png",e.push(o)}l.people=e,l.loadingFlag=!1}));case 13:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"setCurrentPage",value:function(t){var e=(t-1)*this.perPage,n=Object.assign({},this.$route.query);n.from=e,this.$router.push(this.localePath({name:name,query:n}),(function(){}),(function(){}))}},{key:"trigger",value:function(t){13===t.keyCode&&this.updateQuery()}},{key:"updateQuery",value:function(){var t,e=Object.assign({},this.$route.query),n=this.keywordStr;n||(n=""),t=n.startsWith('"')&&n.endsWith('"')?[n]:n.split(" "),e.keyword=t,delete e.from,this.$router.push(this.localePath({name:this.name,query:e}),(function(){}),(function(){}))}},{key:"head",value:function(){return{title:this.$t("keyword")}}},{key:"paginationLength",get:function(){return Math.ceil(this.total/this.perPage)}},{key:"lang",get:function(){return this.$i18n.locale}},{key:"items",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"})},{text:this.$t(this.type)},{text:this.$t("search")+(this.total>0?"（"+this.total.toLocaleString()+"）":"")}]}}]),d}(v.Vue);P([Object(v.Watch)("$route")],k.prototype,"watchR",null);var j=k=P([Object(v.Component)({components:{Grid:w.default}})],k),_=n(99),O=n(134),x=n.n(O),E=n(528),C=n(568),I=n(491),F=n(205),X=n(570),S=n(204),V=n(569),$=n(55),D=n(572),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-4",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),n("v-container",[t.loadingFlag?[n("div",{staticClass:"text-center my-10"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:[n("v-row",{staticClass:"mt-5",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{staticClass:"px-4",attrs:{"single-line":"","background-color":"grey lighten-3",filled:"",rounded:"",dense:"","hide-details":"",label:t.$t("add_a_search_term"),"append-icon":"mdi-magnify",clearable:"","clear-icon":"mdi-close-circle"},on:{"click:append":function(e){return t.updateQuery()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.trigger(e)}},model:{value:t.keywordStr,callback:function(e){t.keywordStr=e},expression:"keywordStr"}})],1)],1),t._v(" "),n("div",{staticClass:"text-center my-5"},[n("v-pagination",{attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("Grid",{attrs:{cols:"12",sm:2,list:t.people}}),t._v(" "),n("div",{staticClass:"text-center my-5"},[n("v-pagination",{attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{Grid:n(496).default}),x()(component,{VBreadcrumbs:E.a,VCol:C.a,VContainer:I.a,VIcon:F.a,VPagination:X.a,VProgressCircular:S.a,VRow:V.a,VSheet:$.a,VTextField:D.a})}}]);