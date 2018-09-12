module.exports = {
    /**
     * Validate the user
     *
     * @param {*} userName
     * @param {*} password
     */
    validate: (userName, password) => {
        return new Promise((resolve, reject) => {
            if(userName === 'Admin' && password === 'Admin') {
                resolve(true)
            } else {
                reject(false)
            }
        })
    }
}