const express = require('express');
const hbs = require('express-handlebars');
const { catalog } = require('./controllers/catalog.js');
const { about } = require('./controllers/about.js');
const { details } = require('./controllers/details.js');
const { create, post } = require('./controllers/create.js');
const { notFound } = require('./controllers/notFound.js');
const { init: storage } = require('./models/storage')

start();
async function start() {
    const port = 5000;
    const app = express();
    app.engine('.hbs', hbs({ extname: '.hbs' }));
    app.set('view engine', '.hbs');
    app.use('/static', express.static('static'));
    app.use(await storage());
    app.use(express.urlencoded({extended:false}))
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.post('/create', post);

    app.all('*', notFound);

    app.listen(port, () => console.log(`Server is on port ${port}`));
}
