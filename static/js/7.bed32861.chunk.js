(this["webpackJsonpcheck-in-app"]=this["webpackJsonpcheck-in-app"]||[]).push([[7],{159:function(e,a,t){"use strict";t.r(a);var s=t(80),i=t(0),n=t.n(i),c=t(9),r=t(84),l=t(85),o=t(23),d=t(81),p=t(125),b=t(161),u=t(157),m=t(145),h=t(156),j=t(162),v=t(18),f=(t(47),t(2)),C=Object(p.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,width:300},inputControl:{display:"flex",flexDirection:"column",alignItems:"center"},card:{maxWidth:700,minWidth:400,height:"28rem"},selectEmpty:{marginTop:e.spacing(2)},root:{"& > *":{margin:e.spacing(1),width:300}}}})),O=function(e){var a=e.option,t=e.passengerName,n=Object(i.useState)(""),r=Object(s.a)(n,2),l=r[0],o=r[1],p=Object(i.useState)(""),O=Object(s.a)(p,2),S=O[0],g=O[1],N=Object(i.useState)(!1),x=Object(s.a)(N,2),P=x[0],M=x[1],E=Object(c.b)(),y=C(),w=Object(c.c)((function(e){return e.flight.flights})).filter((function(e){return e.number===a}));return Object(f.jsxs)(d.a,{className:y.card,children:[Object(f.jsx)("div",{className:"aside__tittle",children:Object(f.jsxs)("h2",{children:["Add special service for a passenger : ",t]})}),!P&&Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault(),E(v.b.addSpecialService({passengerName:t,flightDetails:w,specialSeat:l,specialMeal:S})),o(""),g(""),M(!0)},children:Object(f.jsxs)("div",{className:y.inputControl,children:[Object(f.jsxs)(m.a,{variant:"outlined",className:y.formControl,children:[Object(f.jsx)(b.a,{id:"demo-simple-select-outlined-label",children:"Special seat request"}),Object(f.jsxs)(h.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l,onChange:function(e){o(e.target.value)},label:"Special seat request",children:[Object(f.jsx)(u.a,{value:"",children:Object(f.jsx)("em",{children:"None"})}),Object(f.jsx)(u.a,{value:"Passenger with infant",children:"Passenger with infant"}),Object(f.jsx)(u.a,{value:"Passenger with wheelchair",children:"Passenger with wheelchair"})]})]}),Object(f.jsx)("div",{className:y.root,noValidate:!0,autoComplete:"off",children:Object(f.jsx)(j.a,{id:"outlined-basic",label:"Special meal request",variant:"outlined",value:S,onChange:function(e){g(e.target.value)}})}),Object(f.jsx)("div",{className:"button__actions",children:Object(f.jsx)("button",{className:"submit",disabled:!S&&!l,children:"Submit"})})]})}),P&&Object(f.jsxs)("div",{className:y.inputControl,children:[Object(f.jsx)("h3",{children:" Services updated successfully! "}),Object(f.jsxs)("p",{style:{marginTop:"2rem"},children:[" ","You can check modifications on Passengers List Page"]})]})]})};a.default=function(){var e=Object(i.useState)(""),a=Object(s.a)(e,2),t=a[0],p=a[1],b=Object(i.useState)(""),u=Object(s.a)(b,2),m=u[0],h=u[1],j=Object(c.c)((function(e){return e.showNavTable.showTable})),v=Object(c.b)(),C=r.a.find((function(e){return 4===e.id}));return Object(f.jsxs)(n.a.Fragment,{children:[j&&Object(f.jsx)(d.a,{className:"form",children:Object(f.jsx)(l.a,{id:C.id,title:C.title,name:C.name,onClick:function(e,a){v(o.b.hideTable()),p(e),h(a)}})}),!j&&Object(f.jsx)(O,{option:t,passengerName:m})]})}},81:function(e,a,t){"use strict";t(83);var s=t(2);a.a=function(e){var a="card ".concat(e.className);return Object(s.jsx)("div",{className:a,children:e.children})}},83:function(e,a,t){},84:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var s=[{id:1,title:"Passenger Check-In",name:"Passenger Name"},{id:2,title:"Flight Details"},{id:3,title:"Display Passengers List"},{id:4,title:"Add Passenger Services",name:"Passenger Name"},{id:5,title:"Do the changes as Admin",name:"Passenger Name"}]},85:function(e,a,t){"use strict";var s=t(80),i=t(0),n=[{id:1,number:"C1C1C1",data:{plane:"Boeing 737",DEP:"Warsaw",ARR:"Athens",DEP_time:"16:40",ARR_time:"18:55"},passengers:[{id:1,name:"Piotr Maniak",birthday:"19-04-1993",passport:"AAA111",seat:"",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}},{id:2,name:"Gabriela Maniak",birthday:"19-04-1998",passport:"",seat:"7",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}},{id:3,name:"Halina Maniak",birthday:"19-04-1965",passport:"CCC111",seat:"66",specServ:{INF:!0},specMeal:{SPEC:""}},{id:4,name:"Jerzy Maniak",birthday:"19-04-1967",passport:"DDD111",seat:"",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}},{id:5,name:"Sara Maniak",birthday:"",passport:"EEE111",seat:"72",specServ:{WCH:!0},specMeal:{SPEC:""}},{id:6,name:"Mela Maniak",birthday:"19-04-2020",passport:"FFF111",seat:"12",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:"Vegan"}},{id:7,name:"Maciej Nowak",birthday:"19-04-1993",passport:"GGG111",seat:"",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}},{id:8,name:"Marcin Stec",birthday:"19-04-1973",passport:"HHH111",seat:"19",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}}],seatsRow1:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],seatsRow2:[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104]},{id:2,number:"B12C36",data:{plane:"Boeing 737",DEP:"Tokio",ARR:"Sydney",DEP_time:"8:40",ARR_time:"11:55"},passengers:[{id:1,name:"Piotr Maniak",birthday:"19-04-1993",passport:"AAA111",seat:"",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}},{id:2,name:"Jowita Brach",birthday:"19-04-1998",passport:"BBB111",seat:"7",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:"Gluten allergic"}},{id:3,name:"Pawel Mol",birthday:"19-04-1965",passport:"CCC111",seat:"54",specServ:{INF:!0},specMeal:{SPEC:""}},{id:4,name:"Jerzy Maniak",birthday:"19-04-1967",passport:"DDD111",seat:"",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}},{id:5,name:"Sara Maniak",birthday:"",passport:"EEE111",seat:"64",specServ:{WCH:!0},specMeal:{SPEC:""}},{id:6,name:"Mela Maniak",birthday:"19-04-2020",passport:"",seat:"14",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}},{id:7,name:"Maciej Nowak",birthday:"19-04-1993",passport:"GGG111",seat:"",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}},{id:8,name:"Marcin Nowak",birthday:"19-04-1973",passport:"HHH111",seat:"3",specServ:{INF:!1,WCH:!1},specMeal:{SPEC:""}}],seatsRow1:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],seatsRow2:[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]}],c=(t(89),t(2));a.a=function(e){var a=e.name,t=e.title,r=e.onClick,l=Object(i.useState)(n[0].number),o=Object(s.a)(l,2),d=o[0],p=o[1],b=Object(i.useState)(""),u=Object(s.a)(b,2),m=u[0],h=u[1],j=n.find((function(e){return e.number===d})).passengers.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}));return Object(c.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),!j&&a)return h(""),alert('"There is no '.concat(m,' on board, please check it!"'));r(d,m)},children:Object(c.jsxs)("div",{className:"section__form",children:[Object(c.jsx)("div",{className:"section__form__title",children:t}),a&&Object(c.jsxs)("div",{className:"section__form__name",children:[Object(c.jsx)("label",{id:"name",children:a}),Object(c.jsx)("input",{type:"text",id:"name",onChange:function(e){var a=e.target.value;h(a)},value:m})]}),Object(c.jsxs)("div",{className:"section__form__flight",children:[Object(c.jsx)("label",{id:"flight",children:"Flight Number"}),Object(c.jsxs)("select",{id:"flight",onChange:function(e){var a=e.target.value;p(a)},value:d,children:[Object(c.jsx)("option",{value:n[0].number,children:n[0].number}),Object(c.jsx)("option",{value:n[1].number,children:n[1].number})]}),Object(c.jsx)("button",{className:"button",children:"Search"})]})]})})}},89:function(e,a,t){}}]);
//# sourceMappingURL=7.bed32861.chunk.js.map