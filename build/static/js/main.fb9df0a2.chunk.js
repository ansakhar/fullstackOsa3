(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),o=t(14),a=t.n(o),u=t(3),i=t(4),s=t.n(i),l="/api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},f=function(e){return s.a.post(l,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},b=function(e){return Object(c.jsx)("form",{className:"form",children:Object(c.jsxs)("div",{children:["filter shown with: ",Object(c.jsx)("input",{value:e.newFilter,onChange:e.handleFilterChange})]})})},m=function(e){return Object(c.jsxs)("form",{onSubmit:e.addPerson,className:"form",children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var n=e.persons,t=e.handleDelete;return Object(c.jsx)("div",{className:"person",children:n.map((function(e){return Object(c.jsxs)("div",{children:[" ",e.name," ",e.number,Object(c.jsx)("button",{onClick:function(){return t(e)},children:"delete"})," "]},e.id)}))})},v=function(e){var n=e.message;return null===n?null:n.includes("Added")||n.includes("was deleted")?Object(c.jsx)("div",{className:"noterror",children:n}):Object(c.jsx)("div",{className:"error",children:n})},p=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],a=Object(r.useState)(""),i=Object(u.a)(a,2),s=i[0],l=i[1],p=Object(r.useState)(""),g=Object(u.a)(p,2),x=g[0],w=g[1],N=Object(r.useState)(""),C=Object(u.a)(N,2),S=C[0],T=C[1],k=Object(r.useState)(null),y=Object(u.a)(k,2),D=y[0],F=y[1];Object(r.useEffect)((function(){d().then((function(e){o(e)}))}),[]),console.log("render",t.length,"persons");var P=t.filter((function(e){return!0===e.name.toLowerCase().includes(S.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(v,{message:D}),Object(c.jsx)(b,{newFilter:S,handleFilterChange:function(e){console.log(e.target.value),T(e.target.value)}}),Object(c.jsx)("h3",{children:"add a new"}),Object(c.jsx)(m,{addPerson:function(e){e.preventDefault();var n={name:s,number:x},c=t.find((function(e){return e.name===s}));c?window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))&&h(c.id,n).then((function(e){F("Person's ".concat(s," phonenumber was replaced")),setTimeout((function(){F(null)}),5e3),o(t.map((function(n){return n.id!==c.id?n:e})))})).catch((function(e){F("Information of ".concat(s," has already been removed from server")),setTimeout((function(){F(null)}),5e3),o(t.filter((function(e){return e.id!==c.id})))})):f(n).then((function(e){F("Added ".concat(s)),setTimeout((function(){F(null)}),5e3),o(t.concat(e)),l(""),w("")})).catch((function(e){console.log(e.response.data),F(e.response.data.error),setTimeout((function(){F(null)}),5e3)}))},newName:s,handleNameChange:function(e){console.log(e.target.value),l(e.target.value)},newNumber:x,handleNumberChange:function(e){console.log(e.target.value),w(e.target.value)}}),Object(c.jsx)("h3",{children:"Numbers"}),Object(c.jsx)(O,{persons:P,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&j(e.id).then((function(n){F("".concat(e.name," was deleted")),setTimeout((function(){F(null)}),5e3),o(t.filter((function(n){return n.id!==e.id})))})).catch((function(n){F("Information of ".concat(e.name," has already been removed from server")),setTimeout((function(){F(null)}),5e3),o(t.filter((function(n){return n.id!==e.id})))}))}})]})};t(37);a.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fb9df0a2.chunk.js.map