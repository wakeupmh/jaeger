const tracer = require('./tracer')
tracer.register()

const axios = require('axios')
const express = require('express')

const app = express()

app.post('/posts', async (req, res) => {
  const post = req.body

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post)

  res.status(response.status)
    .json(response.data)
})

app.listen(3001, () => { console.log('Beta 🚀 rocks on port 3001') })