const jwt = require('jsonwebtoken')

module.exports = {
    createToken: (payload, secret, expiry) => {
       return jwt.sign(payload, secret, { expiresIn: expiry })
    },
    createToken: (payload, secret) => {
       return jwt.sign(payload, secret)
    }
}