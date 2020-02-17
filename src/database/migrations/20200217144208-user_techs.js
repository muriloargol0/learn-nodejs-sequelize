'use strict';

// MIGRATION MANUAL: https://sequelize.org/master/manual/migrations.html

//yarn sequelize db:migrate

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_techs', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       }, 
       user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          //references = create a foreign key
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
       },
       tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //references = create a foreign key
        references: { model: 'techs', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('user_techs');
  }
};
