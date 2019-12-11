'use strict';
var modalContacts = document.querySelector('.modal.contacts');
var contactsToggle = document.querySelector('.header__btn');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var overlay = document.querySelector('.overlay');
var nameField = document.querySelector('.modal .contacts__name input');

// Когда модальное окно закрыто
contactsToggle.addEventListener('click', function () {
  if (modalContacts.classList.contains('modal--close')) {
    modalContacts.classList.remove('modal--close');
    overlay.classList.remove('overlay--close');
    nameField.focus();
  }
});

// Когда модальное окно открыто
modalCloseBtn.addEventListener('click', function () {
  if (!modalContacts.classList.contains('modal--close')) {
    modalContacts.classList.add('modal--close');
    overlay.classList.add('overlay--close');
  }
});

// Закрытие клавишей ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modalContacts.classList.contains('modal--close')) {
      modalContacts.classList.add('modal--close');
      overlay.classList.add('overlay--close');
    }
  }
});

// Закрытие overlay
overlay.addEventListener("click", function () {
  if (!modalContacts.classList.contains('modal--close')) {
    modalContacts.classList.add('modal--close');
    overlay.classList.add('overlay--close');
  }
});
