const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false}
});

userSchema.statics.findByLogin = async function (login, email) {
    let user = await this.findOne({userName: login});

    if(user) {
        return user;
    }

    user = await this.findOne({email: email})
    return user;
}

module.exports = model('users', userSchema);