const express = require('express');
const hbs = require('hbs');

const app = express();

const PORT = 3000;
const movies = require('./moviesData');

//SET TEMPLATING ENGINE
app.set('view engine', 'hbs');

//SET VIEWS DIRECTORY
app.set('views', __dirname + '/views');

//SET FOLDER FOR STATIC FILES
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

//ROUTES

//START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running`);
});
