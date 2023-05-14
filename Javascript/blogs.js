
/*
  Fetch api data
*/

async function getData() {
  try {
    const url = await fetch("https://exam1.aks-faret.no/wp-json/wp/v2/water");
    const data = await url.json();

    console.log(data);
    //data.forEach((water) => renderData(water));

  } catch (error) {
    console.log(error);
  }
}

getData();

//function renderData(water) {} 

/*
  Filter
*/

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
    console.log(checked, checkText)
    /*
    if (checked && checked.length > 0) {
      checkText.innerHTML = `${checked} Selected`;
    } else {
      checkText.innerText = `Search & sort`;
    }*/
  });
});


/*
  See more button
*/

function showMore() {
  let morePosts = document.querySelector(".hidden_posts");
  let buttonText = document.querySelector(".button_text");
  let buttonIcon = document.getElementById("arrow");

  if (morePosts.style.display === "flex") {
    morePosts.style.display = "none";
    buttonText.innerHTML = "See more";
    buttonIcon.style.transform = "rotate(270deg)";
  } else {
    morePosts.style.display = "flex";
    buttonText.innerHTML = "See less";
    buttonIcon.style.transform = "rotate(90deg)";
  }
}