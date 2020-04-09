exports.getSession = (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    
    // req.session.userName = 'Kirsty';
    req.session.save();

    res.send('hello world');
}

exports.getRestricted = (req, res) => {
    res.send('you have accessed the restricted page');
}