"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[259],{603:function(e,n,t){t.d(n,{$w:function(){return u},Bc:function(){return o},Df:function(){return i},f6:function(){return s},z1:function(){return l}});var r=t(294),a="https://api.themoviedb.org/3/movie",c="e58a02e4215cc04ce0b4af905ce50db3",i=function(){var e=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,per_page:"20"});return r.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?").concat(e))},o=function(e){var n=new URLSearchParams({api_key:c});return r.Z.get("".concat(a,"/").concat(e,"?").concat(n))},u=function(e){var n=new URLSearchParams({api_key:c});return r.Z.get("".concat(a,"/").concat(e,"/credits?").concat(n))},s=function(e){var n=new URLSearchParams({api_key:c});return r.Z.get("".concat(a,"/").concat(e,"/reviews?").concat(n))},l=function(e){var n=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,query:e});return r.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(n))}},259:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r="home-page_title__fc3KH",a=t(861),c=t(439),i=t(757),o=t.n(i),u=t(791),s=t(87),l=t(603),f="movies_list__qGO0R",d="movies_movie__1jlAK",h="movies_error__4DdxU",p=t(184),v=function(){var e=(0,u.useState)([]),n=(0,c.Z)(e,2),t=n[0],r=n[1],i=(0,u.useState)(!1),v=(0,c.Z)(i,2),m=v[0],_=v[1],g=(0,u.useState)(null),k=(0,c.Z)(g,2),w=k[0],x=k[1];(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var n,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,l.Df)();case 4:t=e.sent,a=t.data,r(null!==(n=a.results)&&void 0!==n&&n.length?a.results:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0.message);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var j=t.map((function(e){var n=e.id,t=e.title;return(0,p.jsx)("li",{className:d,children:(0,p.jsx)(s.rU,{to:"/movies/".concat(n),children:t})},n)}));return(0,p.jsxs)(p.Fragment,{children:[w&&(0,p.jsx)("p",{className:h,children:w}),m&&(0,p.jsx)("p",{children:"loading..."}),Boolean(j.length)&&(0,p.jsx)("ul",{className:f,children:j})]})},m=function(){return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:r,children:"Trending today"}),(0,p.jsx)(v,{})]})}}}]);
//# sourceMappingURL=259.b88b4fc2.chunk.js.map