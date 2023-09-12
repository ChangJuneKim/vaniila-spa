import { createView } from "./createView.js";

const createHomeContent = () => {
  const main = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = "홈";
  main.appendChild(title);

  const subTitle = document.createElement("h2");
  subTitle.textContent = "바닐라 JS로 SPA 만들기";
  main.appendChild(subTitle);

  const description = document.createElement("p");
  description.textContent = "Lorem ipsum ... Aut harum iste quia";
  main.appendChild(description);

  const links = document.createElement("ul");

  const postsLink = document.createElement("li");
  const postsLinkAnchor = document.createElement("a");
  postsLinkAnchor.setAttribute("href", "/posts");
  postsLinkAnchor.setAttribute("data-link", "");
  postsLinkAnchor.textContent = "최근 게시물 보기";
  postsLink.appendChild(postsLinkAnchor);

  links.appendChild(postsLink);

  const settingsLink = document.createElement("li");
  const settingsLinkAnchor = document.createElement("a");
  settingsLinkAnchor.setAttribute("href", "/settings");
  settingsLinkAnchor.setAttribute("data-link", "");
  settingsLinkAnchor.textContent = "설정 페이지";
  settingsLink.appendChild(settingsLinkAnchor);

  links.appendChild(settingsLink);

  main.appendChild(links);

  return main;
};
export const home = createView("바닐라 SPA", createHomeContent);
