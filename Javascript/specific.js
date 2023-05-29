
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
    if (response.ok) {
      const water = await response.json();
      console.log(water);

      createImage(water);
      createTitle(water);
      createDetails(water);
    } else {
      console.error("Failed to fetch post. Status:", response.status);
    }
  } catch (error) {
    console.error("An error occurred while fetching the post:", error);
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

async function postData(event) {
  event.preventDefault();

  const username = "exam1.aks-faret.no";
  const password = "sDvY PNVr I5RQ IRdG F529 0Raj";

  const commentId = document.querySelector(".post_id").value;
  const commentName = document.querySelector(".comment_name").value;
  const commentMail = document.querySelector(".comment_email").value;
  const commentText = document.querySelector(".comment_text").value;

  const comment = {
    post: commentId,
    author_name: commentName,
    author_email: commentMail,
    content: commentText
  };

  try {
    const response = await fetch(
      "https://exam1.aks-faret.no/wp-json/wp/v2/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(username + ":" + password)
        },
        body: JSON.stringify(comment)
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Comment submitted successfully:", data);
    } else {
      console.error("Error submitting comment. Status:", response.status);
    }
  } catch (error) {
    console.error("An error occurred while sending the request:", error);
  }
}

// Fetch api
//const commentUrl = `https://exam1.aks-faret.no/wp-json/wp/v2/comments?post=${postId}`;
/*
async function showPost() {
  const response = await fetch(`https://exam1.aks-faret.no/wp-json/wp/v2/comments`);
  const data = await response.json();
  console.log(data);

  //showComments(data);
}

showPost();*/

// IMPORTANT:
/*
  username: "exam1.aks-faret.no"
  Password: "sDvY PNVr I5RQ IRdG F529 0Raj"
*/
