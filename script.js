let library = [
    {author: "Author Lastname1", title: "Book1", numPages: 240, isRead: true},
    {author: "Author Lastname2", title: "Book2", numPages: 124, isRead: false},
    {author: "Author Lastname3", title: "Book3", numPages: 224, isRead: false},
    {author: "Author Lastname4", title: "Book4", numPages: 345, isRead: true},
];

const newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', () => {
    console.log('clicked');
});

displayEachBook();

function Book(author, title, numPages, isRead) {
    author,
    title,
    numPages,
    isRead
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