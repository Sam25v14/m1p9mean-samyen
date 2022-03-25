const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserProfile', UserProfileSchema, 'user-profile');