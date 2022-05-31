const {conn, Type_of_operation, User} = require('./src/db');
require('dotenv').config();
const {ADMIN_EMAIL, ADMIN_PASSWORD} = process.env;
const server = require('./src/app');

conn.sync({force: true}).then(() => {
    server.listen(3001, () => {
        console.log('Server listening on port 3001!');

        let typeIncome = Type_of_operation.create({
            name: "income"
        });
    
        let typeOutflow = Type_of_operation.create({
            name: "outflow"
        });
    
        Promise.all([typeIncome, typeOutflow])
        .then( () => {
            console.log("Preloaded operation types");
        });

        const adminUser = User.create({
            name: 'Admin',
            lastname: 'Admin',
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
            gender: 'male'
        });
        adminUser.then(() => console.log('Registered administrator user'))
        .catch(err => console.log(err));
    });
});