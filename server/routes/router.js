const router = require('express').Router();

const UserSchema = require('../models/user');

const index = require('../controllers/indexController');
const auth = require('../controllers/authController');

router.get('/getSession', index.getSession);
router.get('/restricted', auth.isLoggedIn, index.getRestricted)
router.get('/logOut', auth.logOut);

router.get('/', (req, res) => {
    res.send({greeting: 'you are now signed in'})
})

router.post('/createUser', async (req, res) => {
    let {userName, email, password} = req.body;
    console.log(req.body)

    let existingUser = await UserSchema.findByLogin(userName);

    if (existingUser) {
        res.send({err: 'user already exists'})
        return;
    }

    let user = new UserSchema({
        userName,
        email,
        password
    })

    user.save();

    res.send({success: 'user successfully created'});
})

module.exports = router;