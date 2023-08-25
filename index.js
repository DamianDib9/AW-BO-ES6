import { Library } from './modules/library.js';
import { setupBookForm } from './modules/bookForm.js';
import { displayBooks } from './modules/display.js';
import { setupNavigation } from './modules/navigation.js';
import time from './modules/time.js';

const mytime = document.querySelector('.mytime');

document.addEventListener('DOMContentLoaded', () => {
  const myLibrary = new Library();

  setupBookForm(myLibrary);
  displayBooks(myLibrary);
  setupNavigation();
  time(mytime);
});
