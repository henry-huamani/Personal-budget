const {conn, Type_of_operation} = require('./src/db');
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
    });
});