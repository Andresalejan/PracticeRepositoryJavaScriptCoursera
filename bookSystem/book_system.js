let books = [];
let editIndex = null;

  function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                if (editIndex !== null) {
                    books[editIndex] = book;
                    editIndex = null;
                  } else {
                    books.push(book);
                  }
              
                showbooks();
                clearInputs();
                resetFormState();
            } else {
                alert('Please fill in all fields correctly.');
            }
        }

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>${book.name}</h1>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];
    editIndex = index;
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    document.getElementById('addBookBtn').textContent = 'Save Changes';
    document.getElementById('cancelEditBtn').style.display = 'inline-block';
  }

  function deletebook(index) {
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
  }

   function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }

 function resetFormState() {
    // modo "agregar"
    document.getElementById('addBookBtn').textContent = 'Add Book';
    document.getElementById('cancelEditBtn').style.display = 'none';
  }
  
  function cancelEdit() {
    editIndex = null;
    clearInputs();
    resetFormState();
  }