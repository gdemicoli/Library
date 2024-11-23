const myLibrary = []

function Book(title, author, numPages, haveRead){
    this.title = title
    this.author =author
    this.numPages = numPages
    this.haveRead = haveRead

    this.getInfo = function() {
        console.log(this.title + " by " + this.author + " with " + this.numPages + " pages " + this.haveRead)
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    myLibrary.map(element => element.getInfo())
}

const book1 = new Book("Game of Thrones", "George RR Martin", 757, true)

addBookToLibrary(book1)

displayBooks()

// book1.getInfo()

