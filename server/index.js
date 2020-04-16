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
const cors = require('cors')

const app = express();

app.use(cors({
	origin:"*"
}))

const router = require('./routes/router');

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use((req,res,next)=>{
// 	res.header('Access-Control-Allow-Origin', '*')
// 	res.header('Access-Control-Allow-Headers', 'Origin', '*', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization')
// 	if(req.method === 'OPTIONS'){
// 		res.header('Access-Control-Allow-Methods', ' PUT, POST,PATCH, DELETE')
// 		return res.status(200).json({})
// 	}
// }

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

var whitelist = ['https://www.givefood.org.uk/api/1/foodbanks/', 'http://http://localhost:3001/foodBank']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));


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

app.listen(3000, () => {
	console.log('listening on port 3000')
});