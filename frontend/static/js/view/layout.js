export const layout = (content) => {
  const fragment = document.createDocumentFragment();

  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const paths = [
    { href: "/", text: "홈" },
    { href: "/posts", text: "게시글" },
    { href: "/settings", text: "설정" },
  ];

  paths.forEach((path) => {
    const navLink = document.createElement("a");
    navLink.setAttribute("class", "nav__link");
    navLink.setAttribute("data-link", "nav__link");
    navLink.setAttribute("href", path.href);
    navLink.textContent = path.text;

    nav.appendChild(navLink);
  });

  header.appendChild(nav);

  fragment.appendChild(header);
  fragment.appendChild(content);

  return fragment;
};
