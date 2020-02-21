const mysql = require('mysql')
const Sequelize = require('sequelize');

// Create connection to database
const sequelize = new Sequelize('hart', process.env.HART_DB_USER || 'root', process.env.HART_DB_PASS || '', {
  dialect: 'mysql',
  host: process.env.HART_DB_HOST || 'localhost',
  logging: false,
  define: {
    timestamps: false
  }
});

// Create model to replicate table in database
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
