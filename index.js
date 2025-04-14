const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/api.route.js')
const winston = require('winston')
const errorMiddleware  = require('./middleware/error.middleware.js')
const { combine, timestamp, printf, colorize, align } = winston.format;

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
        colorize({ all: true }),
        timestamp({
        format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [new winston.transports.Console()],
})

const app = express()
app.use(express.json())
app.use(routes)
app.use(errorMiddleware)

mongoose.connect(process.env.DATABASE_URL).then(() => {
    logger.info('Connected to database!')
    app.listen(3000, () => {
        logger.info('Server is running on port 3000 ')
    })
}).catch((error)=> {
    logger.error("Connection is failed! " + error.message)
})