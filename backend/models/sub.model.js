const mongoose = require('mongoose')
const subscriptionSchema = mongoose.Schema({
  date_valid: { type: Date },
  sub_tier: { type: String },
  subperiod: { type: String },
})

const Substaus = mongoose.model('Substatus', subscriptionSchema)

module.exports = Substaus
