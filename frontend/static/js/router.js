import { getParams, pathToRegex } from "./utils.js";
import { home } from "./view/home.js";
import { posts } from "./view/posts.js";
import { notfound } from "./view/not-found.js";
import { settings } from "./view/settings.js";
import { postsDetail } from "./view/postsDetail.js";

export const navigateTo = (url) => {
  history.pushState({}, "", url);
  router();
};

export const router = async () => {
  const routes = [
    { path: "/", view: home },
    { path: "/posts", view: posts },
    { path: "/posts/:id", view: postsDetail },
    { path: "/settings", view: settings },
    { path: "/not-found", view: notfound },
  ];

  const matchingResults = routes.map((route) => {
    return {
      ...route,
      // isMatch: location.pathname === route.path,
      routerResult: location.pathname.match(pathToRegex(route.path)),
    };
  });

  // let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
  let match = matchingResults.find(
    (matchingResult) => matchingResult.routerResult !== null
  );

  if (!match) {
    match = {
      path: routes.at(-1).path,
      view: routes.at(-1).view,
      routerResult: [location.pathname],
    };
  }

  const { getHTML } = match.view(getParams(match));

  const page = await getHTML();
  const root = document.querySelector("#root");
  // 기존 내용 제거
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  document.querySelector("#root").appendChild(page);
};
