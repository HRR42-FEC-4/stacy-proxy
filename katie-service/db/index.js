const mysql = require('mysql2');
const Sequelize = require('sequelize');

const db_reviews = new Sequelize('product_reviews', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
})

db_reviews
  .authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db_reviews;
