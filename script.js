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

const notebook = document.querySelector('.notebook');
const notebookTrigger = document.querySelector('.notebook-trigger');
const notebookPages = document.querySelector('.notebook-pages');
const notebookClose = document.querySelector('.notebook-close');

function setNotebook(open) {
  notebook?.classList.toggle('is-open', open);
  notebookTrigger?.setAttribute('aria-expanded', String(open));
  notebookPages?.setAttribute('aria-hidden', String(!open));
}

notebookTrigger?.addEventListener('click', () => {
  setNotebook(!notebook.classList.contains('is-open'));
});

notebookClose?.addEventListener('click', () => setNotebook(false));

notebookPages?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setNotebook(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setNotebook(false);
});
