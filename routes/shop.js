const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) =>{
    res.send('<h>Hello From Express!</h>');
});

module.exports = router;