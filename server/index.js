const path = require('path');
const express = require('express');
const jsonParser = require('body-parser');
const app = express();
const axios = require('axios');
const yelp = require('yelp-fusion');

app.use(jsonParser.urlencoded({ extended: false }));

app.use(jsonParser.json());

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
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
