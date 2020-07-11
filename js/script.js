var formButton = document.querySelector(".find-hotel-button");
var findForm = document.querySelector(".find-hotel-form");
var kidsNumber = findForm.querySelector(".kids");
var adultsNumber = findForm.querySelector(".adults");

formButton.addEventListener("click", function (evt) {
findForm.classList.toggle("hide");
});

findForm.addEventListener("submit", function () {
localStorage.setItem("kidsNumber", kidsNumber.value);
localStorage.setItem("adultsNumber", adultsNumber.value);});
