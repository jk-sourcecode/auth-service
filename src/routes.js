const common = require('./lib/common')

/**
 * Module to define all the routes
 * @param {*} app
 * @param {*} router
 * @returns
 */
module.exports = function (app, router) {
    /**
    * Endpoint for getting API information
    * @returns
    */
    app.get('/info', (req, res) => {

        common.packageData().then(result => {
            res.status(200).json({
                name: result.name,
                status: 'OK',
                version: result.version
            })
        }).catch(err => {
            res.status(500).json(common.ErrorMessage(err))
        })
    })

    /**
    * Endpoint for validating user and get JWT response back
    * @returns
    */
    app.use('/api', require('./controllers/user')(router))

    return app
}