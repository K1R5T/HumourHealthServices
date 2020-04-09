let SessionModel = require('../models/sessionModel');

exports.isLoggedIn = async (req, res, next) => {
   let hasSession = await SessionModel.hasSession(req.sessionID);

   if (hasSession) {
       return next();
   }

   res.send('please authenticate before accessing this page');
}

exports.logOut = (req, res) => {
    req.session.destroy();

    res.send('you have been logged out')
}