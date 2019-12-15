const express = require('express');
const Product = require('../db/model.js');
const morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(__dirname + '/../public'));

// API calls
app.get('/product/:id', (req, res) => {
  Product.findByPk(req.params.id)
    .then( (product) => {
      product.imageURLs = JSON.parse(product.imageURLs);
      res.status(200).send(product);
    })
    .catch(err => {
      console.log(err)
      res.status(404).send();
    })
});

const port = 3001;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});