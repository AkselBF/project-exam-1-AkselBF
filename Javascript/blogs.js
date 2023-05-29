
/*
  Fetch api data
*/
const waterUrl = "https://exam1.aks-faret.no/wp-json/wp/v2/water";

async function getData() {
  try {
    const url = await fetch(waterUrl + "?_embed&per_page=20");
    const data = await url.json();

    console.log(data);
    data.forEach((water) => renderData(water));

  } catch (error) {
    console.log(error);
  }
}

getData();


/*
  Blogs
*/

function renderData(water) {
  if (`${water.acf.type}` === "Default") {
    document.querySelector(".blog_posts").innerHTML += `
    <li class="blog"><a href="../HTML/specific.html?id=${water.id}">
      <img class="blog_image" src="${water.acf.image}"
      alt="Image for blog">
      <div class="blog_description">
        <h3 class="blog_desc_text">${water.acf.blog_post}</h3>
        <div class="blog_line"></div>
        <div class="blog_date_and_more">
          <p class="blog_desc_date">${water.acf.date}</p>
          <p class="blog_desc_more">Read more ></p>
        </div>
      </div></a>
    </li>
  `;
  }

  if (`${water.acf.type}` === "Hidden") {
    document.querySelector(".hidden_posts").innerHTML += `
    <li class="blog"><a href="../HTML/specific.html?id=${water.id}">
      <img class="blog_image" src="${water.acf.image}"
      alt="Image for blog">
      <div class="blog_description">
        <h3 class="blog_desc_text">${water.acf.blog_post}</h3>
        <div class="blog_line"></div>
        <div class="blog_date_and_more">
          <p class="blog_desc_date">${water.acf.date}</p>
          <p class="blog_desc_more">Read more ></p>
        </div>
      </div></a>
    </li>
  `;
  }
}


/*
  Function to sort posts with search
*/

// Search posts
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search_bar");
  const blogPostsList = document.querySelector(".blog_posts");

  // Search with every key
  searchInput.addEventListener('keyup', () => handleSearch(waterUrl));

  function handleSearch(url) {
    const searchText = searchInput.value.toLowerCase();

    // Clear previous results
    blogPostsList.innerHTML = "";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const matchedPosts = data.filter(post => post.acf.blog_post.toLowerCase().includes(searchText));
        matchedPosts.forEach(post => {
          const li = document.createElement("li");
          li.classList.add("blog");

          const link = document.createElement("a");
          link.href = `../HTML/specific.html?id=${post.id}`;

          const image = document.createElement("img");
          image.classList.add("blog_image");
          image.src = post.acf.image;
          image.alt = "Image for blog";

          const description = document.createElement("div");
          description.classList.add("blog_description");

          const title = document.createElement("h3");
          title.classList.add("blog_desc_text");
          title.textContent = post.acf.blog_post;

          const line = document.createElement("div");
          line.classList.add("blog_line");

          const dateAndMore = document.createElement("div");
          dateAndMore.classList.add("blog_date_and_more");

          const date = document.createElement("p");
          date.classList.add("blog_desc_date");
          date.textContent = post.acf.date;

          const more = document.createElement("p");
          more.classList.add("blog_desc_more");
          more.textContent = "Read more >";

          dateAndMore.appendChild(date);
          dateAndMore.appendChild(more);

          description.appendChild(title);
          description.appendChild(line);
          description.appendChild(dateAndMore);

          link.appendChild(image);
          link.appendChild(description);

          li.appendChild(link);

          blogPostsList.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Error: ", error);
      });
  }
})


/*
  See more button
*/

function showMore() {
  let morePosts = document.querySelector(".hidden_posts");
  let buttonText = document.querySelector(".button_text");
  let buttonIcon = document.querySelector("#arrow");

  if (morePosts.style.display === "flex") {
    morePosts.style.display = "none";
    buttonText.innerHTML = "See more";
    buttonIcon.style.transform = "rotate(270deg)";
    buttonIcon.style.transition = "0.5s";
  } else {
    morePosts.style.display = "flex";
    buttonText.innerHTML = "See less";
    buttonIcon.style.transform = "rotate(90deg)";
    buttonIcon.style.transition = "0.5s";
  }
}