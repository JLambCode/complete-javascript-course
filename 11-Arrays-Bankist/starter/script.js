'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class = "movements__row">
        <div class = "movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (accs) {
    accs.username = accs.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    } `;
    containerApp.style.opacity = 100;

    inputLoginUsername = inputLoginPin = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.splice(2));

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
//   }
// });

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

//const dogAge = age > 2 ? 'adult' : 'puppy';

// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsKate1 = [4, 1, 15, 8, 3];

// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaClean = dogsJulia.slice();
//   dogsJuliaClean.splice(0, 1);
//   dogsJuliaClean.splice(-2);
//   const allDogs = dogsJuliaClean.concat(dogsKate);
//   console.log('---Dog Study---');
//   allDogs.forEach(function (dog, i) {
//     const dogAge = dog >= 3 ? 'an adult' : 'a puppy';
//     console.log(`Dog ${i + 1} is ${dogAge}.`);
//   });
//   console.log('\n');
// };

// checkDogs(dogsJulia1, dogsKate1);
// checkDogs(dogsJulia2, dogsKate2);

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

// const movToUsdArrow = movements.map(mov => mov * eurToUsd);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);
// console.log(movements);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawals);

// console.log(movements);

//  const balance = movements.reduce(function(acc, cur,i,arr){
//    console.log(`Iteration ${i}: ${acc}`);
//    return acc + cur;
//  },0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (dogAges) {
//   const humanAges = dogAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const avgAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   return avgAge;
// };

// calcAverageHumanAge(dogAges1);
// calcAverageHumanAge(dogAges2);

// const avg1 = calcAverageHumanAge(dogAges1);

// const avg2 = calcAverageHumanAge(dogAges2);

// console.log(avg1, avg2);

// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = ages => ages
// .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
// .filter(age=>age>=18)
// .reduce((acc,age,i,arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge(dogAges1);
// const avg2 = calcAverageHumanAge(dogAges2);

// console.log(avg1, avg2);

// const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
