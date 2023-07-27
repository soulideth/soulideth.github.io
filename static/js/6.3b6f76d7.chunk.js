(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t);var r=a(87),c=a(70),s=a(2);t.default=function(){return Object(s.jsx)(c.b,{children:Object(s.jsx)("div",{className:"container mx-auto",children:Object(s.jsx)(r.a,{})})})}},63:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-1.dbc2198e.jpg"},64:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-2.f0108702.jpg"},65:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-1.0aa0cb76.jpg"},66:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-2.a5aae786.jpg"},67:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-1.41def4d8.jpg"},68:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-2.d2891914.jpg"},69:function(e,t,a){"use strict";t.a="https://portfolio-soulideth-api.onrender.com"},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return O}));var r=a(83),c=a.n(r),s=a(84),n=a(7),i=a(1),o=a.n(i),d=a(63),j=a(64),l=a(65),u=a(66),b=a(67),m=a(68),h=(j.a,u.a,b.a,m.a,l.a,d.a,a(147)),p=a(69),x=a(2),g=Object(i.createContext)(),O=function(e){var t=Object(i.useState)([]),a=Object(n.a)(t,2),r=a[0],d=a[1],j=Object(i.useState)(""),l=Object(n.a)(j,2),u=l[0],b=l[1],m=Object(i.useState)(""),O=Object(n.a)(m,2),f=O[0],y=O[1],v=Object(i.useState)(!1),k=Object(n.a)(v,2),w=k[0],P=k[1];function N(){return(N=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,h.a.get(p.a+"/api/documenthtml/getlist/all",{withCredentials:!0,headers:{token:localStorage.getItem("token")}});case 4:200===(t=e.sent).status?(d(t.data.data),P(!1)):t.status,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var S=r.filter((function(e){return e.header.toLowerCase().includes(u.toLowerCase())||""===u?e:""}));return o.a.useEffect((function(){!function(){N.apply(this,arguments)}()}),[]),Object(x.jsx)(g.Provider,{value:{projects:r,setProjects:d,searchProject:u,setSearchProject:b,searchProjectsByTitle:S,selectProject:f,setSelectProject:y,openBackdrop:w},children:e.children})}},87:function(e,t,a){"use strict";var r=a(1),c=a(6),s=a(158),n=a(159),i=a(160),o=a(161),d=a(162),j=a(163),l=a(43),u=a(13),b=a(2),m=function(e){var t=e.docId,a=e.title,r=e.category,c=e.image;return Object(b.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(b.jsx)(u.b,{to:"/projects/single-project/".concat(t),"aria-label":"Single Project",state:{docId:t},children:Object(b.jsx)(s.a,{sx:{height:330,maxWidth:300},children:Object(b.jsxs)(n.a,{children:[Object(b.jsx)(i.a,{component:"img",sx:{height:200},image:c,alt:"Single Project"}),Object(b.jsx)(o.a,{children:Object(b.jsxs)(d.a,{alignItems:"center",justify:"center",children:[Object(b.jsx)(j.a,{gutterBottom:!0,variant:"subtitle1",component:"div",children:a}),Object(b.jsx)(j.a,{variant:"body2",color:"text.secondary",children:r})]})})]})})})})},h=a(70),p=a(97),x=a(164),g=a(156),O=a(157);t.a=function(){var e=Object(r.useContext)(h.a),t=(e.projects,e.searchProject,e.setSearchProject),a=e.searchProjectsByTitle,n=(e.selectProject,e.setSelectProject,e.openBackdrop),i=function(e){var t=e.show,a=Object(p.a)();Object(x.a)(a.breakpoints.down("sm"));return t?Object(b.jsx)(b.Fragment,{children:Array.from(new Array(5)).map((function(e,t){return Object(b.jsx)(g.a,{item:!0,children:Object(b.jsxs)(s.a,{elevation:2,sx:{color:"#2196f3",Width:300,Height:330,padding:"5px",opacity:"".concat(100-Number(20*t),"%")},children:[Object(b.jsx)(O.a,{variant:"rectangular",animation:"wave",width:300,height:200}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(O.a,{width:"90%"}),Object(b.jsx)(O.a,{width:"78%"})]})]},t)})}))}):null};return Object(b.jsx)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:Object(b.jsxs)(g.a,{container:!0,spacing:1,alignItems:"center",justify:"center",justifyContent:"center",children:[Object(b.jsx)(g.a,{item:!0,xs:12,children:Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})})}),Object(b.jsx)(g.a,{item:!0,xs:12,children:Object(b.jsx)("div",{className:"mt-10 sm:mt-16",children:Object(b.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title"})})}),Object(b.jsx)(g.a,{item:!0,xs:12,children:Object(b.jsx)("div",{className:"mt-10 sm:mt-16",children:Object(b.jsx)("div",{className:" flex justify-center border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:Object(b.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(b.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(b.jsx)(c.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(b.jsx)("input",{onChange:function(e){t(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]})})})}),Object(b.jsx)(i,{show:n}),a.map((function(e){return Object(b.jsx)(g.a,{item:!0,children:Object(b.jsx)(m,{tags:e.tags,title:e.header,category:e.departments,image:e.headerImage,docId:e.docId},e.docId)})}))]})})}}}]);
//# sourceMappingURL=6.3b6f76d7.chunk.js.map