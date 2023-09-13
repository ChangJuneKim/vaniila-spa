import { createView } from "./createView.js";

const createNotFoundContent = () => {
  const fragment = document.createDocumentFragment();

  const title = document.createElement("h1");
  title.textContent = "404 not found";
  fragment.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores eius ipsa labore laborum magni non, quae recusandae reprehenderit repudiandae sapiente similique tempore ullam veniam veritatis? Aut harum iste quia";
  fragment.appendChild(description);

  const homeLinkWrapper = document.createElement("p");
  const homeLink = document.createElement("a");
  homeLink.setAttribute("href", "/");
  homeLink.setAttribute("data-link", "");
  homeLink.textContent = "홈으로";
  homeLinkWrapper.appendChild(homeLink);

  fragment.appendChild(homeLinkWrapper);

  return fragment;
};

export const notfound = createView("Not Found", createNotFoundContent);
