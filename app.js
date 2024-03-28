const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const errorController = require('./controllers/error.js')

const app = express();

const adminRouters = require('./routes/admin')
const shopRouters = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRouters);
app.use(shopRouters);

app.use(errorController.get404);

app.listen(3000)
