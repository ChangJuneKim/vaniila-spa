export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

export const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("홈") },
    { path: "/posts", view: () => console.log("게시글") },
    { path: "/settings", view: () => console.log("설정") },
    { path: "/not-found", view: () => console.log("404 페이지") },
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

  console.log(match.view());
};
