const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    profile_name: {
        type: String,
        required: true
    },
    rank: {
        type: Number
    }
});

module.exports = mongoose.model('UserProfile', UserProfileSchema, 'user_profile');