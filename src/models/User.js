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
}

module.exports = User;