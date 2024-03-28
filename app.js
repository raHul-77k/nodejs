const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const app = express();

const adminRouters = require('./routes/admin')
const shopRouters = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRouters);
app.use(shopRouters);

app.use((req, res, next) =>{
  res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'))
});

app.listen(3000)
