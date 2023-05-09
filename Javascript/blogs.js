
/*
  See more button
*/
/*
function showMore() {
  let morePosts = document.querySelector(".hidden_posts");
  let moreButton = document.querySelector(".blog_button");
  let buttonText = document.querySelector(".button_text");
  let dots = document.querySelector(".blog_dots");

  if (dots.style.display === "hidden") {
    dots.style.display = "block";
    buttonText.innerHTML = "See more";
    morePosts.style.display = "none";
  } else {
    dots.style.display = "none";
    buttonText.style.display = "See less";
    morePosts.style.display = "block";
  }
}*/

function showMore() {
  let morePosts = document.querySelector(".hidden_posts");
  let buttonText = document.querySelector(".button_text");
  let buttonIcon = document.getElementById("arrow");

  if (morePosts.style.display === "flex") {
    morePosts.style.display = "none";
    buttonText.innerHTML = "See more";
    buttonIcon.style.transform = "rotate(270deg)";
  } else {
    morePosts.style.display = "flex";
    buttonText.innerHTML = "See less";
    buttonIcon.style.transform = "rotate(90deg)";
  }
}