// 1.
8, 1846

// 2.
obj = {
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
}

// 3.
'Your name is Alejandro and you like purple'
'Your name is Melissa and you like green'
'Your name is undefined and you like green'

// 4.
'Maya', 'Marisa', 'Chi'

// 5.
'raindrops on roses', 'whiskers on kittens', ['bright copper kettles', 'warm woolen mittens', 'brown paper packages tied up with string'];

// 6.
[10, 30, 20]

// 7.
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

let obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

let {numbers: {a}} = obj;
let {numbers: {b}} = obj;

// 8.
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]]

// 9.
let arr = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre']
const raceResults = arr => {
  return {
    first: arr[0],
    second: arr[1],
    third: arr[2],
    rest: arr.slice(3)
  }
}
