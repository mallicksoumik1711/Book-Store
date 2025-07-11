const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const bookModel = require('./models/book');
const bookReviewModel = require('./models/bookreview');

app.get('/', function(req, res){
    res.send("not checking continously");
})

app.get('/home-page', function(req, res){
    res.send('Home Page');
})

// from here all the routes are there

app.get('/all-books', async function(req, res){
    let allBooks = await bookModel.find();
    res.send(allBooks);
})

app.get('/review/:id', async function(req, res){
    let bookReview = await bookReviewModel.findOne({_id: req.params.id});
    res.send(bookReview);
})

app.get('/all-reviews', async function(req, res){
    let allReviews = await bookReviewModel.find();
    res.send(allReviews);
})

app.post('/book-post', async function(req, res){
    let {book_name, book_id, book_author, book_desc, book_price} = req.body;

    let createdBook = await bookModel.create({
        book_name,
        book_id,
        book_author,
        book_price,
        book_desc
    })

    res.send(createdBook);
})

app.post('/book-reviews/:id', async function(req, res){
    let {bookReview, bookRating} = req.body;
    // check before updating the books based onthe id
    let review = await bookReviewModel.create({
        bookReview,
        bookRating
    })
    res.send(review);
})

app.listen(3000, function(err){
    console.log("Working");
})
