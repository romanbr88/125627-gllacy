var link = document.querySelector(".popup-link");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup-form");
var loginForm = document.querySelector(".header-action-login .modal-form");
var login = loginForm.querySelector(".login");
var password = loginForm.querySelector(".password");
var loginStorage = localStorage.getItem("login");
var allInput = document.querySelectorAll(".form-input");

if (link && overlay && popup) {
  var close = popup.querySelector(".popup-close");
  var feedbackName = popup.querySelector(".firstname");
  var feedbackEmail = popup.querySelector(".email");
  var feedbackComment = popup.querySelector(".comment");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("form-error");
    popup.classList.add("popup-form-show");
    overlay.classList.add("popup-form-show");
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-form-show");
    overlay.classList.remove("popup-form-show");
  });

  popup.addEventListener("submit", function(event) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackComment.value) {
      event.preventDefault();
      popup.classList.remove("form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form-error");
    }
  });
}

loginForm.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
  } else {
    localStorage.setItem("login", login.value);
  }
});

if (loginStorage) {
  login.value = loginStorage;
  login.classList.add("filled");
}

var filterForm = document.querySelector(".filter-form");

if (filterForm) {
  filterForm.addEventListener("submit", function(event) {
    event.preventDefault();
  });
}

for (var i = 0; i < allInput.length; i++) {
  allInput[i].addEventListener("blur", function() {
    if (this.value) {
      this.classList.add("filled");
    } else {
      this.classList.remove("filled");
    }
  });
}
