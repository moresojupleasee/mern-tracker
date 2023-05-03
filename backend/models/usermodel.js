const mongoose = require('mongoose')
const userLoginSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minlength: 3,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userLoginSchema)

module.exports = User
