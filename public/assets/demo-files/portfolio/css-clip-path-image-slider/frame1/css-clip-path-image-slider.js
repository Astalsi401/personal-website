const images = document.querySelectorAll(".slider-img");
const clearActiveImage = ({ target }) => images.forEach((image) => image !== target && image.classList.remove("active"));
images.forEach((image) => image.addEventListener("click", ({ currentTarget }) => currentTarget.classList.toggle("active")));
window.addEventListener("click", clearActiveImage);
