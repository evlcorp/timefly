const router = require('express').Router()
const Category = require('../../../models/Category')
const Activity = require('../../../models/Activity')

router.use('/activities', async (req, res) => {
  const activities = await Activity
    .find({ type: 'Base' })
    .populate('category')

  return res.json({
    succes: true,
    data: {
      activities
    }
  })
})

router.use('/categories', async (req, res) => {
  const categories = await Category.find({ type: 'Base' })

  return res.json({
    succes: true,
    data: {
      categories
    }
  })
})

module.exports = router
