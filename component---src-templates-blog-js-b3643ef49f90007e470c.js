(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6FTn":function(e,t,a){"use strict";a("5l6m");var n=a("a8M0");t.a=function(e){return null==e?null:n.b+"/"+e.replace(/^\//,"")}},C0IN:function(e,t,a){"use strict";(function(e){a("q1tI");var n=function(t,a){return t.push(e.createElement("span",{key:t.length+"-"+a},a))};t.a=function(e,t){if(e.length<=1)return e.map(t);var a=[];return e.forEach((function(r,i){i===e.length-1?(n(a,2===e.length?" and ":", and "),a.push(t(r,i))):i>0?(n(a,", "),a.push(t(r,i))):a.push(t(r,i))})),a}}).call(this,a("iMUK"))},IeeO:function(e,t,a){"use strict";(function(e){a("iMmK"),a("UsjJ"),a("5l6m");var n=a("aAma"),r=a("6HPj"),i=a("Wbzz"),c=a("17x9"),l=a.n(c),o=(a("q1tI"),a("zDcZ")),s=function(t){var a,i=t.next,c=t.prev,l=t.location;return e.createElement("div",{css:{background:o.a.dark,color:o.a.white,paddingTop:50,paddingBottom:50}},e.createElement(n.a,null,e.createElement(r.a,{type:"ul",halign:"space-between",css:(a={},a[o.c.between("small","medium")]={paddingRight:240},a[o.c.between("large","largerSidebar")]={paddingRight:280},a[o.c.between("largerSidebar","sidebarFixed",!0)]={paddingRight:380},a)},e.createElement(r.a,{basis:"50%",type:"li"},c&&e.createElement("div",null,e.createElement(d,null,"Предыдущая глава"),e.createElement("div",{css:{paddingTop:10}},e.createElement(u,{location:l,to:c.id+".html"},c.title)))),i&&e.createElement(r.a,{halign:"flex-end",basis:"50%",type:"li",css:{textAlign:"right"}},e.createElement("div",null,e.createElement(d,null,"Следующая глава"),e.createElement("div",{css:{paddingTop:10}},e.createElement(u,{location:l,to:i.id+".html"},i.title)))))))};s.propTypes={next:l.a.shape({id:l.a.string.isRequired,title:l.a.string.isRequired}),prev:l.a.shape({id:l.a.string.isRequired,title:l.a.string.isRequired})},t.a=s;var u=function(t){var a,n=t.children,r=t.to,c=t.location,l=c&&c.pathname.replace(/\/[^/]+\.html/,"/"+r)||r;return e.createElement(i.Link,{css:(a={display:"inline",borderColor:o.a.subtle,transition:"border-color 0.2s ease",fontSize:30,borderBottomWidth:1,borderBottomStyle:"solid"},a[o.c.lessThan("large")]={fontSize:24},a[o.c.size("xsmall")]={fontSize:16},a[":hover"]={borderColor:o.a.white},a),to:l},n)},d=function(t){var a=t.children;return e.createElement("div",{css:Object.assign({color:o.a.brand},o.b.small)},a)}}).call(this,a("iMUK"))},Kfvu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=o,t.trackCustomEvent=function(e){var t=e.category,a=e.action,n=e.label,r=e.value,i=e.nonInteraction,c=void 0!==i&&i,l=e.transport,o=e.hitCallback,s=e.callbackTimeout,u=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:a,eventLabel:n,eventValue:r,nonInteraction:c,transport:l};o&&"function"==typeof o&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,n=function(){a||(a=!0,e())};return setTimeout(n,t),n}(o,u)),window.ga("send","event",d)}};var r=n(a("pVnL")),i=n(a("8OQS")),c=n(a("q1tI")),l=n(a("17x9"));function o(e){var t=e.eventCategory,a=e.eventAction,n=e.eventLabel,l=e.eventValue,o=(0,i.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return c.default.createElement("a",(0,r.default)({},o,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var i=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(i=!1),e.target&&"_self"!==e.target.toLowerCase()&&(i=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:n||e.href,eventValue:l,transport:i?"beacon":"",hitCallback:function(){i&&(document.location=e.href)}}):i&&(document.location=e.href),!1}}))}o.propTypes={href:l.default.string,target:l.default.string,eventCategory:l.default.string,eventAction:l.default.string,eventLabel:l.default.string,eventValue:l.default.number,onClick:l.default.func}},Qw6N:function(e,t,a){"use strict";a("ZlxW").a},SjXs:function(e,t,a){"use strict";(function(e){a("Z7m2"),a("5l6m");var n=a("aAma"),r=a("6HPj"),i=a("XGt2"),c=a("tYS4"),l=(a("q1tI"),a("8E9e")),o=a("Gjfi"),s=(a("Qw6N"),a("UIfT")),u=(a("C0IN"),a("zDcZ")),d=a("6FTn"),m=function(e,t){if(!t)return null;var a=e.map((function(e){return e.items})),n=[].concat.apply([],a),r=t.replace(".html","");return n.find((function(e){return e.id===r}))};t.a=function(t){t.authors;var a,f=t.createLink,h=(t.date,t.enableScrollSync),v=t.ogDescription,g=t.location,p=t.markdownRemark,b=t.sectionList,k=t.titlePostfix,w=void 0===k?"":k,E=p.frontmatter.title||"",y=m(b,p.frontmatter.prev),x=m(b,p.frontmatter.next);return e.createElement(r.a,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0,"& h1, & h2, & h3, & h4, & h5, & h6":(a={scrollMarginTop:"calc(var(--survey-banner-height-normal) + var(--social-banner-height-normal))"},a[u.c.lessThan("small")]={scrollMarginTop:"calc(var(--survey-banner-height-small) + var(--social-banner-height-small))"},a)}},e.createElement(o.a,{ogDescription:v,ogType:"article",canonicalUrl:Object(d.a)(p.fields.slug),title:""+E+w}),e.createElement("div",{css:{flex:"1 0 auto"}},e.createElement(n.a,null,e.createElement("div",{css:u.d.articleLayout.container},e.createElement(r.a,{type:"article",direction:"column",grow:"1",halign:"stretch"},e.createElement(i.a,{title:E}),e.createElement("div",{css:u.d.articleLayout.content},e.createElement("div",{css:[u.d.markdown],dangerouslySetInnerHTML:{__html:p.html}}))),e.createElement("div",{css:u.d.articleLayout.sidebar},e.createElement(l.a,{enableScrollSync:h,createLink:f,defaultActiveSection:Object(s.a)(g.pathname,b),location:g,sectionList:b}))))),(x||y)&&e.createElement(c.a,{location:g,next:x,prev:y}))}}).call(this,a("iMUK"))},ZlxW:function(e,t,a){"use strict";(function(e){var n=a("q1tI"),r=a("Kfvu"),i=a("zDcZ");t.a=function(){var t=Object(n.useState)(!1),a=t[0],c=t[1];return a?"Thanks for letting us know!":e.createElement("span",null,"Is this page useful?",e.createElement("button",{css:[i.d.articleLayout.feedbackButton,{marginLeft:"6px"}],"aria-label":"Yes",onClick:function(e){e.preventDefault(),Object(r.trackCustomEvent)({category:"Feedback Button",action:"feedback",label:window.location.pathname,value:1}),c(!0)}},e.createElement("svg",{css:{transform:"translateY(0.1em)"},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},e.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"}))),e.createElement("button",{css:[i.d.articleLayout.feedbackButton,{marginLeft:"3px"}],"aria-label":"No",onClick:function(e){e.preventDefault(),Object(r.trackCustomEvent)({category:"Feedback Button",action:"feedback",label:window.location.pathname,value:0}),c(!0)}},e.createElement("svg",{css:{transform:"scale(-1, -1) translateY(-.6em)"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},e.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"}))))}}).call(this,a("iMUK"))},c851:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"pageQuery",(function(){return c}));a("q1tI");var n=a("Zttt"),r=a("icko"),i=a("QQGI"),c="3260586961";t.default=function(t){var a,c=t.data,l=t.location;return e.createElement(n.a,{location:l},e.createElement(r.a,{authors:c.markdownRemark.frontmatter.author,createLink:i.a,date:c.markdownRemark.fields.date,location:l,ogDescription:c.markdownRemark.excerpt,markdownRemark:c.markdownRemark,sectionList:(a=c.allMarkdownRemark,[{title:"Последние посты",items:a.edges.map((function(e){var t=e.node;return{id:t.fields.slug,title:t.frontmatter.title}})).concat({id:"/blog/all.html",title:"Все посты ..."})}]),titlePostfix:" – React Blog"}))}}.call(this,a("iMUK"))},icko:function(e,t,a){"use strict";var n=a("SjXs");t.a=n.a},tYS4:function(e,t,a){"use strict";var n=a("IeeO");t.a=n.a}}]);
//# sourceMappingURL=component---src-templates-blog-js-b3643ef49f90007e470c.js.map