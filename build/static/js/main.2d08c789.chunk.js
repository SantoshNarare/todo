(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{157:function(e,t,a){e.exports=a(199)},162:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),o=a.n(c),l=(a(162),a(17)),u=a.n(l),i=a(85),s=a(33),m=a(10),p=a(220),d=a(212),f=a(216),b=a(118),h=Object(n.createContext)(null),v=Object(n.createContext)(null),E=Object(n.createContext)(null),y=Object(n.createContext)(null),O=Object(n.createContext)(null),j=Object(n.createContext)(null),w=Object(n.createContext)(null),g=Object(n.createContext)(null),C=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],l=c[1],C=Object(n.useState)([]),D=Object(m.a)(C,2),x=D[0],S=D[1],k=Object(n.useState)(""),P=Object(m.a)(k,2),z=P[0],F=P[1],A=Object(n.useState)(""),N=Object(m.a)(A,2),T=N[0],B=N[1],H=Object(n.useState)(""),L=Object(m.a)(H,2),G=L[0],R=L[1],I=Object(n.useState)(!1),_=Object(m.a)(I,2),q=_[0],J=_[1],W=Object(n.useState)(""),$=Object(m.a)(W,2),K=$[0],Q=$[1],U=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,e.prev=1,J(!0),Q(a||K),e.next=6,b.get(a||K);case 6:(n=e.sent)&&200===n.status&&n.data&&n.data.data&&n.data.data&&(r=n.data.data.map((function(e){return e.todoList?e.todoList.map((function(e){return Object(i.a)({},e,{DueDate:e.dueDate,dueDate:Object(f.a)(new Date(e.dueDate),"yyyy-dd-MM"),createdAt:Object(f.a)(new Date(e.createdAt),"yyyy-dd-MM")})})):Object(i.a)({},e,{DueDate:e.dueDate,dueDate:Object(f.a)(new Date(e.dueDate),"yyyy-dd-MM"),createdAt:Object(f.a)(new Date(e.createdAt),"yyyy-dd-MM")})})),l(r),S(r),J(!1)),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:o},r.a.createElement(v.Provider,{value:U},r.a.createElement(y.Provider,{value:z},r.a.createElement(E.Provider,{value:V},r.a.createElement(O.Provider,{value:T},r.a.createElement(j.Provider,{value:function(e){B(e)}},r.a.createElement(w.Provider,{value:G},r.a.createElement(g.Provider,{value:function(e){if(R(e),e){var t=M(e.toString(),x);l(t)}else K&&U({url:K.toString()})}},r.a.createElement(p.a,{active:q},r.a.createElement(d.a,{size:"large",color:"blue",active:q},"Loading")),t))))))))};function D(){return Object(n.useContext)(v)}function x(){return Object(n.useContext)(y)}function S(){return Object(n.useContext)(E)}function k(){return Object(n.useContext)(O)}var M=function(e,t){var a=[];return e&&t.forEach((function(t){var n=0;for(var r in t)t[r]&&t[r].indexOf(e)>-1&&n++;n>=1&&a.push(t)})),a},P=a(122),z=a(221),F=a(56),A=a(146),N=a(213),T=a(214),B=a(219),H=a(218),L=a(215),G=a(201),R=a(118),I=[{key:1,text:"None",value:"None"},{key:2,text:"Low",value:"Low"},{key:3,text:"Medium",value:"Medium"},{key:4,text:"High",value:"High"}],_=[{key:14,text:"None",value:""},{key:24,text:"Created On",value:"createdAt"},{key:34,text:"Pending On",value:"currentState"},{key:44,text:"Priority",value:"priority"}],q=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),i=l[0],p=l[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),h=b[0],v=b[1],E=Object(n.useState)(""),y=Object(m.a)(E,2),O=y[0],C=y[1],S=Object(n.useState)(""),M=Object(m.a)(S,2),q=M[0],J=M[1],W=D(),$=x(),K=Object(n.useContext)(j),Q=k(),U=Object(n.useContext)(w),V=Object(n.useContext)(g),X=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i&&h&&O&&q)){e.next=11;break}return e.next=3,R({method:"post",url:"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/create",headers:{"Content-Type":"application/json"},data:{title:i,description:h,currentState:"open",dueDate:Object(f.a)(new Date(O),"MM/dd/yyyy"),priority:q}});case 3:e.sent,c(!1),t=$?"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=".concat($):"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo",W({url:t}),J(""),p(""),C(""),v("");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(a.value);case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{clearing:!0},r.a.createElement(z.a,{as:"h2",floated:"left"},"ToDoApp"),r.a.createElement(z.a,{as:"h6",floated:"right"},r.a.createElement(F.a,{onClick:function(){return c(!a)},color:"blue",name:"plus"}))),r.a.createElement(P.a,null,r.a.createElement(A.a,null,r.a.createElement(A.a.Row,null,r.a.createElement(A.a.Column,{width:3},r.a.createElement("p",null,"Group By"),r.a.createElement(N.a,{value:Q,onChange:Y,placeholder:"select priority",search:!0,selection:!0,options:_})),r.a.createElement(A.a.Column,{width:13},r.a.createElement("p",null,"Search"),r.a.createElement(T.a,{value:U,onChange:function(e){V(e.target.value)},className:"search-input",action:{icon:"search"},placeholder:"Search..."}))))),r.a.createElement(B.a,{dimmer:!0,open:a},r.a.createElement(B.a.Header,null,"Create Task"),r.a.createElement(B.a.Content,null,r.a.createElement(H.a,null,r.a.createElement(H.a.Field,{control:T.a,label:"Summary",name:"Summary",value:i,onChange:function(e){return p(e.target.value)},placeholder:"Summary"}),r.a.createElement(H.a.Field,{control:L.a,label:"Description",name:"Description",value:h,onChange:function(e){return v(e.target.value)},placeholder:"Description"}),r.a.createElement(H.a.Group,{widths:"equal"},r.a.createElement(H.a.Field,{control:T.a,type:"date",label:"Due Date",name:"DueDate",value:O,onChange:function(e){return C(e.target.value)},placeholder:"Due Date"}),r.a.createElement(H.a.Field,{control:N.a,options:I,label:{children:"Priority"},name:"Priority",onChange:function(e,t){return J(t.value)},placeholder:"Priority"})))),r.a.createElement(B.a.Actions,null,r.a.createElement(G.a,{negative:!0,onClick:function(){return c(!a)}},"cancel"),r.a.createElement(G.a,{type:"submit",positive:!0,onClick:X},"Save"))))},J=a(217),W=a(121),$=a(118),K=[{key:1,text:"None",value:"None"},{key:2,text:"Low",value:"Low"},{key:3,text:"Medium",value:"Medium"},{key:4,text:"High",value:"High"}],Q=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(Y,{item:e.data,isShowModel:c,onClose:o}),r.a.createElement(F.a,{className:"custome-cell",color:"blue",name:"pencil",onClick:function(){o(!0)}}))},U=function(e){var t=Object(n.useState)("done"===e.data.currentState),a=Object(m.a)(t,2),c=a[0],o=a[1],l=D(),p=x(),d=function(){var t=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!c),t.next=3,$({method:"post",url:"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo/".concat(e.data._id),headers:{"Content-Type":"application/json"},data:Object(i.a)({},e.data,{dueDate:e.data.DueDate,currentState:"open"===e.data.currentState?"done":"open"})});case 3:t.sent,a=p?"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=".concat(p):"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo",l({url:a});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(G.a,{onClick:d,color:"green"},"Done"):r.a.createElement(G.a,{onClick:d,color:"teal"},"Re-Open"))},V=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(Z,{item:e.data,isShowModel:c,onClose:o}),r.a.createElement(F.a,{className:"custome-cell",color:"red",name:"trash",onClick:function(){o(!0)}}))},X=[{headerName:"Summary",field:"title",sortable:!0},{headerName:"Priority",field:"priority",sortable:!0},{headerName:"created On",field:"createdAt",sortable:!0},{headerName:"Due By",field:"dueDate",sortable:!0},{menuTabs:[],headerName:"Action",cellRendererFramework:function(e){return r.a.createElement("div",null," ",r.a.createElement(Q,e)," ",r.a.createElement(U,e),"  ",r.a.createElement(V,e)," ")},width:200,sortable:!1}],Y=function(e){var t=e.item,a=e.isShowModel,c=void 0!==a&&a,o=e.onClose,l=Object(n.useState)(t.title),i=Object(m.a)(l,2),p=i[0],d=i[1],b=Object(n.useState)(t.description),h=Object(m.a)(b,2),v=h[0],E=h[1],y=Object(n.useState)(Object(f.a)(new Date(t.DueDate),"yyyy-MM-dd")),O=Object(m.a)(y,2),j=O[0],w=O[1],g=Object(n.useState)(t.priority),C=Object(m.a)(g,2),S=C[0],k=C[1],M=D(),P=x(),z=function(){var e=Object(s.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p&&v&&j&&S)){e.next=7;break}return e.next=3,$({method:"post",url:"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo/".concat(t._id),headers:{"Content-Type":"application/json"},data:{title:p,description:v,currentState:"open",dueDate:Object(f.a)(new Date(j),"MM/dd/yyyy"),priority:S}});case 3:e.sent,a=P?"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=".concat(P):"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo",M({url:a}),o(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(B.a,{dimmer:!0,open:c},r.a.createElement(B.a.Header,null,"Edit Task"),r.a.createElement(B.a.Content,null,r.a.createElement(H.a,null,r.a.createElement(H.a.Field,{control:T.a,label:"Summary",name:"Summary",value:p,onChange:function(e){return d(e.target.value)},placeholder:"Summary"}),r.a.createElement(H.a.Field,{control:L.a,label:"Description",name:"Description",value:v,onChange:function(e){return E(e.target.value)},placeholder:"Description"}),r.a.createElement(H.a.Group,{widths:"equal"},r.a.createElement(H.a.Field,{control:T.a,type:"date",label:"Due Date",name:"DueDate",value:j,onChange:function(e){return w(e.target.value)},placeholder:"Due Date"}),r.a.createElement(H.a.Field,{control:N.a,options:K,label:{children:"Priority"},name:"Priority",value:S,onChange:function(e,t){return k(t.value)},placeholder:"Priority"})))),r.a.createElement(B.a.Actions,null,r.a.createElement(G.a,{negative:!0,onClick:function(){o(!1)}},"cancel"),r.a.createElement(G.a,{positive:!0,onClick:z},"Save")))},Z=function(e){var t=e.item,a=e.isShowModel,n=void 0!==a&&a,c=e.onClose,o=D(),l=x(),i=function(){var e=Object(s.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("deleteRead",t),e.next=3,$.delete("http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo/".concat(t._id));case 3:return a=l?"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=".concat(l):"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo",e.next=6,o({url:a});case 6:c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(B.a,{dimmer:!0,open:n},r.a.createElement(B.a.Header,null,"Delete Task"),r.a.createElement(B.a.Content,null,"Are you sure you want to delete ",r.a.createElement("b",null,t.title," ")," task?"),r.a.createElement(B.a.Actions,null,r.a.createElement(G.a,{negative:!0,onClick:function(){c(!1)}},"cancel"),r.a.createElement(G.a,{positive:!0,onClick:i},"delete")))},ee=function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),c=(a[0],a[1]),o=Object(n.useState)(null),l=Object(m.a)(o,2),u=(l[0],l[1]),i=Object(n.useContext)(h);return Object(n.useEffect)((function(){}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ag-theme-alpine",style:{height:400}},i.length>0&&r.a.createElement(W.AgGridReact,{onGridReady:function(e){c(e.api),u(e.columnApi)},rowData:i},X.map((function(e,t){return r.a.createElement(W.AgGridColumn,Object.assign({key:t},e))})))))},te=function(){var e=D(),t=S(),a=k();return Object(n.useEffect)((function(){t(""),e({url:a?"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?groupBy=".concat(a):"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo"})}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null))},ae=function(){var e=D(),t=S(),a=k();return Object(n.useEffect)((function(){t("done"),e({url:a?"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=done&&groupBy=".concat(a):"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=done"})}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null))},ne=function(){var e=D(),t=S(),a=k();return Object(n.useEffect)((function(){t("open"),e({url:a?"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=open&&groupBy=".concat(a):"http://ec2-3-19-68-175.us-east-2.compute.amazonaws.com/api/api/todo?status=open"})}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null))},re=[{menuItem:"All",render:function(){return r.a.createElement(J.a.Pane,{loading:!1},r.a.createElement(te,null))}},{menuItem:"Pending",render:function(){return r.a.createElement(J.a.Pane,null,r.a.createElement(ne,null))}},{menuItem:"Completed",render:function(){return r.a.createElement(J.a.Pane,null,r.a.createElement(ae,null))}}],ce=function(){return r.a.createElement("div",null,r.a.createElement(J.a,{menu:{color:"blue",attached:!0,tabular:!0},panes:re}))};a(194),a(195),a(196),a(197),a(198);var oe=function(){return r.a.createElement("div",null,r.a.createElement(C,null,r.a.createElement(q,null),r.a.createElement(ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.2d08c789.chunk.js.map