import { createView } from "./createView.js";

const createHomeContent = () => {
  const fragment = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = "홈";
  fragment.appendChild(title);

  const subTitle = document.createElement("h2");
  subTitle.textContent = "바닐라 JS로 SPA 만들기";
  fragment.appendChild(subTitle);

  const description = document.createElement("p");
  description.textContent = "Lorem ipsum ... Aut harum iste quia";
  fragment.appendChild(description);

  const linkList = document.createElement("ul");
  const links = [
    { href: "/posts", text: "최근 게시물 보기" },
    { href: "/settings", text: "설정 페이지" },
  ];

  links.forEach((link) => {
    const listItem = document.createElement("li");

    const navLink = document.createElement("nav-link");
    navLink.setAttribute("href", link.href);
    navLink.textContent = link.text;
    navLink.setAttribute("color", "#009579");

    listItem.appendChild(navLink);
    linkList.appendChild(listItem);
  });

  fragment.appendChild(linkList);

  return fragment;
};
export const home = createView("바닐라 SPA", createHomeContent);
