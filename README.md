# 📚 Book Store API

A simple Node.js + Express + MongoDB application for managing books and their reviews.

---

## 🚀 Features

- Add a new book
- View all books
- Submit reviews for a book
- View all reviews
- Get a review by review ID

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

---

## 📁 Project Structure

Book-Store/
├── app.js # Main application file
├── models/
│ ├── book.js # Book schema
│ └── bookreview.js # Review schema
└── package.json


---

## 📦 Install Dependencies

```bash
npm install

mongodb://127.0.0.1:27017/BookStore

node app.js


POST /book-post
Content-Type: application/json
Body:
{
  "book_name": "Book Title",
  "book_id": 101,
  "book_author": "Author Name",
  "book_price": 499,
  "book_desc": "Description here"
}


POST /book-reviews/:id
Content-Type: application/json
Body:
{
  "bookReview": "Nice book!",
  "bookRating": "5 stars"
}


GET /all-books


GET /all-reviews


GET /review/:id
