import {
  getBooks,
  getBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
  getBooksByAuthor,
  getBooksByYearRange,
  searchBooksByKeyword,
  getBooksByPublisher,
  getTopRatedBooks,
} from "../controllers/bookController.js";

export const resolvers = {
  Query: {
    // =====================
    // Queries
    // =====================

    // Get all books (with pagination)
    books: async (_, { limit = 10, skip = 0 }) => {
      return await getBooks(limit, skip);
    },

    // Get a single book by ID
    book: async (_, { id }) => {
      return await getBookById(id);
    },

    // Search books by title, author, publisher, or language
    searchBooks: async (_, { keyword }) => {
      return await searchBooksByKeyword(keyword);
    },

    // Get books by a specific author
    booksByAuthor: async (_, { author }) => {
      return await getBooksByAuthor(author);
    },

    // Get books published between specific years
    booksByYearRange: async (_, { startYear, endYear }) => {
      return await getBooksByYearRange(startYear, endYear);
    },

    // Get top N books from a publisher
    booksByPublisher: async (_, { publisher, limit }) => {
      return await getBooksByPublisher(publisher, limit);
    },

    // Get top N rated books
    topRatedBooks: async (_, { limit = 10 }) => getTopRatedBooks(limit),
  },

  Mutation: {
    // =====================
    // Mutations
    // =====================

    // Add a new book
    addBook: async (_, { book }) => {
      return await addNewBook(book);
    },

    // Update an existing book by ID
    updateBook: async (_, { id, book }) => {
      return await updateBookById(id, book);
    },

    // Delete a book by ID
    deleteBook: async (_, { id }) => {
      return await deleteBookById(id);
    },
  },
};
