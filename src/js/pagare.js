
// import Swiper JS
import Swiper from 'swiper';
import {  Pagination } from 'swiper/modules';
import Tooltip from 'bootstrap/js/src/tooltip'
import { tasas,gats,rangos } from './data/pagare'; 

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* VALIDACION SLIDES */

const breakpoint = window.matchMedia(
    "(min-width:768px) and (max-width:1279px)"
);
const mediaqueryMobile = window.matchMedia("(min-width:768px)");
const mediaqueryBeneficios = window.matchMedia("(max-width:767px)");

const simulador = document.querySelector('.inverion-formulario--simulador');
const salidaSimulador= document.querySelector('.inverion-formulario--salida');
const slides = document.querySelectorAll(".main-pagare .conceptos .swiper-slide").length;
let swiperBeneficiosPagare, mySwiperPagare;
// console.log(slides)
const breakpointChecker = function () {
    if (breakpoint.matches === false) {
        if (mediaqueryMobile.matches === false) {
            // console.log("movil");
            // if (slides > 3) {
            //     console.log("3+");
            //     return enableSwiper();
            // } else {
            //     console.log("0");
            //     document
            //         .querySelector(".conceptos-container-swiper")
            //         .classList.add("no-slide");
            // }
            document.querySelector(".conceptos-container-swiper").classList.add("no-slide");
            if (mySwiperPagare !== undefined ){           
                mySwiperPagare.destroy(true, true);
            } 
        } else {
            console.log("d");
            document
                .querySelector(".swiper-conceptos .swiper-wrapper")
                .removeAttribute("style");
            document
                .querySelector(".conceptos-container-swiper")
                .classList.add("no-slide");
        }
        if (mySwiperPagare !== undefined) mySwiperPagare.destroy(true, true);
        // or/and do nothing
        return;
    } else if (breakpoint.matches === true) {
        console.log("tablet");
        document
            .querySelector(".conceptos-container-swiper")
            .classList.remove("no-slide");
        return enableSwiper();
    }
};

const initSliderBeneficios = () => {
    if (mediaqueryBeneficios.matches === true) {
        /* console.log("mo"); */
        return enableSwiperBeneficios();
    } else if (mediaqueryBeneficios.matches === false) {
        /* console.log("d"); */
        if (swiperBeneficiosPagare !== undefined ){           
            swiperBeneficiosPagare.destroy(true, true);
        } 
        return;
    }
};


const enableSwiperBeneficios = () => {
  
    swiperBeneficiosPagare = new Swiper(".swiper-beneficios", {
        modules: [Pagination],
        spaceBetween: 16,
        slidesPerView: "auto",
        direction: "horizontal",
        pagination: {
            el: ".swiper-beneficios-pagination",
        },
    });
};
const enableSwiper = function () {
    mySwiperPagare = new Swiper(".swiper-conceptos", {
        modules: [Pagination],
        spaceBetween: 12,
        slidesPerView: "auto",
        direction: "horizontal",
        centerInsufficientSlides: true,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            768: {
               
                spaceBetween: 24,
            },
            1280: {
                allowTouchMove: false,
            },
        },
    });
};


const ordenSlides = () => {
    const slides = document.querySelectorAll(".main-pagare .conceptos .swiper-slide");
    const imagenes = document.querySelectorAll(".main-pagare .conceptos .conceptos__image");
    document
        .querySelector(".swiper-conceptos")
        .classList.add("conceptos" + slides.length);

    slides.forEach((element, index) => {
        element.id = "card" + index;
    });
    imagenes.forEach((element, index) => {
        element.id = "imagen" + index;
    });
};



mediaqueryBeneficios.addListener(initSliderBeneficios);
breakpoint.addListener(breakpointChecker);


initSliderBeneficios();
breakpointChecker();
ordenSlides();

const ayudaElem = document.getElementById('ayuda-tooltip')
const tooltip = new Tooltip(ayudaElem);

// console.log(tooltip)


/**
 * SIMULADOR PAGARE
 */

const alertErrorInversion = document.querySelector(".error-inversion");
const alertErrorTiempo = document.querySelector(".error-tiempo");
const btnCalcular = document.querySelector("#btn-pagare button");
const inputTiempo = document.getElementById('tiempo');


let msgErrorSaldo = document.querySelector(".error-inversion .mensaje");
let msgErrorTiempo = document.querySelector(".error-tiempo .mensaje");

let miInversion = 0;
let fechaInversion  = new Date(); 
let year= fechaInversion.getFullYear();
let month= String(fechaInversion.getMonth()+1).padStart(2,"0");
let day=fechaInversion.getDate(); 
let currentDate = `${day}/${month}/${year}`; 
// console.log("The current date is " + currentDate); 


//Variables de calculos
let noCalculos =0;
let montoInvertirPagare =0;
let tasaPagare=0;
let isrPagare=0;
let interesBrutoPagare=0;
let interesNetoPagare=0;
let subtotalPagare=0;
let montoFinalPagare=0;
let calculoISRPagare=0;
let gatNominalPagare=0;
let gatRealPagare=0;
let fecha_vencePagare='';
let plazoPagare='';

/// NUMEROS
let regExNumber = /^[0-9$,.]+$/;


document
    .querySelector("#mi-inversion-pagare")
    .addEventListener("input", (event) => {
        alertErrorInversion.classList.add("d-none");
        //miInversion = parseFloat(event.target.value);

        if (event.target.value.length < 1 || isNaN(event.target.value.length)) {
            alertErrorInversion.classList.remove("d-none");
            msgErrorSaldo.innerText = "Debes ingresar un monto para calcular";
          
            btnCalcular.disabled = true;
        } else {
            let validNumber = regExNumber.test(event.target.value);
            if (!validNumber) {
                alertErrorInversion.classList.remove("d-none");
                msgErrorSaldo.innerText = "Solo se permiten números";
              
                btnCalcular.disabled = true;
            } else {
                // console.log(event.target.value)
                // console.log(event.target.value.replace("$", "").replace(",", ""))
                
                miInversion = parseFloat(event.target.value.replace("$", "").replace(",", ""));               

                if (miInversion <= 0) {
                    alertErrorInversion.classList.remove("d-none");
                    msgErrorSaldo.innerText =
                        "Debes ingresar un monto para calcular";
                         
                    btnCalcular.disabled = true;
                } else if (miInversion < 1000) {
                    alertErrorInversion.classList.remove("d-none");
                    msgErrorSaldo.innerText =
                        "Monto mínimo a partir de $1,000";
                       
                    btnCalcular.disabled = true;
                } else {
                    btnCalcular.disabled = false;
                   metrica4o('Monto Inversion');
                }
            }
        }

        let value = event.target.value;
        let newValue = value.replace(/[^0-9]/g, ""); // Elimina los caracteres no numéricos
        newValue = newValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); // Agrega comas
        newValue = "$" + newValue; // Agrega el símbolo de dólar

        event.target.value = newValue;
    });

    btnCalcular.addEventListener('click',(e)=>{
        e.preventDefault();
    
        miInversion = parseFloat(
            document
                .querySelector("#mi-inversion-pagare")
                .value.replace("$", "")
                .replace(",", "")
        );
    
        if (miInversion <= 0 || isNaN(miInversion)) {
            alertErrorInversion.classList.remove("d-none");
            msgErrorSaldo.innerText = "Debes ingresar un monto para calcular";          
            btnCalcular.disabled = true;
            metrica4J("Debes ingresar un monto para calcular");
        }else if (miInversion < 1000) {
            alertErrorInversion.classList.remove("d-none");
            msgErrorSaldo.innerText ="Monto mínimo a partir de $1,000";               
            btnCalcular.disabled = true;
            metrica4J("Monto mínimo a partir de $1,000");
        }else{
           
            if(btnCalcular.innerText == 'Volver a calcular' && noCalculos >=1 ){
                 metrica4K(miInversion,inputTiempo.value);
            }
            if(noCalculos ==0){
                metrica4D(miInversion,inputTiempo.value)
            }
            calcular_inversion_pagare(miInversion,inputTiempo.value);
            metrica4L(
                miInversion,
                inputTiempo.value,
                montoFinalPagare,
                calculoISRPagare,
                tasaPagare,
                gatNominalPagare,
                gatRealPagare,
                fecha_vencePagare
            );

           
        }
       
       
    });

    function calcular_inversion_pagare(miInversion,plazo){
        noCalculos++;
        btnCalcular.innerText = 'Volver a calcular';
        plazo = parseInt(plazo);       
        
        const tablaInversion = tasas.filter((elem) => (elem[0] == plazo || elem[1] == plazo) )       
        const datosTabla = tablaInversion[0];

        const tablaGats =gats.filter((elem) => (elem[0] == plazo || elem[1] == plazo) ) 
        const datosGats = tablaGats[0];
        // console.log(datosGats)

        // let plazoHasta = datosTabla[1];
        // let plazoHasta = 0;
        let tasa=parseFloat(datosTabla[2]/100);       
        let isr = 0.15 / 100;
        let interesBruto =0;
        let interesNeto =0;
        let subtotal =0;
        let montoFinal =0;
        let calculoISR =0;
        let gatNominal = datosGats[2];
        let gatReal = datosGats[3];
        let fechaVencimiento = new Date();
        let fecha_vence ='';
        fechaVencimiento.setDate(fechaVencimiento.getDate() + plazo);
        // console.log(fechaVencimiento)
        let month= String(fechaVencimiento.getMonth()+1).padStart(2,"0");
        let day=fechaVencimiento.getDate(); 
        let year =fechaVencimiento.getFullYear();
        fecha_vence = `${day}/${month}/${year}`; 
        // console.log("Fecha Vencimiento " + fecha_vence); 

        interesBruto = miInversion * (tasa/360) * plazo;
        subtotal = interesBruto + miInversion;
        calculoISR = miInversion *( isr/365) * plazo;
        interesNeto = interesBruto - calculoISR;
        montoFinal = miInversion + interesNeto;

        //INI: Asignacion de variables para registrar actividad
            montoInvertirPagare=miInversion;
            plazoPagare=plazo;
            tasaPagare=tasa;
            isrPagare=isr;
            interesBrutoPagare=interesBruto;
            interesNetoPagare=interesNeto;
            subtotalPagare=subtotal;
            montoFinalPagare=montoFinal;
            calculoISRPagare=calculoISR;
            gatNominalPagare=gatNominal;
            gatRealPagare=gatReal;
            fecha_vencePagare=fecha_vence;
        //FIN:Asignacion de variables para registrar actividad

        mostrar_detalle_pagare(montoFinal,miInversion,plazo,tasa,calculoISR,gatNominal, gatReal,fecha_vence);
        
    }

    function mostrar_detalle_pagare(montoFinal,miInversion,plazo,tasa,calculoISR,gat_nominal, gat_real,fechaVencimiento){
        //Colocar datos de entrada en la vista
        let USDollar = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        let rango_inicial =1;
        let rango_final=0;
        if(plazo == 28){
            rango_final =plazo;
        }else{
            rango_inicial = 28;
            rango_final = plazo;
        }
            document.getElementById('entrada-plazo').innerText = plazo + ' dias';
            document.getElementById('salida-montoFinal').innerText = USDollar.format(montoFinal.toFixed(2));
            document.getElementById('mi-inversion').innerText = USDollar.format(miInversion.toFixed(2));
            document.querySelector('.monto-final .cantidad').innerText = USDollar.format(montoFinal.toFixed(2));
            
            document.querySelector('.rango-inicial').innerText = rango_inicial + (rango_inicial == 1 ? ' dia': ' dias');
            document.querySelector('.rango-final').innerText = rango_final +' dias';



            document.getElementById('detalle-plazo').innerText = plazo + ' dias';
            document.getElementById('detalle-montoFinal').innerText = USDollar.format(montoFinal.toFixed(2));
            
            
            document.getElementById('isr').innerText=USDollar.format(calculoISR.toFixed(2));
            document.getElementById('detalle-tasa').innerText= (tasa*100).toFixed(2) +' %';
            document.getElementById('gat-nominal').innerText= gat_nominal +' %';
            document.getElementById('gat-real').innerText= gat_real +' %';

            document.getElementById('fecha-vence').innerText = fechaVencimiento;
            
            simulador.classList.add('resultados');
            document.querySelector('.inverion-formulario--entrada').classList.add('resultados','show')
            document.querySelector('.inverion-formulario--salida').classList.add('resultados')
            // salidaSimulador.classList.remove('d-none');
            salidaSimulador.classList.remove('hide');
            salidaSimulador.classList.add('show');

            //Metrica
            metrica4N(

                miInversion,
                plazo,
                montoFinal.toFixed(2),
                calculoISR.toFixed(2),
                tasa,
                gat_nominal,
                gat_real,
                fechaVencimiento
            )
    }
        
//Metricas 
dataLayer.push({
    page:'/inversiones/pagare',
    title:'Inversiones - Pagaré' ,
    event:'pvGeneral'               
 });

 document.getElementById('btn-asesoria-pag').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Solicitar asesoría',
        nd3:'',
        nd4:'',
        event:'inversiones'
        });
 });

 document.getElementById('lnk-conoce-pag').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Elige un plazo que se ajuste a tus metas',
        nd3:'Conoce más',
        nd4:'',
        event:'inversiones'
        });
 })

 document.getElementById('lnk-gat-pagare').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Descubre cuánto puedes ganar con Pagaré',
        nd3:'Para conocer la GAT: Consulta las tasas de Pagaré',
        nd4:'',
        event:'inversiones'
        });
 })
//Metrica 4F
document.getElementById('lnk-reqpag-sucursal').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Te acompañamos en tu camino de inversión',
        nd3:'Acude a sucursal',
        nd4:'',
        event:'inversiones'
        });
 })
 document.getElementById('lnk-reqpag-app').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Te acompañamos en tu camino de inversión',
        nd3:'App BanCoppel',
        nd4:'',
        event:'inversiones'
        });
 })

 //Metrica 4G

const accordionItemsPag = document.querySelectorAll('#faqs-pagare-container custom-accordion .accordion-item h2');
accordionItemsPag.forEach(accordionItem => {
    accordionItem.addEventListener('click',function(){
        
        dataLayer.push({
            nd1:'Inversiones - Pagaré',
            nd2:'Preguntas frecuentes',
            nd3:accordionItem.innerText,
            nd4:'',
            event:'inversiones'
            });
      
    })
});
//Metrica 4h ,4I
document.getElementById('img-ipab').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Sección inferior',
        nd3:'IPAB',
        nd4:'',
        event:'inversiones'
        });

});
document.getElementById('link-ipab').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Sección inferior',
        nd3:'www.ipab.org.mx',
        nd4:'',
        event:'inversiones'
        });
});

 //Metrica 4E

 document.getElementById('lnk-con-req-pagare').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'¿Qué necesitas?',
        nd3:'Conoce más',
        nd4:'',
        event:'inversiones'
        });
 })

 document.getElementById('lnk-simupag-ases').addEventListener('click',()=>{
     metrica4M(
        montoInvertirPagare,
        plazoPagare,
        montoFinalPagare,
        calculoISRPagare,
        tasaPagare,
        gatNominalPagare,
        gatRealPagare,
        fecha_vencePagare
    );


 })

 //Metrica 5 y 5a

                const modalIpab = document.querySelector('modal-salida[id-modal="modal-salida-ipab"] .modal')
                modalIpab.addEventListener('shown.bs.modal', () => {
                    dataLayer.push({
                        nd1:'Inversiones',
                        nd2:'Modal: Estás a punto de salir del sitio de Inversiones BanCoppel - Llegada',
                        nd3:'Página: Pagaré',
                        nd4:'',
                        event:'inversiones'
                    });
                    
                })
                const modalIpabBtn = document.querySelector('modal-salida[id-modal="modal-salida-ipab"] .modal custom-boton')
                modalIpabBtn.addEventListener('click',function(){
                    dataLayer.push({
                        nd1:'Inversiones',
                        nd2:'Modal: Estás a punto de salir del sitio de Inversiones BanCoppel - Continuar',
                        nd3:'Página: Pagaré',  
                        nd4:'',
                        event:'inversiones'
                        });
                });


 //metrica 4D
 function metrica4D(montoInvertirPagare,tiempoPagare){
    let  tiempoPag = tiempoPagare == 1 ? tiempoPagare+ ' dia' : tiempoPagare+ ' dias';
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Descubre cuánto puedes ganar con Pagaré',
        nd3:'Calcular',
        nd4:'',
        montoInvertirPagare: montoInvertirPagare, //Sin comas, sin signos
        tiempoPagare: tiempoPag,
        event:'inversionesPagare'
        });
 }

 //Metrica 4K

 function metrica4K(montoInvertirPagare,tiempoPagare){
    let  tiempoPaga = tiempoPagare == 1 ? tiempoPagare+ ' dia' : tiempoPagare+ ' dias';
    dataLayer.push({
            nd1:'Inversiones - Pagaré',
            nd2:'Descubre cuánto puedes ganar con Pagaré',
            nd3:'Volver a calcular',
            nd4:'',
            montoInvertirPagare: montoInvertirPagare, //Sin comas, sin signos
            tiempoPagare: tiempoPaga,
            event:'inversionesPagare'
    });
 }

//Metrica 4J
function metrica4J(textoAlerta){
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Descubre cuánto puedes ganar con Pagaré',
        nd3:'Alerta input: '+ textoAlerta,
        nd4:'',
        event:'inversiones'
        });
}

//Metrica 4L

function metrica4L(
    montoInvertirPagare,
    tiempoPagare,
    montoFinalPagare,
    montoISRPagare,
    tasaRendimientoPagare,
    GATNominalPagare,
    GATRealPagare,
    fechaVencimiento
)
{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Resultado simulador',
        nd3:'Llegada',
        nd4:'',
        montoInvertirPagare:montoInvertirPagare,
        tiempoPagare:tiempoPagare +' dias',
        montoFinalPagare:montoFinalPagare.toFixed(2),
        montoISRPagare:montoISRPagare.toFixed(2),
        tasaRendimientoPagare:tasaRendimientoPagare.toFixed(2),
        GATNominalPagare:GATNominalPagare  < 1 ? GATNominalPagare * -1 : GATNominalPagare ,
        GATRealPagare:GATRealPagare < 1 ? GATRealPagare * -1 : GATRealPagare ,
        fechaVencimiento:fechaVencimiento,
        event:'inversionesPagareSimulador'
        });
}

//Metrica 4M

function metrica4M(
    montoInvertirPagare,
    tiempoPagare,
    montoFinalPagare,
    montoISRPagare,
    tasaRendimientoPagare,
    GATNominalPagare,
    GATRealPagare,
    fechaVencimiento
)

{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Resultado simulador',
        nd3:'Solicitar asesoría',
        nd4:'',
        montoInvertirPagare:montoInvertirPagare,
        tiempoPagare:tiempoPagare +' dias',
        montoFinalPagare:montoFinalPagare.toFixed(2),
        montoISRPagare:montoISRPagare.toFixed(2),
        tasaRendimientoPagare:tasaRendimientoPagare.toFixed(2),
        GATNominalPagare:GATNominalPagare < 1 ?  GATNominalPagare * -1 : GATNominalPagare,
        GATRealPagare:GATRealPagare < 1 ? GATRealPagare * -1 : GATRealPagare,
        fechaVencimiento:fechaVencimiento,
        event:'inversionesPagareSimulador'
        });
}

//Metrica 4N

function metrica4N(

    montoInvertirPagare,
    tiempoPagare,
    montoFinalPagare,
    montoISRPagare,
    tasaRendimientoPagare,
    GATNominalPagare,
    GATRealPagare,
    fechaVencimiento
)
{
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Resultado simulador',
        nd3:'Información fecha de vencimiento',
        nd4:'',
        montoInvertirPagare:montoInvertirPagare,
        tiempoPagare:tiempoPagare,
        montoFinalPagare:montoFinalPagare,
        montoISRPagare:montoISRPagare,
        tasaRendimientoPagare:tasaRendimientoPagare,
        GATNominalPagare:GATNominalPagare < 1 ? GATNominalPagare * -1 : GATNominalPagare,
        GATRealPagare:GATRealPagare < 1 ? GATRealPagare * -1 : GATRealPagare,
        fechaVencimiento:fechaVencimiento,
        event:'inversionesPagareSimulador'
        });
}

//Metrica 4 o
function metrica4o(nombreInput){
    dataLayer.push({
        nd1:'Inversiones - Pagaré',
        nd2:'Ingresa los datos',
        nd3:'Input: '+ nombreInput,
        nd4:'',
        event:'inversiones'
        });
}

//Metricas Header
document.getElementById('lnk-logo').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Logo',
        nd3:'Página: Pagaré',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-inicio').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Inicio',
        nd3:'Página: Pagaré',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-inversion').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Inversión Creciente',
        nd3:'Página: Pagaré',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-pagare').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Pagaré',
        nd3:'Página: Pagaré',
        nd4:'',
        event:'inversiones'
        });
});

//Footer Metricas
const acercaFooterSec = document.querySelectorAll('footer #acerca ul li a');
acercaFooterSec.forEach(element => {
    element.addEventListener('click',function(){
        dataLayer.push({
            nd1:'Inversiones - Footer',
            nd2:'Acerca de BanCoppel - '+ element.innerText, 
            nd3:'Página: Pagaré',
            nd4:'',
            event:'inversiones'
            });
     
    });    
});

const unidadLinkFooter = document.querySelectorAll('footer #unidad a');
        unidadLinkFooter.forEach(unidad => {
            unidad.addEventListener('click',function(){
                
                dataLayer.push({
                    nd1:'Inversiones - Footer',
                    nd2:'Unidad Especializada Bancoppel Condusef - '+ unidad.innerText, 
                    nd3:'Página: Pagaré',
                    nd4:'',
                    event:'inversiones'
                });
            });
});

const legalesFooter = document.querySelectorAll('.footer--legales #links-legal a');
        legalesFooter.forEach(legal => {
            legal.addEventListener('click',function(){
                
                dataLayer.push({
                    nd1:'Inversiones - Footer',
                    nd2:'Legales - '+ legal.innerText, 
                    nd3:'Página: Pagaré',
                    nd4:'',
                    event:'inversiones'
                });
            });
});

const socialesFooter = document.querySelectorAll('.footer--socials img')
    socialesFooter.forEach(social => {
            social.addEventListener('click',function(){
                dataLayer.push({
                    nd1:'Inversiones - Footer',
                    nd2:'Contacto - '+ social.getAttribute('title'), 
                    nd3:'Página: Pagaré',
                    nd4:'',
                    event:'inversiones'
                });
            });
})