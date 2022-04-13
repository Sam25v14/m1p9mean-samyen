const mongoose = require('mongoose');
require('./categorie-plat');

const PlatSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoriePlat'
    },
    calorie: {
        type: Number,
    },
    img: {
        type: String,
    },
    desc: {
        type: String,
    }
});

module.exports = mongoose.model('Plat', PlatSchema, 'plat');