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
    const anchor = document.createElement("a");
    anchor.setAttribute("href", `/posts/${post.id}`);
    anchor.setAttribute("data-link", "");
    anchor.textContent = post.text;

    listItem.appendChild(anchor);
    postsList.appendChild(listItem);
  });

  fragment.appendChild(postsList);

  return fragment;
};

export const posts = createView("포스트", createPostsContent);
