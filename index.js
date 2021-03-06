const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { myVar: 'woohoo' });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/blog', (req, res) => {
    res.render('blog-generic.ejs');
})

app.get('/blog/:date', (req, res) => {
    const theDateTheyWant = req.params.date;
    res.render('blog', { date: theDateTheyWant });
});

// app.listen(8000);

app.listen(8000, () => {
    console.log('Server started');
});