// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
const thisIsNumber = 5; //

// this is not the same variable
const THIS_IS_A_NUMBER = 5;
console.log(thisIsNumber)

let name = 'Sarika';
var age = 10;
console.log(name)

function SayHey()  {
    console.log ('hey!')
}  

function conversation () {
    SayHey();     
    console.log('How are you?')    
    console.log('Goodbye');                  
}
conversation()


function futureage(name, age) {
    let answer =age + 5;
    return "Hi"  + name + "!" + "You will" + answer + "Years old in 5 years"
}
    console.log(futureage("Jerry", 22))



