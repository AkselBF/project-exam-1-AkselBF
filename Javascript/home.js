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

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideSize * index + 'px';
}

slides.forEach(setSlidePosition);


// When clicking left, slides move to the left


// When clicking right, slides move to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  track.style.transform = 'TranslateX(-' + amountToMove + ')';
});

// When clicking the nav indicators, move to that slide


// When I click left, move slides to the left
// When I click right, move slides to the right
// When I click the dot indicator, move to that slide