const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World jjjkjknkkjnjknk!')
})

app.get('/twitter', (req, res) => {
    res.send('this is my twitter account')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})