const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')

//Load config

dotenv.config({path:'./config/config.env'})
connectDB()

const app = express() //initialize
const PORT = process.env.PORT || 3000


app.listen(
    PORT,
    console.log(`Serber running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)