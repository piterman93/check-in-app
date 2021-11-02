(this["webpackJsonpcheck-in-app"]=this["webpackJsonpcheck-in-app"]||[]).push([[5],{100:function(e,n,t){},101:function(e,n,t){},102:function(e,n,t){"use strict";t.d(n,"a",(function(){return D}));var a=t(0),c=t(9),s=t(3),i=t(125),r=t(150),l=t(154),j=t(153),d=t(149),o=t(151),b=t(152),h=t(126),u=t(5),m=t(80),O=(t(98),t(99),t(2)),p=function(e){var n=e.className,t=e.children,a=e.onCheckIn,c=e.id,s=e.checkInNeeded,i=e.passCheckIn,r="grid__seat ".concat(n);return Object(O.jsx)("div",{className:r,onClick:function(){var e=c.toString()===i.toString()&&!0;s&&("available"===n&&!i||"notAvailable"===n&&i&&e||"infant"===n&&i&&e||"wheelchair"===n&&i&&e)&&a(c)},children:t})},f=(t(100),function(e){return Object(O.jsxs)("div",{className:"grid__legend_container",children:[Object(O.jsxs)("div",{className:"grid__legend_item",children:[Object(O.jsx)("div",{}),Object(O.jsx)("span",{children:" - seat available"})]}),Object(O.jsxs)("div",{className:"grid__legend_item",children:[Object(O.jsx)("div",{}),Object(O.jsx)("span",{children:" - seat not available"})]}),Object(O.jsxs)("div",{className:"grid__legend_item",children:[Object(O.jsx)("div",{}),Object(O.jsx)("span",{children:" - seat for a passenger with infant"})]}),Object(O.jsxs)("div",{className:"grid__legend_item",children:[Object(O.jsx)("div",{}),Object(O.jsx)("span",{children:" - seat for a passenger with wheelchair"})]}),Object(O.jsxs)("div",{className:"grid__legend_item",children:[Object(O.jsx)("div",{}),Object(O.jsx)("span",{children:" - seat for a passenger with special meal"})]})]})}),g=t(22),x=t.n(g),N=(t(101),t(47),function(e){var n=e.onClose;return Object(O.jsx)("div",{className:"backdrop",onClick:n})}),v=function(e){var n=e.passengerName,t=e.ID,a=e.onClose,c=e.onConfirmCheckIn,s=e.onUndoCheckIn,i=e.passCheckedIn;return Object(O.jsxs)("div",{className:"overlay",children:[!i&&Object(O.jsxs)("h2",{children:[" ","Are you sure you want to check in/change place for"," ",Object(O.jsx)("span",{children:n})," for seat number: ",Object(O.jsx)("span",{children:t})," ?"]}),i&&Object(O.jsxs)("h2",{children:[" ","Are you sure you want to undo check in passenger"," ",Object(O.jsx)("span",{children:n})," from seat number: ",Object(O.jsx)("span",{children:t})," ?"]}),Object(O.jsxs)("div",{className:"button__actions",children:[Object(O.jsx)("button",{type:"button",onClick:a,children:"Close"}),!i&&Object(O.jsx)("button",{className:"submit",onClick:c,children:"Confirm"}),i&&Object(O.jsx)("button",{className:"submit",onClick:s,children:"Undo Check in"})]})]})},k=document.getElementById("overlays"),_=function(e){var n=e.passengerName,t=e.checkInID,c=e.onClose,s=e.onConfirmCheckIn,i=e.onUndoCheckIn,r=e.passCheckedIn;return Object(O.jsxs)(a.Fragment,{children:[x.a.createPortal(Object(O.jsx)(N,{onClose:c}),k),x.a.createPortal(Object(O.jsx)(v,{passengerName:n,ID:t,onClose:c,onConfirmCheckIn:s,passCheckedIn:r,onUndoCheckIn:i}),k)]})},C=t(18),I=function(e){var n=e.flightDetails,t=e.passengerName,s=e.selectedPassengerData,i=e.checkInNeeded,r=Object(a.useState)(!1),l=Object(m.a)(r,2),j=l[0],d=l[1],o=Object(a.useState)(""),b=Object(m.a)(o,2),h=b[0],g=b[1],x=Object(a.useState)(""),N=Object(m.a)(x,2),v=N[0],k=N[1];Object(a.useEffect)((function(){i&&s.seat&&k(s.seat)}),[s,i]);var I=Object(c.b)(),w=function(e){g(e),d(!0)},D=function(e){var n=R.find((function(n){return n.seat===e.toString()&&!n.specServ.INF&&!n.specServ.WCH&&!n.specMeal.SPEC}));if(n)return Object(u.a)(Object(u.a)({},n),{},{className:"notAvailable"}).className;var t=R.find((function(n){return n.seat===e.toString()&&n.specServ.INF}));if(t)return Object(u.a)(Object(u.a)({},t),{},{className:"infant"}).className;var a=R.find((function(n){return n.seat===e.toString()&&n.specServ.WCH}));if(a)return Object(u.a)(Object(u.a)({},a),{},{className:"wheelchair"}).className;var c=R.find((function(n){return n.seat===e.toString()&&n.specMeal.SPEC}));return c?Object(u.a)(Object(u.a)({},c),{},{className:"specialMeal"}).className:c?void 0:"available"},S=n[0].seatsRow1,P=n[0].seatsRow2,R=n[0].passengers,y=S.map((function(e,n){var t=n+1,a=D(t);return Object(O.jsx)(p,{id:t,className:a,onCheckIn:w,checkInNeeded:i,passCheckIn:v,children:t},t)})),A=P.map((function(e,n){var t=P[0]+n,a=D(t);return Object(O.jsx)(p,{id:t,className:a,onCheckIn:w,checkInNeeded:i,passCheckIn:v,children:t},t)}));return Object(O.jsxs)(a.Fragment,{children:[j&&Object(O.jsx)(_,{passengerName:t,checkInID:h,onClose:function(){d(!1)},onConfirmCheckIn:function(){I(C.b.passengerCheckIn({checkInID:h,passengerName:t,flightDetails:n})),d(!1),k(h)},onUndoCheckIn:function(){I(C.b.undoCheckIn({passengerName:t,flightDetails:n})),d(!1),k("")},passCheckedIn:v}),Object(O.jsxs)("div",{className:"grid__control",children:[Object(O.jsxs)("div",{className:"grid__container",children:[Object(O.jsx)("p",{children:"Plane Front"}),Object(O.jsxs)("div",{className:"grid__seats",children:[Object(O.jsx)("div",{className:"grid__seats_row",children:y}),Object(O.jsx)("p",{children:"Walking Path"}),Object(O.jsx)("div",{className:"grid__seats_row",children:A})]})]}),Object(O.jsx)(f,{})]})]})},w=Object(i.a)({table:{width:750},table__container:{position:"absolute",left:"2%",top:"2%",width:"96%",minWidth:"20vw",height:"96%",minHeight:"10%",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.5)",padding:"2rem",display:"flex",flexDirection:"column"},title:{fontWeight:"bold"},span:{color:"red",fontWeight:"bold"}});function D(e){var n,t,a=e.option,i=e.passengerName,u=e.checkInNeeded,m=Object(s.h)();m.state&&(n=m.state.option,t=m.state.passengerName),null===m.state&&(n=a,t=i);var p=w(),f=Object(c.c)((function(e){return e.flight.flights})).filter((function(e){return e.number===n})),g=f[0].passengers.find((function(e){return e.name===t}));var x=f.map((function(e){return n=e.number,t=e.data.plane,a=e.data.DEP,c=e.data.ARR,s=e.data.DEP_time,i=e.data.ARR_time,{number:n,plane:t,DEP:a,ARR:c,DEP_time:s,ARR_time:i};var n,t,a,c,s,i})),N=u?Object(O.jsxs)("h2",{children:["Check in panel for a passenger : ",t,", checked in with seat number :"," ",g.seat?Object(O.jsxs)("span",{style:{color:"red"},children:[" ",g.seat]}):Object(O.jsx)("span",{style:{color:"red"},children:"not checked in yet"})]}):Object(O.jsxs)("h2",{children:[" Flight details for a flight number : ",f[0].number," "]});return Object(O.jsxs)(d.a,{component:h.a,className:p.table__container,children:[Object(O.jsx)("div",{className:"aside__tittle",children:N}),Object(O.jsxs)(r.a,{className:p.table,"aria-label":"simple table",children:[Object(O.jsx)(o.a,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a,{className:p.title,align:"center",children:"Flight Number"}),Object(O.jsx)(j.a,{className:p.title,align:"center",children:"Plane"}),Object(O.jsx)(j.a,{className:p.title,align:"center",children:"Departure"}),Object(O.jsx)(j.a,{className:p.title,align:"center",children:"Arrival"}),Object(O.jsx)(j.a,{className:p.title,align:"center",children:"Departure time"}),Object(O.jsx)(j.a,{className:p.title,align:"center",children:"Arrival time"})]})}),Object(O.jsx)(l.a,{children:x.map((function(e){return Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a,{component:"th",scope:"row",align:"center",children:e.number}),Object(O.jsx)(j.a,{className:p.a,align:"center",children:e.plane}),Object(O.jsx)(j.a,{align:"center",children:e.DEP}),Object(O.jsx)(j.a,{align:"center",children:e.ARR}),Object(O.jsx)(j.a,{align:"center",children:e.DEP_time}),Object(O.jsx)(j.a,{align:"center",children:e.ARR_time})]},e.number)}))})]}),Object(O.jsx)(I,{flightDetails:f,passengerName:t,checkInNeeded:u,selectedPassengerData:g})]})}},148:function(e,n,t){"use strict";t.r(n);var a=t(80),c=t(0),s=t.n(c),i=t(9),r=t(85),l=t(102),j=t(81),d=t(23),o=t(84),b=t(2);n.default=function(){var e=Object(c.useState)(""),n=Object(a.a)(e,2),t=n[0],h=n[1],u=Object(c.useState)(""),m=Object(a.a)(u,2),O=m[0],p=m[1],f=Object(i.c)((function(e){return e.showNavTable.showTable})),g=Object(i.b)(),x=o.a.find((function(e){return 1===e.id}));return Object(b.jsxs)(s.a.Fragment,{children:[f&&Object(b.jsx)(j.a,{className:"form",children:Object(b.jsx)(r.a,{id:x.id,title:x.title,name:x.name,onClick:function(e,n){g(d.b.hideTable()),h(e),p(n)}})}),!f&&Object(b.jsx)(l.a,{option:t,passengerName:O,checkInNeeded:!0})]})}},98:function(e,n,t){},99:function(e,n,t){}}]);
//# sourceMappingURL=5.2ee96296.chunk.js.map