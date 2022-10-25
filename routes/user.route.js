const router = require("express").Router()
const {userLogin, userProfile} = require('../front-end/controllers/userController')
const {protect} = require("../front-end/src/middleware/authMiddleware")


router.post('/login', userLogin)
router.get('/:user_id', protect, userProfile)

module.exports = router