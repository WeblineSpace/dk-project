// ------------------ Input visibility --------------

const searchWrapper = document.querySelector(".header__search");
const searchInput = document.querySelector(".header__search > input");
const logoText = document.querySelector(".logo__text");

searchWrapper.addEventListener("mouseenter", () => {
  searchWrapper.classList.add("header__search--hovered");
  logoText.classList.add("logo__text--hidden");
});

searchWrapper.addEventListener("mouseleave", () => {
  if (!searchInput.value) {
    searchWrapper.classList.remove("header__search--hovered");
    logoText.classList.remove("logo__text--hidden");
  }
});

// ------------- Showmore ---------------

const newsElements = document.querySelectorAll(".news__item");
const showMoreButton = document.querySelector(".news__showmore");
let elementToShow = 4;

const showMoreElements = () => {
  for (let i = 0; i < elementToShow; i++) {
    newsElements[i].style.display = "block";
  }

  if (elementToShow >= newsElements.length) {
    showMoreButton.style.display = "none";
  }
};

if (newsElements.length) {
  showMoreElements();
}

showMoreButton?.addEventListener('click', () => {
  elementToShow += 4
  showMoreElements()
})