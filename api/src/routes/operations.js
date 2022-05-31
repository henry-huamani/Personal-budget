const router = require('express').Router();
const {Operation, Type_of_operation} = require('../db');
const {validateToken} = require('./authentication_functions');

router.get('/:typeOperation', validateToken, async(req, res, next) => {
    const {typeOperation} = req.params;
    const {id} = req.user;

    try{
        if(typeOperation === 'income' || typeOperation === 'outflow'){
            const operations = await Operation.findAll({
                include: Type_of_operation,
                where: {
                    UserId: id,
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

router.post('/', validateToken, async(req, res, next) => {
    const {concept, amount, date, TypeOfOperationId} = req.body;
    const {id} = req.user;

    try{
        if(concept && amount && TypeOfOperationId){
            await Operation.create({
                concept,
                amount,
                date
            }).then( operation => {
                operation.setType_of_operation(TypeOfOperationId);
                operation.setUser(id)
                res.send(operation);
            });
            return;
        }
        res.status(400).send({msg: 'Missing data'});

    } catch(err){
        next(err);
    }
});

router.put('/', validateToken, async(req, res, next) => {
    const {id, concept, amount, date} = req.body;
    try{
        if(id && concept && amount){
            const operation = await Operation.update({concept, amount, date}, {
                where: {id}
            });
            return res.send(operation);
        }
        res.json('Missing data');

    } catch(err){
        next(err);
    }
});

router.delete('/clear/:id', validateToken, async(req, res, next) => {
    const {id} = req.params;

    try{
        if(isNaN(parseInt(id)) === false){
            return res.json(await Operation.destroy({
                where: {id}
            })
            );
        }
        next();
    } catch(err){
        next(err);
    }
});

module.exports = router;