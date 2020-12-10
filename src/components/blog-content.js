export const blogTitle = (heading) => {
  const title = document.createElement("h1");
  title.classList.add("Title");
  title.innerHTML = heading;
  return title;
};
export const blogContent = (para) => {
  const div = document.createElement("div");
  div.classList.add("content");
  const content = document.createElement("p");
  content.innerHTML = para;
  div.appendChild(content);
  return div;
};
