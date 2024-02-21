const { StatusCodes } = require('http-status-codes')
const User = require('../models/user')

const register = async (req, res) => {
    console.log(req.body)
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ action: 'Register', success: 'OK', username: user.username, token: token})  
}

const login = async (req, res) => {
    res.status(StatusCodes.OK).json({ action: 'login', success: 'OK' })
}

module.exports = {
    register,
    login
}