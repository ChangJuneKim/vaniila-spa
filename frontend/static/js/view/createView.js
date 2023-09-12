export const createView = (title, content) => () => {
  document.title = title;

  const getHTML = async () => content();

  return {
    getHTML,
  };
};
