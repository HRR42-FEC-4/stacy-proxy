const Sequelize = require('sequelize');
const db_reviews = require('../index');

const Product = db_reviews.define('product', {
  product_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
});

module.exports = Product;
