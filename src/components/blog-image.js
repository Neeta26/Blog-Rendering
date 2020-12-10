export const blogImage = (imageUrl) => {
  const div = document.createElement("div");
  div.classList.add("image");
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Blog related image";
  div.appendChild(img);
  return div;
};
