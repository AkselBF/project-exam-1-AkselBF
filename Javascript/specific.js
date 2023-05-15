
/*
  Get api data from blogs.js
*/

const heroContainer = document.querySelector(".specific_hero");
const titleContainer = document.querySelector(".specific_title");
const textContainer = document.querySelector(".specific_description");
const imageContainer = document.querySelector(".specific_image");

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

    createHTML(water);
    createDetails(water);

  } catch (error) {
    console.log(error);
  }
}

fetchPost();