const mongoose = require('mongoose')

async function connect() {
  await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev')
  console.log('successfully')
}

module.exports = { connect }
