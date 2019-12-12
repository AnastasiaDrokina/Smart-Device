'use strict';
var modalContacts = document.querySelector('.modal.contacts');
var contactsToggle = document.querySelector('.header__btn');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var overlay = document.querySelector('.overlay');
var nameField = document.querySelector('.modal .contacts__name input');
var listServices = document.querySelector('.column__services .footer__list');
var listContacts = document.querySelector('.column__contacts .footer__list');
var btnServices = document.querySelector('.column__services .footer__btn');
var btnContacts = document.querySelector('.column__contacts .footer__btn');

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

// Открывает и закрывает "Разделы сайта"
btnServices.addEventListener('click', function () {
  if (btnServices.classList.contains('footer__btn--opened')) {
    btnServices.classList.remove('footer__btn--opened');
  } else {
    btnServices.classList.add('footer__btn--opened');
  }
  if (listServices.classList.contains('footer__list--opened')) {
    listServices.classList.remove('footer__list--opened');
  } else {
    listServices.classList.add('footer__list--opened');
  }
});

// Открывает и закрывает "Наш офис"
btnContacts.addEventListener('click', function () {
  if (btnContacts.classList.contains('footer__btn--opened')) {
    btnContacts.classList.remove('footer__btn--opened');
  } else {
    btnContacts.classList.add('footer__btn--opened');
  }
  if (listContacts.classList.contains('footer__list--opened')) {
    listContacts.classList.remove('footer__list--opened');
  } else {
    listContacts.classList.add('footer__list--opened');
  }
});
