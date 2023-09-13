import { createView } from "./createView.js";

const createPostsDetailContent = (params) => {
  const fragment = document.createDocumentFragment();

  const title = document.createElement("h1");
  title.textContent = `포스트 디테일 | ${params.id}`;
  fragment.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores eius ipsa labore laborum magni non, quae recusandae reprehenderit repudiandae sapiente similique tempore ullam veniam veritatis? Aut harum iste quia";
  fragment.appendChild(description);

  const postsLinkWrapper = document.createElement("p");
  const postsLink = document.createElement("a");
  postsLink.setAttribute("href", "/posts");
  postsLink.setAttribute("data-link", "");
  postsLink.textContent = "포스트";
  postsLinkWrapper.appendChild(postsLink);

  fragment.appendChild(postsLinkWrapper);

  return fragment;
};

export const postsDetail = createView(
  `포스트 상세페이지`,
  createPostsDetailContent
);
