const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const cnn = new Sequelize(dbConfig);

User.init(cnn);

module.exports = cnn;