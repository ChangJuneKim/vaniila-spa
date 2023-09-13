import { navigateTo } from "../../router.js";
import { styles } from "./style.js";

class NavLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = styles;
  }

  connectedCallback() {
    this.#render();
    this.shadowRoot
      .querySelector("a")
      .addEventListener("click", this.#handleClick);
  }

  #handleClick = (e) => {
    const anchor = e.target.closest("a");
    if (anchor.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(anchor.href);
    }
  };

  #render() {
    const link = document.createElement("a");
    link.setAttribute("class", "nav__link");
    link.setAttribute("data-link", "");
    link.setAttribute("href", this.getAttribute("href"));

    const slotEl = document.createElement("slot");
    link.appendChild(slotEl);

    // color 속성이 있으면 해당 값으로 색상 설정
    if (this.hasAttribute("color")) {
      link.style.color = this.getAttribute("color");
    }

    this.shadowRoot.appendChild(link);
  }
}

customElements.define("nav-link", NavLink);
