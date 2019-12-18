/* eslint-disable new-cap, no-undef */
'use strict';
var body = document.querySelector('body');
var modalContacts = document.querySelector('.modal.contacts');
var contactsToggle = document.querySelector('.header__btn');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var overlay = document.querySelector('.overlay');
var nameField = document.querySelector('.modal .contacts__name input');
var listServices = document.querySelector('.column__services .footer__list');
var listContacts = document.querySelector('.column__contacts .footer__list');
var btnServices = document.querySelector('.column__services .footer__btn');
var btnContacts = document.querySelector('.column__contacts .footer__btn');
var contacts = document.querySelector('#contacts');
var bannerBtn = document.querySelector('.banner__btn');
var advantages = document.querySelector('#advantages');
var bannerScroll = document.querySelector('.banner__scroll');
var contactsForm = document.querySelector('#contacts .form');
var contactsFormModal = document.querySelector('.modal .form');
var nameInput = document.querySelector('#name');
var nameInputModal = document.querySelector('#name-modal');
var phoneInput = document.querySelector('#phone');
var phoneInputModal = document.querySelector('#phone-modal');
var messageInput = document.querySelector('#message');
var messageInputModal = document.querySelector('#message-modal');

// Когда модальное окно закрыто
if (contactsToggle) {
  contactsToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modalContacts.classList.contains('modal--close')) {
      modalContacts.classList.remove('modal--close');
      overlay.classList.remove('overlay--close');
      body.classList.add('overflow');
      nameField.focus();
    }
  });
}

// Когда модальное окно открыто
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', function () {
    if (!modalContacts.classList.contains('modal--close')) {
      modalContacts.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}

// Закрытие клавишей ESC
if (window.addEventListener) {
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!modalContacts.classList.contains('modal--close')) {
        modalContacts.classList.add('modal--close');
        overlay.classList.add('overlay--close');
      }
    }
  });
}

// Закрытие overlay
if (overlay) {
  overlay.addEventListener('click', function () {
    if (!modalContacts.classList.contains('modal--close')) {
      modalContacts.classList.add('modal--close');
      overlay.classList.add('overlay--close');
    }
  });
}

// Открывает и закрывает "Разделы сайта"
if (btnServices) {
  btnServices.addEventListener('click', function () {
    if (btnServices.classList.contains('footer__btn--opened')) {
      btnServices.classList.remove('footer__btn--opened');
    } else {
      btnServices.classList.add('footer__btn--opened');
      btnContacts.classList.remove('footer__btn--opened');
    }
    if (listServices.classList.contains('footer__list--opened')) {
      listServices.classList.remove('footer__list--opened');
    } else {
      listServices.classList.add('footer__list--opened');
      listContacts.classList.remove('footer__list--opened');
    }
  });
}

// Открывает и закрывает "Наш офис"
if (btnContacts) {
  btnContacts.addEventListener('click', function () {
    if (btnContacts.classList.contains('footer__btn--opened')) {
      btnContacts.classList.remove('footer__btn--opened');
    } else {
      btnContacts.classList.add('footer__btn--opened');
      btnServices.classList.remove('footer__btn--opened');
    }
    if (listContacts.classList.contains('footer__list--opened')) {
      listContacts.classList.remove('footer__list--opened');
    } else {
      listContacts.classList.add('footer__list--opened');
      listServices.classList.remove('footer__list--opened');
    }
  });
}

// Скрол
if (bannerBtn) {
  bannerBtn.addEventListener('click', function () {
    window.scrollBy({top: (contacts.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

if (bannerScroll) {
  bannerScroll.addEventListener('click', function () {
    window.scrollBy({top: (advantages.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

// Валидация для телефона
IMask(document.querySelector('#phone'), {mask: '+{7}(000)000-00-00'});
IMask(document.querySelector('#phone-modal'), {mask: '+{7}(000)000-00-00'});

// Хранение данных в localStorage
if (contactsForm) {
  contactsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-field', nameInput.value);
    localStorage.setItem('phone-field', phoneInput.value);
    localStorage.setItem('message-field', messageInput.value);
  });
}

if (contactsFormModal) {
  contactsFormModal.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-modal', nameInputModal.value);
    localStorage.setItem('phone-modal', phoneInputModal.value);
    localStorage.setItem('message-modal', messageInputModal.value);
  });
}

// Для формы без скролла
