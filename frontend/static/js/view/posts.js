import { createView } from "./createView.js";

const createPostsContent = () => {
  const fragment = document.createDocumentFragment();

  const title = document.createElement("h1");
  title.textContent = "포스트";
  fragment.appendChild(title);

  const postsList = document.createElement("ul");

  const postLinks = [
    { id: "1", text: "111111111111111111111111111" },
    { id: "2", text: "222222222222222222222222222" },
    { id: "3", text: "333333333333333333333333333" },
    { id: "4", text: "444444444444444444444444444" },
  ];

  postLinks.forEach((post) => {
    const listItem = document.createElement("li");

    const navLink = document.createElement("nav-link");
    navLink.setAttribute("href", `/posts/${post.id}`);
    navLink.textContent = post.text;
    navLink.setAttribute("color", "#009579");

    listItem.appendChild(navLink);
    postsList.appendChild(listItem);
  });

  fragment.appendChild(postsList);

  return fragment;
};

export const posts = createView("포스트", createPostsContent);
