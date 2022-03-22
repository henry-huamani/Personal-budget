const router = require('express').Router();
const {Operation, Type_of_operation} = require('../db');

router.get('/', async(req, res) => {
    const {last} = req.query;

    if(last && isNaN(parseInt(last)) === false){
        const operations = await Operation.findAll({
            include: Type_of_operation,
            order: [
                ['id', 'DESC']
            ],
            limit: last,
        });
        operations.sort((a, b) => a.id - b.id);
        return res.send(operations);
    }

    else if(last && isNaN(parseInt(last)) === true){
        return res.send([]);
    }

    const operations = await Operation.findAll({
        include: Type_of_operation,
        order: [
            ['id']
        ],
    });
    res.send(operations);
});

module.exports = {
    operations: require('./operations'),
    index: router
}