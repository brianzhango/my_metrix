const router = require("express").Router()
const {userLogin} = require('../front-end/controllers/userController')

router.post('/login', userLogin)

module.exports = router