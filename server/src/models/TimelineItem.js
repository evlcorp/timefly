const { Schema, model } = require('mongoose')
const { emailRe } = require('../constants')

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
  },
  userEmail: {
    type: String,
    required: true,
    validate: function (v) {
      return emailRe.test(v)
    },
    message: props => `${props.value} is not a valid email`
  }
}, { timestamps: true })

const TimelineItem = model('timelineitem', TimelineItemSchema)

module.exports = TimelineItem
