const express = require('express');
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router();
const successController = require('../controllers/success').successController;

// /admin/add-product => GET
router.get('/add-product', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
  
router.get('/contact', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.get('/success', successController);

// /admin/add-product => POST
router.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;