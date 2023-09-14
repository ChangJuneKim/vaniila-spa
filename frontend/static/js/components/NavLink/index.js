import { navigateTo } from "../../router.js";
import { styles } from "./style.js";

class NavLink extends HTMLElement {
  #template = document.createElement("template");

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.initTemplate();
  }

  initTemplate() {
    this.#template.innerHTML = `
      ${styles}
      <a class="nav__link" data-link=""></a>
    `;

    this.shadowRoot.appendChild(this.#template.content.cloneNode(true));

    this.shadowRoot
      .querySelector("a")
      .addEventListener("click", this.#handleClick);
  }

  connectedCallback() {
    this.#render();
  }

  #handleClick = (e) => {
    const anchor = e.target.closest("a");
    if (anchor.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(anchor.href);
    }
  };

  #render() {
    const link = this.shadowRoot.querySelector("a");
    link.setAttribute("href", this.getAttribute("href"));

    const slotEl = document.createElement("slot");
    link.appendChild(slotEl);

    // color 속성이 있으면 해당 값으로 색상 설정
    if (this.hasAttribute("color")) {
      link.style.color = this.getAttribute("color");
    }
  }
}

customElements.define("nav-link", NavLink);
