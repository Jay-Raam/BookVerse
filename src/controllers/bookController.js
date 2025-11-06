import Love from "../models/bookModel.js";

// Get all books with pagination
export const getBooks = async (limit = 10, skip = 0) => {
  console.log("Fetching books with limit:", limit, "skip:", skip);
  const books = await Love.find().skip(skip).limit(limit);
  console.log("books", books);

  return books;
};

//  Get a single book by ID
export const getBookById = async (id) => {
  return await Love.findById(id);
};

// Add a new book
export const addNewBook = async (book) => {
  const newBook = new Love(book);
  return await newBook.save();
};

// Update a book by ID
export const updateBookById = async (id, book) => {
  return await Love.findByIdAndUpdate(id, book, { new: true });
};

// Delete a book by ID
export const deleteBookById = async (id) => {
  await Love.findByIdAndDelete(id);
  return "Book deleted successfully";
};

// Get books by a specific author
export const getBooksByAuthor = async (author) => {
  const regex = new RegExp(author, "i");
  return await Love.find({ authors: regex });
};

// Get books published between specific years
export const getBooksByYearRange = async (startYear, endYear) => {
  // publication_date stored as string like "9/16/2006"
  const regex = new RegExp(`\\b(${startYear}|${endYear})\\b`);
  return await Love.find({ publication_date: regex });
};

// Get books by publisher
export const getBooksByPublisher = async (publisher, limit = 10) => {
  const regex = new RegExp(publisher, "i");
  return await Love.find({ publisher: regex }).limit(limit);
};

// Search books across multiple fields
export const searchBooksByKeyword = async (keyword) => {
  const regex = new RegExp(keyword, "i");
  return await Love.find({
    $or: [
      { title: regex },
      { authors: regex },
      { publisher: regex },
      { language_code: regex },
    ],
  }).limit(20);
};

// Get top N rated books
export const getTopRatedBooks = async (limit = 10) => {
  return await Love.find().sort({ average_rating: -1 }).limit(limit);
};
