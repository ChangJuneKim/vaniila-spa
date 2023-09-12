import { createView } from "./createView.js";

const createPostsContent = () => {
  const main = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = "포스트";
  main.appendChild(title);

  const postsList = document.createElement("ul");

  return main;
};

export const posts = createView("포스트", createPostsContent);
