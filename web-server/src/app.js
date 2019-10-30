const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Setup handlebars engine and views location
app.set('view engine', 'hbs'); //setup view template engine via hbs
app.set('views', viewsPath); //customise views path
hbs.registerPartials(partialPath); //take the partial path to the directory
// to keep monitoring the changes in .hbs files - run `nodemon src/app.js -e js,hbs`, '-e' stands for extension

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  // res.send('Hello express!');
  res.render('index', {
    title: 'weather App',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'about page',
    desc: 'nothing to say',
    name: 'John Test',
  })
})

app.get('/help', (req, res) => {
  // res.send([{
  //   name: 'test',
  //   age: 9,
  // },
  // {
  //   name: 'random',
  //   age: 2,
  // },
  // ]);
  res.render('help', {
    title: 'Help',
    helpText: 'THis is some helpful text',
    name: 'Bob Test',
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    res.send({
      error: 'Error, please provide address'
    })
  } else {
    // add a default value for destructed object to prevent "TypeError: Cannot destructure property `lat` of 'undefined' or 'null'"
    geocode(req.query.address, (error, {lat, long, location} = {}) => {
      if(error) {
         return res.send({
          error,
        })
      }

      forecast(lat, long, (error, forcastData) => {
        if (error) {
          return res.send({
            error,
          })
        } 
        
        res.send({
          address: req.query.address,
          location, 
          forcastData,
        })
      })
    });
  }
})

app.get('/products', (req, res) => {
  // console.log(req.query); // => { search: 'games', rating: '5' }
  if(!req.query.search) {
    // send back JSON object
    res.send({
      error: 'you must provide a search term'
    })
    // add else condition to prevent mulitple responds, http request should be sent once only
  } else {
    console.log(req.query.search);

    res.send({
      products: []
    })
  }
})

app.get('/help/*', (req, res) => {
  // res.send('Help article not found');
  res.render('error', {
    title: 'no article',
    errorMessage: 'Help article not found',
    name: 'no one'
  })
})

// * is wildcard character - match anything that hasn't match so far, need to place it after all other matches
app.get('*', (req, res) => {
  // res.send('My 404 page');
  res.render('error', {
    title: '404',
    errorMessage: 'Page not found',
    name: 'no one'
  })
})

app.listen(3000, () => {
  console.log(`server is up on port ${3000}`);
})