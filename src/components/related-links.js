import { renderNewBlog } from "../helper/render.js";
export const relatedLinks = (links) => {
  const ul = document.createElement("ul");
  let h1 = document.createElement("h1");
  h1.innerHTML = "Related Links:";
  h1.classList.add("relatedTitle");
  ul.appendChild(h1);
  console.log(links);
  links.forEach((link) => {
    let li = document.createElement("li");
    li.innerHTML = link.title;
    li.classList.add("list");
    li.id = link.id;
    li.addEventListener("click", () => {
      renderNewBlog(li.id);
    });
    ul.appendChild(li);
  });
  return ul;
};
