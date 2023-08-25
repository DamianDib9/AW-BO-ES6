import { Library } from './library.js';

function emptyForm() {
  const $form = document.querySelector('.addForm');
  $form.reset();
}

function addBookToLibrary(myLibrary) {
  const $captureTitle = document.querySelector('#title');
  const $captureAuthor = document.querySelector('#author');
  myLibrary.addBook($captureTitle.value, $captureAuthor.value);
  emptyForm();
}

export function setupBookForm(myLibrary) {
  const $form = document.querySelector('.addForm');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(myLibrary);
  });
}
