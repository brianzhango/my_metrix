const jwt = require('jsonwebtoken')

// Hash password
const bcrypt = require('bcryptjs')

const asyncHandler = require('express-async-handler')
const User = require('../../models/user.model')

const userLogin = asyncHandler(async(req, res) => {

    const {username, password} = req.body

    // Check for user name

    const user = await User.findOne({username})

    res.json({
        user
    })

    if(user && (password === user.password)) {

        res.json({

            id: user.id,
            email: user.email,
            name: user.name

        })
    } else {
        res.status(400)
        throw new Error('Invalid username')
    }

})

module.exports = {
    userLogin
}