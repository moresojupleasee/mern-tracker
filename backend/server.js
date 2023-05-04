const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config({ path: '.myenv' })
const uri = process.env.dbatlas

app.post('/anime', async (req, res) => {
  try {
    const anime = await anime.create(req.body)
    res.status(200).json(anime)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

app.get('/', (req, res) => {
  res.send('Hellow')
})

const Deployment = require('./models/deployment')
console.log('oi')
app.get('/deployments', async (req, res) => {
  try {
    const deployment = await Deployment.find({})
    res.status(200).json(deployment)
  } catch (error) {
    res.status(500).json({ message: res.message })
  }
})

// Db connection { with uri stored im dotenv }
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log(error)
  })

app.listen(3000, () => {
  console.log('Server listening on port')
})
