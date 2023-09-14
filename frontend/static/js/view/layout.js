import "../components/Navigation/index.js";

export const layout = (content) => {
  const fragment = document.createDocumentFragment();

  const header = document.createElement("header");

  const paths = [
    { href: "/", text: "홈" },
    { href: "/posts", text: "게시글" },
    { href: "/settings", text: "설정" },
  ];

  const navComponent = document.createElement("navigation-menu");
  navComponent.paths = paths;
  header.appendChild(navComponent);

  fragment.appendChild(header);
  fragment.appendChild(content);

  return fragment;
};
