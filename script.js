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
