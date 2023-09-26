import { router } from "./router.js";
import "../css/style.css";

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  router();
});
