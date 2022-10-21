const jwt = require('jsonwebtoken')

// Hash password
const bcrypt = require('bcryptjs')

const asyncHandler = require('express-async-handler')
const User = require('../../models/user.model')

const userLogin = asyncHandler(async(req, res) => {

    const {username, password} = req.body

    // Check for user name

    const user = await User.findOne({username})

    if(user && (password === user.password)) {

        res.json({

            id: user.id,
            email: user.email,
            name: user.username,
            fName: user.first_name,
            lName: user.last_name,
            company: user.company,
            phone: user.phone,
            token: generatToken(user.id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

})

// Generate JWT
const generatToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '2d'
    })
}

module.exports = {
    userLogin
}