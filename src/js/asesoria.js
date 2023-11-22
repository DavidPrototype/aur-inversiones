const alertErrorNombre = document.querySelector(".error-nombre");
const alertErrorCorreo = document.querySelector(".error-correo");
const btnEnvio= document.querySelector("#btn-asesoria button");


let msgErrorNombre = document.querySelector(".error-nombre .mensaje");
let msgErrorEmail = document.querySelector(".error-correo .mensaje");

let nombre_usuario='';
let correo_usuario='';

let regExEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regExTexto = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
let validNombre,validEmail;
document
    .querySelector("#nombre")
    .addEventListener("input", (event) => {
       let nombre= event.target.value.trim();
        if (nombre.length < 1 ) {
            alertErrorNombre.classList.remove("d-none");
            msgErrorNombre.innerText = "Debes ingresar un nombre";
            btnEnvio.disabled = true;
          
        }else{            
           
            validNombre = regExTexto.test(nombre);          

            if (!validNombre ) {
                alertErrorNombre.classList.remove("d-none");                
                msgErrorNombre.innerText = "Ingresa un nombre válido";
               
                btnEnvio.disabled = true;
            }else{  
                    nombre_usuario =nombre;
                    metrica3C('Nombre completo');
                    alertErrorNombre.classList.add("d-none");
                    if( validNombre && validEmail){
                        btnEnvio.disabled = false;
                    }
                
            }
        }
});

document
    .querySelector("#email-input")
    .addEventListener("input", (event) => {
        console.log(event.target.length)
        console.log(event.target.value)
        if (event.target.value.length < 1 || isNaN(event.target.value.length) ) {
            alertErrorCorreo.classList.remove("d-none");
            msgErrorEmail.innerText = "Debes ingresar un correo electrónico";
            btnEnvio.disabled = true;
          
        }else{
           validEmail = regExEmail.test(event.target.value); 
            if (!validEmail ) {
                alertErrorCorreo.classList.remove("d-none");                
                msgErrorEmail.innerText = "Ingresa un correo electrónico válido";
               
                btnEnvio.disabled = true;
            }else{
                    correo_usuario =event.target.value;
                    metrica3C('Correo electrónico');
                    alertErrorCorreo.classList.add("d-none");
                    if( validNombre && validEmail){
                        btnEnvio.disabled = false;
                    }
                    
                
            } 
        }
    })

    btnEnvio.addEventListener('click',(e)=>{
        e.preventDefault();
    
       if(nombre_usuario =='' ){
            alertErrorNombre.classList.remove("d-none");
            msgErrorNombre.innerText = "Debes ingresar un nombre";
            btnEnvio.disabled = true;
       }else if(correo_usuario =='') {
        alertErrorCorreo.classList.remove("d-none");
            msgErrorEmail.innerText = "Debes ingresar un correo electrónico";
            btnEnvio.disabled = true;
       }else{
        metrica3B();
        window.location.href='envio.html';
       }
       
});

//Metricas
dataLayer.push({
    page:'/inversiones/listo-para-invertir',
    title:'Inversiones - Listo para invertir', 
    event:'pvGeneral'               
 });

 //Metrica 3A

 document.getElementById('lnk-asesor-aviso').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Listo para invertir',
        nd2:'Aviso de Privacidad',
        nd3:'',
        nd4:'',
        event:'inversiones'
        });
 })
 document.getElementById('lnk-asesor-tyc').addEventListener('click',()=>{
    dataLayer.push({
        nd1:'Inversiones - Listo para invertir',
        nd2:'Términos y Condiciones',
        nd3:'',
        nd4:'',
        event:'inversiones'
     });
 })

 function metrica3B(){
    dataLayer.push({
        nd1:'Inversiones - Listo para invertir',
        nd2:'Enviar',
        nd3:'',
        nd4:'',
        event:'inversiones'
        });
 }

 function metrica3C(textoInput){
    dataLayer.push({
        nd1:'Inversiones - Listo para invertir',
        nd2:'Input: '+ textoInput,
        nd3:'',
        nd4:'',
        event:'inversiones'
        });
 }