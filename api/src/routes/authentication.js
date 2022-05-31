const router = require('express').Router();
const {User} = require('../db');
const {generateAccessToken, validateAdmin} = require('./authentication_functions');

router.post('/register', async(req, res, next) => {
    const {name, lastname, email, password, gender} = req.body;
    try {
        if(name && lastname && email && password && gender){
            await User.create({
                name,
                lastname,
                email,
                password,
                gender
            }).then(() => {
                res.status(201).send({
                    data: {
                        msg: 'Successfully registered user'
                    }
                });
            });
            return;
        }
        res.status(400).send({
            error: {
                code: 400,
                msg: 'Missing data'
            }
        });

    } catch (error) {
        next(error);
    }
});

router.post('/login', async(req, res, next) => {
    const {email, password} = req.body;
    try {
        if(email && password){
            const user = await User.findOne({
                where: {
                    email,
                    password
                }
            });
            if(user){
                const accessToken = generateAccessToken({id: user.id, email: user.email});
                return res.json({
                    data: {
                        msg: 'Authenticated user',
                        user: user,
                        token: accessToken
                    }
                });
            }
            return res.status(401).json({
                error: {
                    code: 401,
                    msg: 'User not found'
                }
            });
        }
        res.status(400).send({msg: 'Missing data'});
    } catch (error) {
        next(error);
    }
});

router.get('/users', validateAdmin, async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        next(error);
    }
})

module.exports = router;