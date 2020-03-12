const router = require('express').Router()
const jwtCheck = require('../../../middleware/jwtCheck')

router.use('/public', require('./public'))
router.use('/user', jwtCheck, require('./user'))
router.use('/manage', jwtCheck, require('./manage'))

module.exports = router
