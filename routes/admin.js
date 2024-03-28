const express = require('express');
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
  
router.get('/contact', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.get('/success', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

// /admin/add-product => POST
router.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;