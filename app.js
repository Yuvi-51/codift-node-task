const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json({extended:false}))
const connectDB=require('./config/db')
connectDB()



const dataRouter = require('./routes/dataroute')
app.use('/myData',dataRouter)

app.listen(9000, () => {
    console.log('Server started')
})