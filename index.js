const express = require('express');
const hbs = require('express-handlebars');
const {catalog} = require('./controllers/catalog.js')
const port = 5000;
const app = express();
app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use('/static', express.static('static'));

app.get('/',catalog)
app.listen(port, () => console.log(`Server is on port ${port}`));