
/* PAGE 1: HOME */

// Change the main heading
function changeHeading() {
    document.getElementById("mainHeading").textContent =
        "Welcome to Your Reading Community!";
}

// Change the first featured book card colour
function changeCardColor() {
    document.getElementById("book1").classList.toggle("highlight");
}

// Show or hide featured books
function toggleBooks() {
    document.getElementById("featuredBooks").classList.toggle("hidden");
}


/* PAGE 2: BROWSE BOOKS */

// Mark a book as requested
function requestBook(button) {
    button.textContent = "Request Sent";
    button.disabled = true;

    let card = button.parentElement;
    let message = card.querySelector(".message");

    message.textContent =
        "Your request has been sent successfully!";
}

// Display the entered book title
function showBook() {
    let title = document.getElementById("bookTitle").value.trim();
    let display = document.getElementById("displayBook");
    let message = document.getElementById("titleMessage");

    if (title === "") {
        display.textContent = "";
        message.textContent = "Please enter a book title first.";
        message.classList.add("error");
        return;
    }

    display.textContent = "Book Title: " + title;
    message.textContent = "Book title submitted successfully!";
    message.classList.remove("error");
}

// Change the appearance of the first browse card
function changeCard() {
    document.getElementById("book1").classList.toggle("changed");
}


/* PAGE 3: LIST A BOOK */

// Change the form heading font size
function changeFormHeading() {
    let heading = document.getElementById("formHeading");

    if (heading.style.fontSize === "36px") {
        heading.style.fontSize = "28px";
    } else {
        heading.style.fontSize = "36px";
    }
}

// Show or hide the form
function toggleListingForm() {
    document.getElementById("formContainer").classList.toggle("hidden");
}

// Submit the book listing
function submitListing(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let title = document.getElementById("listingTitle").value.trim();
    let author = document.getElementById("author").value.trim();
    let category = document.getElementById("category").value;
    let condition = document.getElementById("condition").value;

    let message = document.getElementById("formMessage");

    // Check whether any required field is empty
    if (
        name === "" ||
        title === "" ||
        author === "" ||
        category === "" ||
        condition === ""
    ) {
        message.textContent =
            "Error: Please fill in all required fields.";
        message.classList.add("error");
        return;
    }

    // Display personalised confirmation
    message.textContent =
        "Thank you, " + name + "! Your book '" + title +
        "' by " + author + " has been listed successfully. " +
        "Category: " + category + ". Condition: " + condition + ".";

    message.classList.remove("error");

    // Clear the form after successful submission
    document.getElementById("bookForm").reset();
}
