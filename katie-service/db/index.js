const mysql = require('mysql2');
const Sequelize = require('sequelize');

const db_reviews = new Sequelize('product_reviews', process.env.HART_DB_USER || 'root', process.env.HART_DB_PASS || '', {
  dialect: 'mysql',
  host: process.env.HART_DB_HOST || 'localhost',
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
