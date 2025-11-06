import { createSchema } from "graphql-yoga";
import { resolvers } from "./resolvers.js";

export const schema = createSchema({
  typeDefs: `
    # =====================
    #  Book Type
    # =====================
    type Book {
      _id: ID!
      bookID: Int
      title: String!
      authors: [String]
      average_rating: Float
      isbn: Float
      isbn13: String
      language_code: String
      num_pages: Int
      ratings_count: Int
      text_reviews_count: Int
      publication_date: String
      publisher: String
      createdAt: String
      updatedAt: String
    }

    # =====================
    # Input Type
    # =====================
    input BookInput {
      bookID: Int
      title: String!
      authors: [String]
      average_rating: Float
      isbn: Float
      isbn13: String
      language_code: String
      num_pages: Int
      ratings_count: Int
      text_reviews_count: Int
      publication_date: String
      publisher: String
    }

    # =====================
    #  Queries
    # =====================
    type Query {
      # Get all books with pagination
      books(limit: Int, skip: Int): [Book]

      # Get a single book by its ID
      book(id: ID!): Book

      # Search books by keyword (title, authors, publisher)
      searchBooks(keyword: String!): [Book]

      # Get books by a specific author
      booksByAuthor(author: String!): [Book]

      # Get books published between specific years
      booksByYearRange(startYear: Int!, endYear: Int!): [Book]

      # Get top N books from a specific publisher
      booksByPublisher(publisher: String!, limit: Int): [Book]


       # Get top N rated books
      topRatedBooks(limit: Int): [Book]
    }

    # =====================
    # Mutations
    # =====================
    type Mutation {
      # Add a new book
      addBook(book: BookInput!): Book

      # Update an existing book by ID
      updateBook(id: ID!, book: BookInput!): Book

      # Delete a book by ID
      deleteBook(id: ID!): String
    }
  `,
  resolvers,
});
