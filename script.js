let library = [
    new Book("author100", "title100", 434, false),
    new Book("author1", "title1", 25, true),
    new Book("author2", "title2", 32, true),
    new Book("author3", "title3", 55, false),
    new Book("author4", "title4", 233, true),
];

displayEachBook();

const newBookButton = document.querySelector('#new-book');
const hiddenForm = document.querySelector('#hidden-form');
newBookButton.addEventListener('click', () => {
    hiddenForm.classList.toggle('hidden');
});

const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', () => {
    let authorText = document.querySelector('#authorInput').value;
    let titleText = document.querySelector('#titleInput').value;
    let numPagesText = document.querySelector('#numberPages').value;
    let isReadCheck = document.querySelector('#isRead').checked;
    let newBook = new Book(authorText, titleText, numPagesText, isReadCheck);
    library.push(newBook);
    refreshTable();
    displayEachBook();
});

function Book(author, title, numPages, isRead) {
    this.author = author,
    this.title = title,
    this.numPages = numPages,
    this.isRead = isRead
}

function addBookToLibrary(bookTitle) {
    library.push(bookTitle);
}

function displayEachBook() {
    library.forEach((bk) => {
        const table = document.querySelector("#books");
        let newRow = document.createElement("tr");
        let authorCell = document.createElement("td");
        let titleCell = document.createElement("td");
        let numPagesCell = document.createElement("td");
        let isReadCell = document.createElement("td");

        authorCell.textContent = bk.author;
        titleCell.textContent = bk.title;
        numPagesCell.textContent = bk.numPages;
        isReadCell.textContent = bk.isRead;

        table.appendChild(newRow);
        newRow.appendChild(authorCell);
        newRow.appendChild(titleCell);
        newRow.appendChild(numPagesCell);
        newRow.appendChild(isReadCell);
    });
}

function refreshTable() {
    const bookTable = document.querySelector('#books');
    while (bookTable.firstChild) {
        bookTable.removeChild(bookTable.firstChild);
    }
    const tr = document.createElement('tr');
    const thAuthor = document.createElement('th');
    thAuthor.textContent = "Author";
    const thTitle = document.createElement('th');
    thTitle.textContent = "Title";
    const thPage = document.createElement('th');
    thPage.textContent = "Page Count";
    const thRead = document.createElement('th');
    thRead.textContent = "Read";

    bookTable.appendChild(tr);
    tr.appendChild(thAuthor);
    tr.appendChild(thTitle);
    tr.appendChild(thPage);
    tr.appendChild(thRead);
}