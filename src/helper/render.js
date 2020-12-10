import { blogs } from "../data.js";
import { blogImage } from "../components/blog-image.js";
import { blogContent, blogTitle } from "../components/blog-content.js";
import { relatedLinks } from "../components/related-links.js";
import { findBlogById } from "./findById.js";
export const renderNewBlog = (blogId) => {
  blogs.then((blogs) => {
    const blogObject = findBlogById(blogs, blogId);
    console.log(blogObject);
    const rootDiv = document.getElementById("root");
    rootDiv.innerHTML = "";
    rootDiv.appendChild(blogTitle(blogObject.title));
    rootDiv.appendChild(blogImage(blogObject.imageUrl));
    rootDiv.appendChild(blogContent(blogObject.content));
    const asideDiv = document.getElementById("related-links");
    asideDiv.innerHTML = "";
    asideDiv.appendChild(relatedLinks(blogObject.links));
  });
};
