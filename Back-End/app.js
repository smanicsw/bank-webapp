require('dotenv').config()
const express = require('express')
const app = express()

// middleware
const notFoundMiddleware = require('./middleware/not-found')

app.use(express.json())

// database connection
const dbConnect = require('./database/db-connection')

// routers
const authRouter = require('./routes/auth')



// routes
app.use('/api/v1/auth', authRouter)


app.use(notFoundMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await dbConnect(process.env.URL)
        console.log('Connected to Database')
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

start()
