(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{15:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),r=a.n(c),n=a(7),u=a.n(n),j=(a(15),a(9)),i=a(2),l=function(e){var t=e.mensaje;return Object(s.jsxs)("p",{className:"alert alert-danger error",children:[" ",t," "]})},o=function(e){var t=e.guardarPresupuesto,a=e.guardarRestante,r=e.actualizarPregunta,n=Object(c.useState)(0),u=Object(i.a)(n,2),j=u[0],o=u[1],b=Object(c.useState)(!1),d=Object(i.a)(b,2),O=d[0],p=d[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Indica tu presupuesto"}),O?Object(s.jsx)(l,{mensaje:"El presupuesto es incorrecto"}):null,Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j<1||isNaN(j)?p(!0):(p(!1),t(j),a(j),r(!1))},children:[Object(s.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Indica tu presupuesto",onChange:function(e){o(parseInt(e.target.value,10))}}),Object(s.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Definir presupuesto"})]})]})},b=a(8),d=a.n(b),O=function(e){var t=e.guardarGasto,a=e.guardarCrearGasto,r=Object(c.useState)(""),n=Object(i.a)(r,2),u=n[0],j=n[1],o=Object(c.useState)(0),b=Object(i.a)(o,2),O=b[0],p=b[1],h=Object(c.useState)(!1),m=Object(i.a)(h,2),x=m[0],f=m[1];return Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===u.trim())f(!0);else{f(!1);var s={nombre:u,cantidad:O,id:d.a.generate()};t(s),a(!0),j(""),p(0)}},children:[Object(s.jsx)("h2",{children:"Inserta tus gastos aqu\xed"}),x?Object(s.jsx)(l,{mensaje:"Falta el concepto o el valor es incorrecto."}):null,Object(s.jsxs)("div",{className:"campo",children:[Object(s.jsx)("label",{children:"Concepto"}),Object(s.jsx)("input",{type:"text",className:"u-full-width",placeholder:"EJ. Transporte",value:u,onChange:function(e){j(e.target.value)}})]}),Object(s.jsx)("div",{className:"campo",children:Object(s.jsx)("input",{type:"text",className:"u-full-width",placeholder:"EJ. 300",value:O,onChange:function(e){p(parseInt(e.target.value,10)||0)}})}),Object(s.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"A\xf1adir gasto"})]})},p=function(e){var t=e.gasto;return Object(s.jsx)("li",{className:"gastos",children:Object(s.jsxs)("p",{children:[t.nombre,Object(s.jsxs)("span",{className:"gasto",children:[t.cantidad," \u20ac"]})]})})},h=function(e){var t=e.gastos;return Object(s.jsxs)("div",{className:"gastos-realizados",children:[Object(s.jsx)("h2",{children:"Lista de gastos"}),t.map((function(e){return Object(s.jsx)(p,{gasto:e},e.id)}))]})},m=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},x=function(e){var t=e.presupuesto,a=e.restante;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"alert alert-primary",children:["Presupuesto: ",t," \u20ac"]}),Object(s.jsxs)("div",{className:m(t,a),children:["Restante: ",a," \u20ac"]})]})};var f=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(0),u=Object(i.a)(n,2),l=u[0],b=u[1],d=Object(c.useState)(!0),p=Object(i.a)(d,2),m=p[0],f=p[1],g=Object(c.useState)([]),v=Object(i.a)(g,2),N=v[0],S=v[1],w=Object(c.useState)({}),y=Object(i.a)(w,2),C=y[0],I=y[1],E=Object(c.useState)(!1),G=Object(i.a)(E,2),P=G[0],J=G[1];return Object(c.useEffect)((function(){if(P){S([].concat(Object(j.a)(N),[C]));var e=l-C.cantidad;b(e),J(!1)}}),[C,P,N,l]),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"Gasto semanal"}),Object(s.jsx)("div",{className:"contenido-principal contenido",children:m?Object(s.jsx)(o,{guardarPresupuesto:r,guardarRestante:b,actualizarPregunta:f}):Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"one-half column",children:Object(s.jsx)(O,{guardarGasto:I,guardarCrearGasto:J})}),Object(s.jsxs)("div",{className:"one-half column",children:[Object(s.jsx)(h,{gastos:N}),Object(s.jsx)(x,{presupuesto:a,restante:l})]})]})})]})})};var g=function(){return Object(s.jsx)(f,{})};u.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e3b3af5d.chunk.js.map