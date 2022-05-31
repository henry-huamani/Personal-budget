const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('User', {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('female', 'male'),
            allowNull: false
        }
    }, {
        defaultScope: {
            attributes: {exclude: ['password']}
        },
        timestamps: false
    });
}