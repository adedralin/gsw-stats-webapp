const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const config = require('./modules/config');
const routes = require('./routes/routes');
const path = require('path');
const { connectDB } = require('./modules/db'); // Import connectDB function

const app = express();

// Set up Handlebars
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to the database
connectDB(); // Connect to the database before setting up routes

// Routes
app.use('/', routes);

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});


/*
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const config = require('./modules/config');

const app = express();

// Set up Handlebars
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main', extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/', routes);

// Export the app for testing or external use
module.exports = app;
*/