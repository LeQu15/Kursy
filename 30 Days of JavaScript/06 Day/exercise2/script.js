const chars = 'ABCDEFGHIJKLMNOPRSTWUYZabcdefghijklmnoprstwuyz1234567890';
let text = '';
const randomNumber = Math.floor(Math.random() * 50) + 1;
for (let i = 0; i <= randomNumber; i++) {
    text += chars.charAt(Math.floor(Math.random() *
        chars.length));
}
console.log(text);
console.log("");


const charsHex = '01234567890abcdef'
let textHex = '';
for (let i = 0; i <= 5; i++) {
    textHex += charsHex.charAt(Math.floor(Math.random() *
        charsHex.length));
}
console.log("#" + textHex);
console.log("");


let r = Math.floor(Math.random() * 255) + 1;
let g = Math.floor(Math.random() * 255) + 1;
let b = Math.floor(Math.random() * 255) + 1;
console.log(`rgb(${r},${g},${b})`)

console.log("");

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const countriesShort = [
    'ALB',
    'BOL',
    'CAN',
    'DEN',
    'ETH',
    'FIN',
    'GER',
    'HUN',
    'IRE',
    'JAP',
    'KEN'
]

const countriesUpperCase = [];
for (let i = 0; i < countries.length; i++) {
    countriesUpperCase.push(countries[i].toUpperCase())
}
console.log(countriesUpperCase)

const countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length)
}
console.log(countriesLength)

const bigArray = []
for (let i = 0; i < countries.length; i++) {
    bigArray.push([countries[i], countriesShort[i], countriesLength[i]]);
}
console.log(bigArray)


let land = [];
let noland = [];
for (let i = 0; i < countries.length; i++) {
    if (bigArray[i][0].includes("land")) {
        land.push(bigArray[i][0]);
    } else {
        noland.push(bigArray[i][0])
    }
}
if (land.length == 0) {
    console.log("All these countries are without land")
} else {
    console.log(land);
}

let endsWithIA = [];
let noIA = [];
for (let i = 0; i < countries.length; i++) {
    if (bigArray[i][0].includes("ia")) {
        endsWithIA.push(bigArray[i][0]);
    } else {
        noIA.push(bigArray[i][0])
    }
}

if (endsWithIA.length == 0) {
    console.log("'These are countries ends without ia")
} else {
    console.log(endsWithIA);
}


let longestCountry = [];
let lengthNumber = countries[0].length;
for (let i = 0; i < countries.length; i++) {
    if (lengthNumber < countries[i].length) {
        lengthNumber = countries[i].length;
        longestCountry.length = 0;
        longestCountry.push(countries[i])
    }
}
console.log(longestCountry.toString());

const fiveLettersOnly = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 5) {
        fiveLettersOnly.push(countries[i])
    }
}
console.log(fiveLettersOnly);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const longestWebTech = [];
let lengthWebNumber = webTechs[0].length;
for (let i = 0; i < webTechs.length; i++) {
    if (lengthWebNumber < webTechs[i].length) {
        lengthWebNumber = webTechs[i].length;
        longestWebTech.length = 0;
        longestWebTech.push(webTechs[i])
    }
}
console.log(longestWebTech.toString());

const bigWebArray = []
for (let i = 0; i < webTechs.length; i++) {
    bigWebArray.push([webTechs[i], webTechs[i].length]);
}
console.log(bigWebArray);

const MERN = []
for (let i = 0; i < mernStack.length; i++) {
    MERN.push(mernStack[i])
}
console.log(MERN)

for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i])
}

const fruit = ["banana", "orange", "mango", "lemon"];
const fruitReverse = [];
while (fruit.length) {
    fruitReverse.push(fruit.pop());
}
console.log(fruitReverse);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const newTable = fullStack[0].concat(fullStack[1])

for (let i = 0; i < newTable.length; i++) {
    console.log(newTable[i])
}