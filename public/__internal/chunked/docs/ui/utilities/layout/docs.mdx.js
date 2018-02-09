var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/utilities/layout/docs.mdx.js"]=webpackJsonpSLDS___internal_chunked_docs([5],{1:function(e,t){e.exports=React},106:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Magnet=void 0;var l=n(a(1)),o=n(a(6));t.Magnet=function(e){return l.default.createElement("div",{className:(0,o.default)("slds-card",e.className)},l.default.createElement("div",{className:"slds-p-around_medium"},"My Component"))}},156:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.meta=t.Content=t.getToc=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=n(a(9)),c=a(1),s=n(c),r=n(a(10)),d=a(106),i=n(a(12));const u=e=>["doc",e].filter(e=>e).join(" "),m=e=>e[e.length-1],f=(e,t={})=>t.headingLevel<e?f(e,m(t.children))||t:null,h=e=>(t,...a)=>{const n=u(t.className);return s.default.createElement(e,Object.assign(t,{className:n,key:y()}),a)},p=e=>(t,...a)=>{const n=u(t.className);const[l,o]=e.split("h");const c=_.length&&f(o,m(_));const r={id:t.id,key:t.id,title:a[0],headingLevel:o,children:[]};c?c.children.push(r):_.push(r);return s.default.createElement(e,Object.assign(t,{className:n}),a,s.default.createElement("a",{className:"doc doc-anchor",href:`#${t.id}`,["aria-label"]:"Jump to section"},"#"))};let g=0;const y=()=>{const e=++g;return e},v={h1:p("h1"),h2:p("h2"),h3:p("h3"),h4:p("h4"),h5:p("h5"),h6:p("h6"),p:h("p"),div:h("div"),a:h("a"),em:h("em"),strong:h("strong"),ol:h("ol"),ul:h("ul"),li:h("li"),code:h("code"),blockquote:h("blockquote"),pre:h("pre"),tr:h("tr"),td:h("td"),th:h("th"),table:h("table"),thead:h("thead"),tbody:h("tbody")};let _=[];t.getToc=(()=>_);const E=t.Content=function({factories:e={}}){const{wrapper:t=(0,c.createFactory)("div"),a:a=(0,c.createFactory)("a"),code:n=(0,c.createFactory)("code"),h2:l=(0,c.createFactory)("h2"),li:o=(0,c.createFactory)("li"),p:s=(0,c.createFactory)("p"),ul:u=(0,c.createFactory)("ul")}=e;return t({},(0,c.createElement)("div",{className:"lead"},"Layout utility classes will help you to achieve layouts found within the Salesforce Platform."),l({id:"Magnets"},"Magnets"),s({},"The magnet utilities are used to vertically attach adjacent card-like components."),s({},"The components/utilities that provide a card-like look are the following:"),u({},o({},a({href:"/components/cards/"},"Cards")),o({},a({href:"/components/page-headers"},"Page Headers")),o({},a({href:"/utilities/box"},"Box"))),s({},"If you need a card-like component to appear flush to the card-like component below, you can add the classes  ",n({},"slds-has-bottom-magnet")," and ",n({},"slds-has-top-magnet"),"."),(0,c.createElement)(i.default,{title:"layout card"},(0,c.createElement)("div",{className:"slds-grid slds-grid_pull-padded slds-wrap"},(0,c.createElement)("div",{className:"slds-col slds-size_1-of-1 slds-large-size_1-of-2 slds-p-horizontal_medium"},(0,c.createElement)("strong",null,"Before"),(0,c.createElement)(r.default,{toggleCode:!1},(0,c.createElement)("div",null,(0,c.createElement)(d.Magnet,null),(0,c.createElement)(d.Magnet,null)))),(0,c.createElement)("div",{className:"slds-col slds-size_1-of-1 slds-large-size_1-of-2 slds-p-horizontal_medium"},(0,c.createElement)("strong",null,"After"),(0,c.createElement)(r.default,{toggleCode:!1},(0,c.createElement)("div",null,(0,c.createElement)(d.Magnet,{className:"slds-has-bottom-magnet"}),(0,c.createElement)(d.Magnet,{className:"slds-has-top-magnet"})))))),s({},"In the after example, you’ll notice the component’s top and bottom side are flattened out and appear connected."))};t.meta={};t.default=(e=>{_=[];return s.default.createElement(o.default,null,s.default.createElement(E,l({},e,{factories:v})))})},19:function(e,t){e.exports=JSBeautify}},[156]);