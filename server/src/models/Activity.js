const { Schema, model } = require('mongoose')
// const Category = require('./Category')

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  type: {
    type: String,
    enum: ['Base', 'Custom'],
    default: 'Base'
  },
  status: {
    type: String,
    enum: ['Upcomming', 'InProgress', 'Finished'],
    default: 'Upcomming'
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

// ActivitySchema.statics = {
//   findBaseActivities: async function (...args) {
//     const model = this.model('comment')

//     const baseActivities = await model.find.apply(this, [{ type: 'Base' }, ...args])

//     return baseActivities
//   }
// }

const Activity = model('activity', ActivitySchema)

module.exports = Activity
