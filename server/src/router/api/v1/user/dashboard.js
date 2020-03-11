const router = require('express').Router()
// const Dashboard = require('../../../../models/Dashboard')

router.get('/', async (req, res) => {
  return res.json({
    success: true
  })
})

module.exports = router
