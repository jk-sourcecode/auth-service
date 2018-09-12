const user = require('../lib/user')
const { errorMessage } = require('../lib/common')
const jwt = require('../lib/jwt')
const { isUndefined } = require('lodash')

module.exports = (router) => {
    router.post('/login', (req, res) => {
        try {

            if (!isUndefined(req.body) && !isUndefined(req.body.username) && !isUndefined(req.body.password)) {

                user.validate(req.body.username, req.body.password).then(valid => {

                    if (valid) {
                        let toekn = jwt.createToken({ status: 'success', username: req.body.username }, 'admin', { expiresIn: 60 })
                        res.status(200).json({
                            status: 'success',
                            jwt: toekn
                        })
                    }
                    else {
                        res.status(401).json(errorMessage('Invalid username/password'))
                    }

                }).catch(err => {
                    res.status(401).json(errorMessage('Invalid username/password'))
                })

            }
            else {
                res.status(500).json(errorMessage('Invalid input'))
            }

        } catch (err) {
            res.status(500).json(errorMessage(err))
        }

    })
    return router
}