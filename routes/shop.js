const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require("./admin");

router.get('/', (req, res,next) => {
    res.render('shop', {prods: adminData.products, path: '/'})
})

module.exports = router