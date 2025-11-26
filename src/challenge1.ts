// 1. create a type for "Book"
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// 2. create books array
const books: Book[] = [];

// 3. implement a function named "addBook"
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = { title, author, publicationYear };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

// 4. implement a function named "listBooks"
function listBooks(): void {
  console.log("All Books:");

  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

// 5. impelemnt a function named "searchBook"
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  console.log(`Search Results for "${title}":`);

  const results = books.filter((book) => book.title.includes(title));

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  results.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
