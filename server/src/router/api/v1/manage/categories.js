const router = require('express').Router()
const Category = require('../../../../models/Category')
const mongoose = require('mongoose')

router.post('/new', async (req, res) => {
  const newCategory = Category({
    ...req.body,
    type: 'Base'
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
    console.error(err)

    res.status(400).json({
      success: false,
      message: err.message
    })
  }
})

router.patch('/update/:id', async (req, res) => {
  const category = await Category.findOne({ _id: req.params.id })

  if (!category) {
    return res.status(404).json({
      success: false,
      message: 'No such category found'
    })
  }

  await category.update({ ...req.body })

  res.json({
    success: true
  })
})

router.delete('/remove/:id', async (req, res) => {
  const category = await Category.findOne({ _id: req.params.id })

  if (!category) {
    return res.status(404).json({
      success: false,
      message: 'No such category found'
    })
  }

  await category.remove()

  res.json({
    success: true
  })
})

module.exports = router
