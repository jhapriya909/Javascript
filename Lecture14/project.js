
// Nested object
const library = {
    Fiction: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "The Tempest", author: "William Shakespeare", year: 1949 }
    ],
    NonFiction: [
        { title: "Atomic Habits", author: "James Clear", year: 2011 },
        { title: "Educated", author: "Tara Westover", year: 2018 }
    ],
    Fantasy: [
        { title: "Merchant of Venice", author: "William Shakespeare", year: 1997 },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ]
};
// Book search function
function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = [
        document.getElementById('card1')
        // document.getElementById('card2'),
        // document.getElementById('card3'),
    ];

    // Default message if no book is found
    cards.forEach(card => card.innerHTML = "Book not found");

    let resultIndex = 0;


    for (const genre in library) {
        const books = library[genre];
        for (const book of books) {
            if (book.title.toLowerCase().includes(searchTerm) || genre.toLowerCase().includes(searchTerm)) {
                if (resultIndex < cards.length) {
                    // Corrected template literal syntax
                    cards[resultIndex].innerHTML = `${book.title} by ${book.author} (${genre})`;
                    resultIndex++;
                }
            }
        }
    }
}


