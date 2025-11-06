# 📚 BookVerse - GraphQL API

A modern **GraphQL Yoga + Node.js + MongoDB** API for managing and querying book data — clean, flexible, and built for scale.  

Built with ❤️ by **Jay**.

---

## 🚀 Tech Stack

| Layer | Tech |
|-------|------|
| Server | Node.js, Express |
| Database | MongoDB + Mongoose |
| API | GraphQL (Yoga) |
| Language | JavaScript (ESNext) |
| Tools | Nodemon, dotenv |

---

## ⚙️ Features

 Fully functional **GraphQL API** with Yoga  
 MongoDB CRUD (Create, Read, Update, Delete)  
 Pagination & advanced filtering  
 Author, publisher, and year-range search  
 Top-rated book analytics  
 Clean Mongoose schema with smart pre-hooks  
 Ready-to-serve API documentation UI (`books-api-dashboard.html`)

---

## 🧩 Folder Structure
```bash

📦 bookverse-api
┣ 📂 controllers
┃ ┗ 📜 bookController.js
┣ 📂 models
┃ ┗ 📜 bookModel.js
┣ 📂 resolvers
┃ ┗ 📜 resolvers.js
┣ 📂 schema
┃ ┗ 📜 schema.js
┣ 📂 public
┃ ┗ 📜 books-api-dashboard.html
┣ 📜 server.js
┣ 📜 .env
┣ 📜 .gitignore
┗ 📜 README.md

```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repo

```bash

git clone https://github.com/yourusername/bookverse-api.git
cd bookverse-api

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URI=mongodb://localhost:27017/bookverse
PORT=4000

4️⃣ Run the server
npm start

5️⃣ Visit the API
GraphQL Playground:
👉 http://localhost:4000/graphql
```
``` bash

API Dashboard (Docs):
👉 http://localhost:4000/

```

🔧 Available API Tasks

| Task | Description               | GraphQL Field                          | Type     |
| ---- | ------------------------- | -------------------------------------- | -------- |
| 1️⃣  | Get all books (paginated) | `books(limit, skip)`                   | Query    |
| 2️⃣  | Get book by ID            | `book(id)`                             | Query    |
| 3️⃣  | Search by keyword         | `searchBooks(keyword)`                 | Query    |
| 4️⃣  | Filter by author          | `booksByAuthor(author)`                | Query    |
| 5️⃣  | Filter by year range      | `booksByYearRange(startYear, endYear)` | Query    |
| 6️⃣  | Filter by publisher       | `booksByPublisher(publisher, limit)`   | Query    |
| 7️⃣  | Get top rated books       | `topRatedBooks(limit)`                 | Query    |
| 8️⃣  | Add a new book            | `addBook(book)`                        | Mutation |
| 9️⃣  | Update a book             | `updateBook(id, book)`                 | Mutation |
| 🔟   | Delete a book             | `deleteBook(id)`                       | Mutation |



 GraphQL Queries & Mutations
 
📜 Queries
``` bash

1️⃣ Fetch All Books
query {
  books(limit: 10, skip: 0) {
    title
    authors
    publisher
  }
}

2️⃣ Get Book by ID
query {
  book(id: "BOOK_ID_HERE") {
    title
    average_rating
    publication_date
  }
}

3️⃣ Search Books
query {
  searchBooks(keyword: "Harry Potter") {
    title
    authors
  }
}

4️⃣ Books by Author
query {
  booksByAuthor(author: "J.K. Rowling") {
    title
    publication_date
  }
}

5️⃣ Books by Year Range
query {
  booksByYearRange(startYear: 1990, endYear: 2000) {
    title
    publication_date
  }
}

6️⃣ Books by Publisher
query {
  booksByPublisher(publisher: "Scholastic", limit: 5) {
    title
    authors
  }
}

7️⃣ Top Rated Books
query {
  topRatedBooks(limit: 10) {
    title
    authors
    average_rating
  }
}

Mutations

8️⃣ Add New Book

mutation {
  addBook(book: {
    title: "New Era of Magic",
    authors: ["John Wick"],
    publisher: "Fantasy Works",
    average_rating: 4.9
  }) {
    title
  }
}

9️⃣ Update Book
mutation {
  updateBook(id: "BOOK_ID_HERE", book: {
    average_rating: 4.95
  }) {
    title
    average_rating
  }
}
🔟 Delete Book
mutation {
  deleteBook(id: "BOOK_ID_HERE")
}
```


🧾 License

This project is licensed under the MIT License — free to use, modify, and distribute.

### ✅ Notes
- This file follows **GitHub Markdown best practices** — all sections are properly scoped with code blocks and spacing.  
- Perfectly readable in **VS Code, GitHub, GitLab**.  
- Ready to paste as-is — no extra formatting needed.  
