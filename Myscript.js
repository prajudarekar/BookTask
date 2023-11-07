function checksubmit() {
  var userInput = document.getElementById("searchinput").value;
  //  console.log("apiurl:: "+apiUrl);

  // const apiUrl =`http://openlibrary.org/search.json?q=${userInput}`;
  const apiUrl1 = "http://openlibrary.org/search.json?q=" + userInput;

  fetch(apiUrl1)
    .then((response) => response.json())
    .then((data) => {
      const bookContainer = document.getElementById("book-container");

      bookContainer.innerHTML = "";

      const books = data.docs;
      books.forEach((book) => {
        const card = document.createElement("div");
        card.className = "book-content-card";
        const cardTitle = document.createElement("div");
        cardTitle.className = "book-title";
        const cardAuthor = document.createElement("div");
        cardAuthor.className = "book-author";
        const cardType = document.createElement("div");
        cardType.className = "book-type";

        if (book.title || book.author_name || book.type) {
          cardTitle.textContent = book.title;
          cardAuthor.textContent = "By " + book.author_name;
          cardType.textContent = "Type:: " + book.type;
        } else {
          cardTitle.textContent = "no Book content";
        }

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardType);

        bookContainer.appendChild(card);
      });
      console.log("end");
      document.querySelectorAll(".searchinput").textContent = "";
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });
}
