const {StatusCodes} = require('http-status-codes')


const register = async (req, res) => {
    res.status(StatusCodes.OK).json({action: 'register', success: 'OK'})
}

const login = async (req, res) => {
    res.status(StatusCodes.OK).json({action: 'login', success: 'OK'})
}

module.exports = {
    register,
    login
}