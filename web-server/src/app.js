const path = require('path');
const express = require('express');
const app = express();

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs')
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
    desc: 'nothing to say'
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
    title: 'hellllppppp'
  })
})

// app.get('/about', (req, res) => {
//   res.send('about');
// })

app.listen(3000, () => {
  console.log(`server is up on port ${3000}`);
})