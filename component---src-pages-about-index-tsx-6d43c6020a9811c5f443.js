(self.webpackChunktonghuaholding_website=self.webpackChunktonghuaholding_website||[]).push([[154],{5131:function(e,t,l){"use strict";var c=l(7294),r=l(5186),a=l(1597);t.Z=function(e){var t=e.description,l=void 0===t?"":t,n=e.lang,i=void 0===n?"en":n,y=e.meta,s=void 0===y?[]:y,x=e.image,m=e.title,p=(0,a.useStaticQuery)("2723453587").site,o=(null==p?void 0:p.siteMetadata)||{},E=o.description,u=o.title,d=o.siteUrl,k=o.twitter,f=o.defaultMetaImage,g=(p||{}).pathPrefix,C=l||E,w=u,h=""+d+(x||""+g+f);return c.createElement(r.Helmet,{htmlAttributes:{lang:i},title:m,titleTemplate:w?"%s | "+w:void 0,meta:[{name:"description",content:C},{property:"og:title",content:m},{property:"og:description",content:C},{property:"og:type",content:"website"},{property:"og:image",content:h},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:k},{name:"twitter:title",content:m},{name:"twitter:description",content:C},{name:"twitter:image",content:h}].concat(s)})}},8274:function(e,t,l){"use strict";var c=l(9931),r=l.n(c),a=l(7294);t.Z=function(e){var t=e.title,l=e.className,c=e.underlineClassName,n=e.textClassName;return a.createElement("div",{className:r()("flex flex-col space-y-2",l)},a.createElement("h2",{className:r()("font-bold",n)},t),a.createElement("div",{className:r()("h-0.5 rounded-md",c)}))}},1731:function(e,t,l){"use strict";var c=l(7294),r=l(8274),a=l(7467),n=l(3631),i=l.n(n),y=l(8353),s=l.n(y),x=l(9931),m=l.n(x),p=l(7782);t.Z=function(e){var t,l=e.businesses,n=e.className,y=(0,p.useTranslation)().t;return c.createElement("section",{className:m()("py-20 relative bg-neutral-700 overflow-hidden",n)},c.createElement(r.Z,{title:y("Components.BusinessesSection.Title"),className:"items-center",textClassName:"text-3xl text-center lg:text-4xl text-neutral-50",underlineClassName:"bg-primary-main w-16"}),c.createElement("div",{className:"flex relative z-10 overflow-x-scroll hide-scrollbar md:px-6 px-4 max-w-7xl mx-auto lg:px-0 lg:justify-around py-10"},null==l||null===(t=l.data)||void 0===t?void 0:t.map((function(e,t){var l,r=e||{},n=r.title,i=r.image,y=r.description,s=r.to;return c.createElement("div",{key:t,className:"px-4 lg:px-0"},c.createElement(a.fy,{image:null==i||null===(l=i.childImageSharp)||void 0===l?void 0:l.gatsbyImageData,title:n,description:y,to:s,className:"h-80 w-56"}))}))),c.createElement(i(),{className:"text-neutral-50 z-10 absolute top-6 left-6 opacity-50"}),c.createElement(s(),{className:"absolute bottom-0 w-full h-60 xl:h-80 left-0"}))}},8756:function(e,t,l){"use strict";var c=l(7294),r=l(3631),a=l.n(r),n=l(9931),i=l.n(n),y=l(3723);t.Z=function(e){var t=e.title,r=e.className;return c.createElement("section",{className:i()("relative flex flex-col justify-center bg-primary-main h-72",r)},c.createElement("div",{className:"relative z-0 h-full w-full"},c.createElement("div",{className:"absolute w-full h-full bg-primary-main/80"}),c.createElement(y.S,{src:"../../../images/tonghua-building.svg",alt:"Tong Hua Building",className:"w-full h-full opacity-10",__imageData:l(3225)})),c.createElement("div",{className:"absolute top-0 w-full h-full"},c.createElement("div",{className:"relative max-w-7xl mx-auto w-full h-full flex flex-col justify-center"},c.createElement("div",{className:"flex flex-col justify-center h-full px-4 md:px-6 lg:px-16"},c.createElement("h1",{className:"text-4xl font-medium text-neutral-50"},t),c.createElement("div",{className:"h-1 bg-neutral-50 w-7 mt-4 rounded-md"})),c.createElement(a(),{className:"absolute left-0 opacity-50 text-neutral-50"}))))}},5610:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Z}});var c=l(8756),r=l(7294),a=l(9931),n=l.n(a),i=function(e){var t=e.title,l=e.description,c=e.className;return r.createElement("div",{className:n()("flex",c)},r.createElement("div",{className:"relative"},r.createElement("div",{className:"h-full w-6 flex items-center justify-center"},r.createElement("div",{className:"h-full w-0.5 bg-neutral-900"})),r.createElement("span",{className:"w-4 h-4 absolute top-1/2 left-1 -mt-2 rounded-full bg-primary-main"})),r.createElement("div",{className:"timeline-card-arrow"}),r.createElement("div",{className:"bg-primary-main p-4 -ml-2.5 rounded-lg my-4 mr-auto shadow-md w-full text-neutral-50"},r.createElement("h3",{className:"font-bold text-xl"},t),r.createElement("p",{className:"text-base mt-2"},l)))},y=function(e){var t=e.icon,l=e.title,c=e.description,a=e.className,i=e.textClassName;return r.createElement("div",{className:n()("flex flex-col items-center text-center",a)},t,r.createElement("span",{className:n()("text-xl mt-10 font-bold text-neutral-900",i)},l),r.createElement("p",{className:"text-base mt-2 font-medium text-neutral-700"},c))},s=l(5079),x=l.n(s),m=l(2114),p=l.n(m),o=l(7663),E=l.n(o),u=l(4490),d=l.n(u),k=l(8274),f=l(1731),g=l(3723),C=l(3631),w=l.n(C),h=l(9569),v=l(9479),b=l(7782),N=l(3231),L=l(5131),Z=function(e){var t,a=e.data,n=(0,b.useTranslation)().t,s=(0,N.u7)(),m=a.aboutJson,o=a.businessesJson,u=a.timelineJson,C=a.missionJson,Z=u||{},M=Z.data,H=Z.slides,P=(null==m?void 0:m.data)&&m.data[0];return r.createElement(v.Z,null,r.createElement(L.Z,{title:n("Seo.About.MainPage.Title"),description:n("Seo.About.MainPage.Desc")}),r.createElement(c.Z,{title:n("Pages.About.MainPage.Section-1.Title")}),r.createElement("section",{className:"px-4 pt-10 lg:pt-20 lg:px-16 flex flex-col items-center max-w-7xl mx-auto space-y-10"},P&&r.createElement(r.Fragment,null,r.createElement("div",{className:"flex flex-col lg:flex-row items-center lg:space-x-10"},r.createElement(g.S,{src:"../../images/tonghua-company.png",alt:"about of tonghuaholding",className:"w-full lg:w-1/2 object-cover",__imageData:l(474)}),s&&r.createElement("p",{className:"text-lg w-1/2 whitespace-pre-wrap"},P.msg)),r.createElement("div",{className:"space-y-4 w-full"},m.data.map((function(e,t){var l=(e||{}).msg;return t>0&&r.createElement("p",{className:"text-lg whitespace-pre-wrap",key:t},l)}))))),r.createElement("section",{className:"relative flex flex-col px-4 pt-16 lg:px-16 md:pt-20 max-w-5xl mx-auto space-y-10 lg:space-y-4 xl:flex-row-reverse xl:items-center xl:max-w-7xl xl:space-y-0 xl:justify-between"},r.createElement(w(),{className:"hidden text-primary-main z-10 absolute top-20 right-0 xl:block"}),r.createElement("div",{className:"flex flex-col xl:w-[48.5%]"},r.createElement("h2",{className:"font-bold text-3xl mb-5"},n("Pages.About.MainPage.Section-2.Title")),null==M?void 0:M.map((function(e,t){var l=e||{},c=l.title,a=l.description;return r.createElement(i,{title:c,description:a,key:t})}))),r.createElement("div",{className:"w-full xl:w-[48.5%]"},r.createElement(h.Z,{showNavigation:!0,slidesPerView:1,images:H})),r.createElement(w(),{className:"hidden text-primary-main z-10 absolute bottom-0 left-0 xl:block"})),r.createElement("section",{className:"pt-16 pb-20 md:py-20 space-y-16 md:space-y-20 px-4 sm:px-28 lg:pb-28 max-w-7xl mx-auto"},r.createElement("div",{className:"flex flex-col items-center justify-center"},r.createElement(k.Z,{title:n("Pages.About.MainPage.Section-3.Title"),className:"items-center",textClassName:"text-3xl",underlineClassName:"bg-primary-main w-16"}),r.createElement(x(),{className:"w-12 h-12 mt-5 text-primary-surface"}),r.createElement("h3",{className:"text-2xl font-bold text-primary-main mt-6 text-center whitespace-normal sm:whitespace-pre-line leading-relaxed"},n("Pages.About.MainPage.Section-3.Desc"))),r.createElement("div",{className:"flex flex-col items-center justify-center"},r.createElement(k.Z,{title:n("Pages.About.MainPage.Section-3-1.Title"),className:"items-center",textClassName:"text-3xl",underlineClassName:"bg-primary-main w-14"}),r.createElement("div",{className:"flex flex-col lg:flex-row mt-11 space-y-16 lg:space-y-0"},null==C||null===(t=C.data)||void 0===t?void 0:t.map((function(e,t){var l=e||{},c=l.title,a=l.description;return r.createElement(y,{icon:r.createElement("div",{className:"bg-primary-main flex justify-center items-center rounded-full h-16 w-16"},0===t?r.createElement(p(),{className:"w-9 h-9 text-white"}):1===t?r.createElement(d(),{className:"w-9 h-9 text-white"}):r.createElement(E(),{className:"w-9 h-9 text-white"})),title:c,description:a,className:"lg:w-1/3 lg:px-4",textClassName:"text-xl font-medium text-center",key:t})}))))),r.createElement(f.Z,{businesses:o}))}},4490:function(e,t,l){var c=l(7294);function r(e){return c.createElement("svg",e,c.createElement("path",{d:"M56.4651 40.8022C56.5023 40.7164 56.5335 40.6281 56.5583 40.538C58.4814 35.006 58.4805 28.9867 56.5558 23.4553C56.5318 23.3694 56.5021 23.2852 56.4669 23.2033C54.6508 18.1711 51.3291 13.8204 46.9534 10.7424C42.5777 7.66447 37.3603 6.00871 32.0105 6.00025L32 5.99109L31.9895 6.00025C26.6402 6.0087 21.4232 7.66414 17.0478 10.7415C12.6723 13.8189 9.35055 18.169 7.53406 23.2004C7.49774 23.2845 7.46727 23.3709 7.44287 23.4591C5.51791 28.9939 5.51908 35.0167 7.44617 40.5507C7.46942 40.6331 7.49796 40.714 7.53161 40.7927C9.34705 45.8259 12.6686 50.1777 17.0446 53.2565C21.4207 56.3352 26.6387 57.9915 31.9893 58L32 58.0094L32.0108 58C37.3596 57.9915 42.5761 56.3363 46.9513 53.2594C51.3265 50.1824 54.6483 45.833 56.4651 40.8022ZM32 11.3898C34.9029 14.3978 37.0846 18.0258 38.3806 22.0001H25.6194C26.9154 18.0258 29.0971 14.3978 32 11.3898ZM25.6195 42.0001H38.3805C37.0845 45.9744 34.9028 49.6024 32 52.6105C29.0972 49.6024 26.9155 45.9744 25.6195 42.0001ZM24.5724 38.0001C23.8092 34.0365 23.8092 29.9637 24.5724 26.0001H39.4276C40.1908 29.9637 40.1908 34.0365 39.4276 38.0001H24.5724ZM43.5071 26.0001H53.1683C54.2772 29.9233 54.2772 34.077 53.1683 38.0001H43.5071C44.1643 34.0271 44.1643 29.9731 43.5071 26.0001ZM51.593 22.0001H42.6019C41.4045 17.7856 39.3506 13.8634 36.5687 10.4785C39.7707 11.1647 42.78 12.5544 45.3785 14.5472C47.9771 16.5399 50.0998 19.0857 51.593 22.0001H51.593ZM36.5686 53.5217C39.3505 50.1369 41.4043 46.2146 42.6018 42.0001H51.593C50.0998 44.9146 47.9771 47.4604 45.3785 49.4531C42.7799 51.4459 39.7706 52.8356 36.5686 53.5217Z",fill:"currentColor"}))}r.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"currentColor"},e.exports=r,r.default=r},7663:function(e,t,l){var c=l(7294);function r(e){return c.createElement("svg",e,c.createElement("path",{d:"M29.94 53.7004C29.8766 53.9554 29.7635 54.1953 29.6072 54.4065C29.451 54.6177 29.2545 54.796 29.0293 54.9312C28.804 55.0664 28.5542 55.1558 28.2943 55.1942C28.0344 55.2327 27.7695 55.2196 27.5147 55.1555L19.9798 53.2719C19.3685 53.1182 18.8018 52.823 18.3255 52.4101L12.6878 47.5095C12.2874 47.1615 12.0417 46.6688 12.0047 46.1396C11.9676 45.6105 12.1423 45.0883 12.4903 44.688C12.8382 44.2876 13.331 44.0419 13.8601 44.0048C14.3893 43.9678 14.9115 44.1425 15.3118 44.4904L20.95 49.3913L28.4849 51.2751C28.7397 51.3388 28.9795 51.452 29.1905 51.6084C29.4015 51.7647 29.5797 51.9611 29.7148 52.1863C29.8499 52.4116 29.9394 52.6612 29.978 52.921C30.0166 53.1808 30.0037 53.4456 29.94 53.7004ZM63.0904 29.8889C62.9283 30.395 62.6663 30.8634 62.3199 31.2664C61.9735 31.6694 61.5498 31.9987 61.0738 32.2349L55.2567 35.1435L51.52 39.5148C51.507 39.5301 51.4927 39.5442 51.4793 39.559C51.4669 39.5725 51.4547 39.586 51.4422 39.5991C51.4326 39.6091 51.4239 39.6197 51.4141 39.6295L42.2149 48.8291C41.4607 49.5786 40.4405 49.9992 39.3772 49.999C39.0532 49.999 38.7304 49.9594 38.416 49.8808L23.9268 46.2585C23.383 46.1233 22.8739 45.8747 22.4329 45.529L8.92581 34.967L2.92581 31.967C2.45073 31.7294 2.02773 31.3996 1.68149 30.9967C1.33525 30.5939 1.0727 30.1262 0.909159 29.6208C0.74562 29.1154 0.684367 28.5825 0.728975 28.0532C0.773582 27.5239 0.923157 27.0088 1.16897 26.5379L7.31716 14.7636C7.80637 13.8378 8.63757 13.1393 9.63389 12.8169C10.6302 12.4945 11.713 12.5737 12.6519 13.0374L18.2456 15.8343L30.4136 12.287C31.3302 12.0201 32.312 12.0895 33.1819 12.4826L41.4312 16.2153H45.5279L51.3479 13.3054C52.2867 12.8413 53.3696 12.762 54.366 13.0844C55.3624 13.4069 56.1935 14.1056 56.6824 15.0317L62.8306 26.8058C63.0781 27.2761 63.2286 27.7914 63.2732 28.321C63.3178 28.8506 63.2556 29.3838 63.0904 29.8889ZM46.9306 38.4561L39.0181 32.7016L36.9998 34.2153C35.2655 35.5057 33.1614 36.2025 30.9998 36.2025C28.8381 36.2025 26.7341 35.5057 24.9998 34.2153L23.6446 33.1989C23.1861 32.8551 22.8069 32.4167 22.5326 31.9136C22.2583 31.4104 22.0953 30.8542 22.0547 30.2826C22.0141 29.7109 22.0967 29.1372 22.2971 28.6003C22.4975 28.0634 22.8109 27.5759 23.2161 27.1706L32.9998 17.3869C33.1427 17.2461 33.2959 17.1161 33.4582 16.9981L31.5332 16.127L19.3523 19.6781L12.5434 32.718L24.897 42.3781L39.3862 46.0005L46.9306 38.4561ZM51.6013 33.2637L44.7877 20.2153H41.0054L40.9986 20.2158C40.9954 20.2158 40.9923 20.2153 40.9893 20.2153H35.8281L26.0447 29.999L27.3997 31.0153C28.4403 31.7895 29.7028 32.2076 30.9998 32.2076C32.2968 32.2076 33.5593 31.7895 34.5999 31.0153L37.7998 28.6153C38.142 28.3586 38.5574 28.2184 38.9851 28.2153C39.4128 28.2122 39.8302 28.3462 40.176 28.5979L49.6808 35.5104L51.6013 33.2637Z",fill:"currentColor"}))}r.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"currentColor"},e.exports=r,r.default=r},2114:function(e,t,l){var c=l(7294);function r(e){return c.createElement("svg",e,[c.createElement("path",{d:"M40 48H24C23.4696 48 22.9609 48.2107 22.5858 48.5858C22.2107 48.9609 22 49.4696 22 50C22 50.5304 22.2107 51.0391 22.5858 51.4142C22.9609 51.7893 23.4696 52 24 52H40C40.5304 52 41.0391 51.7893 41.4142 51.4142C41.7893 51.0391 42 50.5304 42 50C42 49.4696 41.7893 48.9609 41.4142 48.5858C41.0391 48.2107 40.5304 48 40 48Z",fill:"currentColor",key:0}),c.createElement("path",{d:"M38 56H26C25.4696 56 24.9609 56.2107 24.5858 56.5858C24.2107 56.9609 24 57.4696 24 58C24 58.5304 24.2107 59.0391 24.5858 59.4142C24.9609 59.7893 25.4696 60 26 60H38C38.5304 60 39.0391 59.7893 39.4142 59.4142C39.7893 59.0391 40 58.5304 40 58C40 57.4696 39.7893 56.9609 39.4142 56.5858C39.0391 56.2107 38.5304 56 38 56Z",fill:"currentColor",key:1}),c.createElement("path",{d:"M32 4C27.3828 4.00024 22.8827 5.45307 19.1371 8.15273C15.3914 10.8524 12.59 14.6621 11.1296 19.0422C9.66914 23.4223 9.62376 28.1509 10.9998 32.5582C12.3759 36.9656 15.1037 40.8283 18.7969 43.5994C19.1434 43.8596 19.565 44.0003 19.9983 44.0002H44.0017C44.435 44.0003 44.8567 43.8596 45.2031 43.5994C48.8963 40.8283 51.6241 36.9656 53.0002 32.5582C54.3762 28.1509 54.3309 23.4223 52.8704 19.0422C51.41 14.6621 48.6086 10.8524 44.8629 8.15273C41.1173 5.45307 36.6172 4.00024 32 4Z",fill:"currentColor",key:2})])}r.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"currentColor"},e.exports=r,r.default=r},5079:function(e,t,l){var c=l(7294);function r(e){return c.createElement("svg",e,c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.1453 4.57143V0C8.90877 1.02961 5.74213 3.35648 3.64527 6.9807C1.54841 10.6049 0.5 15.5264 0.5 21.7452L0.5 32H14.75L14.75 18.2857H8.65203V16.8649C8.65203 13.5289 9.02646 10.8417 9.77534 8.80309C10.5242 6.76447 11.6475 5.35393 13.1453 4.57143ZM36.8953 4.57143V0C32.6588 1.02961 29.4922 3.35648 27.3953 6.9807C25.2984 10.6049 24.25 15.5264 24.25 21.7452V32L38.5 32L38.5 18.2857H32.4021V16.8649C32.4021 13.5289 32.7765 10.8417 33.5254 8.80309C34.2742 6.76447 35.3975 5.35393 36.8953 4.57143Z",fill:"currentColor"}))}r.defaultProps={width:"39",height:"32",viewBox:"0 0 39 32",fill:"currentColor"},e.exports=r,r.default=r},8353:function(e,t,l){var c=l(7294);function r(e){return c.createElement("svg",e,c.createElement("g",{opacity:"0.1"},[c.createElement("circle",{cx:"158.5",cy:"158.879",r:"157.5",stroke:"#FAFAFA",strokeWidth:"2",key:0}),c.createElement("circle",{cx:"158.5",cy:"158.879",r:"105.379",stroke:"#FAFAFA",strokeWidth:"2",key:1}),c.createElement("circle",{cx:"158.499",cy:"158.879",r:"131.867",stroke:"#FAFAFA",strokeWidth:"2",key:2})]))}r.defaultProps={width:"317",height:"194",viewBox:"0 0 317 194",fill:"none"},e.exports=r,r.default=r},3631:function(e,t,l){var c=l(7294);function r(e){return c.createElement("svg",e,[c.createElement("ellipse",{cx:"2.28578",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:0}),c.createElement("ellipse",{cx:"2.28578",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:1}),c.createElement("ellipse",{cx:"2.28578",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:2}),c.createElement("ellipse",{cx:"2.28578",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:3}),c.createElement("ellipse",{cx:"2.28578",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:4}),c.createElement("ellipse",{cx:"2.28578",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:5}),c.createElement("ellipse",{cx:"2.28578",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:6}),c.createElement("ellipse",{cx:"2.28578",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:7}),c.createElement("ellipse",{cx:"2.28578",cy:"103.934",rx:"0.845838",ry:"0.847059",key:8}),c.createElement("ellipse",{cx:"2.28578",cy:"116.64",rx:"0.845838",ry:"0.847059",key:9}),c.createElement("ellipse",{cx:"2.28578",cy:"129.346",rx:"0.845838",ry:"0.847059",key:10}),c.createElement("ellipse",{cx:"2.28578",cy:"142.052",rx:"0.845838",ry:"0.847059",key:11}),c.createElement("ellipse",{cx:"14.9733",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:12}),c.createElement("ellipse",{cx:"14.9733",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:13}),c.createElement("ellipse",{cx:"14.9733",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:14}),c.createElement("ellipse",{cx:"14.9733",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:15}),c.createElement("ellipse",{cx:"14.9733",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:16}),c.createElement("ellipse",{cx:"14.9733",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:17}),c.createElement("ellipse",{cx:"14.9733",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:18}),c.createElement("ellipse",{cx:"14.9733",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:19}),c.createElement("ellipse",{cx:"14.9733",cy:"103.934",rx:"0.845838",ry:"0.847059",key:20}),c.createElement("ellipse",{cx:"14.9733",cy:"116.64",rx:"0.845838",ry:"0.847059",key:21}),c.createElement("ellipse",{cx:"14.9733",cy:"129.346",rx:"0.845838",ry:"0.847059",key:22}),c.createElement("ellipse",{cx:"14.9733",cy:"142.052",rx:"0.845838",ry:"0.847059",key:23}),c.createElement("ellipse",{cx:"27.6608",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:24}),c.createElement("ellipse",{cx:"27.6608",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:25}),c.createElement("ellipse",{cx:"27.6608",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:26}),c.createElement("ellipse",{cx:"27.6608",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:27}),c.createElement("ellipse",{cx:"27.6608",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:28}),c.createElement("ellipse",{cx:"27.6608",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:29}),c.createElement("ellipse",{cx:"27.6608",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:30}),c.createElement("ellipse",{cx:"27.6608",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:31}),c.createElement("ellipse",{cx:"27.6608",cy:"103.934",rx:"0.845838",ry:"0.847059",key:32}),c.createElement("ellipse",{cx:"27.6608",cy:"116.64",rx:"0.845838",ry:"0.847059",key:33}),c.createElement("ellipse",{cx:"27.6608",cy:"129.346",rx:"0.845838",ry:"0.847059",key:34}),c.createElement("ellipse",{cx:"27.6608",cy:"142.052",rx:"0.845838",ry:"0.847059",key:35}),c.createElement("ellipse",{cx:"40.3488",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:36}),c.createElement("ellipse",{cx:"40.3488",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:37}),c.createElement("ellipse",{cx:"40.3488",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:38}),c.createElement("ellipse",{cx:"40.3488",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:39}),c.createElement("ellipse",{cx:"40.3488",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:40}),c.createElement("ellipse",{cx:"40.3488",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:41}),c.createElement("ellipse",{cx:"40.3488",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:42}),c.createElement("ellipse",{cx:"40.3488",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:43}),c.createElement("ellipse",{cx:"40.3488",cy:"103.934",rx:"0.845838",ry:"0.847059",key:44}),c.createElement("ellipse",{cx:"40.3488",cy:"116.64",rx:"0.845838",ry:"0.847059",key:45}),c.createElement("ellipse",{cx:"40.3488",cy:"129.346",rx:"0.845838",ry:"0.847059",key:46}),c.createElement("ellipse",{cx:"40.3488",cy:"142.052",rx:"0.845838",ry:"0.847059",key:47}),c.createElement("ellipse",{cx:"53.0363",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:48}),c.createElement("ellipse",{cx:"53.0363",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:49}),c.createElement("ellipse",{cx:"53.0363",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:50}),c.createElement("ellipse",{cx:"53.0363",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:51}),c.createElement("ellipse",{cx:"53.0363",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:52}),c.createElement("ellipse",{cx:"53.0363",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:53}),c.createElement("ellipse",{cx:"53.0363",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:54}),c.createElement("ellipse",{cx:"53.0363",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:55}),c.createElement("ellipse",{cx:"53.0363",cy:"103.934",rx:"0.845838",ry:"0.847059",key:56}),c.createElement("ellipse",{cx:"53.0363",cy:"116.64",rx:"0.845838",ry:"0.847059",key:57}),c.createElement("ellipse",{cx:"53.0363",cy:"129.346",rx:"0.845838",ry:"0.847059",key:58}),c.createElement("ellipse",{cx:"53.0363",cy:"142.052",rx:"0.845838",ry:"0.847059",key:59}),c.createElement("ellipse",{cx:"65.7238",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:60}),c.createElement("ellipse",{cx:"65.7238",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:61}),c.createElement("ellipse",{cx:"65.7238",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:62}),c.createElement("ellipse",{cx:"65.7238",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:63}),c.createElement("ellipse",{cx:"65.7238",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:64}),c.createElement("ellipse",{cx:"65.7238",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:65}),c.createElement("ellipse",{cx:"65.7238",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:66}),c.createElement("ellipse",{cx:"65.7238",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:67}),c.createElement("ellipse",{cx:"65.7238",cy:"103.934",rx:"0.845838",ry:"0.847059",key:68}),c.createElement("ellipse",{cx:"65.7238",cy:"116.64",rx:"0.845838",ry:"0.847059",key:69}),c.createElement("ellipse",{cx:"65.7238",cy:"129.346",rx:"0.845838",ry:"0.847059",key:70}),c.createElement("ellipse",{cx:"65.7238",cy:"142.052",rx:"0.845838",ry:"0.847059",key:71}),c.createElement("ellipse",{cx:"78.4113",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:72}),c.createElement("ellipse",{cx:"78.4113",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:73}),c.createElement("ellipse",{cx:"78.4113",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:74}),c.createElement("ellipse",{cx:"78.4113",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:75}),c.createElement("ellipse",{cx:"78.4113",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:76}),c.createElement("ellipse",{cx:"78.4113",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:77}),c.createElement("ellipse",{cx:"78.4113",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:78}),c.createElement("ellipse",{cx:"78.4113",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:79}),c.createElement("ellipse",{cx:"78.4113",cy:"103.934",rx:"0.845838",ry:"0.847059",key:80}),c.createElement("ellipse",{cx:"78.4113",cy:"116.64",rx:"0.845838",ry:"0.847059",key:81}),c.createElement("ellipse",{cx:"78.4113",cy:"129.346",rx:"0.845838",ry:"0.847059",key:82}),c.createElement("ellipse",{cx:"78.4113",cy:"142.052",rx:"0.845838",ry:"0.847059",key:83}),c.createElement("ellipse",{cx:"91.0988",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:84}),c.createElement("ellipse",{cx:"103.786",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:85}),c.createElement("ellipse",{cx:"116.474",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:86}),c.createElement("ellipse",{cx:"129.161",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:87}),c.createElement("ellipse",{cx:"141.849",cy:"2.28706",rx:"0.845838",ry:"0.847059",key:88}),c.createElement("ellipse",{cx:"91.0988",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:89}),c.createElement("ellipse",{cx:"103.786",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:90}),c.createElement("ellipse",{cx:"116.474",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:91}),c.createElement("ellipse",{cx:"129.161",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:92}),c.createElement("ellipse",{cx:"141.849",cy:"14.9929",rx:"0.845838",ry:"0.847059",key:93}),c.createElement("ellipse",{cx:"91.0988",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:94}),c.createElement("ellipse",{cx:"103.786",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:95}),c.createElement("ellipse",{cx:"116.474",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:96}),c.createElement("ellipse",{cx:"129.161",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:97}),c.createElement("ellipse",{cx:"141.849",cy:"27.6988",rx:"0.845838",ry:"0.847059",key:98}),c.createElement("ellipse",{cx:"91.0988",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:99}),c.createElement("ellipse",{cx:"103.786",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:100}),c.createElement("ellipse",{cx:"116.474",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:101}),c.createElement("ellipse",{cx:"129.161",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:102}),c.createElement("ellipse",{cx:"141.849",cy:"40.4047",rx:"0.845838",ry:"0.847059",key:103}),c.createElement("ellipse",{cx:"91.0988",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:104}),c.createElement("ellipse",{cx:"103.786",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:105}),c.createElement("ellipse",{cx:"116.474",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:106}),c.createElement("ellipse",{cx:"129.161",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:107}),c.createElement("ellipse",{cx:"141.849",cy:"53.1106",rx:"0.845838",ry:"0.847059",key:108}),c.createElement("ellipse",{cx:"91.0988",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:109}),c.createElement("ellipse",{cx:"103.786",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:110}),c.createElement("ellipse",{cx:"116.474",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:111}),c.createElement("ellipse",{cx:"129.161",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:112}),c.createElement("ellipse",{cx:"141.849",cy:"65.8165",rx:"0.845838",ry:"0.847059",key:113}),c.createElement("ellipse",{cx:"91.0988",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:114}),c.createElement("ellipse",{cx:"103.786",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:115}),c.createElement("ellipse",{cx:"116.474",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:116}),c.createElement("ellipse",{cx:"129.161",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:117}),c.createElement("ellipse",{cx:"141.849",cy:"78.5224",rx:"0.845838",ry:"0.847059",key:118}),c.createElement("ellipse",{cx:"91.0988",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:119}),c.createElement("ellipse",{cx:"103.786",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:120}),c.createElement("ellipse",{cx:"116.474",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:121}),c.createElement("ellipse",{cx:"129.161",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:122}),c.createElement("ellipse",{cx:"141.849",cy:"91.2282",rx:"0.845838",ry:"0.847059",key:123}),c.createElement("ellipse",{cx:"91.0988",cy:"103.934",rx:"0.845838",ry:"0.847059",key:124}),c.createElement("ellipse",{cx:"103.786",cy:"103.934",rx:"0.845838",ry:"0.847059",key:125}),c.createElement("ellipse",{cx:"116.474",cy:"103.934",rx:"0.845838",ry:"0.847059",key:126}),c.createElement("ellipse",{cx:"129.161",cy:"103.934",rx:"0.845838",ry:"0.847059",key:127}),c.createElement("ellipse",{cx:"141.849",cy:"103.934",rx:"0.845838",ry:"0.847059",key:128}),c.createElement("ellipse",{cx:"91.0988",cy:"116.64",rx:"0.845838",ry:"0.847059",key:129}),c.createElement("ellipse",{cx:"103.786",cy:"116.64",rx:"0.845838",ry:"0.847059",key:130}),c.createElement("ellipse",{cx:"116.474",cy:"116.64",rx:"0.845838",ry:"0.847059",key:131}),c.createElement("ellipse",{cx:"129.161",cy:"116.64",rx:"0.845838",ry:"0.847059",key:132}),c.createElement("ellipse",{cx:"141.849",cy:"116.64",rx:"0.845838",ry:"0.847059",key:133}),c.createElement("ellipse",{cx:"91.0988",cy:"129.346",rx:"0.845838",ry:"0.847059",key:134}),c.createElement("ellipse",{cx:"103.786",cy:"129.346",rx:"0.845838",ry:"0.847059",key:135}),c.createElement("ellipse",{cx:"116.474",cy:"129.346",rx:"0.845838",ry:"0.847059",key:136}),c.createElement("ellipse",{cx:"129.161",cy:"129.346",rx:"0.845838",ry:"0.847059",key:137}),c.createElement("ellipse",{cx:"141.849",cy:"129.346",rx:"0.845838",ry:"0.847059",key:138}),c.createElement("ellipse",{cx:"91.0988",cy:"142.052",rx:"0.845838",ry:"0.847059",key:139}),c.createElement("ellipse",{cx:"103.786",cy:"142.052",rx:"0.845838",ry:"0.847059",key:140}),c.createElement("ellipse",{cx:"116.474",cy:"142.052",rx:"0.845838",ry:"0.847059",key:141}),c.createElement("ellipse",{cx:"129.161",cy:"142.052",rx:"0.845838",ry:"0.847059",key:142}),c.createElement("ellipse",{cx:"141.849",cy:"142.052",rx:"0.845838",ry:"0.847059",key:143})])}r.defaultProps={width:"144",height:"144",viewBox:"0 0 144 144",fill:"currentColor"},e.exports=r,r.default=r},3225:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/82cc736dedb0769103a26271192ea56a/09c69/tonghua-building.svg","srcSet":"/static/82cc736dedb0769103a26271192ea56a/bde62/tonghua-building.svg 183w,\\n/static/82cc736dedb0769103a26271192ea56a/dee0c/tonghua-building.svg 366w,\\n/static/82cc736dedb0769103a26271192ea56a/09c69/tonghua-building.svg 732w","sizes":"(min-width: 732px) 732px, 100vw"},"sources":[{"srcSet":"/static/82cc736dedb0769103a26271192ea56a/c3d52/tonghua-building.webp 183w,\\n/static/82cc736dedb0769103a26271192ea56a/683bb/tonghua-building.webp 366w,\\n/static/82cc736dedb0769103a26271192ea56a/5a9b7/tonghua-building.webp 732w","type":"image/webp","sizes":"(min-width: 732px) 732px, 100vw"}]},"width":732,"height":543}')},474:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/7a466e312c41a1072640343985d259b5/0229a/tonghua-company.png","srcSet":"/static/7a466e312c41a1072640343985d259b5/65dc5/tonghua-company.png 180w,\\n/static/7a466e312c41a1072640343985d259b5/62483/tonghua-company.png 360w,\\n/static/7a466e312c41a1072640343985d259b5/0229a/tonghua-company.png 720w","sizes":"(min-width: 720px) 720px, 100vw"},"sources":[{"srcSet":"/static/7a466e312c41a1072640343985d259b5/227d5/tonghua-company.webp 180w,\\n/static/7a466e312c41a1072640343985d259b5/d0ace/tonghua-company.webp 360w,\\n/static/7a466e312c41a1072640343985d259b5/dc894/tonghua-company.webp 720w","type":"image/webp","sizes":"(min-width: 720px) 720px, 100vw"}]},"width":720,"height":558}')}}]);
//# sourceMappingURL=component---src-pages-about-index-tsx-6d43c6020a9811c5f443.js.map