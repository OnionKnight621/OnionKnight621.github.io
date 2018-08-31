//Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI(){

}

//Add a book to the list
UI.prototype.addBookToList = function(book){
    const list = document.querySelector('#book-list');
    //Create tr elem
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class='delete'>X</a?</td>
    `
    list.appendChild(row);
}

//Show alert
UI.prototype.showAlert = function(message, className){
    //Create div
    const div = document.createElement('div');
    //Add class
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //Insert alert
    container.insertBefore(div, form);

    //Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

//Delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//Clear fields
UI.prototype.clearFields = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

//Event listener for add book
document.querySelector('#book-form').addEventListener('submit', function (e) {
    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI obj
    const ui = new UI();

    //Validate 
    if(title === '' || author === '' || isbn === ''){
        //Error alert
        ui.showAlert('Pleare fill in all fields','error');
    }else{
        //Add book to list
        ui.addBookToList(book);

        //Show successs
        ui.showAlert('Book added', 'success')

        //Clear fields
        ui.clearFields();
    }
    

    e.preventDefault();
});

//Event listener for delete
document.querySelector('#book-list').addEventListener('click', function(e){
    //Instantiate UI obj
    const ui = new UI();
    //Delete book
    ui.deleteBook(e.target);
    //Show message
    ui.showAlert('Book removed', 'success');

    e.preventDefault();
});