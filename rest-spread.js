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
const mergeObjects = (obj1, obj2) => {[...obj1, ...obj2]};
