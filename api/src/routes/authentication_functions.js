const jwt = require('jsonwebtoken');
require('dotenv').config();

const {AUTHENTICATION_KEY, ADMIN_EMAIL, ADMIN_PASSWORD} = process.env;

const generateAccessToken = (user) => {
    return jwt.sign(user, AUTHENTICATION_KEY, {expiresIn: '4h'});
}

const validateToken = (req, res, next) => {
    const accessToken = req.headers['authorization'];

    if(!accessToken) return res.status(401).json({
        error: {
            code: 401,
            msg: 'Access denied'
        }
    });
    else if(accessToken && accessToken.toLowerCase().startsWith('bearer')){
        const token = accessToken.substring(7);
        jwt.verify(token, AUTHENTICATION_KEY, (err, user) => {
            if(err) res.status(403).json({
                error: {
                    code: 403,
                    msg: 'Access denied, token expired or incorrect'
                }
            });
            else {
                req.user = user;
                next()
            };
        });
    }
}

const validateAdmin = (req, res, next) => {
    const accessToken = req.headers['authorization'];

    if(!accessToken) return res.status(401).json({
        error: {
            msg: 'Access denied'
        }
    });
    else if(accessToken && accessToken.toLowerCase().startsWith('bearer')){
        const token = accessToken.substring(7);
        jwt.verify(token, AUTHENTICATION_KEY, (err, user) => {
            if(err) return res.status(403).json({
                error: {
                    code: 403,
                    msg: 'Access denied, token expired or incorrect'
                }
            });

            if(user.email === ADMIN_EMAIL && user.password === ADMIN_PASSWORD){
                req.user = user;
                next()
            }
            else res.status(403).json({
                error: {
                    code: 403,
                    msg: 'Access denied, admin-only access'
                }
            });
        });
    }
}

module.exports = {
    generateAccessToken,
    validateToken,
    validateAdmin
}