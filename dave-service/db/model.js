const mysql = require('mysql')
const Sequelize = require('sequelize');

// create connection to database
const sequelize = new Sequelize('hart', 'root', null, {
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  }
});

// create Model to replicate table in database
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  imageURLs: {
    type: Sequelize.JSON,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
});

module.exports = Product;