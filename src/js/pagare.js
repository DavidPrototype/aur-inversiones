
// import Swiper JS
import Swiper from 'swiper';
import {  Pagination } from 'swiper/modules';
import Tooltip from 'bootstrap/js/src/tooltip'
import { tasas,gats,rangos } from '../data/pagare'; 

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

$(".js-range-slider").ionRangeSlider({
    skin: "round",
    min: 28,
    max: 360,
    values:rangos,
    postfix: " dias",  
    grid: true,
    hide_min_max: true,
});

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
            alertErrorSaldo.classList.remove("d-none");
            msgErrorSaldo.innerText = "Debes ingresar un monto para calcular";
            
        }else{
           
            calcular_inversion_pagare(miInversion,inputTiempo.value);
        }
       
       
    });

    function calcular_inversion_pagare(miInversion,plazo){
       
        plazo = parseInt(plazo);       
        
        const tablaInversion = tasas.filter((elem) => elem[0] == plazo )       
        const datosTabla = tablaInversion[0];

        const tablaGats =gats.filter((elem) => elem[0] == plazo ) 
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

        // console.log(miInversion,interesBruto, gatNominal, gatReal);

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
            document.querySelector('.inverion-formulario--entrada').classList.add('resultados')
            document.querySelector('.inverion-formulario--salida').classList.add('resultados')
            salidaSimulador.classList.remove('d-none');
    }
        