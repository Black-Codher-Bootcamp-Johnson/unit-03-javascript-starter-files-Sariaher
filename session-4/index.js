// ****************************************************TASK 1 - OBJECTS****************************************************
function biography(person)  {
    return 'Hi, my name is ' + person.name + '. I am '   +  person.age +  ' years old, I live in ' + person.location +  'and I like ' + person.likes +  '.' 
    }                                
     
let  personA={
    name: 'A',
    age:'21',
    location:'Manchester',
    likes: 'pizza',

};
console.log(biography(personA));

                                                                                                                                                                                         
 let  personB={
    name: 'B',
    age:'31',
    location:'Manchester',
    likes: 'pasta',
 };

    console.log(biography(personB));

let  personC= {
    name: 'C',
    age:'11',
    location:'London',
    likes: 'K BBQ',
    
};
console.log(biography(personC))













// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y = " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y = " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y = " + multiplication);

const division = x * y;

console.log("Division: x + y = " + division);

const multiplication1= x * x;

console.log("multiplication1: x * x = " + multiplication1);

const addition1 = x + x + y;

console.log("Addition1: x + x + y = " + addition1);

const muldiv =  x * x /y;
 console.log("muldiv: x*x/y = " + muldiv);












// ****************************************************TASK 3****************************************************


const personsage = 20;
const minimumdrivingage = 18;

const isagecorrectfordriving = personsage >  minimumdrivingage;
console.log( 'is age correct for driving?' + isagecorrectfordriving);  //true
const isLessAgeForDriving = personsage < minimumdrivingage; 
console.log('is age not correct for driving' + isLessAgeForDriving); 













