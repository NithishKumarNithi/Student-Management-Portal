const express = require('express');
const router = require('./controller');
const app = express();
// database
const database = require('./db');
const port = 9999;

// views
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use('/',router)

// Database Connect
console.log("Database Connecting ...");
database.connect();

// Listening
app.listen(port, () => {
    console.log(`I am listening on port ${port}`);
});
