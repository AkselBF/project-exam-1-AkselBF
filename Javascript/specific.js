
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


/*
  Comments
*/
const commentSection = document.querySelector(".comment_section");
const commentBackground = document.querySelector(".comment_background");
const commentText = document.querySelector(".comment_text");

// Click on logo to get comment textarea
function openComments() {
  commentSection.style.display = "block";
  commentBackground.style.display = "block";
}

document.querySelector(".comment_close").addEventListener("click", closeComments);

function closeComments() {
  commentSection.style.display = "none";
  commentBackground.style.display = "none";
}

/*
const commentBackground = document.querySelector(".comment_background");
const commentSection = document.querySelector(".comment_section");
const commentText = document.querySelector(".comment_text");

function openComments() {
  if (commentSection.style.display === "none") {
    commentSection.style.display = "block";
    commentBackground.style.display = "block";

    commentText.focus();
  } else {
    commentSection.style.display = "none";
    commentBackground.style.display = "none";

    commentText.value = "";
  }
}*/

function submitComment() {
  const commentary = commentText.value;

  const postId = "<?php echo get_the_ID(); ?>";

  const commentData = {
    post: postId,
    content: commentary
  }
}

// Fetch api
//const commentUrl = `https://exam1.aks-faret.no/wp-json/wp/v2/comments?post=${postId}`;
async function showPost() {
  const response = await fetch(`https://exam1.aks-faret.no/wp-json/wp/v2/comments`);
  const data = await response.json();
  console.log(data);

  //showComments(data);
}

showPost();
/*
function showComments(data) {
  if (!data.length) {
    console.log("hey");
  }

  const comment = document.querySelector(".comment_text");

  data.forEach((comments) => {
    comment.innerHTML = `
      <div class="comment_source">
        <div class="source_name">
          <h3>${comments.author_name}</h3>
        </div>
        <div class="source_text">
          <p>${comments.content.rendered}</p>
        </div>
      </div>
    `;
  })
}*/