// import Swiper JS
import Swiper from 'swiper';
import {  Pagination } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const mediaquery = window.matchMedia("(max-width:1278px)");
const mediaqueryBeneficios = window.matchMedia("(max-width:767px)");
let swiperBeneficios, swiperPromos;

const initSliderPromos = () => {
    if (mediaquery.matches === true) {
        /* console.log("mo"); */
        return enableSwiperPromos();
    } else if (mediaquery.matches === false) {
        /* console.log("d"); */
        if (swiperPromos !== undefined ){           
            swiperPromos.destroy(true, true);
        } 
        return;
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

const enableSwiperPromos = () => {
  
    swiperPromos = new Swiper(".swiper", {
        modules: [Pagination],
        // spaceBetween: 24,
        slidesPerView: "auto",
        direction: "horizontal",
        pagination: {
            el: ".swiper-pagination",
        },
    });
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

mediaquery.addListener(initSliderPromos);
mediaqueryBeneficios.addListener(initSliderBeneficios);

initSliderPromos();
initSliderBeneficios();

//MEtricas
dataLayer.push({
    page:'/inversiones/home',
    title:'Inversiones - Home',
    event:'pvGeneral',               
 });
 //Metrica A
document.getElementById('btn-hero').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Solicitar asesoría',
        nd3:'',
        nd4:'',
        event:'inversiones'
        });
})
//Metrica B
document.getElementById('inv-card').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Inversión creciente',
        nd3:'¿Cuánto crece',
        nd4:'',
        event:'inversiones'
        });
})
document.getElementById('pagare-card').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Pagaré',
        nd3:'¿Cuánto gano?',
        nd4:'',
        event:'inversiones'
        });
})

//Metrica 1D
document.getElementById('bene-sucursal').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Nuestra prioridad es cuidar tu dinero y ayudarte a crecer',
        nd3:'Sucursal',
        nd4:'',
        event:'inversiones'
        });
})
document.getElementById('bene-app').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Nuestra prioridad es cuidar tu dinero y ayudarte a crecer',
        nd3:'App BanCoppel',
        nd4:'',
        event:'inversiones'
        });
})

//Metrica 1E
document.getElementById('link-card-inversion').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Prueba los simuladores de inversión',
        nd3:'Inversión Creciente',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('link-card-pagare').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Prueba los simuladores de inversión',
        nd3:'Pagaré',
        nd4:'',
        event:'inversiones'
        });
});

//Metrica 1F
document.getElementById('img-ipab').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Sección inferior',
        nd3:'IPAB',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('link-ipab').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Sección inferior',
        nd3:'www.ipab.org.mx',
        nd4:'',
        event:'inversiones'
        });
});
document.querySelector('#link-tyc a').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Home',
        nd2:'Sección inferior',
        nd3:'Tabla de tasas y comisiones',
        nd4:'',
        event:'inversiones'
        });
});

//Metrica 5 y 5a

const modalIpabIni = document.querySelector('modal-salida[id-modal="modal-salida-ipab"] .modal')
modalIpabIni.addEventListener('shown.bs.modal', () => {
    dataLayer.push({
        nd1:'Inversiones',
        nd2:'Modal: Estás a punto de salir del sitio de Inversiones BanCoppel - Llegada',
        nd3:'Página: Inicio',
        nd4:'',
        event:'inversiones'
    });
    
})
const modalIpabBtnIni = document.querySelector('modal-salida[id-modal="modal-salida-ipab"] .modal custom-boton')
modalIpabBtnIni.addEventListener('click',function(){
    dataLayer.push({
        nd1:'Inversiones',
        nd2:'Modal: Estás a punto de salir del sitio de Inversiones BanCoppel - Continuar',
        nd3:'Página: Inicio',  
        nd4:'',
        event:'inversiones'
        });
});

//Metricas Header
document.getElementById('lnk-logo').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Logo',
        nd3:'Página: Inicio',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-inicio').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Inicio',
        nd3:'Página: Inicio',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-inversion').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Inversión Creciente',
        nd3:'Página: Inicio',
        nd4:'',
        event:'inversiones'
        });
});
document.getElementById('nav-pagare').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Header',
        nd2:'Pagaré',
        nd3:'Página: Inicio',
        nd4:'',
        event:'inversiones'
        });
});


//Metricas para el footer

//Footer Metricas
const acercaFooterSec = document.querySelectorAll('footer #acerca ul li a');
acercaFooterSec.forEach(element => {
    element.addEventListener('click',function(){
        dataLayer.push({
            nd1:'Inversiones - Footer',
            nd2:'Acerca de BanCoppel - '+ element.innerText, 
            nd3:'Página: Inicio',
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
                    nd3:'Página: Inicio',
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
                    nd3:'Página: Inicio',
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
                    nd3:'Página: Inicio',
                    nd4:'',
                    event:'inversiones'
                });
            });
})
