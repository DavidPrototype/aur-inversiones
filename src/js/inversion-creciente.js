
// import Swiper JS
import Swiper from 'swiper';
import {  Pagination } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* VALIDACION SLIDES */

const breakpoint = window.matchMedia(
    "(min-width:768px) and (max-width:1279px)"
);
const mediaqueryMobile = window.matchMedia("(min-width:768px)");
const mediaqueryBeneficios = window.matchMedia("(max-width:767px)");

const slides = document.querySelectorAll(".conceptos .swiper-slide").length;
let swiperBeneficios, mySwiper;
console.log(slides)
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