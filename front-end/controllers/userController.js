const jwt = require('jsonwebtoken')

// Hash password
const bcrypt = require('bcryptjs')

const asyncHandler = require('express-async-handler')
const User = require('../../models/user.model')
const Address = require('../../models/address.model')
const Notification = require('../../models/notification.model')

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
            department: user.department,
            workPhone: user.work_phone,
            token: generatToken(user.id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

})

const userProfile = asyncHandler(async(req, res) => {
    // await Address.findOne({ user_id : req.params.user_id })
    //     .then((addresses) => res.json(addresses))
    //     .catch((err) => res.status(400).json("Error: " + err));
    await Address.aggregate([
        { $lookup: {
            from: "notifications",
            localField: "user_id",
            foreignField: "user_id",
            as: "notifications",
        },},
        {
            $unwind: {
              path: "$notifications",
              // includeArrayIndex: 'string',
              // preserveNullAndEmptyArrays: boolean
            },
          },
    ])
    .then((profiles) => res.json(profiles))
    .catch((err) => res.status(400).json("Error: " + err));
  
  });
  

const updateProfile = asyncHandler(async(req, res) => {

    await Notification.findOneAndUpdate(req.params.user_id, req.body, {
        new: true
    })
    .then((notifications) => res.json(notifications))
    .catch((err) => res.status(400).json("Error: " + err));
    

});
// Generate JWT
const generatToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '2d'
    })
}



module.exports = {
    userLogin,
    userProfile,
    updateProfile
}