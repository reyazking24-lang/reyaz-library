/* BOOK SEARCH */

function searchBooks() {

    let input = document.getElementById("search");

    if (!input) return;

    let filter = input.value.toLowerCase();

    let books = document.querySelectorAll(".book-card");

    books.forEach(function(book) {

        let text = book.innerText.toLowerCase();

        if (text.includes(filter)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });
}


/* ISSUE BOOK */

function issueBook(event) {

    event.preventDefault();

    alert("✅ Book issued successfully!");

    event.target.reset();
}


/* RETURN BOOK */

function returnBook(event) {

    event.preventDefault();

    alert("✅ Book returned successfully!");

    event.target.reset();
}


/* CONTACT */

function sendMessage(event) {

    event.preventDefault();

    alert("✅ Your message has been sent successfully!");

    event.target.reset();
}


/* LOGIN */

function loginUser(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        alert("✅ Login successful!");

        window.location.href = "index.html";

    } else {

        alert("❌ Invalid username or password.\n\nDemo Login:\nUsername: admin\nPassword: 1234");

    }

}