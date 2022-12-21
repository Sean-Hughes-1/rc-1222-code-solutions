var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var openModalBtn = document.querySelector('.btn-open');
var closeModalBtn = document.querySelector('.btn-close');
var noBtn = document.querySelector('#no');
function openModel() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
openModalBtn.addEventListener('click', openModel);
closeModalBtn.addEventListener('click', closeModal);
noBtn.addEventListener('click', closeModal);
