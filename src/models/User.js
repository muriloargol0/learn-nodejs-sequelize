const { Model, DataTypes } = require('sequelize');

class User extends Model {
    // The sequelize parameter is the database connection that was set in database/index.js
    static init(sequelize){
        super.init({
            // The fields below represents all the fields who will be manipulated
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        //Telling to the user that the id field has an association with address
        //as = the name of association
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
    }
}

module.exports = User;