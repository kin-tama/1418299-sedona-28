var formButton = document.querySelector(".find-hotel-button");
var findForm = document.querySelector(".find-hotel-form");

formButton.addEventListener("click", function (evt) {
findForm.classList.toggle("visually-hidden");
});
