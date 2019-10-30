console.log('client side javascript file is loaded');

// fetch('http://puzzle.mead.io/puzzle')
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     })
//   })

// fetch('http://localhost:3000/weather?address=Boston')
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     })
//   })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-one');
const messageTwo = document.getElementById('message-two');

messageOne.textContent = 'Loading...';
messageTwo.textContent = '';

weatherForm.addEventListener('submit', (event) => {
  // console.log(event);
  event.preventDefault();
  const location = search.value;
  // console.log(location);

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => {
      response.json().then((data) => {
        if(data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forcastData;
        }
      })
    })
})