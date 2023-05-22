
/*
  Fetch api data
*/

async function getData() {
  try {
    const url = await fetch("https://exam1.aks-faret.no/wp-json/wp/v2/water");
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

    // Later (Not necessary)
    let checked = document.querySelectorAll(".checked");
    let checkText = document.querySelector(".filter_intro");
    console.log(checked, checkText);
  });
});


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