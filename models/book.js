const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/BookStore');

let bookSchema = mongoose.Schema({
    book_name: String,
    book_author: String,
    book_id: Number,
    book_price: Number,
    book_desc: String,
    book_atlas: Number
})

module.exports = mongoose.model('book', bookSchema);
