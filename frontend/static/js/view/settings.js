import { createView } from "./createView.js";

const createSettingsContent = () => {
  const fragment = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = "설정";
  fragment.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores eius ipsa labore laborum magni non, quae recusandae reprehenderit repudiandae sapiente similique tempore ullam veniam veritatis? Aut harum iste quia";
  fragment.appendChild(description);

  const homeLinkWrapper = document.createElement("p");
  const homeLink = document.createElement("nav-link");
  homeLink.setAttribute("href", "/");
  homeLink.textContent = "홈으로";
  homeLink.setAttribute("color", "#009579");
  homeLinkWrapper.appendChild(homeLink);

  fragment.appendChild(homeLinkWrapper);

  return fragment;
};

export const settings = createView("설정", createSettingsContent);
