// const square = function(x){
//   return x * x;
// }

const event = {
  name: 'Bob',
  guestList: ["Alice", "Jen", "Mike"],
  //1. ES5
  // printGuestList: function(){} - it will run .bind(this) internally, so `this` refers to event object
  //2. Arrow function
  // printGuestList: () => {} - arrow function doesn't run .bind(this), console.log(this) would get undefined
  //3. ES6 -it will run .bind(this) internally
  printGuestList() {
    console.log(`guest list for ${this.name}`);
    //here use arrow function so doesn't bind this, otherwise `this` refers to `this.guestList`
    // use arrow function, then `this` will go one level up - printGuestList, then because printGuestList runs .bind(this) internally, eventually `this` refers to event object
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
      
    })
  }
}

event.printGuestList();