(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(34)},21:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(11),c=a.n(o),l=(a(21),a(2)),i=a(5),m=a(4),s=function(e){var t=e.labelName,a=e.label,r=e.type,o=e.placeholder,c=e.value,l=e.handleChange;return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:t,className:"form-label my-2 text-light"},a),n.a.createElement("input",{className:"form-control",autoComplete:"off",name:t,placeholder:o,type:r,value:c,onChange:l}))},u=function(e){var t=e.inputs,a=e.handleSubmit;return n.a.createElement("form",{onSubmit:a},t.map(function(e){return n.a.createElement(s,Object.assign({key:e.labelName},e))}),n.a.createElement("div",{className:"d-grid gap-2 col-2 mx-auto my-3"},n.a.createElement("button",{className:"btn btn-success my-2",type:"submit"},"Calcular")))},b=function(e,t){return(e/Math.pow(t/100,2)).toFixed(2)},d=[{labelName:"nombre",label:"Nombre",type:"text",placeholder:"Pepito"},{labelName:"estatura",label:"Estatura(cm)",type:"number",placeholder:"175"},{labelName:"peso",label:"Peso(kg)",type:"number",placeholder:"90"}],p=a(6),f=a.n(p),g=f.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,color:"#decba4 ",background:"#3e5151",didOpen:function(e){e.addEventListener("mouseenter",f.a.stopTimer),e.addEventListener("mouseleave",f.a.resumeTimer)}}),E=a(1),v=a(3),h=a(8),j=function(e){var t=e.imcData,a=null,r=null;try{a=parseFloat(t)}catch(o){console.log(o)}switch(!0){case a<18.5:r="bajo";break;case a>=18.5&&a<=24.9:r="normal";break;case a>=25&&a<=29.9:r="sobrepeso";break;case a>=30&&a<=34.9:r="sobrepeso1";break;case a>=35&&a<=39.9:r="sobrepeso2";break;case a>=40:r="sobrepeso3"}return r&&n.a.createElement("img",{className:"img-fluid",alt:"imagen del cuerpo",src:"images/".concat(r,".jpeg")})};v.c.register.apply(v.c,Object(l.a)(v.j));var O=function(e){var t=e.labelData,a=e.imcData,o=Object(r.useState)(null),c=Object(m.a)(o,2),l=c[0],i=c[1];Object(r.useEffect)(function(){a&&i(a.at(-1))},[a]);var s=Object(r.useRef)(null),u={labels:t,datasets:[{label:"IMC",data:a,backgroundColor:"#1A3C40",borderColor:"#417D7A",pointRadius:5,pointHoverRadius:8,pointHoverBorderColor:"white",pointHoverBorderWidth:2}]};return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{ref:s,data:u,onClick:function(e){var t=s.current;t&&function(e){if(e.length){var t=e[0],a=t.datasetIndex,r=t.index;i(u.datasets[a].data[r])}}(Object(h.b)(t,e))}}),n.a.createElement("div",{className:"my-4"},n.a.createElement(j,{imcData:l})))},N=(a(32),function(){var e=Object(r.useState)(function(){return function(e){if(localStorage)try{return JSON.parse(localStorage.getItem(e))}catch(t){console.error("Error getting item ".concat(e," from localStorage"),t)}}("data")||[]}),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)({}),s=Object(m.a)(c,2),p=s[0],f=s[1],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),a=Object(m.a)(t,2),n=a[0],o=a[1];return[n,function(e){var t=e.target,a=t.name,r=t.value;o(Object(i.a)({},n,Object(E.a)({},a,r)))},function(){o(e)}]}({nombre:"",estatura:"",peso:""}),h=Object(m.a)(v,3),j=h[0],N=h[1],y=h[2],S=j.nombre,C=j.estatura,k=j.peso,w=d.map(function(e){return Object(i.a)({},e,{value:j[e.labelName],handleChange:N})});Object(r.useEffect)(function(){!function(e,t){if(localStorage)try{localStorage.setItem(e,JSON.stringify(t))}catch(a){console.error("Error storing item ".concat(e," to localStorage"),a)}}("data",a);var e=a.map(function(e){return e.date}),t=a.map(function(e){return e.imc});f({date:e,imc:t})},[a]);return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement("header",{className:"App-header row justify-content-center"},n.a.createElement("h1",{className:"text-light mx-5 my-2 text-center"},"Calculadora IMC"),n.a.createElement("div",{className:"col-lg-6 col-11"},n.a.createElement(u,{inputs:w,handleSubmit:function(e){e.preventDefault(),function(e,t,a){return e.length<4?(g.fire({icon:"error",title:"El nombre debe tener almenos 4 caracteres"}),!0):t<=100||t>=250?(g.fire({icon:"error",title:"Campo Estatura fuera de rango"}),!0):(a<=45||a>=200)&&(g.fire({icon:"error",title:"Campo Peso fuera de rango"}),!0)}(S,C,k)||(o(function(e){return[].concat(Object(l.a)(e),[{imc:b(k,C),date:(new Date).toLocaleString().split(",")[0]}])}),y())}})),n.a.createElement("div",{className:"col-lg-8 col-12"},n.a.createElement(O,{labelData:p.date,imcData:p.imc})))))});c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)))}},[[12,2,1]]]);
//# sourceMappingURL=main.8e6e153c.chunk.js.map