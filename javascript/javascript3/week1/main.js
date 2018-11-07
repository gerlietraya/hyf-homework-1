let numbers = [1, 2, 3, 4];
let newNumbers = [];


const oddNumber = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
// console.log(oddNumber);
console.log("The doubled numbers are ", oddNumber);
