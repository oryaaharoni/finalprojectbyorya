const jwt = require('jsonwebtoken');

const secretKey = "hxdodcnio67sa6hgsgh768sbui8sa";

const VerifyToken = async (req, res, next) => {
    
    if (req.headers.authorization) {
        let token = req.headers.authorization;

        if (token) {

            const payload = await jwt.verify(token, secretKey);
            console.log(payload);
            next();
        }
        else {
            return res.status(401).send("authorization error!");
        }
    }
    else {
        return res.status(401).send("authorization error!");
    }
};

module.exports = { secretKey, VerifyToken };