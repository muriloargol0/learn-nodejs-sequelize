const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const cnn = new Sequelize(dbConfig);

User.init(cnn);
Address.init(cnn);
Tech.init(cnn);

User.associate(cnn.models);
Address.associate(cnn.models);
Tech.associate(cnn.models);

// To automatize this step, we can use two tools: npm Consign or npm require-directory

module.exports = cnn;