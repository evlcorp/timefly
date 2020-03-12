const router = require('express').Router()
const Category = require('../../../../models/Category')

router.get('/all', async (req, res) => {
  const categories = await Category.find({
    $or: [{ type: 'Base' }, { userEmail: req.user.email }]
  })

  res.json({
    success: true,
    data: {
      categories
    }
  })
})

router.post('/new', async (req, res) => {
  const newCategory = new Category({
    ...req.body,
    type: 'Custom',
    userEmail: req.user.email
  })

  try {
    const category = await newCategory.save()

    res.json({
      success: true,
      data: {
        category
      }
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
})

router.patch('/update/:id', async (req, res) => {
  const category = await Category.findOne({ _id: req.params.id })

  if (category.type !== 'Custom' && category.userEmail !== req.user.email) {
    return res.status(403).json({
      success: false,
      message: 'You are not authorized for that'
    })
  }

  try {
    await category.update({ ...req.body }, { new: true })

    res.json({
      success: true,
      data: {
        category
      }
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
})

router.delete('/remove/:id', async (req, res) => {
  const category = await Category.findOne({ _id: req.params.id })

  if (category.type !== 'Custom' && category.userEmail !== req.user.email) {
    return res.status(403).json({
      success: false,
      message: 'You are not authorized for that'
    })
  }

  try {
    await category.remove()

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
