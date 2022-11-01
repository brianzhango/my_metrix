const router = require("express").Router()
const {userLogin, userProfile, updateProfile} = require('../front-end/controllers/userController')
const {protect} = require("../front-end/src/middleware/authMiddleware")


router.post('/login', userLogin)
router.get('/:user_id', protect, userProfile)
router.put('/:user_id', updateProfile)

module.exports = router