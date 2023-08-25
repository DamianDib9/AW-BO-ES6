export class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('library')) || [];
  }

  addBook(title, author) {
    const newBook = { title, author };
    this.books.push(newBook);
    this.updateLocalStorage();
    this.displayBooks();
  }

  deleteBook(index) {
    this.books.splice(index, 1);
    this.updateLocalStorage();
    this.displayBooks();
  }

  updateLocalStorage() {
    localStorage.setItem('library', JSON.stringify(this.books));
  }

  displayBooks() {
    const $books = document.querySelector('.displayLibrary');
    $books.innerHTML = '';

    this.books.forEach((book, index) => {
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

      $delete.addEventListener('click', () => this.deleteBook(index));

      $books.appendChild($contBook);
    });
  }
}
