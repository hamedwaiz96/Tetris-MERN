const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GAME_OPTIONS = ["classic", "40-dash", "online"];

const statSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mode: {
        type: String,
        enum: GAME_OPTIONS,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    lines: {
        type: Number,
        required: true
    },
    won: {
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Stat', statSchema);