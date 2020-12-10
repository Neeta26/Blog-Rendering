export const findBlogById = (blogs, blogId) => {
  return blogs.find((blog) => {
    return blog.id == blogId;
  });
};
