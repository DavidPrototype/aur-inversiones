import"./main-efff4ac1.js";import{S as A,P as D}from"./pagination-fb35e2cf.js";const b=[[1,1,30,.01],[2,31,60,.25],[3,61,90,.5],[4,91,120,.75],[5,121,150,1],[6,151,180,1.25],[7,181,210,1.5],[8,211,240,1.75],[9,241,270,2],[10,271,300,2.25],[11,301,330,2.5],[12,331,365,4]],x=window.matchMedia("(min-width:768px) and (max-width:1279px)"),K=window.matchMedia("(min-width:768px)"),B=window.matchMedia("(max-width:767px)"),Q=document.querySelector(".inverion-formulario--simulador"),q=document.querySelector(".inverion-formulario--salida");document.querySelectorAll(".conceptos .swiper-slide").length;let k,f;const M=function(){if(x.matches===!1){K.matches===!1?(console.log("movil"),document.querySelector(".conceptos-container-swiper").classList.add("no-slide"),f!==void 0&&f.destroy(!0,!0)):(console.log("d"),document.querySelector(".swiper-conceptos .swiper-wrapper").removeAttribute("style"),document.querySelector(".conceptos-container-swiper").classList.add("no-slide")),f!==void 0&&f.destroy(!0,!0);return}else if(x.matches===!0)return console.log("tablet"),document.querySelector(".conceptos-container-swiper").classList.remove("no-slide"),W()},U=()=>{if(B.matches===!0)return O();if(B.matches===!1){k!==void 0&&k.destroy(!0,!0);return}},O=()=>{k=new A(".swiper-beneficios",{modules:[D],spaceBetween:16,slidesPerView:"auto",direction:"horizontal",pagination:{el:".swiper-beneficios-pagination"}})},W=function(){f=new A(".swiper-conceptos",{modules:[D],spaceBetween:12,slidesPerView:"auto",direction:"horizontal",centerInsufficientSlides:!0,pagination:{el:".swiper-pagination"},breakpoints:{768:{spaceBetween:24},1280:{allowTouchMove:!1}}})},X=()=>{const e=document.querySelectorAll(".conceptos .swiper-slide"),n=document.querySelectorAll(".conceptos .conceptos__image");document.querySelector(".swiper-conceptos").classList.add("conceptos"+e.length),e.forEach((t,r)=>{t.id="card"+r}),n.forEach((t,r)=>{t.id="imagen"+r})};B.addListener(U);x.addListener(M);U();M();X();const p=document.querySelector(".error-inversion"),L=document.querySelector(".error-tiempo"),m=document.querySelector("#btn-inversion button"),y=document.getElementById("tiempo");let Y=document.querySelectorAll(".custom-option"),C=0,v=document.getElementById("mi-inversion"),I=document.querySelector(".error-inversion .mensaje"),_=document.querySelector(".error-tiempo .mensaje"),u=0,N=0,$=0,F=0,R=0,V=0,z=0,H=0,Z=/^[0-9$,.]+$/;v.addEventListener("input",e=>{p.classList.add("d-none"),v.classList.remove("aprobado"),v.classList.remove("error"),e.target.value.length<1||isNaN(e.target.value.length)?(v.classList.add("error"),p.classList.remove("d-none"),I.innerText="Debes ingresar un monto para calcular",m.disabled=!0):Z.test(e.target.value)?(u=parseFloat(e.target.value.replace("$","").replace(",","")),u<=0?(v.classList.add("error"),p.classList.remove("d-none"),I.innerText="Debes ingresar un monto para calcular",m.disabled=!0):u<1e3?(v.classList.add("error"),p.classList.remove("d-none"),I.innerText="Monto mínimo a partir de $1,000",m.disabled=!0):(v.classList.remove("error"),v.classList.add("aprobado"),j("¿Cuánto quieres invertir?"),m.disabled=!1)):(v.classList.add("error"),p.classList.remove("d-none"),I.innerText="Solo se permiten números",m.disabled=!0);let t=e.target.value.replace(/[^0-9]/g,"");t=t.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),t="$"+t,e.target.value=t});Y.forEach(e=>{e.addEventListener("click",()=>{e.dataset.value!=""?(L.classList.add("d-none"),j("¿Durante cuánto tiempo?"),m.disabled=!1):(L.classList.remove("d-none"),_.innerText="Selecciona un plazo",m.disabled=!0)})});m.addEventListener("click",e=>{e.preventDefault();let n=document.querySelector(".custom-select-trigger-text").innerText;u=parseFloat(document.querySelector("#mi-inversion").value.replace("$","").replace(",","")),P(u,n),u<=0||isNaN(u)?(p.classList.remove("d-none"),I.innerText="Debes ingresar un monto para calcular",w("Debes ingresar un monto para calcular")):u<1e3?(v.classList.add("error"),p.classList.remove("d-none"),I.innerText="Monto mínimo a partir de $1,000",m.disabled=!0,w("Monto mínimo a partir de $1,000")):y.value==""||n=="Seleccionar"?(L.classList.remove("d-none"),_.innerText="Selecciona un plazo",m.disabled=!0,w("Selecciona un plazo")):(L.classList.add("d-none"),m.innerText=="Volver a calcular"&&C>=1&&ce(u,y.value),C==0&&P(u,y.value),ee(u,y.value))});function ee(e,n){C++,m.innerText="Volver a calcular",n=parseInt(n);const r=b.filter(S=>S[0]==n)[0];let s=r[2],o=parseFloat(r[3]/100),a=0,i=0,d=.05,c=189222,l=0,E=4,h=-.12,g=0;if(a=e*(o/360)*s,n==12){let S=te(),T=ie(S),J=re(b,T,e,c,d);g=oe(b,T,e,c,d)-J,l=(e-c)*(.005/365)*s}i=e+a-l,N=n,$=o,F=i,R=l,V=E,z=h,H=g,ne(i,n,g,o,d,E,h),le(e,n,i,i,g,a,o,E,h)}function ne(e,n,t,r,s,o,a){let i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});document.getElementById("entrada-plazo").innerText=n+(n==1?" mes":" meses"),document.getElementById("salida-montoFinal").innerText=i.format(e.toFixed(2)),document.getElementById("detalle-plazo").innerText=n+(n==1?" mes":" meses"),document.getElementById("detalle-montoFinal").innerText=i.format(e.toFixed(2)),document.getElementById("premio").innerText=i.format(t.toFixed(2)),document.getElementById("isr").innerText=i.format(s.toFixed(2)),document.getElementById("detalle-tasa").innerText=(r*100).toFixed(2)+" %",document.getElementById("gat-nominal").innerText=o.toFixed(2)+" %",document.getElementById("gat-real").innerText=a+" %",Q.classList.add("resultados"),document.querySelector(".inverion-formulario--entrada").classList.add("resultados","show"),document.querySelector(".inverion-formulario--salida").classList.add("resultados"),q.classList.remove("hide"),q.classList.add("show")}function te(){let e=new Date,n=[];for(let t=1;t<=12;t++)n.push(e.setMonth(e.getMonth()+1));return n}function ie(e=[]){let n=new Date,t=[],r=0;return e.forEach((s,o)=>{const a=new Date(e[o]);r=a-n;let i=r/(1e3*60*60*24);t.push(i),n=a}),t}function G(e,n,t,r,s){let o=parseFloat(n/100),a=parseFloat(s/100),i=0,d=0,c=0,l=0;return i=e*(o/360)*t,c=e+i,e>r&&(d=(e-r)*(a/365)*t),l=c-d,l}function re(e=[],n=[],t,r,s){let o=t,a=0;return e.forEach((i,d)=>{a=G(o,i[3],n[d],r,s),o=a}),o}function oe(e=[],n=[],t,r,s){let o=t,a=0,c=e.filter(l=>l[0]==12)[0][3];for(let l=0;l<12;l++)a=G(o,c,n[l],r,s),o=a;return o}dataLayer.push({page:"/inversiones/inversion-creciente",title:"Inversiones - Inversión creciente",event:"pvGeneral"});document.getElementById("btn-asesoria-inv").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Solicitar asesoría",nd3:"",nd4:"",event:"inversiones"})});document.getElementById("link-conoce-inv").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"¡Gana un premio!",nd3:"Conoce más",nd4:"",event:"inversiones"})});document.getElementById("link-gat-inv").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Descubre cuánto aumenta tu dinero con Inversión Creciente",nd3:"Para conocer la GAT: Consulta las tasas de Inversión Creciente",nd4:"",event:"inversiones"})});function P(e,n){let t=n==1?n+" mes":n+" meses";dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Descubre cuánto aumenta tu dinero con Inversión Creciente",nd3:"Calcular",nd4:"",montoInvertir:e,tiempo:t,event:"inversionesCreciente"})}document.getElementById("lnk-conc-reqInv").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"¿Qué necesitas?",nd3:"Conoce más",nd4:"",event:"inversiones"})});document.getElementById("lnk-sucursal-inv").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Te acompañamos en tu camino de inversión",nd3:"Acude a sucursal",nd4:"",event:"inversiones"})});document.getElementById("lnk-app-inv").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Te acompañamos en tu camino de inversión",nd3:"App BanCoppel",nd4:"",event:"inversiones"})});const ae=document.querySelectorAll("#faqs-inv-container custom-accordion .accordion-item h2");ae.forEach(e=>{e.addEventListener("click",function(){dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Preguntas frecuentes",nd3:e.innerText,nd4:"",event:"inversiones"})})});document.getElementById("link-ipab").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Sección inferior",nd3:"www.ipab.org.mx",nd4:"",event:"inversiones"})});const se=document.querySelector('modal-salida[id-modal="modal-salida-ipab"] .modal');se.addEventListener("shown.bs.modal",()=>{dataLayer.push({nd1:"Inversiones",nd2:"Modal: Estás a punto de salir del sitio de Inversiones BanCoppel - Llegada",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});const de=document.querySelector('modal-salida[id-modal="modal-salida-ipab"] .modal custom-boton');de.addEventListener("click",function(){dataLayer.push({nd1:"Inversiones",nd2:"Modal: Estás a punto de salir del sitio de Inversiones BanCoppel - Continuar",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});document.getElementById("lnk-siminver-asesoria").addEventListener("click",()=>{ue(u,N,F,F,H,R,$,V,z)});function w(e){dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Ingresa tus datos",nd3:e,nd4:"",event:"inversiones"})}function ce(e,n){let t=n===1?n+" mes":n+" meses";dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Descubre cuánto aumenta tu dinero con Inversión Creciente",nd3:"Volver a calcular",nd4:"",montoInvertir:e,tiempo:t,event:"inversionesCreciente"})}function le(e,n,t,r,s,o,a,i,d){let c=n===1?n+" mes":n+" meses";dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Resultado simulador",nd3:"Llegada",nd4:"",montoInvertir:e,tiempo:c,montoFinal:t.toFixed(2),montoSinPremio:r.toFixed(2),montoPremio:s.toFixed(2),montoISR:o.toFixed(2),tasaRendimiento:(a*100).toFixed(2),GATNominal:i,GATReal:d,event:"inversionesCrecienteSimulador"})}function ue(e,n,t,r,s,o,a,i,d){let c=n==1?n+" mes":n+" meses";dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Resultado simulador",nd3:"Solicitar asesoría",nd4:"",montoInvertir:e,tiempo:c,montoFinal:t.toFixed(2),montoSinPremio:r.toFixed(2),montoPremio:s.toFixed(2),montoISR:o.toFixed(2),tasaRendimiento:a*100,GATNominal:i<1?i*-1:i,GATReal:d<1?d*-1:d,event:"inversionesCrecienteSimulador"})}function j(e){dataLayer.push({nd1:"Inversiones - Inversión creciente",nd2:"Descubre cuánto aumenta tu dinero con Inversión Creciente",nd3:"Llenado input: "+e,nd4:"",event:"inversiones"})}document.getElementById("lnk-logo").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Header",nd2:"Logo",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});document.getElementById("nav-inicio").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Header",nd2:"Inicio",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});document.getElementById("nav-inversion").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Header",nd2:"Inversión Creciente",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});document.getElementById("nav-pagare").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Header",nd2:"Pagaré",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});const me=document.querySelectorAll("footer #acerca ul li a");me.forEach(e=>{e.addEventListener("click",function(){dataLayer.push({nd1:"Inversiones - Footer",nd2:"Acerca de BanCoppel - "+e.innerText,nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})})});document.getElementById("lnk-unidadespec").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Footer",nd2:"Unidad Especializada de Atención a Usuarios - Unidad Especializada de Atención a Usuarios",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});document.getElementById("lnk-condusef").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Footer",nd2:"Unidad Especializada de Atención a Usuarios - www.condusef.gob.mx",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});document.getElementById("lnk-correobanco").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Footer",nd2:"Unidad Especializada de Atención a Usuarios - correo:unebancoppel.com",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});document.getElementById("lnk-correoasesoria").addEventListener("click",()=>{dataLayer.push({nd1:"Inversiones - Footer",nd2:"Unidad Especializada de Atención a Usuarios - correo:asesoriacondusef.gob.mx",nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})});const ve=document.querySelectorAll(".footer--legales #links-legal a");ve.forEach(e=>{e.addEventListener("click",function(){dataLayer.push({nd1:"Inversiones - Footer",nd2:"Legales - "+e.innerText,nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})})});const pe=document.querySelectorAll(".footer--socials img");pe.forEach(e=>{e.addEventListener("click",function(){dataLayer.push({nd1:"Inversiones - Footer",nd2:"Contacto - "+e.getAttribute("title"),nd3:"Página: Inversión Creciente",nd4:"",event:"inversiones"})})});