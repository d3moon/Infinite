const express = require('express')
const hackersRoutes = require('./hackers/hackers-routes')
const router = new express.Router()
const app = express()

app.use(express.json())
hackersRoutes(router)
app.use('/', router)

app.listen(3333, () => console.log('Backend Started!'))
