(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{pFRj:function(e,a,c){"use strict";var s=c("nKUr"),n=c("H+61"),t=c("UlJF"),l=c("+Css"),i=c("7LId"),r=c("VIvw"),j=c("iHvq"),o=c("cpVT"),d=c("q1tI"),b=c("0Yqi");function m(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,s=Object(j.a)(e);if(a){var n=Object(j.a)(this).constructor;c=Reflect.construct(s,arguments,n)}else c=s.apply(this,arguments);return Object(r.a)(this,c)}}var v=function(e){Object(i.a)(c,e);var a=m(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,t=new Array(s),i=0;i<s;i++)t[i]=arguments[i];return e=a.call.apply(a,[this].concat(t)),Object(o.a)(Object(l.a)(e),"_isMounted",!1),Object(o.a)(Object(l.a)(e),"state",{display:!1,collapsed:!0}),Object(o.a)(Object(l.a)(e),"toggleNavbar",(function(){e.setState({collapsed:!e.state.collapsed})})),e}return Object(t.a)(c,[{key:"componentDidMount",value:function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.collapsed,a=e?"collapse navbar-collapse":"collapse navbar-collapse show",c=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{id:"navbar",className:"navbar-area",children:Object(s.jsx)("div",{className:"luvion-nav",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light",children:[Object(s.jsx)(b.a,{href:"/",children:Object(s.jsxs)("a",{className:"navbar-brand",children:[Object(s.jsx)("img",{src:"/images/logo.png",alt:"logo"}),Object(s.jsx)("img",{src:"/images/black-logo.png",alt:"logo"})]})}),Object(s.jsxs)("button",{onClick:this.toggleNavbar,className:c,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(s.jsx)("span",{className:"icon-bar top-bar"}),Object(s.jsx)("span",{className:"icon-bar middle-bar"}),Object(s.jsx)("span",{className:"icon-bar bottom-bar"})]}),Object(s.jsxs)("div",{className:a,id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)(b.a,{href:"#",children:Object(s.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Home ",Object(s.jsx)("i",{className:"fas fa-chevron-down"})]})}),Object(s.jsxs)("ul",{className:"dropdown-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Home demo one"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/index2",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Home demo two"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/index3",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Home demo three"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/index4",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Home demo four"})})})]})]}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/about-us",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"About us"})})}),Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)(b.a,{href:"#",children:Object(s.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Features ",Object(s.jsx)("i",{className:"fas fa-chevron-down"})]})}),Object(s.jsxs)("ul",{className:"dropdown-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/features-one",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Features style one"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/features-two",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Features style two"})})})]})]}),Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)(b.a,{href:"#",children:Object(s.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Pages ",Object(s.jsx)("i",{className:"fas fa-chevron-down"})]})}),Object(s.jsxs)("ul",{className:"dropdown-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/about-us",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"About us"})})}),Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)(b.a,{href:"#",children:Object(s.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["New dropdown ",Object(s.jsx)("i",{className:"fas fa-chevron-down"})]})}),Object(s.jsxs)("ul",{className:"dropdown-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"#",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"2nd level"})})}),Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)(b.a,{href:"#",children:Object(s.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Another dropdown ",Object(s.jsx)("i",{className:"fas fa-chevron-down"})]})}),Object(s.jsx)("ul",{className:"dropdown-menu",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"#",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"3rd level"})})})})]})]})]}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/team",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Team"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/pricing",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Pricing"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/faq",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"FAQ"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/sign-up",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Signup"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/login",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Login"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/404",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"404 error"})})})]})]}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/pricing",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Pricing"})})}),Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)(b.a,{href:"#",children:Object(s.jsxs)("a",{className:"nav-link",onClick:function(e){return e.preventDefault()},children:["Blog ",Object(s.jsx)("i",{className:"fas fa-chevron-down"})]})}),Object(s.jsxs)("ul",{className:"dropdown-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/blog-one",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Blog grid"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/blog-two",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Blog right sidebar"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/single-blog",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Blog details"})})})]})]}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(b.a,{href:"/contact",activeClassName:"active",children:Object(s.jsx)("a",{className:"nav-link",children:"Contact"})})})]}),Object(s.jsx)("div",{className:"others-options",children:Object(s.jsx)(b.a,{href:"/login",children:Object(s.jsxs)("a",{className:"login-btn",children:[Object(s.jsx)("i",{className:"flaticon-user"})," Login"]})})})]})]})})})})})}}]),c}(d.Component);a.a=v}}]);