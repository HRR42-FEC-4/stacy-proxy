const Sequelize = require('sequelize');
const user = process.env.HART_DB_USER || 'root';
const pass = process.env.HART_DB_PASS || '';
const host = process.env.HART_DB_HOST || 'localhost';

const db = new Sequelize(`mysql://${user}:${pass}@${host}:3306/artcom`);

module.exports = {db, Sequelize};

