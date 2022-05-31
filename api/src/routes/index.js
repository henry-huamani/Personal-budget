const router = require('express').Router();
const {Operation, Type_of_operation, User} = require('../db');
const {validateToken} = require('./authentication_functions');

router.get('/', validateToken, async(req, res, next) => {
    const {last} = req.query;
    const {id} = req.user;

    try {
        if(last && isNaN(parseInt(last)) === false){
            const operations = await Operation.findAll({
                where: {
                    UserId: id
                },
                include: [Type_of_operation, User],
                attributes: {exclude: ['UserId']},
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
            where: {
                UserId: id
            },
            include: [Type_of_operation, User],
            attributes: { exclude: ['UserId']  },
            order: [
                ['id']
            ],
        });
        res.send(operations);
    } catch (error) {
        next(error);
    }
});

module.exports = {
    operations: require('./operations'),
    authentication: require('./authentication'),
    index: router
}