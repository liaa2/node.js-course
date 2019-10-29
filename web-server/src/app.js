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