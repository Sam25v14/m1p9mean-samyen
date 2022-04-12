const mongoose = require('mongoose');

const CategoriePlatSchema = new mongoose.Schema({
    profile_name: {
        type: String,
        required: true
    },
    rank: {
        type: Number
    }
});

module.exports = mongoose.model('CategoriePlat', CategoriePlatSchema, 'categorie_plat');