const fs = require('fs');
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
}

const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);


const dataBuffer = fs.readFileSync('1-json.json');
const parsedData = JSON.parse(dataBuffer.toString());
parsedData.name = 'new name';
parsedData.planet = 'nowhere';
parsedData.age = 20;
const newDataJSON = JSON.stringify(parsedData);
fs.writeFileSync('1-json.json', newDataJSON);
