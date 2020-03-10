const router = require('express').Router()

router.post('/contact',(req, res) => {
  return res.json({
    succes: true,
    message: 'Hello from /api/v1'
  })
})

module.exports = router
