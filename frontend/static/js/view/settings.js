import { createView } from "./createView.js";

const createSettingsContent = () => {
  const main = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = "설정";
  main.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores eius ipsa labore laborum magni non, quae recusandae reprehenderit repudiandae sapiente similique tempore ullam veniam veritatis? Aut harum iste quia";
  main.appendChild(description);

  const homeLinkWrapper = document.createElement("p");
  const homeLink = document.createElement("a");
  homeLink.setAttribute("href", "/");
  homeLink.setAttribute("data-link", "");
  homeLink.textContent = "홈으로";
  homeLinkWrapper.appendChild(homeLink);

  main.appendChild(homeLinkWrapper);

  return main;
};

export const settings = createView("설정", createSettingsContent);
