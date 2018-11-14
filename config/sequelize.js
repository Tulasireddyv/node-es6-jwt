const Sequelize = require('sequelize');
const config = require('./env');

// Set up the config
const config = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

sequelize.authenticate();

module.exports = { sequelize, Sequelize };

