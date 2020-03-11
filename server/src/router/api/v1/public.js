const router = require('express').Router()
const Category = require('../../../models/Category')
const Activity = require('../../../models/Activity')

router.use('/activities', async (req, res) => {
  const activities = await Activity.find()

  return res.json({
    succes: true,
    data: {
      activities
    }
  })
})

router.use('/categories', async (req, res) => {
  const activities = await Category.find()

  return res.json({
    succes: true,
    data: {
      activities
    }
  })
})

module.exports = router
