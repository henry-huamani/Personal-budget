const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Operation', {
        concept: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false
    });
}