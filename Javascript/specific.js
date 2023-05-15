
/*
  Get api data from blogs.js
*/

const heroContainer = document.querySelector(".specific_hero");
const titleContainer = document.querySelector(".specific_title");
const textContainer = document.querySelector(".specific_sections");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

console.log(postId);

const url = `https://exam1.aks-faret.no/wp-json/wp/v2/water/${postId}`;


// Gets the chosen post from previous page
async function fetchPost() {
  try {
    const response = await fetch(url);
    const water = await response.json();
    console.log(water);

    createImage(water);
    createTitle(water);
    createDetails(water);

  } catch (error) {
    console.log(error);
  }
}

fetchPost();

function createImage(water) {
  heroContainer.innerHTML = ``;
}

function createTitle(water) {
  titleContainer.innerHTML = ``;
}

function createDetails(water) {
  textContainer.innerHTML = ``;
}