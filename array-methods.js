//1- Given an array of numbers, return a new array where each number is multiplied by 2
const numbers1 = [1, 2, 3, 4, 5];
// Output: [2, 4, 6, 8, 10]

//solve:
console.log('1- ', numbers1.map(i=>i*2));


//2- Filter out the odd numbers from an array
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
// Output: [2, 4, 6]
console.log('2-',numbers2.filter(i=> i%2===0) );


//3- Add a new fruit ("pineapple") to the end of the fruits array
const fruits = ["apple", "banana", "orange"];
// Output: ["apple", "banana", "orange", "pineapple"]
console.log('3-',fruits.push("pineapple"),fruits);


//4-  Remove the last item from an array of numbers and return the removed number.
const numbers4 = [10, 20, 30, 40, 50];
// Output: Removed number: 50, Remaining array: [10, 20, 30, 40]
console.log('4-',numbers4.splice(4),numbers4);


//5- Extract the first 3 elements of the array without modifying the original array
const colors = ["red", "blue", "green", "yellow", "pink"];
// Output: ["red", "blue", "green"]
console.log('5-',colors.slice(0,3));



//6-  Find the sum of all numbers in an array
const numbers6 = [10, 20, 30, 40];
// Output: 100
console.log('6-',numbers6.reduce((a, b) => a + b, 0));



//7-  Find the sum of price filed in an array of objects
const orders = [{'name': 'apple', 'price':1000},{'name': 'banana', 'price':2300},{'name': 'plum', 'price':1500},{'name': 'orange', 'price':7800}];
// Output: 12600
console.log('7-',orders.reduce((a, b) => a + b.price,0));


//8-  Find the sum of price filed in an array of objects
const shoppingCart = [{'name': 'apple', 'price':1000, count:4},{'name': 'banana', 'price':2300, count:1},{'name': 'plum', 'price':1500, count:8},{'name': 'orange', 'price':7800, count:2}];
// Output: 33900
console.log('8-',shoppingCart.reduce((a, {price,count}) => a + price * count,0));

//9-  Find the sum of price filed in an array of objects if it is available
const shoppingCart2 = [{'name': 'apple', 'price':1000, count:4, isAvailable:true},{'name': 'banana', 'price':2300, count:1, isAvailable:false},{'name': 'plum', 'price':1500, count:8, isAvailable:true},{'name': 'orange', 'price':7800, count:2, isAvailable:false}];
// Output: 16000
console.log('9-',shoppingCart2.filter(item => item.isAvailable).reduce((a, {price,count}) => a + price * count,0));




//10- Combine two arrays into one
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Output: [1, 2, 3, 4, 5, 6]
console.log('10-', arr1.concat(arr2));
//[...arr1,...arr2]

// 11- Find the first number in the array that is greater than 10.
const numbers11 = [4, 9, 15, 7];
// Output: 15
console.log('11-',numbers11.find(function checkAge(age) {return age > 10}));


// 12- Find the index of the first even number in the array
const numbers12 = [3, 7, 10, 15, 18];
// Output: 2
console.log('12-',numbers12.findIndex(function check(x) {return x%2 === 0}));


// 13-  Flatten a nested array to one level
const nestedArray = [1, [2, 3], [4, [5, 6]]];
// Output: [1, 2, 3, 4, [5, 6]]
console.log('13-',nestedArray.flat(2));


// 14- Sort an array of numbers in descending order
const numbers15 = [5, 2, 9, 1, 7];
// Output: [9, 7, 5, 2, 1]
console.log('14-',numbers15.sort(function(a, b){return b-a}));


// 15- Given an array of strings, capitalize the strings, filter out those with fewer than 5 characters, and join them into a single string separated by commas.
const words = ["apple", "pear", "banana", "kiwi", "grape"];
// Output: "Apple, Banana, Grape"
console.log('15-',words.map(word => word.toUpperCase())
.filter(word => word.length >= 5)
.join(" "));


//16- Given an array of numbers, double the numbers and filter out the ones that are less than 10.
const numbers16 = [2, 5, 8, 10, 15];
// Output: [16, 20, 30]
console.log('16-',numbers16.map(i => i*2).filter(i => i > 10));


//17- Flatten a nested array, multiply each number by 3, and find the sum of the transformed numbers.
const nestedArray2 = [[1, 2], [3, 4], [5]];
// Output: 45
console.log('17-',nestedArray2.flat(Infinity).map(i => i*3).reduce((a, b) => a + b, 0));


//18- Find the first even number greater than 10 in the array, and return the index of that number.
const numbers18 = [5, 12, 8, 20, 3];
// Output: 1 (index of 12)
console.log('18-',numbers18.findIndex(function check(x) {return x%2 === 0 & x > 10}),'(index of ',numbers18.find(function check(x) {return x%2 === 0 & x > 10}),')');
//`(index of ${numbers18.find(function check(x) {return x%2 === 0 & x > 10})})`

//19- Filter out all numbers less than 5, sort the remaining numbers in descending order, and return their square roots in a new array.
const numbers19 = [4, 16, 1, 9, 25, 3];
// Output: [5, 4, 3]
console.log('19-',numbers19.filter(i => i > 5).sort(function(a, b){return b-a}).map(i => Math.sqrt(i)));


//20- Combine two arrays of numbers, remove duplicates, and find the first number greater than 10.
const arr3 = [5, 10, 15];
const arr4 = [10, 20, 5];
// Output: 15
console.log('20-', arr3.concat(arr4).filter((item, index) => arr3.indexOf(item) === index).find(i => i > 10));


//21- Given an array of words, filter out words with fewer than 4 letters, convert the remaining words to uppercase, and join them into a single string separated by dashes (-).
const words2 = ["cat", "horse", "bird", "dog", "elephant"];
// Output: "HORSE-BIRD-ELEPHANT"
console.log('21-',words2.filter(i => i.length >= 4).map(word => word.toUpperCase()).join('-'));



//22- Extract all even numbers from an array, sort them in ascending order, and find their sum.
const numbers22 = [12, 5, 8, 3, 10];
// Output: 30
console.log('22-', numbers22.filter(i => i%2 == 0).sort(function(a, b){return b-a}).reduce((a, b) => a + b, 0));


//23- Group the numbers by their remainders when divided by 3, flatten the grouped array, and return a unique sorted array.
const numbers23 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Output: [0, 1, 2]
console.log('23-', numbers23.filter(i => i >= 3).map(i => i%3).sort().filter((item, index) => numbers23.indexOf(item) === index));



//24- Given an array of nested strings, flatten it, filter out strings shorter than 4 characters, convert them to title case (capitalize the first letter), and join them into a single string separated by spaces.
const nestedWords = [["hello", "world"], ["js", "code"], ["openai", "chat"]];
// Output: "Hello World Code Openai Chat"



//solve: 
console.log('24- ',nestedWords
    .flat() // Step 1: Flatten the array
    .filter(word => word.length >= 4) // Step 2: Filter out strings shorter than 4 characters
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Step 3: Convert to title case
    .join(" ")); // Step 4: Join with spaces);


// 25- Filter numbers greater than 10, concatenate with another array, and sort the combined array in descending order.
const numbers25 = [5, 15, 20, 3];
const moreNumbers25 = [12, 8, 25];
// Output: [25, 20, 15, 12, 8]
console.log('25-',numbers25.filter(i => i > 10).concat(moreNumbers25).sort((a, b) => {return b-a}));   //.sort(function(a,b){return b-a})



//26- sort this array of objects by score field
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 90 }
  ];
// Output:
// [
//   { name: "Bob", score: 95 },
//   { name: "Charlie", score: 90 },
//   { name: "Alice", score: 85 }
// ]  

console.log('26-',students.sort((a,b) => b.score - a.score));



//my problem : 13,23
