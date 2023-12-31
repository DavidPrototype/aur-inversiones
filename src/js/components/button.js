import "../../scss/components/button.scss";

export default class Button extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let idBoton = this.getAttribute("id-boton");
        let textButton = this.getAttribute("texto-boton");
        let tipo = this.getAttribute("tipo");

        this.innerHTML = `
              <button class="btn ${tipo}" id='${idBoton}'>${textButton}</buton>`;
    }

    attributeChangesCallback(nombreAtr, viejoAtr, nuevoAtr) {}
}

window.customElements.define("custom-boton", Button);
