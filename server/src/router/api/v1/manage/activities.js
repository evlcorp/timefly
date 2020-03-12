const router = require('express').Router()
const Activity = require('../../../../models/Activity')

router.post('/new', async (req, res) => {
  const newActivity = new Activity({
    ...req.body,
    type: 'Base'
  })

  try {
    const savedActivity = await newActivity.save()
    const activity = await savedActivity.populate('categories').execPopulate()

    res.json({
      success: true,
      data: {
        activity
      }
    })
  } catch (err) {
    console.error(err)

    res.status(400).json({
      success: false,
      message: err.message
    })
  }
})

router.patch('/update/:id', async (req, res) => {
  const activity = await Activity.findOne({ _id: req.params.id })

  if (!activity) {
    return res.status(404).json({
      success: false,
      message: 'No such activity found'
    })
  }

  await activity.update({ ...req.body })

  res.json({
    success: true
  })
})

router.delete('/remove/:id', async (req, res) => {
  const activity = await Activity.findOne({ _id: req.params.id })

  if (!activity) {
    return res.status(404).json({
      success: false,
      message: 'No such activity found'
    })
  }

  await activity.remove()

  res.json({
    success: true
  })
})

module.exports = router
