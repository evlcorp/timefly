const { Schema, model } = require('mongoose')
const Category = require('./Category')

const ActivitySchema = new Schema({
  name: String,
  category: {
    type: Category.schema,
    ref: 'Category'
  },
  status: {
    type: String,
    enum: ['Upcomming', 'InProgress', 'Finished']
  },
  startTime: Date,
  endTime: {
    type: Date,
    required: false
  }
}, { timestamps: true })

module.exports = Activity = model('activity', ActivitySchema)
