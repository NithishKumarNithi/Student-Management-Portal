const express = require('express');
const app = express();
const port = 9999;

// views
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.render('index');
})

// Listening
app.listen(port, () => {
    console.log(`I am listening on port ${port}`);
});
