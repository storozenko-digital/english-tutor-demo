const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#demo-form');
const status = document.querySelector('.form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Готово — в рабочей версии здесь будет отправка преподавателю.';
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const bookDialog = document.querySelector('#guide-book');
const bookLauncher = document.querySelector('.book-launcher');
const bookClose = document.querySelector('.book-close');
const bookPages = [...document.querySelectorAll('.book-page')];
const bookPrev = document.querySelector('.book-prev');
const bookNext = document.querySelector('.book-next');
const bookProgress = document.querySelector('.book-progress b');
let currentBookPage = 0;

function renderBook() {
  bookPages.forEach((page, index) => {
    page.classList.toggle('is-active', index === currentBookPage);
    page.classList.toggle('is-before', index < currentBookPage);
    page.classList.toggle('is-after', index > currentBookPage);
    page.setAttribute('aria-hidden', String(index !== currentBookPage));
  });
  bookPrev.disabled = currentBookPage === 0;
  bookNext.disabled = currentBookPage === bookPages.length - 1;
  bookProgress.textContent = String(currentBookPage + 1);
}

bookLauncher?.addEventListener('click', () => {
  currentBookPage = 0;
  renderBook();
  bookDialog.showModal();
});

bookClose?.addEventListener('click', () => bookDialog.close());
bookPrev?.addEventListener('click', () => {
  currentBookPage = Math.max(0, currentBookPage - 1);
  renderBook();
});
bookNext?.addEventListener('click', () => {
  currentBookPage = Math.min(bookPages.length - 1, currentBookPage + 1);
  renderBook();
});

bookDialog?.addEventListener('click', (event) => {
  if (event.target === bookDialog) bookDialog.close();
});

document.querySelectorAll('[data-book-link]').forEach((link) => {
  link.addEventListener('click', () => bookDialog.close());
});

bookDialog?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' && !bookNext.disabled) bookNext.click();
  if (event.key === 'ArrowLeft' && !bookPrev.disabled) bookPrev.click();
});

renderBook();
