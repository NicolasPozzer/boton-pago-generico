(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4575],{1570:function(e,r,n){Promise.resolve().then(n.bind(n,82865))},88e3:function(e,r,n){"use strict";n.d(r,{x:function(){return i}});var a=n(91744),c=n(2265),t=n(41448),s=n.n(t),o=n(51628),l=n(79888),i=(0,c.forwardRef)(function(e,r){var n,t=e.children,s=e.className,l=e.color,i=e.textBgColor,d=e.textColor,h=(0,a._T)(e,["children","className","color","textBgColor","textColor"]);return c.createElement("div",(0,a.pi)({className:(0,o.Z)("card",((n={})["bg-".concat(l)]=l,n["text-".concat(d)]=d,n["text-bg-".concat(i)]=i,n),s)},h,{ref:r}),t)});i.propTypes={children:s().node,className:s().string,color:s().oneOfType([l.$1,l.R$]),textBgColor:l.$1,textColor:s().string},i.displayName="CCard"},1893:function(e,r,n){"use strict";n.d(r,{s:function(){return l}});var a=n(91744),c=n(2265),t=n(41448),s=n.n(t),o=n(51628),l=(0,c.forwardRef)(function(e,r){var n=e.children,t=e.className,s=(0,a._T)(e,["children","className"]);return c.createElement("div",(0,a.pi)({className:(0,o.Z)("card-body",t)},s,{ref:r}),n)});l.propTypes={children:s().node,className:s().string},l.displayName="CCardBody"},82089:function(e,r,n){"use strict";n.d(r,{b:function(){return l}});var a=n(91744),c=n(2265),t=n(41448),s=n.n(t),o=n(51628),l=(0,c.forwardRef)(function(e,r){var n=e.children,t=e.as,s=e.className,l=(0,a._T)(e,["children","as","className"]);return c.createElement(void 0===t?"div":t,(0,a.pi)({className:(0,o.Z)("card-header",s)},l,{ref:r}),n)});l.propTypes={as:s().elementType,children:s().node,className:s().string},l.displayName="CCardHeader"},72365:function(e,r,n){"use strict";n.d(r,{b:function(){return i}});var a=n(91744),c=n(2265),t=n(41448),s=n.n(t),o=n(51628),l=["xxl","xl","lg","md","sm","xs"],i=(0,c.forwardRef)(function(e,r){var n=e.children,t=e.className,s=(0,a._T)(e,["children","className"]),i=[];return l.forEach(function(e){var r=s[e];delete s[e];var n="xs"===e?"":"-".concat(e);("number"==typeof r||"string"==typeof r)&&i.push("col".concat(n,"-").concat(r)),"boolean"==typeof r&&i.push("col".concat(n)),r&&"object"==typeof r&&(("number"==typeof r.span||"string"==typeof r.span)&&i.push("col".concat(n,"-").concat(r.span)),"boolean"==typeof r.span&&i.push("col".concat(n)),("number"==typeof r.order||"string"==typeof r.order)&&i.push("order".concat(n,"-").concat(r.order)),"number"==typeof r.offset&&i.push("offset".concat(n,"-").concat(r.offset)))}),c.createElement("div",(0,a.pi)({className:(0,o.Z)(i.length>0?i:"col",t)},s,{ref:r}),n)}),d=s().oneOfType([s().bool,s().number,s().string,s().oneOf(["auto"])]),h=s().oneOfType([d,s().shape({span:d,offset:s().oneOfType([s().number,s().string]),order:s().oneOfType([s().oneOf(["first","last"]),s().number,s().string])})]);i.propTypes={children:s().node,className:s().string,xs:h,sm:h,md:h,lg:h,xl:h,xxl:h},i.displayName="CCol"},75555:function(e,r,n){"use strict";n.d(r,{r:function(){return i}});var a=n(91744),c=n(2265),t=n(41448),s=n.n(t),o=n(51628),l=["xxl","xl","lg","md","sm","xs"],i=(0,c.forwardRef)(function(e,r){var n=e.children,t=e.className,s=(0,a._T)(e,["children","className"]),i=[];return l.forEach(function(e){var r=s[e];delete s[e];var n="xs"===e?"":"-".concat(e);"object"==typeof r&&(r.cols&&i.push("row-cols".concat(n,"-").concat(r.cols)),"number"==typeof r.gutter&&i.push("g".concat(n,"-").concat(r.gutter)),"number"==typeof r.gutterX&&i.push("gx".concat(n,"-").concat(r.gutterX)),"number"==typeof r.gutterY&&i.push("gy".concat(n,"-").concat(r.gutterY)))}),c.createElement("div",(0,a.pi)({className:(0,o.Z)("row",i,t)},s,{ref:r}),n)}),d=s().shape({cols:s().oneOfType([s().oneOf(["auto"]),s().number,s().string]),gutter:s().oneOfType([s().string,s().number]),gutterX:s().oneOfType([s().string,s().number]),gutterY:s().oneOfType([s().string,s().number])});i.propTypes={children:s().node,className:s().string,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d},i.displayName="CRow"},82865:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return g}});var a=n(57437),c=n(75555),t=n(72365),s=n(88e3),o=n(82089),l=n(1893),i=n(91744),d=n(2265),h=n(41448),f=n.n(h),u=n(51628),p=(0,d.forwardRef)(function(e,r){var n=e.children,a=e.className,c=(0,i._T)(e,["children","className"]);return d.createElement("nav",{"aria-label":"breadcrumb"},d.createElement("ol",(0,i.pi)({className:(0,u.Z)("breadcrumb",a)},c,{ref:r}),n))});p.propTypes={children:f().node,className:f().string},p.displayName="CBreadcrumb";var m=n(99856),x=(0,d.forwardRef)(function(e,r){var n=e.children,a=e.active,c=e.as,t=e.className,s=e.href,o=(0,i._T)(e,["children","active","as","className","href"]);return d.createElement("li",(0,i.pi)({className:(0,u.Z)("breadcrumb-item",{active:a},t)},a&&{"aria-current":"page"},o,{ref:r}),s?d.createElement(m.h,{as:c,href:s},n):n)});x.propTypes={active:f().bool,children:f().node,className:f().string,href:f().string},x.displayName="CBreadcrumbItem";var b=n(78210),g=()=>(0,a.jsx)(c.r,{children:(0,a.jsx)(t.b,{xs:12,children:(0,a.jsxs)(s.x,{className:"mb-4",children:[(0,a.jsx)(o.b,{children:(0,a.jsx)("strong",{children:"React Breadcrumb"})}),(0,a.jsxs)(l.s,{children:[(0,a.jsxs)("p",{className:"text-body-secondary small",children:["The breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. You don’t have to add separators, because they automatically added in CSS through"," ",(0,a.jsxs)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::before",children:[" ",(0,a.jsx)("code",{children:"::before"})]})," ","and"," ",(0,a.jsxs)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content",children:[" ",(0,a.jsx)("code",{children:"content"})]}),"."]}),(0,a.jsxs)(b.q3,{href:"components/breadcrumb",children:[(0,a.jsxs)(p,{children:[(0,a.jsx)(x,{children:(0,a.jsx)(m.h,{href:"#",children:"Home"})}),(0,a.jsx)(x,{active:!0,children:"Library"})]}),(0,a.jsxs)(p,{children:[(0,a.jsx)(x,{children:(0,a.jsx)(m.h,{href:"#",children:"Home"})}),(0,a.jsx)(x,{children:(0,a.jsx)(m.h,{href:"#",children:"Library"})}),(0,a.jsx)(x,{active:!0,children:"Data"})]}),(0,a.jsxs)(p,{children:[(0,a.jsx)(x,{children:(0,a.jsx)(m.h,{href:"#",children:"Home"})}),(0,a.jsx)(x,{children:(0,a.jsx)(m.h,{href:"#",children:"Library"})}),(0,a.jsx)(x,{children:(0,a.jsx)(m.h,{href:"#",children:"Data"})}),(0,a.jsx)(x,{active:!0,children:"Bootstrap"})]})]})]})]})})})}},function(e){e.O(0,[7695,6653,2846,7138,5045,5740,8210,2971,7023,1744],function(){return e(e.s=1570)}),_N_E=e.O()}]);