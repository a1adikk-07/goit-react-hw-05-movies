"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[693],{603:function(a,e,t){t.d(e,{$w:function(){return s},Bc:function(){return i},Df:function(){return o},f6:function(){return u},z1:function(){return p}});var r=t(294),n="https://api.themoviedb.org/3/movie",c="e58a02e4215cc04ce0b4af905ce50db3",o=function(){var a=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,per_page:"20"});return r.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?").concat(a))},i=function(a){var e=new URLSearchParams({api_key:c});return r.Z.get("".concat(n,"/").concat(a,"?").concat(e))},s=function(a){var e=new URLSearchParams({api_key:c});return r.Z.get("".concat(n,"/").concat(a,"/credits?").concat(e))},u=function(a){var e=new URLSearchParams({api_key:c});return r.Z.get("".concat(n,"/").concat(a,"/reviews?").concat(e))},p=function(a){var e=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,query:a});return r.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(e))}},277:function(a,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(861),n=t(439),c=t(757),o=t.n(c),i=t(791),s=t(689),u=t(603),p={castContainer:"cast_castContainer__RvD4o",actorContainer:"cast_actorContainer__vtWTk",actorImage:"cast_actorImage__X39TJ",actorName:"cast_actorName__DjUJO",actorCharacter:"cast_actorCharacter__g4xHi"},f=t.p+"static/media/defaultimg.6d7b20f8b4f1ee5277b0.png",m=t(184),h=function(){var a=(0,i.useState)([]),e=(0,n.Z)(a,2),t=e[0],c=e[1],h=(0,i.useState)(!1),l=(0,n.Z)(h,2),d=l[0],g=l[1],v=(0,i.useState)(null),_=(0,n.Z)(v,2),k=_[0],w=_[1],x=(0,s.UO)().id;(0,i.useEffect)((function(){if(x){var a=function(){var a=(0,r.Z)(o().mark((function a(){var e,t;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,g(!0),a.next=4,(0,u.$w)(x);case 4:e=a.sent,t=e.data,c(t.cast),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),w(a.t0.message);case 12:return a.prev=12,g(!1),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})));return function(){return a.apply(this,arguments)}}();a()}}),[x]);var b=function(a){a.target.src=f};return(0,m.jsxs)("div",{className:p.castContainer,children:[d&&(0,m.jsx)("p",{children:"Loading..."}),k&&(0,m.jsxs)("p",{children:["Error: ",k]}),t&&t.map((function(a,e){return(0,m.jsxs)("div",{className:p.actorContainer,children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(a.profile_path),alt:a.name,className:p.actorImage,onError:b}),(0,m.jsxs)("li",{className:p.actorInfo,children:[(0,m.jsx)("p",{className:p.actorName,children:a.name}),(0,m.jsxs)("p",{className:p.actorCharacter,children:["Character: ",a.character]})]})]},e)}))]})},l=function(){return(0,m.jsx)("div",{children:(0,m.jsx)(h,{})})}}}]);
//# sourceMappingURL=693.5e965868.chunk.js.map