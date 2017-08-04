const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
//const {router: usersRouter} = require('./');
const { merge } = require("lodash");
mongoose.Promise = global.Promise;
const {PORT, DATABASE_URL} = require('./config');
app.use(express.static('public'));
app.use(morgan('common'));
//app.use('/users', usersRouter);
const jsonParser = require('body-parser');
const axios = require('axios');
const yelp = require('yelp-fusion');
const {BasicStrategy} = require('passport-http');
const passport = require('passport');
const uuid = require('uuid');
const {User} = require('./models');


app.use(jsonParser.urlencoded({ extended: false }));
app.use(jsonParser.json());

const basicStrategy = new BasicStrategy((username, password, callback) => {
  let user;
  User
  .findOne({username: username})
  .exec()
  .then(_user => {
    user = _user;
    if (!user) {
      return callback(null, false, {message: 'Incorrect username'});
    }
    return user.validatePassword(password);
  })
  .then(isValid => {
    if (!isValid) {
      return callback(null, false, {message: 'Incorrect password'});
    }
    else {
      return callback(null, user);
    }
  })
  .catch(err => console.log('Invalid username or password'))
});

// POST for creating new user account
app.post('/api/users/register', (req, res) => {
console.log('hi');
  if (!req.body) {
    return res.status(400).json({message: 'No request body'});
  }

  if (!('username' in req.body)) {
    return res.status(422).json({message: 'Missing field: username'});
  }

  let {username, password} = req.body;

  if (typeof username !== 'string') {
    return res.status(422).json({message: 'Incorrect field type: username'});
  }

  username = username.trim();

  if (username ==='') {
    return res.status(422).json({message: 'Incorrect field length: username'});
  }

  if (!(password)) {
    return res.status(422).json({message: 'Missing field: password'});
  }

  if (typeof password !== 'string') {
    return res.status(422).json({message: 'Incorrect field type: password'});
  }

  password = password.trim();

  if (password === '') {
    return res.status(422).json({message: 'Incorrect field length: password'});
  }
console.log('eh');
User
  .find({username})
  .count()
  .exec()
  .then(count => {
    if (count > 0) {
      return res.status(422).json({message: 'Username already taken'});
    }
    return User.hashPassword(password);
  })
  .then(hash => {
    return User
    .create({
      username: username,
      password: hash,

    });
  })
  .then(user => {
    return res.status(201).json({user: user.apiRepr(), message: 'New account created!'});
  })
  .catch(err => {

    res.status(500).json({message: 'Internal server error'});
  });
});
app.use(require('express-session')({
  secret: 'something something',
  resave: false,
  saveUninitialized: false
}));

passport.use(basicStrategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.post('/api/users/login',
  passport.authenticate('basic', {session: true}),
  (req, res, err) => {
    console.log(err);
    console.log('hello');
    res.json({user: req.user.apiRepr(), message: 'Sign in successful'});
});

app.get('/api/users/me',(req, res) => {
      res.json({user: req.user});
})

function loggedIn(req, res, next) {
	if (req.user) {
		next();
	} else {
		res.json({redirect: '/login', message: 'Please login'});
	}
}

app.get('/api/logout', function (req, res){
  req.session.destroy(function (err) {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

app.post('/api/users/beerlist', loggedIn, (req, res) => {
    console.log('yep');
    console.log(req.body);
    User
    .findByIdAndUpdate(req.user._id,
       { $push: {beerlist: req.body.beerlist} }, { new: true }, (err, user) => {
      if (err) res.send(err);
      res.json(user);
    });
});

app.post('/api/brewery-results', (req, res) => {

  const { location } = req.body
  const yelp = require('yelp-fusion');
  const clientId = 'Eeu9AuDLWbVQH5unWKC_vw';
  const clientSecret = 'f4Wttvy0I56U629yizmoNgv9izdMZrD3TBbTh8i4oMAiFVxBgzlQHuXG8lhiJfd3';
  const searchRequest = {
    term:'brewery',
    location: location,
  };
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      const topTwentyResults = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(topTwentyResults, null, 4);
      return res.json(topTwentyResults);

    });
  }).catch(e => {
    res.status(404).json({err: 'not found'})
    console.log(e);
  });
});

app.get('/api/beer-results', (req, res) => {
  console.log(req.query)
  const axios = require('axios');
  const nameInput = req.query.nameInput;
  const BREWDB_URL = 'http://api.brewerydb.com/v2/search?q=' + nameInput + '&max=10&type=beer&key=c025cc66880ab6b95ac281345d38fe2c';
  axios.get(BREWDB_URL)
  .then(function (response) {
    console.log(response)
    return res.json(response.data)
  })
  .catch(function (error) {

  });
});
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;

function runServer(databaseUrl=DATABASE_URL, port=3001) {

	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, err => {
			if (err) {
				return reject(err);
			}
			server = app.listen(port, () => {
				console.log(`Your app is listening on port ${port}`);
				resolve();
			})
			.on("error", err => {
				mongoose.disconnect();
				reject(err);
			});
		});
	});
}

function closeServer() {
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log('Closing server');
			server.close(err => {
				if (err) {
					return reject(err);
				}
			resolve();
			});
		});
	});
}

if (require.main === module) {
	runServer(DATABASE_URL).catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
