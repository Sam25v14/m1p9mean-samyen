const mongoose = require('mongoose');

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