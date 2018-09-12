const packageFile = require('../../package.json')


module.exports = {
    /**
     * Return package.json
     *
     * @returns
     */
    packageData: () => {
        return new Promise((resolve, reject) => {
            try {
                resolve(packageFile)
            }
            catch (err) {
                reject(err)
            }
        })
    },
    /**
     * Generate error response
     *
     * @param {Error} error
     * @returns
     */
    errorMessage: (error) => {
        return {
            status: 'Failure',
            error: error
        }
    }
}