"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[26],{603:function(e,n,r){r.d(n,{$w:function(){return o},Bc:function(){return i},Df:function(){return s},f6:function(){return l},z1:function(){return u}});var t=r(294),a="https://api.themoviedb.org/3/movie",c="e58a02e4215cc04ce0b4af905ce50db3",s=function(){var e=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,per_page:"20"});return t.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?").concat(e))},i=function(e){var n=new URLSearchParams({api_key:c});return t.Z.get("".concat(a,"/").concat(e,"?").concat(n))},o=function(e){var n=new URLSearchParams({api_key:c});return t.Z.get("".concat(a,"/").concat(e,"/credits?").concat(n))},l=function(e){var n=new URLSearchParams({api_key:c});return t.Z.get("".concat(a,"/").concat(e,"/reviews?").concat(n))},u=function(e){var n=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,query:e});return t.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(n))}},26:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o=r(689),l=r(87),u=r(603),d="search-movie_button__LYzzy",h="search-movie_mainInfo__naI5J",p="search-movie_imgBlock__O+J-Q",m="search-movie_img__3svDR",v="search-movie_textBlock__DrrPF",f="search-movie_mainTitle__mIqfU",_="search-movie_secondTitle__gC4Z2",x=r(184),g=function(){var e,n=(0,i.useState)(null),r=(0,a.Z)(n,2),c=r[0],g=r[1],j=(0,i.useState)(""),w=(0,a.Z)(j,2),k=w[0],S=w[1],b=(0,i.useState)(!1),Z=(0,a.Z)(b,2),y=Z[0],U=Z[1],L=(0,i.useState)(null),N=(0,a.Z)(L,2),R=N[0],P=N[1],C=(0,o.UO)().id,D=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",F=(0,o.s0)();(0,i.useEffect)((function(){if(C){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n,r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),e.next=4,(0,u.Bc)(C);case 4:n=e.sent,r=n.data,g(r),t=new Date(Date.parse(r.release_date)),S(t.getFullYear()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),P(e.t0.message);case 14:return e.prev=14,U(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]);return(0,x.jsxs)("div",{children:[y&&(0,x.jsx)("p",{children:"Loading..."}),R&&(0,x.jsxs)("p",{children:["Error: ",R]}),(0,x.jsxs)("button",{className:d,onClick:function(){return F(D)},type:"button",children:["\u2190"," Go back"]}),c&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("div",{className:p,children:(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(c.poster_path),alt:c.title,className:m,onError:function(e){e.target.src="/src/images/Screenshot_1.png"}})}),(0,x.jsxs)("div",{className:v,children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("p",{className:f,children:[c.title," (",k,")"]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:"User Score:"})," ",(10*c.vote_average).toFixed(2),"%"]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:_,children:"Overview"}),(0,x.jsx)("p",{children:c.overview})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:_,children:"Genres"}),(0,x.jsx)(x.Fragment,{children:c.poster_path&&(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{})," ",c.genres.map((function(e,n){return(0,x.jsxs)("span",{children:[e.name,n!==c.genres.length-1&&" "]},e.id)}))]})})]})]})]}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"cast",state:{from:D},children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"reviews",state:{from:D},children:"Reviews"})}),(0,x.jsxs)(i.Suspense,{children:[" ",(0,x.jsx)(o.j3,{})]})]})]})]})},j=function(){return(0,x.jsx)("div",{children:(0,x.jsx)(g,{})})}}}]);
//# sourceMappingURL=26.7586bc37.chunk.js.map