(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8467],{27595:function(e,a,t){Promise.resolve().then(t.bind(t,40607))},88e3:function(e,a,t){"use strict";t.d(a,{x:function(){return o}});var n=t(91744),s=t(2265),r=t(41448),c=t.n(r),i=t(51628),l=t(79888),o=(0,s.forwardRef)(function(e,a){var t,r=e.children,c=e.className,l=e.color,o=e.textBgColor,d=e.textColor,m=(0,n._T)(e,["children","className","color","textBgColor","textColor"]);return s.createElement("div",(0,n.pi)({className:(0,i.Z)("card",((t={})["bg-".concat(l)]=l,t["text-".concat(d)]=d,t["text-bg-".concat(o)]=o,t),c)},m,{ref:a}),r)});o.propTypes={children:c().node,className:c().string,color:c().oneOfType([l.$1,l.R$]),textBgColor:l.$1,textColor:c().string},o.displayName="CCard"},1893:function(e,a,t){"use strict";t.d(a,{s:function(){return l}});var n=t(91744),s=t(2265),r=t(41448),c=t.n(r),i=t(51628),l=(0,s.forwardRef)(function(e,a){var t=e.children,r=e.className,c=(0,n._T)(e,["children","className"]);return s.createElement("div",(0,n.pi)({className:(0,i.Z)("card-body",r)},c,{ref:a}),t)});l.propTypes={children:c().node,className:c().string},l.displayName="CCardBody"},82089:function(e,a,t){"use strict";t.d(a,{b:function(){return l}});var n=t(91744),s=t(2265),r=t(41448),c=t.n(r),i=t(51628),l=(0,s.forwardRef)(function(e,a){var t=e.children,r=e.as,c=e.className,l=(0,n._T)(e,["children","as","className"]);return s.createElement(void 0===r?"div":r,(0,n.pi)({className:(0,i.Z)("card-header",c)},l,{ref:a}),t)});l.propTypes={as:c().elementType,children:c().node,className:c().string},l.displayName="CCardHeader"},72365:function(e,a,t){"use strict";t.d(a,{b:function(){return o}});var n=t(91744),s=t(2265),r=t(41448),c=t.n(r),i=t(51628),l=["xxl","xl","lg","md","sm","xs"],o=(0,s.forwardRef)(function(e,a){var t=e.children,r=e.className,c=(0,n._T)(e,["children","className"]),o=[];return l.forEach(function(e){var a=c[e];delete c[e];var t="xs"===e?"":"-".concat(e);("number"==typeof a||"string"==typeof a)&&o.push("col".concat(t,"-").concat(a)),"boolean"==typeof a&&o.push("col".concat(t)),a&&"object"==typeof a&&(("number"==typeof a.span||"string"==typeof a.span)&&o.push("col".concat(t,"-").concat(a.span)),"boolean"==typeof a.span&&o.push("col".concat(t)),("number"==typeof a.order||"string"==typeof a.order)&&o.push("order".concat(t,"-").concat(a.order)),"number"==typeof a.offset&&o.push("offset".concat(t,"-").concat(a.offset)))}),s.createElement("div",(0,n.pi)({className:(0,i.Z)(o.length>0?o:"col",r)},c,{ref:a}),t)}),d=c().oneOfType([c().bool,c().number,c().string,c().oneOf(["auto"])]),m=c().oneOfType([d,c().shape({span:d,offset:c().oneOfType([c().number,c().string]),order:c().oneOfType([c().oneOf(["first","last"]),c().number,c().string])})]);o.propTypes={children:c().node,className:c().string,xs:m,sm:m,md:m,lg:m,xl:m,xxl:m},o.displayName="CCol"},75555:function(e,a,t){"use strict";t.d(a,{r:function(){return o}});var n=t(91744),s=t(2265),r=t(41448),c=t.n(r),i=t(51628),l=["xxl","xl","lg","md","sm","xs"],o=(0,s.forwardRef)(function(e,a){var t=e.children,r=e.className,c=(0,n._T)(e,["children","className"]),o=[];return l.forEach(function(e){var a=c[e];delete c[e];var t="xs"===e?"":"-".concat(e);"object"==typeof a&&(a.cols&&o.push("row-cols".concat(t,"-").concat(a.cols)),"number"==typeof a.gutter&&o.push("g".concat(t,"-").concat(a.gutter)),"number"==typeof a.gutterX&&o.push("gx".concat(t,"-").concat(a.gutterX)),"number"==typeof a.gutterY&&o.push("gy".concat(t,"-").concat(a.gutterY)))}),s.createElement("div",(0,n.pi)({className:(0,i.Z)("row",o,r)},c,{ref:a}),t)}),d=c().shape({cols:c().oneOfType([c().oneOf(["auto"]),c().number,c().string]),gutter:c().oneOfType([c().string,c().number]),gutterX:c().oneOfType([c().string,c().number]),gutterY:c().oneOfType([c().string,c().number])});o.propTypes={children:c().node,className:c().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},o.displayName="CRow"},89196:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var n=function(e){if(!e)return 0;var a=window.getComputedStyle(e),t=a.transitionDuration,n=a.transitionDelay,s=Number.parseFloat(t),r=Number.parseFloat(n);return s||r?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*1e3):0}},40607:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return C}});var n=t(57437),s=t(75555),r=t(72365),c=t(88e3),i=t(82089),l=t(1893),o=t(2265),d=t(41448),m=t.n(d),b=t(51628),p=(0,o.createContext)({}),h=(0,o.forwardRef)(function(e,a){var t=e.children,n=e.activeItemKey,s=e.className,r=e.onChange,c=(0,o.useId)(),i=(0,o.useState)(n),l=i[0],d=i[1];return(0,o.useEffect)(function(){l&&r&&r(l)},[l]),o.createElement(p.Provider,{value:{_activeItemKey:l,setActiveItemKey:d,id:c}},o.createElement("div",{className:(0,b.Z)("tabs",s),ref:a},t))});h.propTypes={activeItemKey:m().oneOfType([m().number,m().string]).isRequired,children:m().node,className:m().string,onChange:m().func},h.displayName="CTabs";var u=t(91744),y=t(42478),f=t(79086),x=(0,o.forwardRef)(function(e,a){var t,n=e.children,s=e.className,r=e.layout,c=e.variant,i=(0,u._T)(e,["children","className","layout","variant"]),l=(0,o.useRef)(null),d=(0,f.A7)(a,l);return o.createElement("div",(0,u.pi)({className:(0,b.Z)("nav",((t={})["nav-".concat(r)]=r,t["nav-".concat(c)]=c,t),s),role:"tablist",onKeyDown:function(e){if(null!==l.current&&("ArrowDown"===e.key||"ArrowUp"===e.key||"ArrowLeft"===e.key||"ArrowRight"===e.key||"Home"===e.key||"End"===e.key)){e.preventDefault();var a=e.target,t=Array.from(l.current.querySelectorAll(".nav-link:not(.disabled):not(:disabled)")),n=void 0;(n="Home"===e.key||"End"===e.key?"End"===e.key?t.at(-1):t[0]:(0,y.Z)(t,a,"ArrowDown"===e.key||"ArrowRight"===e.key,!0))&&n.focus({preventScroll:!0})}},ref:d},i),n)});x.propTypes={children:m().node,className:m().string,layout:m().oneOf(["fill","justified"]),variant:m().oneOf(["pills","tabs","underline","underline-border"])},x.displayName="CTabList";var j=(0,o.forwardRef)(function(e,a){var t=e.children,n=e.className,s=e.itemKey,r=(0,u._T)(e,["children","className","itemKey"]),c=(0,o.useContext)(p),i=c._activeItemKey,l=c.setActiveItemKey,d=c.id,m=function(){return s===i};return o.createElement("button",(0,u.pi)({className:(0,b.Z)("nav-link",{active:m()},n),id:"".concat(d).concat(s,"-tab"),onClick:function(){return l(s)},onFocus:function(){return l(s)},role:"tab",tabIndex:m()?0:-1,type:"button","aria-controls":"".concat(d).concat(s,"-tab-pane"),"aria-selected":m(),ref:a},r),t)});j.propTypes={children:m().node,className:m().string,disabled:m().bool,itemKey:m().oneOfType([m().number,m().string]).isRequired},j.displayName="CTab";var N=t(90470),v=t(89196),g=t(63625),K=(0,o.forwardRef)(function(e,a){var t=e.children,n=e.className,s=e.itemKey,r=e.onHide,c=e.onShow,i=e.transition,l=void 0===i||i,d=e.visible,m=(0,u._T)(e,["children","className","itemKey","onHide","onShow","transition","visible"]),h=(0,o.useContext)(p),y=h._activeItemKey,x=h.id,j=(0,o.useRef)(),N=(0,f.A7)(a,j),K=(0,o.useState)(d||y===s),T=K[0],C=K[1];return(0,o.useEffect)(function(){void 0!==d&&C(d)},[d]),(0,o.useEffect)(function(){C(y===s)},[y]),o.createElement(g.ZP,{in:T,nodeRef:j,onEnter:c,onExit:r,timeout:j.current?(0,v.Z)(j.current):0},function(e){return o.createElement("div",(0,u.pi)({className:(0,b.Z)("tab-pane",{active:T,fade:l,show:"entered"===e},n),id:"".concat(x).concat(s,"-tab-pane"),role:"tabpanel","aria-labelledby":"".concat(x).concat(s,"-tab"),tabIndex:0,ref:N},m),t)})});K.propTypes={children:m().node,className:m().string,itemKey:m().oneOfType([m().number,m().string]).isRequired,onHide:m().func,onShow:m().func,transition:m().bool,visible:m().bool},K.displayName="CTabPanel";var T=t(78210),C=()=>(0,n.jsxs)(s.r,{children:[(0,n.jsx)(r.b,{xs:12,children:(0,n.jsxs)(c.x,{className:"mb-4",children:[(0,n.jsx)(i.b,{children:(0,n.jsx)("strong",{children:"React Tabs"})}),(0,n.jsxs)(l.s,{children:[(0,n.jsxs)("p",{className:"text-body-secondary small",children:["The basic React tabs example uses the ",(0,n.jsx)("code",{children:'variant="tabs"'})," props to generate a tabbed interface."]}),(0,n.jsx)(T.q3,{href:"components/tabs/#example",children:(0,n.jsxs)(h,{activeItemKey:"profile",children:[(0,n.jsxs)(x,{variant:"tabs",children:[(0,n.jsx)(j,{itemKey:"home",children:"Home"}),(0,n.jsx)(j,{itemKey:"profile",children:"Profile"}),(0,n.jsx)(j,{itemKey:"contact",children:"Contact"}),(0,n.jsx)(j,{disabled:!0,itemKey:"disabled",children:"Disabled"})]}),(0,n.jsxs)(N.g,{children:[(0,n.jsx)(K,{className:"p-3",itemKey:"home",children:"Home tab content"}),(0,n.jsx)(K,{className:"p-3",itemKey:"profile",children:"Profile tab content"}),(0,n.jsx)(K,{className:"p-3",itemKey:"contact",children:"Contact tab content"}),(0,n.jsx)(K,{className:"p-3",itemKey:"disabled",children:"Disabled tab content"})]})]})})]})]})}),(0,n.jsx)(r.b,{xs:12,children:(0,n.jsxs)(c.x,{className:"mb-4",children:[(0,n.jsxs)(i.b,{children:[(0,n.jsx)("strong",{children:"React Tabs"})," ",(0,n.jsx)("small",{children:"Unstyled"})]}),(0,n.jsxs)(l.s,{children:[(0,n.jsxs)("p",{className:"text-body-secondary small",children:["If you don’t provide the ",(0,n.jsx)("code",{children:"variant"})," prop, the component will default to a basic style."]}),(0,n.jsx)(T.q3,{href:"components/tabs/#unstyled",children:(0,n.jsxs)(h,{activeItemKey:"profile",children:[(0,n.jsxs)(x,{children:[(0,n.jsx)(j,{itemKey:"home",children:"Home"}),(0,n.jsx)(j,{itemKey:"profile",children:"Profile"}),(0,n.jsx)(j,{itemKey:"contact",children:"Contact"}),(0,n.jsx)(j,{disabled:!0,itemKey:"disabled",children:"Disabled"})]}),(0,n.jsxs)(N.g,{children:[(0,n.jsx)(K,{className:"p-3",itemKey:"home",children:"Home tab content"}),(0,n.jsx)(K,{className:"p-3",itemKey:"profile",children:"Profile tab content"}),(0,n.jsx)(K,{className:"p-3",itemKey:"contact",children:"Contact tab content"}),(0,n.jsx)(K,{className:"p-3",itemKey:"disabled",children:"Disabled tab content"})]})]})})]})]})}),(0,n.jsx)(r.b,{xs:12,children:(0,n.jsxs)(c.x,{className:"mb-4",children:[(0,n.jsxs)(i.b,{children:[(0,n.jsx)("strong",{children:"React Tabs"})," ",(0,n.jsx)("small",{children:"Pills"})]}),(0,n.jsxs)(l.s,{children:[(0,n.jsxs)("p",{className:"text-body-secondary small",children:["Take that same code, but use ",(0,n.jsx)("code",{children:'variant="pills"'})," instead:"]}),(0,n.jsx)(T.q3,{href:"components/tabs/#unstyled",children:(0,n.jsxs)(h,{activeItemKey:2,children:[(0,n.jsxs)(x,{variant:"pills",children:[(0,n.jsx)(j,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),(0,n.jsx)(j,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),(0,n.jsx)(j,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),(0,n.jsx)(j,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),(0,n.jsxs)(N.g,{children:[(0,n.jsx)(K,{className:"p-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),(0,n.jsx)(K,{className:"p-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),(0,n.jsx)(K,{className:"p-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),(0,n.jsx)(K,{className:"p-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})}),(0,n.jsx)(r.b,{xs:12,children:(0,n.jsxs)(c.x,{className:"mb-4",children:[(0,n.jsxs)(i.b,{children:[(0,n.jsx)("strong",{children:"React Tabs"})," ",(0,n.jsx)("small",{children:"Underline"})]}),(0,n.jsxs)(l.s,{children:[(0,n.jsxs)("p",{className:"text-body-secondary small",children:["Take that same code, but use ",(0,n.jsx)("code",{children:'variant="underline"'})," instead:"]}),(0,n.jsx)(T.q3,{href:"components/tabs/#unstyled",children:(0,n.jsxs)(h,{activeItemKey:2,children:[(0,n.jsxs)(x,{variant:"underline",children:[(0,n.jsx)(j,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),(0,n.jsx)(j,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),(0,n.jsx)(j,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),(0,n.jsx)(j,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),(0,n.jsxs)(N.g,{children:[(0,n.jsx)(K,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),(0,n.jsx)(K,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),(0,n.jsx)(K,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),(0,n.jsx)(K,{className:"py-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})}),(0,n.jsx)(r.b,{xs:12,children:(0,n.jsxs)(c.x,{className:"mb-4",children:[(0,n.jsxs)(i.b,{children:[(0,n.jsx)("strong",{children:"React Tabs"})," ",(0,n.jsx)("small",{children:"Underline border"})]}),(0,n.jsxs)(l.s,{children:[(0,n.jsxs)("p",{className:"text-body-secondary small",children:["Take that same code, but use ",(0,n.jsx)("code",{children:'variant="underline-border"'})," instead:"]}),(0,n.jsx)(T.q3,{href:"components/tabs/#unstyled",children:(0,n.jsxs)(h,{activeItemKey:2,children:[(0,n.jsxs)(x,{variant:"underline-border",children:[(0,n.jsx)(j,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),(0,n.jsx)(j,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),(0,n.jsx)(j,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),(0,n.jsx)(j,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),(0,n.jsxs)(N.g,{children:[(0,n.jsx)(K,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),(0,n.jsx)(K,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),(0,n.jsx)(K,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),(0,n.jsx)(K,{className:"py-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})})]})}},function(e){e.O(0,[7695,6653,2846,7138,5045,1436,8210,2971,7023,1744],function(){return e(e.s=27595)}),_N_E=e.O()}]);