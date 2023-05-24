
/*
  Get api data from blogs.js
*/

const heroContainer = document.querySelector(".hero");
const titleContainer = document.querySelector(".specific_title");
const detailContainer = document.querySelector(".specific_sections");

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
    //createModal(water);

  } catch (error) {
    console.log(error);
  }
}

fetchPost();

function createImage(water) {
  heroContainer.innerHTML = `
    <img class="specific_hero" src="${water.acf.image2}">
  `;
}

function createTitle(water) {
  titleContainer.innerHTML = `
    ${water.acf.blog_post}
  `;
}

function createDetails(water) {
  detailContainer.innerHTML = `
    <div class="specific_description">
      <p class="description_text">${water.content.rendered}</p>
    </div>
  
    <div class="specific_image">
      <img class="image" src="${water.acf.image3}" onclick="openModal(this)">
    </div>
  `;
}

// Open the modal and display the clicked image
function openModal(image) {
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal_image");

  modal.style.display = "block";
  modalImg.src = image.src;
}

// Close the modal when the user clicks on the close button (X)
document.querySelector(".modal_close").addEventListener("click", closeModal);

// Close the modal
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}
