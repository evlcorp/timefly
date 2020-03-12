const { Schema, model } = require('mongoose')
const { emailRe } = require('../constants.js')
const Activity = require('./Activity')

const DashboardSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
    unique: true,
    validate: function (v) {
      return emailRe.test(v)
    },
    message: props => `${props.value} is not a valid email`
  },
  timeline: [{
    type: Activity.schema,
    ref: 'Activity'
  }]
})

const Dashboard = model('dashboard', DashboardSchema)

module.exports = Dashboard
