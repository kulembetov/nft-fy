// Declaring variables

const creatingProfile = document.querySelector('#popup-profile');
const creatingProfileForm = document.querySelector('#form_create-profile');
const creatingProfileButton = document.querySelector('.header__button');
const profileCloseButton = document.querySelector('.popup__button-close');

// Closing popup with close button, click on overlay and ESC

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  popup.addEventListener("mousedown", closePopupMousedown);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  popup.removeEventListener("mousedown", closePopupMousedown);
}

function closePopupEsc(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function closePopupMousedown(e) {
  if (e.target.classList.contains("popup_opened")) {
    closePopup(e.target);
  }
}

// Create profile button and close button

creatingProfileButton.addEventListener('click', function() {
  openPopup(creatingProfile)
});

profileCloseButton.addEventListener('click', function() {
  closePopup(creatingProfile)
});


// Cancel submit form creating profile

creatingProfileForm.addEventListener("submit", function (e) {
  e.preventDefault();
  closePopup(creatingProfile);
});
