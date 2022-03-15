const {conn, Type_of_operation} = require('./src/db');

conn.sync({force: true}).then(() => {
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