'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 2);

// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 123123123,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = passenger.name;

//   if (passenger.passport === 123123123) {
//     alert('Check In');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// console.log(checkIn(flight, jonas));

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log('HighFive');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Steven');

// const greetArrow = greeting => greetName =>
//   console.log(`${greeting} ${greetName}`);

// greetArrow('Hello')('Jeremy');

// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// };

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book,
// };
// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //Bind method
// const bookEW = book.bind(eurowings);
// const bookLM = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steve Williams');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


//   // Partial application
//   const addTax = (rate, value) => value+value*rate;
//   console.log(addTax(.1, 200));

//   const addVAT = addTax.bind(null, .23);
//   console.log(addVAT(100));

// const poll = {
//     question: 'What is your favorite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question}\n
//         ${this.options.join('\n')}\n(Write option number)`)
//         );    

//         typeof answer ==='number' && answer < this.answers.length && this.answers[answer]++;

//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array'){
//         if(type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string'){
//             console.log(`Poll results are ${this.answers.join(',')}`);
//         }
//     },
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5,2,3]}, 'string');
// poll.displayResults.call({answers: [1,5,3,9,6,1]}, 'string');

// const runOnce = function(){
//     console.log('This will never run again');
// }

// //IIFE (Immediately Invoked Function Expression)
// (function(){
//     console.log('This will only run once');
// })();

// (() => console.log('This will ALSO only run once'))();

// const secureBooking = function(){
//     let passengerCount = 0;
//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passenger(s).`);
//     }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    })
})();

