const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res,next) => {
    res.render('add-product', {path: '/admin/add-product'})
})

router.post('/product', (req, res,next) => {
    console.log(products)
    products.push({ title: req.body.title})
    res.redirect('/');
})

exports.router = router
exports.products = products