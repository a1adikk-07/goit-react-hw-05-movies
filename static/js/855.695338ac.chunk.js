"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[855],{603:function(e,t,r){r.d(t,{$w:function(){return u},Bc:function(){return s},Mw:function(){return i},f6:function(){return o},z1:function(){return f}});var n=r(294),a="https://api.themoviedb.org/3/movie/",c="e58a02e4215cc04ce0b4af905ce50db3",i=function(){var e=new URLSearchParams({api_key:c,page:"1",include_adult:!1,per_page:"20"});return n.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?").concat(e))},s=function(e){var t=new URLSearchParams({api_key:c});return n.Z.get("".concat(a,"/").concat(e,"/").concat(t))},u=function(e){var t=new URLSearchParams({api_key:c});return n.Z.get("".concat(a,"/").concat(e,"/credits?").concat(t))},o=function(e){var t=new URLSearchParams({api_key:c});return n.Z.get("".concat(a,"/").concat(e,"/reviews?/").concat(t))},f=function(e){var t=new URLSearchParams({api_key:c,page:"1",include_adult:!1,query:e});return n.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(t))}},855:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),u=r(87),o=r(942),f=r(413),h="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",l="movies-search-form_form__soD6i",m="movies-search-form_fieldGroup__mB1g5",v=r(184),p=function(e){var t=e.onSubmit,r=(0,s.useState)({search:""}),n=(0,a.Z)(r,2),c=n[0],i=n[1],u=(0,s.useRef)(null);(0,s.useEffect)((function(){u.current.focus()}),[]);var p=function(){i({search:""})},d=(0,s.useMemo)((function(){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",r=crypto.getRandomValues(new Uint8Array(e));e--;)t+=h[63&r[e]];return t}()}),[]);return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((0,f.Z)({},c)),p()},className:l,children:[(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("label",{htmlFor:d}),(0,v.jsx)("input",{id:d,ref:u,value:c.search,onChange:function(e){var t=e.target,r=t.name,n=t.value;i((0,f.Z)((0,f.Z)({},c),{},(0,o.Z)({},r,n)))},required:!0,type:"text",name:"search",placeholder:"Enter search movies"})]}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})},d=r(689),g="movies-search-list_item__EvUQV",_=function(e){var t=e.items,r=(0,d.TH)(),n=t.map((function(e){var t=e.id,n=e.title;return(0,v.jsx)("li",{className:g,children:(0,v.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:r},children:n})},t)}));return(0,v.jsx)("ul",{children:n})},x=r(603),j="movies-search_error__9NK3+",w=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],o=(0,s.useState)(!1),f=(0,a.Z)(o,2),h=f[0],l=f[1],m=(0,s.useState)(null),d=(0,a.Z)(m,2),g=d[0],w=d[1],Z=(0,u.lr)(),b=(0,a.Z)(Z,2),k=b[0],S=b[1],y=k.get("search"),U=k.get("page");(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,(0,x.z1)(y,U);case 4:t=e.sent,r=t.data,c(r.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0.message);case 12:return e.prev=12,l(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();y&&e()}),[y,U]);var R=Boolean(r.length);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{onSubmit:function(e){var t=e.search;S({search:t,page:1}),c([])}}),g&&(0,v.jsx)("p",{className:j,children:g}),h&&(0,v.jsx)("p",{children:"...Loading"}),R&&(0,v.jsx)(_,{items:r})]})},Z=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(w,{})})}}}]);
//# sourceMappingURL=855.695338ac.chunk.js.map