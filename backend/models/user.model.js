const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
}, {
    timestamps: true
});

userSchema.pre('save', () => {
    const user = this;

    if(!user.isModified('password')) {return next()};

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {return next(err)};

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {return next(err)};
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {return callback(err)};
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);