const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000
const fizzBuzzRouter = require('./routes/router')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to Fizzbuzz App!')
})

app.use('/api', fizzBuzzRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))