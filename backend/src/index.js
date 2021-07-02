const express = require('express')
const app = express()
const router = require('./Utils/router')
require('dotenv').config()

console.log(process.env.MONGO_URL)


app.use(express.json)
app.use(router)




app.listen(3000, ()=>console.log("Server running"))