const router = require('express').Router()
const TimelineItem = require('../../../../../models/TimelineItem')

router.get('/', async (req, res) => {
  const timeline = await TimelineItem
    .find({ userEmail: req.user.email })
    .populate('activity')
    .exec()

  res.json({
    success: true,
    data: {
      timeline
    }
  })
})

router.post('/new', async (req, res) => {
  const newTimeLineItem = new TimelineItem({
    ...req.body,
    userEmail: req.user.email
  })

  const timelineItem = await newTimeLineItem.save()

  const populatedTimelineItem = await timelineItem
    .populate('activity')
    .execPopulate()

  res.json({
    success: true,
    timelineItem: populatedTimelineItem
  })
})

// TODO: refactor
router.patch('/update/:id', async (req, res) => {
  const updatedTimelineItem = await TimelineItem
    .findOneAndUpdate({ userEmail: req.user.email }, req.body, { new: true })
    .populate('activity')
    .exec()

  if (!updatedTimelineItem) {
    res.status(404).json({
      success: false,
      message: 'No such item found'
    })
  }

  const populatedTimelineItem = await updatedTimelineItem.populate('activity')

  res.json({
    success: true,
    data: {
      timelineItem: populatedTimelineItem
    }
  })
})

router.delete('/remove/:id', async (req, res) => {
  const doesExist = TimelineItem.exists({ userEmail: req.user.email })

  if (!doesExist) {
    res.status(404).json({
      success: false,
      message: 'This item does not exist'
    })
  }

  try {
    await TimelineItem.findOneAndRemove({ userEmail: req.user.email })

    res.json({
      success: true
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router
