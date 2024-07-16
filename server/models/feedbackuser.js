const mongoose = require('mongoose')

const feedbackuserSchema = new mongoose.Schema({
    name: String ,
    email: String,
    password: String
})


const feedbackuserModel = mongoose.model('feedbackusers', feedbackuserSchema)

module.exports = feedbackuserModel