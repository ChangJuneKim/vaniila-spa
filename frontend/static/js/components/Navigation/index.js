import { styles } from "./style.js";
import "../NavLink/index.js";

class Navigation extends HTMLElement {
  #paths = [];
  #template = document.createElement("template");

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.#template.innerHTML = `
            ${styles}
            <nav></nav>
        `;
  }

  set paths(val) {
    this.#paths = val;
    this.#render();
  }

  connectedCallback() {
    this.#render();
  }

  #render() {
    // ShadowRoot 내용을 template의 복제본으로 대체
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(this.#template.content.cloneNode(true));

    const nav = this.shadowRoot.querySelector("nav");

    this.#paths.forEach((path) => {
      const navLink = document.createElement("nav-link");
      navLink.setAttribute("href", path.href);
      navLink.textContent = path.text;
      nav.appendChild(navLink);
    });
  }
}

customElements.define("custom-nav", Navigation);
