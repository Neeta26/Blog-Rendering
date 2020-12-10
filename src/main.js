import { blogs } from "./data.js";
import { blogImage } from "./components/blog-image.js";
import { blogTitle } from "./components/blog-content.js";
import { blogContent } from "./components/blog-content.js";
import { relatedLinks } from "./components/related-links.js";
import { head } from "./components/header.js";
import { foot } from "./components/footer.js";
window.onload = () => {
  const header = document.getElementById("header");
  header.appendChild(head());
  blogs.then((blogs) => {
    const blogDiv = document.getElementById("root");
    const blogContentTitle = blogTitle(blogs[0].title);
    blogDiv.appendChild(blogContentTitle);
    const blogImageDiv = blogImage(blogs[0].imageUrl);
    blogDiv.appendChild(blogImageDiv);
    const blogContentDiv = blogContent(blogs[0].content);
    blogDiv.appendChild(blogContentDiv);
    const asideDiv = document.getElementById("related-links");
    asideDiv.appendChild(relatedLinks(blogs[0].links));
  });
  const footer = document.getElementById("footer");
  footer.appendChild(foot());
};
