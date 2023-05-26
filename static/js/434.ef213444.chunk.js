"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[434],{7434:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,a,i,o,c,d,s,p,x,l,u,h,f,g,m,b,Z=t(9439),j=t(2791),w=t(5218),v=t(9434),y=t(3634),P=function(n){return n.contacts},k=function(n){return n.filter},C=t(168),z=t(6444),A=z.ZP.form(r||(r=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n"]))),F=z.ZP.label(a||(a=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),E=z.ZP.input(i||(i=(0,C.Z)(["\n  height: 20px;\n  width: 350px;\n  padding: 5px;\n  border: 1px solid #b7b7b7;\n  border-radius: 4px;\n"]))),I=z.ZP.button(o||(o=(0,C.Z)(["\n  width: 100px;\n  height: 30px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 14px;\n  border-radius: 4px;\n  border-color: #0a4ff0;\n  background-color: #f9fae6;\n  :hover,\n  :focus {\n    background-color: #5d27db;\n  }\n"]))),L=t(184),S=function(){var n=(0,j.useState)(""),e=(0,Z.Z)(n,2),t=e[0],r=e[1],a=(0,j.useState)(""),i=(0,Z.Z)(a,2),o=i[0],c=i[1],d=(0,v.v9)(P),s=(0,v.I0)(),p=function(n){var e=n.target,t=e.name,a=e.value;"name"===t?r(a):"number"===t&&c(a)};return(0,L.jsxs)(A,{onSubmit:function(n){n.preventDefault(),function(){var n={number:o,name:t};if(d.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase().trim()})))return w.ZP.error("".concat(n.name," is already in contacts."));s((0,y.uK)(n)),(0,w.ZP)("Success! This contact will be added to your Phonebook.",{icon:"\ud83d\udc4f"})}(),r(""),c("")},children:[(0,L.jsxs)(F,{children:["Name",(0,L.jsx)(E,{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p,value:t})]}),(0,L.jsxs)(F,{children:["Number",(0,L.jsx)(E,{type:"tel",name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p,value:o})]}),(0,L.jsx)(I,{type:"submit",children:"Add contact"})]})},_=z.ZP.p(c||(c=(0,C.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),N=z.ZP.button(d||(d=(0,C.Z)(["\n  width: 60px;\n  height: 30px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 14px;\n  border-radius: 4px;\n  border-color: #0a4ff0;\n  background-color: #f9fae6;\n"]))),q=function(n){var e=n.contact,t=(0,v.I0)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(_,{children:[e.name,": ",e.number]}),(0,L.jsx)(N,{type:"button",onClick:function(){return t((0,y.GK)(e.id))},children:"Delete"})]})},D=z.ZP.ul(s||(s=(0,C.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n"]))),H=z.ZP.li(p||(p=(0,C.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]))),K=z.ZP.p(x||(x=(0,C.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),T=function(){var n=(0,v.v9)(P),e=(0,v.v9)(k),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(D,{children:t.map((function(n){return(0,L.jsx)(H,{children:(0,L.jsx)(q,{contact:n})},n.id)}))}),(0,L.jsxs)(K,{children:["All contacts: ",n.length]}),e&&(0,L.jsxs)(K,{children:["Filtered contacts: ",t.length]})]})},B=t(4808),G=z.ZP.div(l||(l=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),J=z.ZP.p(u||(u=(0,C.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),M=z.ZP.input(h||(h=(0,C.Z)(["\n  height: 20px;\n  width: 350px;\n  padding: 5px;\n  margin-top: 10px;\n  border: 1px solid #b7b7b7;\n  border-radius: 4px;\n"]))),$=function(){var n=(0,v.I0)(),e=(0,v.v9)(k);return(0,L.jsxs)(G,{children:[(0,L.jsx)(J,{children:"Find Contacts by name"}),(0,L.jsx)("label",{children:(0,L.jsx)(M,{type:"text",name:"filter",placeholder:"Enter name",onChange:function(e){var t=e.target.value;n((0,B.T)(t))},value:e})})]})},O=t(4270),Q=z.ZP.div(f||(f=(0,C.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n"]))),R=z.ZP.div(g||(g=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  /* margin: 0px 0px 0px 400px; */\n  padding: 20px;\n  width: 400px;\n  height: 350px;\n  border-radius: 5px;\n  background-color: #c1caca;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n"]))),U=z.ZP.div(m||(m=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: baseline;\n  gap: 20px;\n  /* margin: 0px 0px 0px 400px; */\n  padding: 20px;\n  width: 400px;\n  height: 350px;\n  /* max-height: max-content; */\n  border-radius: 5px;\n  background-color: #c1caca;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n"]))),V=z.ZP.div(b||(b=(0,C.Z)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(66, 75, 92, 0.5);\n  /* background-image: url('../../image/bgHome.jpg'); */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),W=function(){var n=(0,v.I0)();return(0,j.useEffect)((function(){n((0,y.yF)())}),[n]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(O.Helmet,{children:(0,L.jsx)("title",{children:"Contacts"})}),(0,L.jsx)(V,{children:(0,L.jsxs)(Q,{children:[(0,L.jsx)(R,{children:(0,L.jsx)(S,{})}),(0,L.jsxs)(U,{children:[(0,L.jsx)($,{}),(0,L.jsx)(T,{})]})]})})]})}}}]);
//# sourceMappingURL=434.ef213444.chunk.js.map