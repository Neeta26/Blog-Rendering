let url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";
export const getBlogs = async (url) => {
  let response = await axios.get(url);
  return response.data;
};
export let blogs = getBlogs(url);
console.log("Blogs : ", blogs);
