
// import Swiper JS
import Swiper from 'swiper';
import {  Pagination } from 'swiper/modules';
import data from './data/inversiones';

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
let options=  document.querySelectorAll('.custom-option')

//inputs
let inputInversion = document.getElementById("mi-inversion");




let msgErrorSaldo = document.querySelector(".error-inversion .mensaje");
let msgErrorTiempo = document.querySelector(".error-tiempo .mensaje");

let miInversion = 0;

/// NUMEROS
let regExNumber = /^[0-9$,.]+$/;

inputInversion.addEventListener("input", (event) => {
        alertErrorInversion.classList.add("d-none");
        inputInversion.classList.remove('aprobado');
        inputInversion.classList.remove('error');
        //miInversion = parseFloat(event.target);
       
         
        if (event.target.value.length < 1 || isNaN(event.target.value.length)) {
            inputInversion.classList.add('error');
            alertErrorInversion.classList.remove("d-none");
            msgErrorSaldo.innerText = "Debes ingresar un monto para calcular";
          
            btnCalcular.disabled = true;
        } else {
            let validNumber = regExNumber.test(event.target.value);
            if (!validNumber) {
                inputInversion.classList.add('error');
                alertErrorInversion.classList.remove("d-none");
                msgErrorSaldo.innerText = "Solo se permiten números";
              
                btnCalcular.disabled = true;
            } else {
                // console.log(event.target.value)
                // console.log(event.target.value.replace("$", "").replace(",", ""))
                
                miInversion = parseFloat(event.target.value.replace("$", "").replace(",", ""));               

                if (miInversion <= 0) {
                    inputInversion.classList.add('error');
                    alertErrorInversion.classList.remove("d-none");
                    msgErrorSaldo.innerText =
                        "Debes ingresar un monto para calcular";
                         
                    btnCalcular.disabled = true;
                } else if (miInversion < 1000) {
                    inputInversion.classList.add('error');
                    alertErrorInversion.classList.remove("d-none");
                    msgErrorSaldo.innerText =
                        "Monto mínimo a partir de $1,000";
                       
                    btnCalcular.disabled = true;
                } else {

                    inputInversion.classList.remove('error');
                    inputInversion.classList.add('aprobado');
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


    options.forEach( (option)=>{
        option.addEventListener('click',()=>{
            // console.log(option.dataset.value)
            if(option.dataset.value !=''){
                alertErrorTiempo.classList.add("d-none");
                btnCalcular.disabled = false;               
            }else{
                alertErrorTiempo.classList.remove("d-none");
                msgErrorTiempo.innerText  = "Selecciona un plazo";
                btnCalcular.disabled = true; 
            }
        })
    })
  
   



btnCalcular.addEventListener('click',(e)=>{
    e.preventDefault();
    let valorSelect = document.querySelector('.custom-select-trigger-text').innerText;
    // console.log(valorSelect);
    miInversion = parseFloat(
        document
            .querySelector("#mi-inversion")
            .value.replace("$", "")
            .replace(",", "")
    );

    if (miInversion <= 0 || isNaN(miInversion)) {
        alertErrorInversion.classList.remove("d-none");
        msgErrorSaldo.innerText = "Debes ingresar un monto para calcular";
        
    }else if (miInversion < 1000) {
        inputInversion.classList.add('error');
        alertErrorInversion.classList.remove("d-none");
        msgErrorSaldo.innerText =
            "Monto mínimo a partir de $1,000";           
        btnCalcular.disabled = true;
        
    }else if(selectTiempo.value =='' || valorSelect =='Seleccionar') {
        alertErrorTiempo.classList.remove("d-none");
        msgErrorTiempo.innerText  = "Selecciona un plazo";
        btnCalcular.disabled = true; 
    }
    else{
        alertErrorTiempo.classList.add("d-none");
        calcular_inversion(miInversion,selectTiempo.value);
    }
   
   
});

function calcular_inversion(miInversion, plazo){
       
    // console.log(miInversion,plazo)
    // console.log(data);
    btnCalcular.innerText = 'Volver a calcular';
    plazo = parseInt(plazo);
    const tablaInversion = data.filter((elem) => elem[0] == plazo )
    // console.log(tablaInversion)
    const datosTabla = tablaInversion[0]
    
    let plazoHasta = datosTabla[2];
    let tasa=parseFloat(datosTabla[3]/100)
    let interesBruto =0;
    let montoFinal =0;
    let isr = 0;
    let isrCapital=0.15;
    let monto_exento=189222;
    let gat_nominal = 4.00;
    let gat_real = -0.12;
    let premio = 0;

    interesBruto = miInversion * (tasa/360) * plazoHasta;
    // console.log(interesBruto)
    montoFinal = (miInversion +interesBruto) - isr;
    // console.log(montoFinal.toFixed(2));
    if(plazo == 12){
        let fechas = fechas_periodo(); //genera las fechas de los periodos a partir de dia de hoy
        let diffDias = periodo_dias(fechas); // diferencia de dias
        
        let montoPeriodos = monto_final_periodos(data,diffDias,miInversion,monto_exento,isrCapital);
        let montoPremio = monto_final_premio(data,diffDias,miInversion,monto_exento,isrCapital);

        premio =montoPremio - montoPeriodos;
    }

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
    document.querySelector('.inverion-formulario--entrada').classList.add('resultados','show')
    document.querySelector('.inverion-formulario--salida').classList.add('resultados')
    // salidaSimulador.classList.remove('d-none');
    salidaSimulador.classList.remove('hide');
    salidaSimulador.classList.add('show');
}

function fechas_periodo(){
    let fechaActual = new Date();
    let fechas= [];   
   
    for (let periodo = 1; periodo <= 12; periodo++) {        
        fechas.push(fechaActual.setMonth(fechaActual.getMonth() + 1 ));  
    }
   
    return fechas;    
}

function periodo_dias(fechas=[]){
  let fechaAnterior = new Date();
  let diffDias=[];
  let diff=0;
  fechas.forEach((fecha,index)=>{
    const fechaSig = new Date(fechas[index]);    
    diff = fechaSig - fechaAnterior;
    let days = diff /(1000 * 60 * 60 * 24);
    diffDias.push(days);
    
    fechaAnterior =fechaSig;

  })  
  
//   console.log(diffDias);
  return diffDias;
}

function monto_periodo(monto_inicial,tasa,dias,monto_exento,isr){
    // console.log('Canculo monto periodo')
    //  console.log(monto_inicial,tasa,dias,monto_exento,isr)

    let tasaPeriodo = parseFloat(tasa/100);
    let interesPeriodo =parseFloat(isr/100);
    let interesBruto=0;
    let calculoISR=0;
    let montoBrutoFinal =0;
    let montoNeto = 0;
    
    
    interesBruto = monto_inicial * (tasaPeriodo/360) * dias;
    montoBrutoFinal = monto_inicial + interesBruto;
    
    if(monto_inicial > monto_exento){
        calculoISR = (monto_inicial - monto_exento) * ( interesPeriodo/365) * dias;
    }

    montoNeto = montoBrutoFinal - calculoISR;
    
    return montoNeto;
}

function monto_final_periodos(tablaInveriones=[],diffDias=[],monto_inicial,monto_exento,isr){
    // console.log(tablaInveriones=[],diffDias=[],monto_inicial)
     let montoCalculo = monto_inicial;
     let nuevoMonto=0;
   
    //  console.log(montoCalculo)
     tablaInveriones.forEach( (registro,index) =>{
    
      nuevoMonto = monto_periodo(montoCalculo,registro[3],diffDias[index],monto_exento,isr)     
      montoCalculo = nuevoMonto;       
     })
    
    // console.log(montoCalculo)
    return montoCalculo;
}
function monto_final_premio(tablaInveriones=[],diffDias=[],monto_inicial,monto_exento,isr){
    // console.log(tablaInveriones=[],diffDias=[],monto_inicial)
     let montoCalculoP = monto_inicial;
     let nuevoMontoP=0;
     const tablaInversionInfo = tablaInveriones.filter((registro) => registro[0] == 12 );
     const datosTabla = tablaInversionInfo[0];
     let tasa=datosTabla[3];
    
    for (let index = 0; index < 12; index++) {
        
        nuevoMontoP = monto_periodo(montoCalculoP,tasa,diffDias[index],monto_exento,isr)     
        montoCalculoP = nuevoMontoP;  
        
    }
     
    
    // console.log(montoCalculoP)
    return montoCalculoP;
}





// monto_periodo(35959.10,7.46,31,189222,0.15)
