(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{102:function(t,e,c){},103:function(t,e,c){},104:function(t,e,c){},113:function(t,e,c){},114:function(t,e,c){},115:function(t,e,c){},116:function(t,e,c){},117:function(t,e,c){},224:function(t,e,c){},225:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(90),i=c.n(r),s=(c(102),c(103),c(4)),o=c(6),l=c(15),b=(c(104),c(16)),j=c(227),d=function(t){return t.getFullYear()},u=function(t){return(t.getMonth()<9?"0":"")+(t.getMonth()+1)},O=function(t){return(t.getDate()<10?"0":"")+t.getDate()},h=function(t){return"".concat(d(t),"-").concat(u(t),"-").concat(O(t))},x="hl-",f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return localStorage.getItem(x+t)||e},m=function(t,e){return localStorage.setItem(x+t,e)},v=function(t,e){return JSON.parse(f("".concat(t," ").concat(h(e)))||"[]")},g=c(2),N=Object(n.createContext)({createNewUser:function(){},userList:[]}),p=function(t){var e=Object(n.useState)(JSON.parse(f("user-list","[]"))),c=Object(l.a)(e,2),a=c[0],r=c[1];return Object(g.jsx)(N.Provider,{value:{createNewUser:function(t){var e=[].concat(Object(b.a)(a),[[t,Object(j.a)()]]);r(e),function(t){m("user-list",JSON.stringify(t))}(e)},userList:a},children:t.children})},D=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],a=e[1],r=Object(n.useContext)(N),i=r.createNewUser,o=r.userList;return Object(g.jsxs)("div",{className:"user-list",children:[o.map((function(t){return Object(g.jsx)(s.b,{className:"user-link link-button",to:"user/".concat(t[1]),children:t[0]},t[1])})),Object(g.jsxs)("form",{className:"create-user-form",onSubmit:function(t){t.preventDefault(),i(c)},children:[Object(g.jsx)("input",{className:"username-input",type:"text",name:"username",onChange:function(t){a(t.currentTarget.value)},value:c,placeholder:"New User",required:!0}),Object(g.jsx)("button",{className:"create-user",type:"submit",children:"Create"})]})]})},y=c(8),k=c(9),C=c(19),w=(c(113),Object(n.createContext)({habitList:[],createHabit:function(t,e,c){},updateHabit:function(t){}})),S=function(t){var e=Object(o.g)().userId,c=Object(n.useState)(function(t){return JSON.parse(f("".concat(t," habit-list"))||"[]")}(e)),a=Object(l.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){!function(t,e){m("".concat(t," habit-list"),JSON.stringify(e))}(e,r)}),[e,r]),Object(g.jsx)(w.Provider,{value:{habitList:r.filter((function(t){return"t"!==t.d})),createHabit:function(t,e,c){i([].concat(Object(b.a)(r),[{id:Object(j.a)(),t:t,c:e,r:c,d:"f"}]))},updateHabit:function(t){var e=r.findIndex((function(e){return e.id===t.id}));i([].concat(Object(b.a)(r.slice(0,e)),[t],Object(b.a)(r.slice(e+1))))}},children:t.children})},F=function(){var t=Object(n.useContext)(T);return Object(g.jsx)(s.b,{className:"plain-link calendar-button",to:"".concat(t,"/calendar/").concat(d(new Date),"/").concat(u(new Date)),children:Object(g.jsx)(y.a,{icon:C.a})})},L=function(){var t=Object(n.useContext)(T),e=Object(o.g)(),c=e.userId,a=e.year,r=e.month,i=e.day,j=new Date(Number(a),Number(r)-1,Number(i)),x=new Date(j);x.setDate(x.getDate()-1);var f=new Date(j);f.setDate(f.getDate()+1);var N=Object(n.useContext)(w).habitList,p=Object(n.useState)(v(c,j)),D=Object(l.a)(p,2),S=D[0],L=D[1];Object(n.useEffect)((function(){L(v(c,new Date(Number(a),Number(r)-1,Number(i))))}),[c,a,r,i]);var E=function(t){var e=S.indexOf(t),n=e>=0?[].concat(Object(b.a)(S.slice(0,e)),Object(b.a)(S.slice(e+1))):[].concat(Object(b.a)(S),[t]);L(n),function(t,e,c){m("".concat(t," ").concat(h(e)),JSON.stringify(c))}(c,j,n)};return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(F,{}),Object(g.jsxs)("div",{className:"container-header",children:[Object(g.jsx)(s.b,{className:"link-button nav-link",to:"".concat(t,"/calendar/").concat(d(x),"/").concat(u(x),"/").concat(O(x)),children:Object(g.jsx)(y.a,{icon:k.a})}),Object(g.jsxs)(s.b,{className:"plain-link",to:"".concat(t,"/").concat(d(j),"/").concat(u(j)),children:[Object(g.jsx)("div",{className:"calendar-day-date",children:j.toLocaleString("default",{month:"short",year:"numeric",day:"numeric"})}),Object(g.jsx)("div",{className:"calendar-day-weekday",children:j.toLocaleString("default",{weekday:"long"})})]}),Object(g.jsx)(s.b,{className:"link-button nav-link",to:"".concat(t,"/calendar/").concat(d(f),"/").concat(u(f),"/").concat(O(f)),children:Object(g.jsx)(y.a,{icon:k.b})})]}),N.filter((function(t){return"t"===t.r.charAt(j.getDay())})).map((function(t){return Object(g.jsxs)("div",{className:"calendar-day-habit",style:S.indexOf(t.id)<0?{background:"linear-gradient(-35deg, ".concat(t.c+"25",", ").concat(t.c+"50"," 33%, ").concat(t.c+"50"," 66%, ").concat(t.c+"25",")")}:{background:t.c},onClick:function(){return E(t.id)},children:[Object(g.jsx)("span",{className:"calendar-day-habit-title",children:t.t}),Object(g.jsx)(y.a,{className:"calendar-day-icon",icon:S.indexOf(t.id)>=0?C.b:C.c})]},t.id)}))]})},E=(c(114),c(115),function(t){var e=t.index,c=t.day,a=Object(o.g)().userId,r=Object(n.useContext)(w).habitList,i=Object(n.useContext)(T),l=h(c)===h(new Date),b=e<7&&c.getDate()>7,j=c.getDate()+6<e,x=v(a,c);return c.getDay(),Object(g.jsxs)(s.b,{className:"link-button calendar-month-day".concat(b?" previous-month":"").concat(j?" next-month":"").concat(l?" today":""),to:"".concat(i,"/calendar/").concat(d(c),"/").concat(u(c),"/").concat(O(c)),children:[Object(g.jsx)("div",{className:"calendar-month-day-date",children:c.getDate()}),r.filter((function(t){return"t"===t.r.charAt(c.getDay())})).map((function(t){return Object(g.jsx)("div",{className:"calendar-month-day-habit".concat(x.indexOf(t.id)<0?" incomplete":""),style:x.indexOf(t.id)<0?{background:"linear-gradient(-35deg, ".concat(t.c+"25",", ").concat(t.c+"50"," 33%, ").concat(t.c+"50"," 66%, ").concat(t.c+"25",")")}:{backgroundColor:t.c}},t.id)}))]})}),A=function(){var t=Object(n.useContext)(T),e=Object(o.g)(),c=e.year,a=e.month,r=Number(c),i=Number(a)-1,l=new Date(r,i,1);l.getDay()>0&&l.setDate(1-l.getDay());for(var b=[],j=0;j<42;j++)b.push(new Date(l)),l.setDate(l.getDate()+1);var O=new Date(r,i,1);O.setMonth(O.getMonth()-1);var h=new Date(r,i,1);return h.setMonth(h.getMonth()+1),Object(g.jsxs)("div",{className:"calendar-container",children:[Object(g.jsxs)("div",{className:"calendar-header",children:[Object(g.jsx)(s.b,{className:"link-button nav-link",to:"".concat(t,"/calendar/").concat(d(O),"/").concat(u(O)),children:Object(g.jsx)(y.a,{icon:k.a})}),Object(g.jsx)(s.b,{className:"plain-link",to:"".concat(t,"/calendar/").concat(d(new Date(r,i,1))),children:new Date(r,i).toLocaleString("default",{month:"long",year:"numeric"})}),Object(g.jsx)(s.b,{className:"link-button nav-link",to:"".concat(t,"/calendar/").concat(d(h),"/").concat(u(h)),children:Object(g.jsx)(y.a,{icon:k.b})}),Object(g.jsx)(s.b,{className:"link-button nav-link habit-list-btn",to:"".concat(t,"/habit-list"),children:Object(g.jsx)(y.a,{icon:k.c})})]}),Object(g.jsx)("div",{className:"calendar-grid",children:b.map((function(t,e){return Object(g.jsx)(E,{index:e,day:t},e)}))})]})},I=(c(116),function(){var t=Object(n.useContext)(w).habitList,e=Object(n.useContext)(T),c=Object(o.g)(),a=c.userId,r=c.year,i=Number(r),l=[0,0,0,0,0,0,0];t.forEach((function(t){for(var e=t.r,c=0;c<7;c++)"t"===e[c]&&l[c]++}));for(var b=new Date(i,0,1),j=[],O=0;b.getFullYear()===i;)b.getMonth()>O&&O++,j[O]||(j[O]=[0,0]),j[O][0]+=l[b.getDay()],j[O][1]+=v(a,b).length,b.setDate(b.getDate()+1);var h=j.map((function(t){return t[0]>0?100*t[1]/t[0]:0}));return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(F,{}),Object(g.jsxs)("div",{className:"container-header",children:[Object(g.jsx)(s.b,{className:"link-button nav-link",to:"".concat(e,"/calendar/").concat(i-1),children:Object(g.jsx)(y.a,{icon:k.a})}),i,Object(g.jsx)(s.b,{className:"link-button nav-link",to:"".concat(e,"/calendar/").concat(i+1),children:Object(g.jsx)(y.a,{icon:k.b})})]}),h.map((function(t,c){var n=new Date(i,c,1);return Object(g.jsxs)(s.b,{className:"calendar-year-month plain-link",to:"".concat(e,"/calendar/").concat(d(n),"/").concat(u(n)),children:[Object(g.jsx)("div",{children:n.toLocaleDateString("default",{month:"long"})}),Object(g.jsx)("div",{className:"calendar-year-progress",children:Object(g.jsx)("div",{className:"calendar-year-progress-bar",style:{width:"".concat(h[c],"%")}})})]},c)}))]})}),M=(c(117),c(18)),H=c(96),J=(c(224),function(t){var e=t.habitId,c=Object(n.useContext)(w),a=c.habitList,r=c.updateHabit,i=a.find((function(t){return t.id===e})),s=Object(n.useState)(!1),o=Object(l.a)(s,2),b=o[0],j=o[1];if(!i)return Object(g.jsx)("div",{});return Object(g.jsxs)("div",{className:"habit",style:{backgroundColor:i.c},children:[Object(g.jsx)("div",{className:"habit-delete",onClick:function(){window.confirm("Delete ".concat(i.t,"?"))&&r(Object(M.a)(Object(M.a)({},i),{},{d:"t"}))},children:Object(g.jsx)(y.a,{icon:k.e})}),Object(g.jsxs)("div",{className:"habit-header",children:[Object(g.jsx)("input",{className:"habit-title",type:"text",name:"title",onChange:function(t){r(Object(M.a)(Object(M.a)({},i),{},{t:t.target.value}))},value:i.t,placeholder:"Title"}),Object(g.jsxs)("div",{className:"habit-color",children:[Object(g.jsx)(y.a,{className:"habit-color-button",icon:k.d,onClick:function(){j(!b)}}),Object(g.jsx)("div",{className:"habit-color-picker".concat(b?" habit-color-picker-open":" habit-color-picker-closed"),children:Object(g.jsx)(H.a,{disableAlpha:!0,color:i.c,onChange:function(t){var e=t.hex;r(Object(M.a)(Object(M.a)({},i),{},{c:e}))}})})]})]}),Object(g.jsx)("div",{className:"habit-repeat",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((function(t,e){return Object(g.jsxs)("div",{className:"habit-repeat-day",onClick:(c=e,function(){r(Object(M.a)(Object(M.a)({},i),{},{r:i.r.slice(0,c)+("f"===i.r[c]?"t":"f")+i.r.slice(c+1)}))}),children:[Object(g.jsx)("span",{children:t}),Object(g.jsx)(y.a,{className:"habit-repeat-icon",icon:"t"===i.r[e]?C.b:C.c})]},t);var c}))})]})}),B=["#FF5353","#FF8471","#FEA152","#FEE895","#FBFD68","#B2FD61","#6AEC5D","#33E7A6","#7AE1E7","#61AAEA","#3760DD","#8E6AFA","#AB3FE1","#E652BF"],P=function(){var t=Object(n.useContext)(w),e=t.habitList,c=t.createHabit;return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(F,{}),Object(g.jsx)("div",{className:"container-header",children:"Habit List"}),e.map((function(t){return Object(g.jsx)(J,{habitId:t.id},t.id)})),Object(g.jsx)("button",{className:"create-habit",onClick:function(){return c("",B[e.length%B.length],"ttttttt")},children:"New Habit"})]})},T=Object(n.createContext)(""),U=Object(n.createContext)(""),Y=function(){var t=Object(o.h)(),e=t.path,c=t.url,a=Object(o.g)().userId,r=Object(n.useContext)(N).userList.find((function(t){return t[1]===a}));return r?Object(g.jsx)(T.Provider,{value:c,children:Object(g.jsx)(U.Provider,{value:r[0],children:Object(g.jsx)(S,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{path:"".concat(e,"/calendar/:year/:month/:day"),children:Object(g.jsx)(L,{})}),Object(g.jsx)(o.b,{path:"".concat(e,"/calendar/:year/:month"),children:Object(g.jsx)(A,{})}),Object(g.jsx)(o.b,{path:"".concat(e,"/calendar/:year"),children:Object(g.jsx)(I,{})}),Object(g.jsx)(o.b,{path:"".concat(e,"/habit-list"),children:Object(g.jsx)(P,{})}),Object(g.jsx)(o.a,{to:"".concat(e,"/calendar/").concat(d(new Date),"/").concat(u(new Date))})]})})})}):Object(g.jsx)(o.a,{to:"/users"})},q=function(){return Object(g.jsx)(s.a,{children:Object(g.jsx)(p,{children:Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{path:"/users",children:Object(g.jsx)(D,{})}),Object(g.jsx)(o.b,{path:"/user/:userId",children:Object(g.jsx)(Y,{})}),Object(g.jsx)(o.a,{to:"/users"})]})})})})},W=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,228)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(q,{})}),document.getElementById("root")),W()}},[[225,1,2]]]);
//# sourceMappingURL=main.747c0821.chunk.js.map