const {Schema, model} = require('mongoose');

const session = new Schema({
    _id: {type: String, required: false},
    expires: {type: Date, required: true},
    session: {type: String, required: true}
});

session.statics.hasSession = async function(sessionID) {
    let session = await this.findById(sessionID);

    if (session) {
        return true;
    }

    return false;
}

module.exports = model('session', session)