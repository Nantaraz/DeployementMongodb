const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    nom: String,
    prenom: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);