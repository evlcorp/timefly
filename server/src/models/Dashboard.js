const { Schema, model } = require('mongoose')
const { emailRe } = require('../constants.js')

const TimelineItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  activity: {
    type: Schema.Types.ObjectId,
    ref: 'activity'
  },
  status: {
    type: String,
    enum: ['Pending', 'Finished', 'Canceled'],
    default: 'Pending'
  },
  startTime: {
    type: Date,
    default: Date.now()
  },
  endTime: {
    type: Date,
    required: false
  }
}, { timestamps: true })

const DashboardSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
    validate: function (v) {
      return emailRe.test(v)
    },
    message: props => `${props.value} is not a valid email`
  },
  timeline: [{
    type: TimelineItemSchema
  }]
})

const Dashboard = model('dashboard', DashboardSchema)

module.exports = Dashboard
