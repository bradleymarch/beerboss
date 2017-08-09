Beer Boss, that's what!

The beer boss knows what's up. This guy will tell you the best breweries wherever you are! He'll also keep track
of what beers you add to the Boss List, which you can edit later!
Find the best breweries wherever you are!

Ever traveled to a new city and find yourself in need of a refreshing cold brew? Look no further than Beer Boss. With help from the Yelp API, Beer Boss tells you the top breweries, as ranked by customers, in your current location!
When you can't remember those complicated craft brew names, Beer Boss is here for you!

Create a dream-list of beers that you can add to your favorites list once you've tried them. With the Boss List, and help from the BreweryDB API, you'll be able to add, update, add beers to your favorite list whenever! You can add 
beers to try, add them to favorites, or get rid of them if they sucked! Register below to get Bossing today!
live link to app: https://pure-inlet-71931.herokuapp.com/

This is a full-stack application as part of a capstone project with Thinkful's web development bootcamp. In this 
project I used HTML, CSS, CSS animations, Javascript, JSX, React, Node, Mongoose, Express, Mocha, and Chai.

Here is some example code from the frontend:
```
import React, { Component } from 'react';
import { fetchLocalBrewery, fetchSpecificBeer, getUser, logout } from '../../actions';
import { connect } from 'react-redux';
import LocalBreweries from './LocalBreweries'
import SpecificBeer from './SpecificBeer'
import BossList from './BossList'
import '../../App.css';

class Dashboard extends Component {

submitLocation(event) {
      event.preventDefault();
      const value = this.input.value;
      this.props.dispatch(fetchLocalBrewery(value));
      event.target.userLocation.value = '';
      window.location = "#brewery_list";
  }
submitBeer(event) {
    event.preventDefault();
    const Value = this.input2.value;
    this.props.dispatch(fetchSpecificBeer(Value));
    event.target.userBeer.value = '';
    window.location = "#beer_results_list";
}
logout(event) {
  event.preventDefault();
  this.props.dispatch(logout());
  location.href = "/";
}

componentDidMount() {
  this.props.dispatch(getUser())
}

render() {
  return (
    <div className="dashboardContainer" id="dashboard_section">
      <div>
        <form className="logoutForm" onSubmit={(e) => this.logout(e)}>
          <button className="logoutButton">Logout</button>
        </form>
      <header>
        <h1 className="welcomeHeader">Welcome, {this.props.username}! </h1>
          <p className="welcomeSubtitle">Search for any beer below.  Add it to the Boss List if you wanna try it.<br/>  Move it to favorites if it was great OR remove it if it sucked!</p>
      </header>
      </div>
        <section>
          <BossList />
        </section>
        <form className="beerForm" onSubmit={e => this.submitBeer(e)}>
                <input type="text" name="userBeer" id="beerInput"
                    className="text" maxLength="35" autoComplete="off"
                    placeholder="Search beers?" required
                    ref={input => this.input2 = input} />
              <label id="beerLabel">Enter any beer then click here ->
                <input type="submit" id="beerButton" className="localBrewButton flash-button" name="submit" value="Search Beers" />
              </label>
            </form>
            <div className="beer-results-list" id="beer_results_list">
              <SpecificBeer className="beerResultsList"/>
            </div>
      <p className="breweryFormDescription">You can also search below for the top breweries in your location!</p>
      <form className="breweryForm" id="brewery_list" onSubmit={e => this.submitLocation(e)}>
              <input type="text" name="userLocation" id="locationInput"
                  className="text" maxLength="35" autoComplete="off"
                  placeholder="Where you at?" required
                ref={input => this.input = input}    />
            <label id="breweryLabel">Enter location then click here ->
              <input type="submit" id="localBreweryButton" className="localBrewButton flash-button" name="submit" value="Top Local Breweries" />
            </label>
          </form>
          <div id="brewery_results_list" className="brewery-list">
            <LocalBreweries className="breweryResultsList" id="brewery_results_list"/>
          </div>
    </div>
    )
  }
}
const mapStateToProps = state => {

  return {username: state.getUserReducer.user.username}

}

export default connect(mapStateToProps)(Dashboard);
```


Here is some example code from the backend:
```
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

app.post('/api/users/rating', loggedIn, (req,res) => {
  User
  .findByIdAndUpdate(req.user._id,
    { $push: {beerRating: req.body.beerRating} }, { new: true }, (err, user) => {
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
app.post('/api/delete-to-try', loggedIn, (req, res) => {
  User
  .findByIdAndUpdate(req.user._id,
     { $pull: {beerlist: req.body.beerlist} }, { new: true }, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
});

app.post('/api/delete-fave', loggedIn, (req, res) => {
  User
  .findByIdAndUpdate(req.user._id,
     { $pull: {beerRating: req.body.beerRating} }, { new: true }, (err, user) => {
       console.log('eh');
    if (err) res.send(err);
    res.json(user);
     console.log('hmm');
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

function runServer(databaseUrl=DATABASE_URL, port=PORT) {

	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, err => {
      console.log(databaseUrl, 'ok');

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
```
