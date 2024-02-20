const mongoose = require('mongoose')


const dbConnect = async (URL) => {
    return mongoose.connect(URL)
}

module.exports = dbConnect