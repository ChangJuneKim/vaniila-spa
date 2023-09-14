import { styles } from "./style.js";
import "../NavLink/index.js";

class Navigation extends HTMLElement {
  #paths = [];
  #template = document.createElement("template");

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#initTemplate();
  }

  set paths(val) {
    this.#paths = val;
    this.#render();
  }

  #initTemplate() {
    this.#template.innerHTML = `
            ${styles}
            <nav></nav>
        `;
    this.shadowRoot.appendChild(this.#template.content.cloneNode(true));
  }

  #render() {
    const nav = this.shadowRoot.querySelector("nav");

    while (nav.firstChild) {
      nav.removeChild(nav.firstChild);
    }

    this.#paths.forEach((path) => {
      const navLink = document.createElement("nav-link");
      navLink.setAttribute("href", path.href);
      navLink.textContent = path.text;
      nav.appendChild(navLink);
    });
  }
}

customElements.define("navigation-menu", Navigation);
