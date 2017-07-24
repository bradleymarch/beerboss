const path = require('path');
const express = require('express');
const jsonParser = require('body-parser');
const app = express();
const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('c025cc66880ab6b95ac281345d38fe2c');
const yelp = require('yelp-fusion');
//app.use(express);
app.use(jsonParser.urlencoded({ extended: false }));

app.use(jsonParser.json());

//app.use(yelp);
// API endpoints go here!
app.post('/api/brewery-results', (req, res) => {
  console.log(req.body, '***');
  const { location } = req.body
  //const token = "D3lc1CBbpszbdsEY_p9C2CJTPnZtcFFz2zXxrBkkOuQlr-13Lhh6oSyIaCYNL0qsrY0zwrdEfY5hPZx_pgtiSiVWrMchdX2Z885yvfcFO8m5RW_rr6LSyqxKh6xuWXYx"

  const yelp = require('yelp-fusion');
  const clientId = 'Eeu9AuDLWbVQH5unWKC_vw';
  const clientSecret = 'f4Wttvy0I56U629yizmoNgv9izdMZrD3TBbTh8i4oMAiFVxBgzlQHuXG8lhiJfd3';

  //const access_token = 'D3lc1CBbpszbdsEY_p9C2CJTPnZtcFFz2zXxrBkkOuQlr-13Lhh6oSyIaCYNL0qsrY0zwrdEfY5hPZx_pgtiSiVWrMchdX2Z885yvfcFO8m5RW_rr6LSyqxKh6xuWXYx'
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
      //console.log();
    });
  }).catch(e => {
    res.status(404).json({err: 'not found'})
    console.log(e);
  });
});
  // .ajax({
  //         url: 'https://api.yelp.com/v3/businesses/search?term=brewery&location=' + location,
  //         dataType: "jsonp",
  //         Headers: {
  //           'Authorization': 'Bearer ' + token,
  //         },
  //         data: req.body,
  //         success: function(data) {
  //           return res.json;
  //             $("#brewery_results").append(data);
  //         },
  //         error: function() {
  //             alert('error');
  //         }
  //     });

//
// app.get('/beer-results', (req, res) => {
//   const beer = '{props.input.value}'
//   const API_KEY = 'c025cc66880ab6b95ac281345d38fe2c'
//   // $.ajax({
//   //         url: 'http://api.brewerydb.com/v2/search?q=' + beer + '&type=beer&key=' + API_KEY,
//   //         dataType: "jsonp",
//   //         data: req.body,
//   //         success: function(data) {
//   //           return res.json;
//   //             $("#beer_results").append(data);
//   //         },
//   //         error: function() {
//   //             alert('error');
//   //         }
//   //     });
//
// });

// Serve the built client
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
