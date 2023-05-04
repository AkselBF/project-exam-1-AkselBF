// Carousel slides

const track = document.querySelector(".blog_posts");
const slides = Array.from(track.children);

//console.log(slides);

const prevButton = document.querySelector(".carousel_prev");
const nextButton = document.querySelector(".carousel_next");

const dotsNav = document.querySelector(".carousel_dots");
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect().width;
//console.log(slideSize);

// Arrange the slides one next to another
/*
slides[0].style.left = slideSize * 0 + "px";
slides[1].style.left = slideSize * 1 + "px";
slides[2].style.left = slideSize * 2 + "px";
*/

// When I click left, move slides to the left
// When I click right, move slides to the right
// When I click the dot indicator, move to that slide