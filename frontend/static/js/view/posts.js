import { createView } from "./createView.js";

const createPostsContent = () => {
  const fragment = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = "포스트";
  fragment.appendChild(title);

  const postsList = document.createElement("ul");

  return fragment;
};

export const posts = createView("포스트", createPostsContent);
