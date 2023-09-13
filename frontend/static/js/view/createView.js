import { layout } from "./layout.js";

export const createView =
  (title, content, useLayout = true) =>
  (params) => {
    document.title =
      Object.keys(params).length > 0 ? `${title} | ${params.id}` : title;

    const getHTML = async () =>
      useLayout ? layout(content(params)) : content(params);

    return {
      getHTML,
    };
  };
