(this["webpackJsonptaevo-invoice-generator"]=this["webpackJsonptaevo-invoice-generator"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/arrow-right-icon.88d604b4.svg"},,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/trash.0c9746b7.svg"},,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),u=a.n(r),c=(a(20),a(1)),o=a(10),i=a.n(o),m=a(11),s=a.n(m),E=a(14),d=a(6),p=a(12);var h=a(2),v=a.n(h),g=(a(8),a(3)),f=a.n(g);function b(e){var t=e.clientName,a=e.dateIssued,n=e.invoiceNo,r=e.yourName,u=e.yourAddress,c=e.yourTown,o=e.yourCity,i=e.postalCode,m=e.taxNumber,s=e.accountNumber,E=e.branchCode,d=e.dateDue,p=e.email,h=e.phone,g=e.website,b=e.discountAmount,y=e.items,C=e.avatar,N=e.totalAmountVatInclusive,A=e.totalAmountDue,I=sessionStorage.getItem("vat");return l.a.createElement("div",{className:"Invoice"},l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("span",null,l.a.createElement("img",{src:C,alt:"",syle:{color:"blue",backgroundColor:"blue"}})),l.a.createElement("span",null,"Tax Invoice")),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,t),l.a.createElement("li",null," ",l.a.createElement("span",null,"Date Issued:")," ",l.a.createElement("span",{style:{color:"#323742"}}," ",v()(a).format("DD MMM YYYY"))),l.a.createElement("li",null," ",l.a.createElement("span",null,"Invoice No:")," ",l.a.createElement("span",{style:{color:"#323742"}},n)),""!==m&&l.a.createElement("li",null," ",l.a.createElement("span",null,"Tax Reg. No:")," ",l.a.createElement("span",{style:{color:"#323742"}},m))),l.a.createElement("ul",null,l.a.createElement("li",null,r),l.a.createElement("li",null,u),l.a.createElement("li",null,c,", ",o),l.a.createElement("li",null,i)))),l.a.createElement("div",{className:"details"},l.a.createElement("ul",null,l.a.createElement("li",null,"Description"),l.a.createElement("li",null,"Rate"),l.a.createElement("li",null,"Units/Hours"),l.a.createElement("li",null,"Subtotal")),y.map((function(e,t){return""!==e.description&&0!==e.rate&&0!==e.units&&l.a.createElement("ul",{key:t},l.a.createElement("li",null,e.description),l.a.createElement("li",null,l.a.createElement("span",null,"R")," ",e.rate),l.a.createElement("li",null,e.units),l.a.createElement("li",null," ",l.a.createElement("span",null,"R")," ",e.rate*e.units))})),b>=1&&l.a.createElement("ul",{className:"vat"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null,"DISCOUNT"),l.a.createElement("li",null,b)),I>0&&l.a.createElement("ul",{className:"vat"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null," VAT @ 15%"),l.a.createElement("li",null,(A*I).toFixed(2)))),l.a.createElement("footer",null,l.a.createElement("div",{className:"total"},l.a.createElement("ul",null,l.a.createElement("li",null,"Bank Info"),l.a.createElement("li",null,"DUE BY"),l.a.createElement("li",null,"TOTAL DUE")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Account No:"," ",l.a.createElement("strong",{style:{color:"#323742"}},s)),l.a.createElement("span",null,"Branch Code:"," ",l.a.createElement("strong",{style:{color:"#323742"}},E))),l.a.createElement("li",null,d),l.a.createElement("li",null,"R",(N-b).toFixed(2)))),l.a.createElement("div",{className:"contacts"},l.a.createElement("h2",null,"Thank you!"),l.a.createElement("ul",null,""!==p&&l.a.createElement("li",null,p),""!==h&&l.a.createElement("li",null,l.a.createElement("img",{src:f.a,alt:"icon"}),h),""!==g&&l.a.createElement("li",null,l.a.createElement("img",{src:f.a,alt:"icon"}),g)))))}function y(e){var t=e.description,a=e.rate,r=e.units,u=e.handleInputChange,o=e.addItem,i=e.discountAmount,m=e.vatAmount,s=e.totalAmountDue,E=e.discountAmountZero,d=Object(n.useState)(!1),p=Object(c.a)(d,2),h=p[0],v=p[1],g=Object(n.useState)(!1),f=Object(c.a)(g,2),b=f[0],y=f[1];s<=0&&sessionStorage.removeItem("vat");var C=sessionStorage.getItem("vat"),N={color:"#fff",backgroundColor:"#f16162",border:"none"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"description",placeholder:"Item description",value:t,onChange:u})),l.a.createElement("li",null," ",l.a.createElement("input",{type:"text",name:"rate",placeholder:"Price",value:a,onChange:u})),l.a.createElement("li",null," ",l.a.createElement("input",{type:"text",name:"units",placeholder:"Units",value:r,onChange:u})),l.a.createElement("li",null,a*r)),(b||i>=1)&&l.a.createElement("ul",{className:"vat"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null,"DISCOUNT"),l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"discountAmount",placeholder:"Discount Amount",defaultValue:i,onChange:b&&u}))),C>0&&l.a.createElement("ul",{className:"vat"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null," VAT @ 15%"),l.a.createElement("li",null,(s*C).toFixed(2))),l.a.createElement("div",{className:"btns"},l.a.createElement("button",{onClick:o},l.a.createElement("span",null,"+")),!b&&i<=0&&l.a.createElement("button",{onClick:function(){return y(!0)}},l.a.createElement("span",null,"ADD DISCOUNT")),(b||i>=1)&&l.a.createElement("button",{style:N,onClick:function(e){y(!1),E(),o(e)}},l.a.createElement("span",null,"REMOVE DISCOUNT")),!h&&C<=0&&l.a.createElement("button",{onClick:function(e){v(!h),o(e),m=.15,sessionStorage.setItem("vat",m)}},l.a.createElement("span",null,"INCLUDE VAT")),C>0&&l.a.createElement("button",{style:N,onClick:function(e){v(!1),sessionStorage.removeItem("vat"),o(e)}},l.a.createElement("span",null,"REMOVE VAT"))))}var C=a(13),N=a.n(C),A=[];function I(e){var t=e.toggleSaveForm,a=e.saveForm,r=Object(n.useState)([]),u=Object(c.a)(r,2),o=u[0],i=u[1],m=Object(n.useState)(null),s=Object(c.a)(m,2),h=s[0],g=s[1];Object(n.useEffect)((function(){i(A)}),[]);var C=function(e,t){var a=Object(n.useState)(e),l=Object(c.a)(a,2),r=l[0],u=l[1];return{inputs:r,handleInputChange:function(e,t){e.persist(),u((function(t){return Object(p.a)({},t,Object(d.a)({},e.target.name,e.target.value))}))},handleSubmit:function(e){e&&e.preventDefault(),t()}}}({clientName:"",dateIssued:"",invoiceNo:"#".concat(v()().format("DDMMYYYY")).concat(Math.floor(1e3*Math.random())+100),yourName:"",yourAddress:"",yourTown:"",yourCity:"",postalCode:"",taxNumber:"",accountNumber:"",branchCode:"",dateDue:null,description:"",email:"",phone:"",website:"",vatAmount:0,discountAmount:0,rate:0,units:1,message:"success"},(function(){t()})),I=C.inputs,x=C.handleInputChange,D=C.handleSubmit,T=o.reduce((function(e,t){return e+t.rate*t.units}),0),S=T+T*sessionStorage.getItem("vat"),O=h&&h.file;return l.a.createElement(l.a.Fragment,null,a?l.a.createElement(b,{clientName:I.clientName,dateIssued:I.dateIssued,invoiceNo:I.invoiceNo,yourName:I.yourName,yourAddress:I.yourAddress,yourTown:I.yourTown,yourCity:I.yourCity,taxNumber:I.taxNumber,accountNumber:I.accountNumber,branchCode:I.branchCode,dateDue:I.dateDue,email:I.email,phone:I.phone,website:I.website,postalCode:I.postalCode,avatar:O,discountAmount:I.discountAmount,items:o,totalAmountVatInclusive:S,totalAmountDue:T,toggleSaveForm:t}):l.a.createElement("form",{onSubmit:D,method:"POST",className:"Invoice"},l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("span",null,l.a.createElement("input",{style:{opacity:O&&"0"},type:"file",name:"file",onChange:function(e){g({file:URL.createObjectURL(e.target.files[0])})}}),l.a.createElement("img",{src:O,alt:"",syle:{color:"blue",backgroundColor:"blue"}})),l.a.createElement("input",{type:"submit",name:"submit",value:"Save"})),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"clientName",placeholder:"Client Name",defaultValue:I.clientName,onChange:x})),l.a.createElement("li",null," ",l.a.createElement("span",null,"Date Issued:")," ",l.a.createElement("span",null,l.a.createElement("input",{type:"date",name:"dateIssued",defaultValue:I.dateIssued,onChange:x}))),l.a.createElement("li",null," ",l.a.createElement("span",null,"Invoice Number:")," ",l.a.createElement("span",null,I.invoiceNo)),l.a.createElement("li",null," ",l.a.createElement("span",null,"Tax Reg. No:")," ",l.a.createElement("input",{type:"text",name:"taxNumber",placeholder:"VAT Reg. no",defaultValue:I.taxNumber,onChange:x}))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"yourName",placeholder:"Your Name",defaultValue:I.yourName,onChange:x})),l.a.createElement("li",null," ",l.a.createElement("input",{type:"text",name:"yourAddress",placeholder:"Your Address",defaultValue:I.yourAddress,onChange:x})),l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"yourTown",placeholder:"Your Town",defaultValue:I.yourTown,onChange:x}),l.a.createElement("input",{type:"text",name:"yourCity",placeholder:"Your City",defaultValue:I.yourCity,onChange:x})),l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"postalCode",placeholder:"Postal Code",defaultValue:I.postalCode,onChange:x}))))),l.a.createElement("div",{className:"details"},l.a.createElement("ul",null,l.a.createElement("li",null,"Description"),l.a.createElement("li",null,"Price"),l.a.createElement("li",null,"Units/Hours"),l.a.createElement("li",null,"Subtotal")),o.map((function(e,t){return""!==e.description&&0!==e.rate&&0!==e.units&&l.a.createElement("ul",{key:t},l.a.createElement("li",null,l.a.createElement("img",{src:N.a,alt:"delete",onClick:function(){return t=e.id,void i((function(){return o.filter((function(e){return e.id!==t}))}));var t}}),e.description),l.a.createElement("li",null,l.a.createElement("span",null,"R")," ",e.rate),l.a.createElement("li",null,e.units),l.a.createElement("li",null," ",l.a.createElement("span",null,"R")," ",(e.rate*e.units).toFixed(2)))})),l.a.createElement(y,{addItem:function(e){e.preventDefault(),i([].concat(Object(E.a)(o),[{id:o.length+=1,description:I.description,rate:Number(I.rate).toFixed(2),units:Number(I.units).toFixed(0)}])),I.description="",I.rate=0,I.units=1},description:I.description,rate:I.rate,units:I.units,vatAmount:I.vatAmount,discountAmountZero:function(){I.discountAmount=0},discountAmount:I.discountAmount,totalAmountDue:T,handleInputChange:x})),l.a.createElement("footer",null,l.a.createElement("div",{className:"total"},l.a.createElement("ul",null,l.a.createElement("li",null,"Bank Info"),l.a.createElement("li",null,"DUE BY"),l.a.createElement("li",null,"TOTAL DUE")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Account No:"," ",l.a.createElement("input",{type:"text",name:"accountNumber",placeholder:"Account Number",defaultValue:I.accountNumber,onChange:x})),l.a.createElement("span",null,"Branch Code:"," ",l.a.createElement("input",{type:"text",name:"branchCode",placeholder:"Branch Code",defaultValue:I.branchCode,onChange:x}))),l.a.createElement("li",null,l.a.createElement("input",{type:"date",name:"dateDue",defaultValue:I.dateDue,onChange:x})),l.a.createElement("li",null,"R"," ",(S-I.discountAmount).toFixed(2)))),l.a.createElement("div",{className:"contacts"},l.a.createElement("h2",null,"Thank you!"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"email",placeholder:"email",defaultValue:I.email,onChange:x})," ",l.a.createElement("img",{src:f.a,alt:"icon"})),l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"phone",placeholder:"phone",defaultValue:I.phone,onChange:x})," ",l.a.createElement("img",{src:f.a,alt:"icon"})),l.a.createElement("li",null,l.a.createElement("input",{type:"text",name:"website",placeholder:"website",defaultValue:I.website,onChange:x})," "))))))}a(23);var x=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],u="INVOICE".concat(v()().format("DDMMYYYY")).concat(Math.floor(100*Math.random())+10),o=function(){r(!a)};return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"mb5 btn"},a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:o},"Edit"),l.a.createElement("button",{onClick:function(){var e=document.getElementById("divToPrint");i()(e,{allowTaint:!0,taintTest:!1,useCORS:!0,scale:1}).then((function(e){sessionStorage.clear();var t=e.toDataURL("image/png"),a=new s.a;a.addImage(t,"JPEG",0,0),a.save("".concat(u,".pdf"))}))}},"Print"))),l.a.createElement("div",{id:"divToPrint",style:{position:"relative",width:"210mm",minHeight:"297mm",marginLeft:"auto",marginRight:"auto",backgroundColor:"#f2f6f3"}},l.a.createElement(I,{toggleSaveForm:o,saveForm:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.a39d1802.chunk.js.map