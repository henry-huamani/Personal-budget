const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Type_of_operation', {
        name: {
            type: DataTypes.ENUM('income', 'outflow'),
            unique: true
        }
    }, {
        timestamps: false
    });
}