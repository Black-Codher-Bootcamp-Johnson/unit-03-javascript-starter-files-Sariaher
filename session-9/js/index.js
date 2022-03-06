import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

// const button = document.createElement('button');
// const buttonText = document.createTextNode('Show Population');
// button.appendChild(buttonText);
// button.onclick = displayPopulation;
// document.body.appendChild(button);         



createListOfFruits(fruits);

const button = document.createElement('button');
const buttonText = document.createTextNode('Show Population');
button.appendChild(buttonText);
button.onclick = displayPopulation;
document.body.appendChild(button);