'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
};

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1
// const events = new Set(gameEvents.values());
// console.log(events);

// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);

// //4
// for (const [key, values] of gameEvents){

//   const half = key <= 45 ? 'First' : 'Second';
//   console.log(`[${half} Half] ${key}: ${values}`)

//   //My Solution
//   // if (key <= 45 && key > 0){
//   //   console.log(`[First Half] ${key}: ${values}`);
//   // }
//   // else if (key > 45 && key < 90){
//   //   console.log(`[Second Half] ${key}: ${values}`);
//   // } else if(key >90){
//   //   console.log(`[Overtime] ${key}: ${values}`);
//   // }
// }

// const airline = 'TAP Air Portugal';
// let plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase()+ passengerLower.slice(1);
// console.log(passengerCorrect);

// const correctPunctuation = function(string){
//   const inputLower = string.toLowerCase();
//   const outputCorrect = inputLower[0].toUpperCase()+inputLower.slice(1);
//   console.log(outputCorrect);
//   return outputCorrect;
// }

// correctPunctuation('jOnAS');

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));

// console.log(plane.startsWith('Air'));
// console.log(plane.endsWith('neo'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')){
//   console.log('Part of the New Airbus family');
// }

// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('gun') || baggage.includes('knife')){
//     console.log('You are NOT allowed on board');
//   }
//   else {
//     console.log('Welcome aboard!');
//   }
  
// }
// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Jeremy Lamb'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name){
//     const names = name.split(' ');
//     const namesUpper = [];

//     for(const n of names){
//       // namesUpper.push(n[0].toUpperCase()+n.slice(1));   
//       namesUpper.push(n.replace(n[0], n[0].toUpperCase())); 
//     }
//     console.log(namesUpper.join(' '));
// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// const maskCreditCard = function (number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(1234567890));
// console.log(maskCreditCard('12345467890'));

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for(const [i, row] of rows.entries()){
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${'$'.repeat(i+1)}`);
//   }
// });

const getCode = str => str.slice(0, 3).toUpperCase();

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25'
+'+_Arrival;bru09433847222;fao93766109;11:45'
+'+_Delayed_Arrival;hel7439299980;fao93766109;12:05'
+'+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? 'RED LIGHT': ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output.padStart(36));
}

