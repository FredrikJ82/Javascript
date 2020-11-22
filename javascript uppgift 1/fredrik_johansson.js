"use strict";

function Book(titel, genre, sidor, isbn) {
  this.titel = titel;
  this.genre = genre;
  this.sidor = sidor;
  this.isbn = isbn;

  this.getBookInfo = function () {
    return console.log(
      "Bok: " +
        this.titel +
        "\nÄmne: " +
        this.genre+
        "\nSidor: " +
        this.sidor +
        "\nISBN: " +
        this.isbn +
        "\n-----"
    );
  };
}

let books = [];

books.push(new Book("A Game of Thrones", "Fantasy", 807, "978-0-00-647988-8"));
books.push(new Book("A Feast for Crows", "Fantasy", 778, "978-0-00-548612-1"));
books.push(new Book("A Dance with Dragons", "Fantasy", 1184, "978-0-00-648611-4"));


let nrMedBocker = prompt("Hur många böcker vill du lägga till?", "1,2,3...");
for (let i = 1; i <= nrMedBocker; i++) {

  let laggTillBok = prompt("Titel: ");
  let laggTillGenre = prompt("Genre: ");
  let laggTillSidor = prompt("Antal sidor: ");
  let laggTillIsbn = prompt("ISBN Nummer: ");
  books.push(new Book(laggTillBok, laggTillGenre, laggTillSidor, laggTillIsbn));
}

books.forEach(function (e) {
  e.getBookInfo();
});