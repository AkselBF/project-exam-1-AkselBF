
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
  });
});


/*
  Function to filter posts with search and checkboxes
*/

// Search posts
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search_bar");
  const resultsList = document.querySelector(".search_results");

  searchInput.addEventListener('keyup', () => handleSearch(waterUrl + "?_embed&per_page=20"));

  function handleSearch(searchUrl) {
    const searchText = searchInput.value.toLowerCase();
    resultsList.innerHTML = "";

    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        const matchedPosts = data.filter(post => post.acf.blog_post.toLowerCase().includes(searchText));
        matchedPosts.forEach(post => {
          const li = document.createElement('li');
          const postTitle = document.createElement('h3');
          const postContent = document.createElement('p');

          postTitle.textContent = post.title.rendered;
          postContent.innerHTML = post.content.rendered;

          li.appendChild(postTitle);
          li.appendChild(postContent);
          resultsList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
})


// Filter and sort posts
/*
const filterPosts = () => {
  const checkedValues = Array.from(checkboxes)
  .filter(checkbox => checkbox.checked)
  .map(checkbox => checkbox.value);

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
*/

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