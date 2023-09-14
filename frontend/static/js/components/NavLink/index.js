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
    this.#addEventListeners();
  }

  disconnectedCallback() {
    this.#removeEventListeners();
  }

  #addEventListeners() {
    this.shadowRoot
      .querySelector("a")
      .addEventListener("click", this.#handleClick);
  }

  #removeEventListeners() {
    this.shadowRoot
      .querySelector("a")
      .removeEventListener("click", this.#handleClick);
  }

  #handleClick = (e) => {
    const anchor = e.target.closest("a");
    if (anchor.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(anchor.href);
    }
  };

  #render() {
    const link = this.#createLinkElement();
    this.shadowRoot.appendChild(link);
  }

  #createLinkElement() {
    const link = document.createElement("a");
    link.className = "nav__link";
    link.dataset.link = "";
    link.href = this.getAttribute("href");

    const slotEl = document.createElement("slot");
    link.appendChild(slotEl);

    this.#applyColorAttribute(link);

    return link;
  }

  #applyColorAttribute(link) {
    if (this.hasAttribute("color")) {
      link.style.color = this.getAttribute("color");
    }
  }
}

customElements.define("nav-link", NavLink);
