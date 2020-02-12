const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const cnn = new Sequelize(dbConfig);

User.init(cnn);
Address.init(cnn);
Address.associate(cnn.models);

// To automatize this step, we can use two tools: npm Consign or npm require-directory

module.exports = cnn;