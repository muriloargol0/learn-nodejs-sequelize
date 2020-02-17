'use strict';

// MIGRATION MANUAL: https://sequelize.org/master/manual/migrations.html

//yarn sequelize db:migrate

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('techs', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       }, 
       name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
      });
    /* MORE INFORMATIONS ABOUT DATATYPES: https://sequelize.org/v5/manual/data-types.html */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('techs');
  }
};
