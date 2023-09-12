import { home } from "./view/home.js";
import { posts } from "./view/posts.js";
import { settings } from "./view/settings.js";
import { notfound } from "./view/not-found.js";

export const navigateTo = (url) => {
  history.pushState({}, "", url);
  router();
};

export const router = async () => {
  const routes = [
    { path: "/", view: home },
    { path: "/posts", view: posts },
    { path: "/settings", view: settings },
    { path: "/not-found", view: notfound },
  ];

  const potentialMatches = routes.map((route) => {
    // 1)
    return {
      ...route,
      isMatch: location.pathname === route.path,
    };
  });

  // 2)
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // 3)
  if (!match) {
    match = {
      path: routes.at(-1).path,
      view: routes.at(-1).view,
      isMatch: true,
    };
  }

  const { getHTML } = match.view();
  const page = await getHTML();

  const root = document.querySelector("#root");
  // 기존 내용 제거
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  document.querySelector("#root").appendChild(page);
};
