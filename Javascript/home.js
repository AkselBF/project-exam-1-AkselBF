
/*
  Progress bar
*/

const widthProgress = document.querySelector(".blog_posts");
const progressBar = document.querySelector("#scroll_indicator");
const previous = document.querySelector(".carousel_prev");
const next = document.querySelector(".carousel_next");

widthProgress.addEventListener("scroll", function() {
  const scrollWidth = widthProgress.scrollWidth;
  const clientWidth = widthProgress.clientWidth;
  const scrollPos = widthProgress.scrollLeft;
  const scrollPercent = (scrollPos / (scrollWidth - clientWidth)) * 100;
  progressBar.style.width = `${scrollPercent}%`;
  //console.log(scrollPercent);

  if (scrollPercent === 0) {
    previous.style.color = "#fafafa";
  } else {
    previous.style.color = "#000000";
  }

  if (scrollPercent >= 99) {
    next.style.color = "#fafafa";
  } else {
    next.style.color = "#000000";
  }
});

previous.addEventListener("click", function() {
  widthProgress.scrollBy({
    left: -340,
    behavior: "smooth"
  });
});

next.addEventListener("click", function() {
  widthProgress.scrollBy({
    left: 340,
    behavior: "smooth"
  });
});


/*
  Fetch api data for carousel
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

/*
  Carousel blogs posts
  Can also be found in Blogs page
*/

function renderData(water) {
  if (`${water.acf.type}` === "Default") {
    document.querySelector(".blog_posts").innerHTML += `
    <li class="blog"><a href="HTML/specific.html?id=${water.id}">
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
