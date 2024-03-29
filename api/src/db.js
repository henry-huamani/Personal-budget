require('dotenv').config();
const {Sequelize} = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/personal_budget`, {
    logging: false,
    native: false
});

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
.filter( file => file.indexOf('.') !== 0 && file !== basename && 
    file.slice(-3) === '.js')
.forEach( file => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
});

modelDefiners.forEach( model => model(sequelize));

const {Operation, Type_of_operation, User} = sequelize.models;

//One-to-many relationship
Type_of_operation.hasMany(Operation);
Operation.belongsTo(Type_of_operation);

//One-to-many relationship
User.hasMany(Operation);
Operation.belongsTo(User);

module.exports = {
    ...sequelize.models,
    conn: sequelize
};