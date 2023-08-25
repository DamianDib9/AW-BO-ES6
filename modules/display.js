import { Library } from './library.js';

export function displayBooks(myLibrary) {
  const $books = document.querySelector('.displayLibrary');
  $books.innerHTML = '';

  myLibrary.books.forEach((book, index) => {
    const $contBook = document.createElement('div');
    const $title = document.createElement('h6');
    const $by = document.createElement('h6');
    const $author = document.createElement('h6');
    const $delete = document.createElement('button');
    $contBook.classList.add('cont-book');
    $title.classList.add('titleBook');
    $by.classList.add('by');
    $author.classList.add('authorBook');
    $delete.classList.add('delete');

    $title.innerText = `"${book.title}"`;
    $author.textContent = book.author;
    $by.textContent = 'by';
    $delete.innerHTML = 'Remove';

    $contBook.appendChild($title);
    $contBook.appendChild($by);
    $contBook.appendChild($author);
    $contBook.appendChild($delete);

    $delete.addEventListener('click', () => myLibrary.deleteBook(index));

    $books.appendChild($contBook);
  });
}
