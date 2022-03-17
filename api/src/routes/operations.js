const router = require('express').Router();
const {Operation, Type_of_operation} = require('../db');

router.get('/:typeOperation', async(req, res, next) => {
    const {typeOperation} = req.params;

    try{
        if(typeOperation === 'income' || typeOperation === 'outflow'){
            const operations = await Operation.findAll({
                include: Type_of_operation,
                where: {
                    TypeOfOperationId: typeOperation === 'income'? 1 : 2
                }
            });
            return res.send(operations);
        }
        next();

    } catch(err){
        next(err);
    }
});

module.exports = router;