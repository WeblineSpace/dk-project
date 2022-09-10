// ------------------ Input visibility --------------

const searchInput = document.querySelector(".header__search > input");
const searchWrapper = document.querySelector(".header__search");
const submitButton = document.querySelector(".header__button");
const logoText = document.querySelector(".logo__text");

searchWrapper.addEventListener("mouseenter", () => {
  searchWrapper.classList.add("header__search--hovered");
  logoText.classList.add("logo__text--hidden");
});

searchInput.addEventListener('keydown', () => {
  if (searchInput.value) {
    submitButton.setAttribute('type', 'submit')
  } else {
    submitButton.setAttribute("type", "button");
  }
})

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

showMoreButton?.addEventListener("click", () => {
  elementToShow += 4;
  showMoreElements();
});
