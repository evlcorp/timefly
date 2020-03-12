const { Schema, model } = require('mongoose')
const { emailRe } = require('../constants')

function autoPopulateCategories (next) {
  this.populate('categories')

  next()
}

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'category'
  }],
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
}, { timestamps: true })

ActivitySchema.pre('find', autoPopulateCategories)

ActivitySchema.pre('findOne', autoPopulateCategories)

const Activity = model('activity', ActivitySchema)

module.exports = Activity
