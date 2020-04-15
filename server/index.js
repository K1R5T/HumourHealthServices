// npm i express express-handlebars mongoose body-parser cors
// npm i 

// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const express = require('express');

// const app = express();

// const router = require('./routes/router');

// require('dotenv').config();

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// });

// app.use(cors());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.use('/', router);



// app.listen(process.env.PORT);


const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const nanoID = require('nanoid');
const express = require('express');

const app = express();

const router = require('./routes/router');

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
	secret: 'keyboardCatIsBestcat',
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({mongooseConnection: mongoose.connection}),
	cookie: {
		maxAge: 1000 * 60 * 60 * 2
	},
	genid: () => {
		return nanoID.nanoid();
	}
}));

app.use('/', router);

<<<<<<< HEAD
// app.listen(3000, () => {
=======
app.listen(3000, () => {
	console.log('listening on port 3000')
});
>>>>>>> 77ca5850b200d12a310cb5617172228b52628338
