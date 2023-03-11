/*
1. DOM Selection
2. Add EventListner
3. Basic Validation
4. Creating Elements
5. Append child
*/ 

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.getElementById('add-btn');
const bookList = document.getElementById('book-list');

btn.addEventListener('click', function(e){
    e.preventDefault();
    // console.log('add button clicked')
    if(
        title.value == ''
        &&
        author.value == ''
        &&
        year.value == ''
        ){
            alert('Please provide a valid Input')
        }
        else{
            const newRow = document.createElement('tr');

            // crating new title
            const newTitle = document.createElement('th');
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);
            title.value = '';

            // crating new title
            const newAuthor = document.createElement('th');
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);
            author.value = '';

            // crating new title
            const newYear = document.createElement('th');
            newYear.innerHTML = year.value;
            newRow.appendChild(newYear);
            year.value = '';


            // append child to the parent tbody
            bookList.appendChild(newRow)
        }
})

// press enter key to go
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("add-btn").click();
    }
  });