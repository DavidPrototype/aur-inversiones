import "../../scss/components/button.scss";

export default class Button extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let id = this.getAttribute("data-id");
        let texto = this.getAttribute("texto");
        let tipo = this.getAttribute("tipo");

        this.innerHTML = `
              <button class="btn ${tipo}" id='${id}'>${texto}</buton>`;
    }

    attributeChangesCallback(nombreAtr, viejoAtr, nuevoAtr) {}
}

window.customElements.define("custom-boton", Button);
