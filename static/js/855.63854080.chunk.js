"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[855],{603:function(e,r,n){n.d(r,{$w:function(){return o},Bc:function(){return i},Df:function(){return s},f6:function(){return u},z1:function(){return f}});var t=n(294),a="https://api.themoviedb.org/3/movie",c="e58a02e4215cc04ce0b4af905ce50db3",s=function(){var e=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,per_page:"20"});return t.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?").concat(e))},i=function(e){var r=new URLSearchParams({api_key:c});return t.Z.get("".concat(a,"/").concat(e,"?").concat(r))},o=function(e){var r=new URLSearchParams({api_key:c});return t.Z.get("".concat(a,"/").concat(e,"/credits?").concat(r))},u=function(e){var r=new URLSearchParams({api_key:c});return t.Z.get("".concat(a,"/").concat(e,"/reviews?").concat(r))},f=function(e){var r=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,query:e});return t.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(r))}},855:function(e,r,n){n.r(r),n.d(r,{default:function(){return S}});var t=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(87),u=n(942),f=n(413),l="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",m="movies-search-form_form__soD6i",h="movies-search-form_fieldGroup__mB1g5",v="movies-search-form_input__2yKrp",p="movies-search-form_searchbtn__rTwUX",d=n(184),_=function(e){var r=e.onSubmit,n=(0,i.useState)({search:""}),t=(0,a.Z)(n,2),c=t[0],s=t[1],o=(0,i.useRef)(null);(0,i.useEffect)((function(){o.current.focus()}),[]);var _=function(){s({search:""})},g=(0,i.useMemo)((function(){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,r="",n=crypto.getRandomValues(new Uint8Array(e));e--;)r+=l[63&n[e]];return r}()}),[]);return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r((0,f.Z)({},c)),_()},className:m,children:[(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("label",{htmlFor:g}),(0,d.jsx)("input",{id:g,ref:o,value:c.search,onChange:function(e){var r=e.target,n=r.name,t=r.value;s((0,f.Z)((0,f.Z)({},c),{},(0,u.Z)({},n,t)))},required:!0,type:"text",name:"search",placeholder:"Enter search movies",className:v})]}),(0,d.jsx)("button",{type:"submit",className:p,children:"\ud83d\udd0e"})]})},g=n(689),x="movies-search-list_item__EvUQV",b=function(e){var r=e.items,n=(0,g.TH)(),t=r.map((function(e){var r=e.id,t=e.title;return(0,d.jsx)("li",{className:x,children:(0,d.jsx)(o.rU,{to:"/movies/".concat(r),state:{from:n},children:t})},r)}));return(0,d.jsx)("ul",{children:t})},j=n(603),w="movies-search_error__9NK3+",Z=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),n=r[0],c=r[1],u=(0,i.useState)(!1),f=(0,a.Z)(u,2),l=f[0],m=f[1],h=(0,i.useState)(null),v=(0,a.Z)(h,2),p=v[0],g=v[1],x=(0,o.lr)(),Z=(0,a.Z)(x,2),S=Z[0],k=Z[1],y=S.get("search"),U=S.get("page");(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,j.z1)(y,U);case 4:r=e.sent,n=r.data,c(n.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),g(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();y&&e()}),[y,U]);var N=Boolean(n.length);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(_,{onSubmit:function(e){var r=e.search;k({search:r,page:1}),c([])}}),p&&(0,d.jsx)("p",{className:w,children:p}),l&&(0,d.jsx)("p",{children:"Loading..."}),N&&(0,d.jsx)(b,{items:n})]})},S=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(Z,{})})}}}]);
//# sourceMappingURL=855.63854080.chunk.js.map