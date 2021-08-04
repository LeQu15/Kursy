import {
    countries
} from './countries.js';

import {
    webTechs
} from './web_techs.js';

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(".", "").replace(",", "").split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
shoppingCart.pop();
shoppingCart.push("Sugar");
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

console.log(countries[4].toUpperCase());
webTechs.unshift("Sass");
console.log(webTechs[0].toUpperCase());

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)