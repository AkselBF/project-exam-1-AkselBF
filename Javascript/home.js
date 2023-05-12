// Carousel slides
/*
const track = document.querySelector(".blog_posts");
const slides = Array.from(track.children);
*/
//console.log(slides);
/*
const prevButton = document.querySelector(".carousel_prev");
const nextButton = document.querySelector(".carousel_next");

const dotsNav = document.querySelector(".carousel_dots");
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect().width;*/
//console.log(slideSize);

// Arrange the slides one next to another
/*
slides[0].style.left = slideSize * 0 + "px";
slides[1].style.left = slideSize * 1 + "px";
slides[2].style.left = slideSize * 2 + "px";
*/

// Arrange the slides next to one another
/*
const setSlidePosition = (slide, index) => {
  slide.style.left = slideSize * index + 'px';
}

slides.forEach(setSlidePosition);
*/

// When clicking left, slides move to the left


// When clicking right, slides move to the right
/*
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  track.style.transform = 'TranslateX(-' + amountToMove + ')';
});*/

// When clicking the nav indicators, move to that slide


// When I click left, move slides to the left
// When I click right, move slides to the right
// When I click the dot indicator, move to that slide



/*
  Progress bar
*/

const widthProgress = document.querySelector(".blog_posts");
//const scrollIndicator = document.querySelector(".carousel_bar")
const progressBar = document.querySelector("#scroll_indicator");
const previous = document.querySelector(".carousel_prev");
const next = document.querySelector(".carousel_next");

widthProgress.addEventListener("scroll", function() {
  const scrollWidth = widthProgress.scrollWidth;
  const clientWidth = widthProgress.clientWidth;
  const scrollPos = widthProgress.scrollLeft;
  const scrollPercent = (scrollPos / (scrollWidth - clientWidth)) * 100;
  progressBar.style.width = `${scrollPercent}%`;

  if (scrollPercent === 0) {
    previous.classList.add("hidden");
  } else {
    previous.classList.remove("hidden");
  }

  if (scrollPercent === 100) {
    next.classList.add("hidden");
  } else {
    next.classList.remove("hidden");
  }
});

previous.addEventListener("click", function() {
  widthProgress.scrollBy({
    left: -304,
    behavior: "smooth"
  });
});

next.addEventListener("click", function() {
  widthProgress.scrollBy({
    left: 304,
    behavior: "smooth"
  });
});


/*
function carouselScroll() {
  let winscroll = widthProgress.scrollLeft || document.documentElement.scrollLeft;
  let width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  let scrolled = (winscroll / width) * 100;

  console.log(width);
  progressBar.style.width = scrolled + "%";
}*/

/*
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}*/