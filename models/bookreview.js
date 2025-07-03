const mongoose = require('mongoose');

let bookReviewSchema = mongoose.Schema({
    bookReview: String,
    bookRating: String,
    bookPublications: String
})

module.exports = mongoose.model('bookReview', bookReviewSchema);
