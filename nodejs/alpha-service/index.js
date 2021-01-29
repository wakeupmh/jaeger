const tracer = require('./tracer')
tracer.register()

const axios = require('axios')
const express = require('express')

const BETA_SERVICE_URL = 'http://localhost:3001'

const betaClient = axios.create({ baseURL: BETA_SERVICE_URL })

const app = express()

app.post('/posts', async (req, res) => {
  const payload = req.body

  const response = await betaClient.post('/posts', payload)

  res.status(response.status)
    .json(response.data)
})

app.listen(3000, () => { console.log('Alpha 🚀 rocks on port 3000') })