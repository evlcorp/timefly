const { Schema, model } = require('mongoose')
const { emailRe } = require('../constants.js')

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Base', 'Custom'],
    default: 'Base'
  },
  userEmail: {
    type: String,
    required: false,
    validate: function (v) {
      return emailRe.test(v)
    },
    message: props => `${props.value} is not a valid email`
  }
})

const Category = model('category', CategorySchema)

module.exports = Category
