
/*
  Fetch api data
*/

async function getData() {
  try {
    const url = await fetch("https://exam1.aks-faret.no/wp-json/wp/v2/water?_embed&per_page=20");
    const data = await url.json();

    console.log(data);
    data.forEach((water) => renderData(water));

  } catch (error) {
    console.log(error);
  }
}

getData();

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
  Filter
*/

// Search bar
/*
const searchInput = document.getElementById("searchBar");
const searchResults = document.getElementById("searchResults");

// Function to perform the search
const performSearch = async () => {
  // Clear previous search results
  searchResults.innerHTML = '';

  // Fetch data from API link
  const response = await fetch("https://exam1.aks-faret.no/wp-json/wp/v2/water");
  const data = await response.json();

  // Get the search query
  const query = searchInput.value.toLowerCase();

  // Filter posts by title
  const filteredPosts = data.posts.filter(post =>
    post.title.toLowerCase().includes(query)
  );

  // Display search results
  filteredPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.textContent = post.title;
    searchResults.appendChild(postElement);
  });
};
*/
/*
const searchInput = document.querySelector(".search_bar");
let users = [];

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  users.forEach(user => {
    const isVisible = `${water.title.rendered}`.includes(value);
    user.element.classList.toggle("hide", !isVisible);
  })
})

async function getSearch() {
  try {
    const url = await fetch("https://exam1.aks-faret.no/wp-json/wp/v2/water");
    const data = await url.json();

    console.log(data);
    data.forEach((water) => renderData(water));

  } catch (error) {
    console.log(error);
  }
}*/

// Checkboxes
const filterButton = document.querySelector(".blog_filter_mobile");
const items = document.querySelectorAll(".desktop_item");

filterButton.addEventListener("click", () => {
  filterButton.classList.toggle("open");
});

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked");
    let checkText = document.querySelector(".filter_intro");
    console.log(checked, checkText);
    //checkItem();
    filterPosts();
  });
});

// Function to filter posts with search and checkboxes
const searchInput = document.querySelector(".search_bar");
const checkboxes = document.querySelectorAll(".checkbox");
const filteredPost = document.querySelector(".filtered_posts");
let postsData = [];

const filterPosts = () => {
  filteredPost.innerHTML = '';

  const query = searchInput.ariaValueMax.toLowerCase();

  const checkedValues = Array.from(checkboxes)
  .filter(checkbox => checkbox.checked)
  .map(checkbox => checkbox.value);

  // Filter and sort posts
  const filteredAndSortedPosts = postsData.filter(post =>
    (query === '' || post.title.toLowerCase().includes(query)) &&
    (checkedValues.length === 0 || checkedValues.includes(post.category))
  ).sort((a, b) => {
    if (checkedValues.includes('newest')) {
      return new Date(b.date) - new Date(a.date);
    } else if (checkedValues.includes('oldest')) {
      return new Date(a.date) - new Date(b.date);
    } else {
      return 0;
    }
  });

  // Display filtered and sorted posts
  filteredAndSortedPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.textContent = post.title;
    filteredPosts.appendChild(postElement);
  });
}


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