
// import Swiper JS
import Swiper from 'swiper';
import {  Pagination } from 'swiper/modules';
import data from '../data/inversiones';

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


const slides = document.querySelectorAll(".conceptos .swiper-slide").length;
let swiperBeneficios, mySwiper;
// console.log(slides)
const breakpointChecker = function () {
    if (breakpoint.matches === false) {
       
        if (mediaqueryMobile.matches === false) {
            console.log("movil");
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
            if (mySwiper !== undefined ){           
                mySwiper.destroy(true, true);
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
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
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
        if (swiperBeneficios !== undefined ){           
            swiperBeneficios.destroy(true, true);
        } 
        return;
    }
};


const enableSwiperBeneficios = () => {
  
    swiperBeneficios = new Swiper(".swiper-beneficios", {
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
    mySwiper = new Swiper(".swiper-conceptos", {
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
    const slides = document.querySelectorAll(".conceptos .swiper-slide");
    const imagenes = document.querySelectorAll(".conceptos .conceptos__image");
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



/**
 * SIMULADOR
 */
// console.log(data)

const alertErrorInversion = document.querySelector(".error-inversion");
const alertErrorTiempo = document.querySelector(".error-tiempo");
const btnCalcular = document.querySelector("#btn-inversion button");
const selectTiempo = document.getElementById('tiempo');





let msgErrorSaldo = document.querySelector(".error-inversion .mensaje");
let msgErrorTiempo = document.querySelector(".error-tiempo .mensaje");

let miInversion = 0;

/// NUMEROS
let regExNumber = /^[0-9$,.]+$/;

document
    .querySelector("#mi-inversion")
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
            .querySelector("#mi-inversion")
            .value.replace("$", "")
            .replace(",", "")
    );

    if (miInversion <= 0 || isNaN(miInversion)) {
        alertErrorInversion.classList.remove("d-none");
        msgErrorSaldo.innerText = "Debes ingresar un monto para calcular";
        
    }else if(selectTiempo.value =='') {
        alertErrorTiempo.classList.remove("d-none");
        msgErrorTiempo.innerText  = "Selecciona un plazo";
    }else{
        alertErrorTiempo.classList.add("d-none");
        calcular_inversion(miInversion,selectTiempo.value);
    }
   
   
});

function calcular_inversion(miInversion, plazo){
       
    // console.log(miInversion,plazo)
    // console.log(data);
    plazo = parseInt(plazo);
    const tablaInversion = data.filter((elem) => elem[0] == plazo )
    // console.log(tablaInversion)
    const datosTabla = tablaInversion[0]
    
    let plazoHasta = datosTabla[2];
    let tasa=parseFloat(datosTabla[3]/100)
    let interesBruto =0;
    let montoFinal =0;
    let isr = 0;
    let gat_nominal = 4.00;
    let gat_real = -0.12;
    let premio = 0;

    interesBruto = miInversion * (tasa/360) * plazoHasta;
    montoFinal = miInversion +interesBruto - isr;
    // console.log(montoFinal.toFixed(2));

    mostrar_detalle(montoFinal,plazo,premio,tasa,isr,gat_nominal, gat_real);
    
}

function mostrar_detalle(montoFinal,plazo,premio,tasa,isr,gat_nominal, gat_real){
//Colocar datos de entrada en la vista
let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});
    document.getElementById('entrada-plazo').innerText = plazo + (plazo == 1 ? ' mes': ' meses');
    document.getElementById('salida-montoFinal').innerText = USDollar.format(montoFinal.toFixed(2));
    document.getElementById('detalle-plazo').innerText = plazo + (plazo == 1 ? ' mes': ' meses');
    document.getElementById('detalle-montoFinal').innerText = USDollar.format(montoFinal.toFixed(2));
    document.getElementById('premio').innerText=USDollar.format(premio.toFixed(2));
    document.getElementById('isr').innerText=USDollar.format(isr.toFixed(2));
    document.getElementById('detalle-tasa').innerText= (tasa*100).toFixed(2) +' %';
    document.getElementById('gat-nominal').innerText= gat_nominal.toFixed(2) +' %';
    document.getElementById('gat-real').innerText= gat_real +' %';
    
    simulador.classList.add('resultados');
    document.querySelector('.inverion-formulario--entrada').classList.add('resultados')
    document.querySelector('.inverion-formulario--salida').classList.add('resultados')
    salidaSimulador.classList.remove('d-none');
}
