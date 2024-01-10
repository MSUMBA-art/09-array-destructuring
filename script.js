'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received ${this.starterMenu[starterIndex]} and ${this.categories[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

// const rest1 = {
//   name: "Capricorn",
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Retreat',
//   owner: "Alexander Msumba",
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10
// // rest1.numGuests ||= 10

// rest1.numGuests ??= 10;
// rest1.numGuests ??= 10;

// // AND  assignment operator
// //rest1.owner = rest1.owner && "<ANONYMOUS>";
// //rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // restaurant.numGuests = 0;
// // const guests= restaurant.numGuests || 10;
// // console.log(guests);

// // Nullish  : null and undefined (NOT 0 or "")
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// // console.log('=== OR ===');
// // use ANY data typeof, return ANY data typeof, short-circuiting
// // console.log(3 || 'Alex');
// // console.log('' || 'Alex');
// // console.log(true || 0);
// // console.log(undefined || null);
// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuests = 0;
// // const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guest1);

// // const guest2 = restaurant.numGuests || 10;
// // console.log(guest2);

// // console.log('=== AND ===');
// // console.log(0 && 'Alex');
// // console.log(1 && 'Alex');
// // console.log('IRENE' && 99 && null && 'Alex');

// // Practical Example
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushroom', 'spinach');
// // }

// // restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// // 1 DESTRUCTURING
// //SPREAD, because is on RIGHT side of =
// // const arr = [1, 2, ...[3, 4]];

// // REST, because is on LEFT side of =
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, otherFood);

// // Objects
// // const { sat, ...weekDays } = restaurant.openingHours;
// // console.log(weekDays);

// // 2 FUNCTIONS
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };
// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(8, 2, 5, 3, 2, 1, 4);

// // const anotherArray = [23, 5, 7];
// // add(...anotherArray);
// // restaurant.orderPizza('mushroom', 'onion', 'banana', 'spinach');
// // restaurant.orderPizza('mushroom')

// ////////////////////////////////////////////////
// // The spread operator (...)
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // console.log(...newArr);

// // const newMenu = [...restaurant.mainMenu, 'Nsima'];
// // console.log(newMenu);

// //Copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);

// // Iterables: arrays, strings, maps, sets NOT objects
// // const str = 'Alexander';
// // const letters = [...str, ' ', 'Msumba.'];
// // console.log(letters);
// // console.log(...str);

// // const ingredients = [
// // prompt('lets eat ingredient 1?'),
// // prompt('ingredient 2?'),
// // prompt(' ingredient 3?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //OBJECTS
// // const newRestaurant = {
// //   foundedIn: 1998,
// //   ...restaurant,
// //   founder: 'Alexander Msumba',
// // };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'RED DOG';
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// //Destructuring objects
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: '14A 4th Ave, Retreat',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelivery({
// //   address: '14A 4th Ave, Retreat',
// //   starterIndex: 1,
// // });

// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // Default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // Mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);

// // Nested objects
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);

// Data Structures, Modern Operators and Strings
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, ...fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const { odds: { team1, x: draw, team2 } } = game
console.log(team1, draw, team2);

// 6 
const printGoals = function (...players) {
  console.log(``);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals('Davies', 'Muller')
