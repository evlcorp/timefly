const router = require('express').Router()
const TimelineItem = require('../../../../../models/TimelineItem')
const moment = require('moment')

router.get('/categories', async (req, res) => {
  const timeline = await TimelineItem.find({ userEmail: req.user.email })

  const finishedEvents = timeline.filter(timelineitem => timelineitem.endDate && timelineitem.status === 'Finished')

  console.log(finishedEvents)

  console.log(finishedEvents)
})

module.exports = router
