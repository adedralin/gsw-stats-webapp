const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const PORT = 3000;
const routes = require('./routes/routes');
const path = require('path');


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

// Routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});