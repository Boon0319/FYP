const http = require('http')
const path = require('path')
const express = require('express')
const app = express()
const fs = require('fs')
const mongoose = require('mongoose')

const cors = require('cors')
require('dotenv').config()
require('express-async-errors')

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(cors())

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')








//import routes



app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'))
})

app.get('/tutorial', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/html/tutorial.html'))
})

app.get('/weather', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/html/weather.html'))
})

app.get('/lyrics', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/html/lyrics.html'))
})

app.get('/ourapi', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/html/ourapi.html'))
})

app.get('/ref', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/html/references.html'))
})

app.get('/abt', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/html/about.html'))
})

app.use('/api/v1/products', productsRouter)

//products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

//connect to db

const port = process.env.PORT || 3000

const start = async () =>{
    try{
        //connectDB
        await connectDB(process.env.DB_CONNECTION)
        app.listen(port, console.log('Server  is listening at port 3000'))
    } catch (error){
        console.log(error)
    }
}

start()


