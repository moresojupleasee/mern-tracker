const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()
const uri = process.env.DB

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
  console.log(uri)
})

// API REQUEST

app.post('/anime', async (req, res) => {
  try {
    const anime = User(req.body)
    const result = await anime.create(req.body)
    res.status(200).json(anime)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})
//
app.get('/', (req, res) => {
  res.send('Hellow')
})

app.use(express.json())
const User = require('./models/usermodel')
console.log('oi')
console.log(typeof uri)

// Post request to add user
app.post('/user/add', async (req, res) => {
  try {
    const user = User(req.body)
    const result = await user.save()
    res.status(201).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
})
//DELETE
app.delete('/user/', async (req, res) => {
  try {
    const { username } = req.query
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(404).json({ message: 'username not found' })
    }
    await User.findByIdAndDelete(user._id)
    res.status(204).send('Successfully Deleted')
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
})

//DELETE BY user_id
app.delete('/user/id/', async (req, res) => {
  try {
    const { id } = req.query
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({ message: 'userID not found' })
    }
    await User.findByIdAndDelete(id)
    res.status(204).send('Successfully Deleted')
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
})

// get req to fetch all users
app.get('/user/', async (req, res) => {
  try {
    const user = await User.find()
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
})

app.get('/meow/', (req, res) => {
  res.send('BLELEBLEBELE')
})
