// Esercizio: Sistema di Gestione di una Biblioteca con Programmazione ad Oggetti in JavaScript
// 
// 
// Obiettivo:Creare un sistema di gestione di una biblioteca
// Requisiti:

//     Classi Principali:
//         Book: Rappresenta un libro generico.
//         PhysicalBook: Eredita da Book e rappresenta un libro fisico con una posizione sugli scaffali.
//         EBook: Eredita da Book e rappresenta un libro elettronico con un formato di file.
//         User: Rappresenta un utente della biblioteca.
//         PremiumUser: Eredita da User e rappresenta un utente premium con un limite massimo di libri che può prendere in prestito estendibile.
//         Library: Gestisce i libri e gli utenti della biblioteca.

//     Proprietà e Metodi:
//         Book:
//             Proprietà: title, author, isbn
//             Metodi: toString().
//         PhysicalBook:
//             Proprietà aggiuntiva: shelfLocation.
//         EBook:
//             Proprietà aggiuntiva: fileFormat.
//         User:
//             Proprietà: name, id, borrowedBooks, maxBorrowLimit(statica) = 3
//             Metodi: borrowBook(book), returnBook(book), borrowedBooksNumber(getter).
//         PremiumUser:
//             Metodo aggiuntivo: extendBorrowLimit(newLimit).
//         Library:
//             Proprietà: books, users.
//             Metodi: addBook(book), removeBook(book), isBookAvailable(isbn), addUser(user), removeUser(user), listBooks(), listUsers(), borrowBook(user, book), returnBook(user, book).

//     Funzionalità:
//         Aggiungere e rimuovere libri dalla biblioteca.
//         Aggiungere e rimuovere utenti dalla biblioteca.
//         Gestire il prestito e la restituzione dei libri agli utenti.
//         Visualizzare l'elenco dei libri disponibili e degli utenti registrati.


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toString() {
        const bookString = `Titolo:${this.title}/n Autore:${this.author}/n Codice ISBN:${this.isbn}`
        return bookString;
    }
}

class PhysicalBook extends Book {
    constructor(title, author, isbn, shelfLocation) {
        super(title, author, isbn);
        this.shelfLocation = shelfLocation;
    }
}

class EBook extends Book {
    constructor(title, author, isbn, fileFormat) {
        super(title, author, isbn);
        this.fileFormat = fileFormat;
    }
}

class User {
    static maxBorrowLimit = 3;
    constructor(name, id, borrowedBooks) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }

    borrowBook(book) {
        if (this.borrowedBooks.length < User.maxBorrowLimit) {
            this.borrowedBooks.push(book.title);
            return this.borrowedBooks;
        } else {
            console.log('numero massimo di libri in prestito raggiunto')
        }
    }

    returnBook(book) {

        if (this.borrowedBooks.includes(book.title)) {
            const index = this.borrowedBooks.indexOf(book.title)
            this.borrowedBooks.splice(index, index + 1);
            return 'titolo restituito';
        } else {
            return 'titolo non presente nella tua libreria';
        }
    }

    get borrowedBooksNumber() {
        return this.borrowedBooks.length;
    }
}

class PremiumUser extends User {
    ??? extendBorrowLimit;
constructor(name, id, borrowedBooks) {

}
}



const libro1 = new Book("Titolissimo", "Degno Autore", "1564685231");
const libro2 = new Book("Titolo indecente", "Uncane Indigno", "15646168591");
console.log(libro1);

const user1 = new User('pippo', 1, ['Titolo meno bello', 'Titolo mediamente interessante']);
console.log(user1);
console.log(user1.borrowBook(libro1));
console.log(user1.returnBook(libro1));
console.log(user1.returnBook(libro2));

console.log(user1.borrowedBooksNumber);


