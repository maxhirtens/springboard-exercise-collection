// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }
// 1.
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);
// 2.
const findMin = (...args) => Math.min(...args);
// 3.
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// 4.
const doubleAndReturnArgs= (arr, ...args) => [...arr, ...args.map(x => x * 2)];
// 5.
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
  let random = Math.floor(Math.random()*items.length);
  return [...items.slice(0, random), ...items.slice(random+1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  return {...obj, [key]: val}
}


/** Return a new object with a key removed. */

// const removeKey = (obj, key) => {
//   return {...obj, [key]: ''}
// }
const removeKey = (obj, key) => {
  delete  obj[key];
  return {...obj}
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return {...obj1, ...obj2}
}

/** Return a new object with a modified key and value. */
const whiskeyTheDog = {
  name: 'Whiskey',
  species: 'canine',
  cool: true,
};

const update = (obj, key, val) => {
  return {...obj, [key]: val};
}
