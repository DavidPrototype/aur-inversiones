
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
let options=  document.querySelectorAll('.custom-option');
let noCalculos =0;

//inputs
let inputInversion = document.getElementById("mi-inversion");




let msgErrorSaldo = document.querySelector(".error-inversion .mensaje");
let msgErrorTiempo = document.querySelector(".error-tiempo .mensaje");

//Valores de calculos

let miInversion = 0;
let plazoInversion=0;
let plazoHastaInversion=0;
let tasaInversion=0;
let interesBrutoInversion=0;
let montoFinalInversion=0;
let isrInversion=0;
let isrCapitalInversion=0;
let monto_exentoInversion=0;
let gat_nominalInversion=0;
let gat_realInversion=0;
let premioInversion=0;

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
                    metrica2M('Monto Inversion');
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
                metrica2M('Tiempo');
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
        metrica2I('Debes ingresar un monto para calcular');
        
    }else if (miInversion < 1000) {
        inputInversion.classList.add('error');
        alertErrorInversion.classList.remove("d-none");
        msgErrorSaldo.innerText =
            "Monto mínimo a partir de $1,000";           
        btnCalcular.disabled = true;
        metrica2I('Monto mínimo a partir de $1,000');
        
    }else if(selectTiempo.value =='' || valorSelect =='Seleccionar') {
        alertErrorTiempo.classList.remove("d-none");
        msgErrorTiempo.innerText  = "Selecciona un plazo";
        btnCalcular.disabled = true; 
        metrica2I('Selecciona un plazo');
    }
    else{
        alertErrorTiempo.classList.add("d-none");
        //Metrica 2J
        if(btnCalcular.innerText == 'Volver a calcular' && noCalculos >=1 ){
            metrica2J(miInversion,selectTiempo.value);
        }

        if(noCalculos ==0){
            metrica2D(miInversion, selectTiempo.value);
        }
        // metrica2D(miInversion, plazo);
        calcular_inversion(miInversion,selectTiempo.value);
    }
   
   
});

function calcular_inversion(miInversion, plazo){
       
    // console.log(miInversion,plazo)
    // console.log(data);
    noCalculos++;
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
    //Asignacion de variables para seguimiento
     plazoInversion=plazo;
     plazoHastaInversion=plazoHasta;
     tasaInversion=tasa;
     interesBrutoInversion=interesBruto;
     montoFinalInversion=montoFinal;
     isrInversion=isr;
     isrCapitalInversion=isrCapital;
     monto_exentoInversion=monto_exento;
     gat_nominalInversion=gat_nominal;
     gat_realInversion=gat_real;
     premioInversion=premio;
    //Fin de asignacion
   
    mostrar_detalle(montoFinal,plazo,premio,tasa,isr,gat_nominal, gat_real);
    //Metrica 2K
    metrica2K(miInversion,plazo,montoFinal,montoFinal,premio,interesBruto,tasa,gat_nominal,gat_real)
    
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





//METRICAS
//Metrica 2
dataLayer.push({
    page:'/inversiones/inversion-creciente',
    title:'Inversiones - Inversión creciente' ,
    event:'pvGeneral'               
});

//Metrica 2A
document.getElementById('btn-asesoria-inv').addEventListener('click',()=>{

    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Solicitar asesoría',
        nd3:'',
        nd4:'',
        event:'inversiones'
    });
});

//Metrica 2B
document.getElementById('link-conoce-inv').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'¡Gana un premio!',
        nd3:'Conoce más',
        nd4:'',
        event:'inversiones'
        });
});

//Metrica 2C
document.getElementById('link-gat-inv').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Descubre cuánto aumenta tu dinero con Inversión Creciente',
        nd3:'Para conocer la GAT: Consulta las tasas de Inversión Creciente',
        nd4:'',
        event:'inversiones'
        });
});

//Metrica 2D
function metrica2D(montoInvertir,tiempo){
    let  tiempoMetrica = tiempo == 1 ? tiempo+ ' mes' : tiempo+ ' meses';
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Descubre cuánto aumenta tu dinero con Inversión Creciente',
        nd3:'Calcular',
        nd4:'',
        montoInvertir:montoInvertir , //Sin comas, sin signos,
        tiempo: tiempoMetrica,
        event:'inversionesCreciente'
        });
}

//Metrica 2E

document.getElementById('lnk-conc-reqInv').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'¿Qué necesitas?',
        nd3:'Conoce más',
        nd4:'',
        event:'inversiones'
        });
})

//Metrica 2F

document.getElementById('lnk-sucursal-inv').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Te acompañamos en tu camino de inversión',
        nd3:'Acude a sucursal',
        nd4:'',
        event:'inversiones'
    });
})
document.getElementById('lnk-app-inv').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Te acompañamos en tu camino de inversión',
        nd3:'App BanCoppel',
        nd4:'',
        event:'inversiones'
    });
})

//Metrica 2G
const accordionItems = document.querySelectorAll('#faqs-inv-container custom-accordion .accordion-item h2');
accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener('click',function(){
        
        dataLayer.push({
            nd1:'Inversiones - Inversión creciente',
            nd2:'Preguntas frecuentes',
            nd3:accordionItem.innerText,
            nd4:'',
            event:'inversiones'
        });
      
    })
});

//Metrica 2H
document.getElementById('img-ipab').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Sección inferior',
        nd3:'IPAB',
        nd4:'',
        event:'inversiones'
     });

});
document.getElementById('link-ipab').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Sección inferior',
        nd3:'www.ipab.org.mx',
        nd4:'',
        event:'inversiones'
     });
});
//Metrica 5 y 5a

const modalIpabInver = document.querySelector('modal-salida[id-modal="modal-salida-ipab"] .modal')
modalIpabInver.addEventListener('shown.bs.modal', () => {
    dataLayer.push({
        nd1:'Inversiones',
        nd2:'Modal: Estás a punto de salir del sitio de Inversiones BanCoppel - Llegada',
        nd3:'Página: Inversión Creciente',
        nd4:'',
        event:'inversiones'
    });
    
})
const modalIpabBtnInver = document.querySelector('modal-salida[id-modal="modal-salida-ipab"] .modal custom-boton')
modalIpabBtnInver.addEventListener('click',function(){
    dataLayer.push({
        nd1:'Inversiones',
        nd2:'Modal: Estás a punto de salir del sitio de Inversiones BanCoppel - Continuar',
        nd3:'Página: Inversión Creciente',  
        nd4:'',
        event:'inversiones'
        });
});

document.getElementById('lnk-siminver-asesoria').addEventListener('click',()=>{
    metrica2L(
        miInversion,
        plazoInversion,
        montoFinalInversion,
        montoFinalInversion,
        premioInversion,
        interesBrutoInversion,
        tasaInversion,
        gat_nominalInversion,
        gat_realInversion
)



});



//Metrica 2I

function metrica2I(textoAlerta){
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Ingresa tus datos',
        nd3:textoAlerta,
        nd4:'',
        event:'inversiones'
        });
}
//Metrica 2J
function metrica2J(montoInvertir, tiempo){
   let  tiempoMetrica = tiempo == 1 ? tiempo+ ' mes' : tiempo+ ' meses';
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Descubre cuánto aumenta tu dinero con Inversión Creciente',
        nd3:'Volver a calcular',
        nd4:'',
        montoInvertir: montoInvertir, //Sin comas, sin signos,
        tiempo: tiempoMetrica,
        event:'inversionesCreciente'
        });
}

function metrica2K(montoInvertir,tiempo,montoFinal,montoSinPremio,montoPremio,montoISR,tasaRendimiento,GATNominal,GATReal){
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Resultado simulador',
        nd3:'Llegada',
        nd4:'',
        montoInvertir:montoInvertir,
        tiempo:tiempo,
        montoFinal:montoFinal.toFixed(2),
        montoSinPremio:montoSinPremio.toFixed(2),
        montoPremio:montoPremio.toFixed(2),
        montoISR:montoISR.toFixed(2),
        tasaRendimiento:tasaRendimiento,
        GATNominal:GATNominal < 1 ? GATNominal * -1 : GATNominal,
        GATReal:GATReal < 1 ? GATReal * -1 : GATReal,
        event:'inversionesCrecienteSimulador'
        });
}
//metrica 2L 

function metrica2L(
    montoInvertir,
    tiempo,
    montoFinal,
    montoSinPremio,
    montoPremio,
    montoISR,
    tasaRendimiento,
    GATNominal,
    GATReal
)
{

    let  tiempoInversion = tiempo == 1 ? tiempo+ ' mes' : tiempo+ ' meses';
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Resultado simulador',
        nd3:'Solicitar asesoría',
        nd4:'',
        montoInvertir:montoInvertir,
        tiempo:tiempoInversion,
        montoFinal:montoFinal.toFixed(2),
        montoSinPremio:montoSinPremio.toFixed(2),
        montoPremio:montoPremio.toFixed(2),
        montoISR:montoISR.toFixed(2),
        tasaRendimiento:tasaRendimiento,
        GATNominal:GATNominal < 1 ? GATNominal * -1 : GATNominal ,
        GATReal:GATReal < 1 ? GATReal * -1 : GATReal,
        event:'inversionesCrecienteSimulador'
        });
}


function metrica2M(inputNombre){
    dataLayer.push({
        nd1:'Inversiones - Inversión creciente',
        nd2:'Descubre cuánto aumenta tu dinero con Inversión Creciente',
        nd3:'Llenado input: '+inputNombre,
        nd4:'',
        event:'inversiones',
        });
}

//Metricas Header
document.getElementById('lnk-logo').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Logo',
        nd3:'Página: Inversión Creciente',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-inicio').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Inicio',
        nd3:'Página: Inversión Creciente',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-inversion').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Inversión Creciente',
        nd3:'Página: Inversión Creciente',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-pagare').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Pagaré',
        nd3:'Página: Inversión Creciente',
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
            nd3:'Página: Inversión Creciente',
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
                    nd3:'Página: Inversión Creciente',
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
                    nd3:'Página: Inversión Creciente',
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
                    nd3:'Página: Inversión Creciente',
                    nd4:'',
                    event:'inversiones'
                });
            });
})