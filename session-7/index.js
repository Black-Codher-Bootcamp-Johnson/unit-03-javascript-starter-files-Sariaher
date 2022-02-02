// ****************************************************TASK 1****************************************************
const animals =  ['cat', 'dog', 'cow', 'fox', 'horse'];
// for (let i =0; i < animals, length; i++) {
// const animal  = animals(i);
 
// console.log(animal);

// }

// console.log(animals [0]);
// console.log(animals [1]);
// console.log(animals [2]);
// console.log(animals [3]);
// console.log(animals [4]);

animals.pop()
console.log(animals)











// ****************************************************TASK 2****************************************************
const name = ['Sagar', 'Abbie', 'Megha', 'Jaya', 'Shriya', 'Zeeva' ];
name.sort().reverse();
console.log(name);

const number  = ['10', '1000', '500', '8', '700']
number.sort((a,b)=> a -b);
console.log(number);









// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? true : false;
}
