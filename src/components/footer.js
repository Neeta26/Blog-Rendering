export const foot = () => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2 class="follow-me">Follow me on social media to know more about us</h2>
    <div class="sm">
        <a href="#" class="sm-a" ><i class="fa fa-github fa-2x"></i></a>
        <a href="#" class="sm-a" ><i class="fa fa-twitter fa-2x"></i></a>
        <a href="#" class="sm-a" ><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
    </div> 
    <div class="cr">
        <p class="cr-p">Copyright<i class="fa fa-copyright" aria-hidden="true"></i>2020 Blogs.com. All rights reserved. </p>
        
    </div> 
    `;
  div.className = "footer";
  return div;
};
