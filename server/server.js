const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config()
// const { readdirSync } = require('fs')
const dbConnection = require('./config/db')

const app = express()

// Connect to database
dbConnection()

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '20mb' }))
app.use(cors())

// readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

// http://localhost:3000/
app.use('/', require('./routes/index'))

// http://localhost:3000/courses
app.use('/courses', require('./routes/courses'))

// http://localhost:3000/requests
app.use('/requests', require('./routes/requests'))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})