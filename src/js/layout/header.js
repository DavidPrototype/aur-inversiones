export default class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let active = this.getAttribute("nav-active");
        // let mostrarMenu = this.getAttribute("mostrar-menu");
       
        this.innerHTML= `
        <header class="header">
            <nav class="nav">
                <div class="nav__logo">
                    <div class="custom-container">
                        <a
                            href="https://www.bancoppel.com/main/index.html"
                            target="_blank"
                        >
                            <img src="../img/Logotipo.svg" alt="Logo BanCoppel" />
                        </a>
                    </div>
                </div>
                
                <div class="nav--menu custom-container">
                        <ul class="menu font-secondary">
                            <li class="menu__item" id="nav-inicio"><a href="index.html">Inicio</a></li>
                            <li class="menu__item" id="nav-inversion"><a href="inversion-creciente.html">Inversión Creciente</a></li>
                            <li class="menu__item" id="nav-pagare"><a href="pagare.html">Pagaré</a></li>
                            
                        </ul>
                </div>
            </nav>
        </header>
                `;
       


      

        this.getAttribute("nav-active")
            ? document
                  .getElementById(active)
                  .classList.add("menu__item--active")
            : "";
    }
}

// Define your custom element
window.customElements.define("custom-header", Header);
