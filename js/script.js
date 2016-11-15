var link = document.querySelector(".popup-link");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup-form");
var close = popup.querySelector(".popup-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-form-show");
  overlay.classList.add("popup-form-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-form-show");
  overlay.classList.remove("popup-form-show");
});
