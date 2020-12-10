export const head = () => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div>
        <h1 class = "heading">NJ Blogs</h1>
    </div>
    <div>
        <nav>
            <a href = "#" class = "about">Sections</a>
            <a href = "#" class = "contact">Contact</a>
        </nav>
    </div>
    `;
  div.className = "header";
  return div;
};
