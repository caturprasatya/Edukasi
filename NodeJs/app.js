const express = require('express')
const route = require('./routes/exam')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(route)

app.listen(port, ()=> console.log('app run in port: '+port))
