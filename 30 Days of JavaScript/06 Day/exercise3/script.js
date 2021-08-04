import {
    countries2
} from './countries.js';

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

const countriesCopy = countries;
countriesCopy.sort();
const sortedCountries = countriesCopy;
console.log(sortedCountries)

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

webTechs.sort();
mernStack.sort()

let land = [];
let noland = [];
for (let i = 0; i < countries2.length; i++) {
    if (countries2[i].includes("land")) {
        land.push(countries2[i]);
    } else {
        noland.push(countries2[i])
    }
}
if (land.length == 0) {
    console.log("All these countries are without land")
} else {
    console.log(land);
}

let longestCountry = [];
let lengthNumber = countries2[0].length;
for (let i = 0; i < countries2.length; i++) {
    if (lengthNumber < countries2[i].length) {
        lengthNumber = countries2[i].length;
        longestCountry.length = 0;
        longestCountry.push(countries2[i])
    }
}
console.log(longestCountry.toString());

const fourLettersOnly = [];
for (let i = 0; i < countries2.length; i++) {
    if (countries2[i].length == 4) {
        fourLettersOnly.push(countries2[i])
    }
}
console.log(fourLettersOnly);

const twoWordsOnly = [];
for (let i = 0; i < countries2.length; i++) {
    if (countries2[i].includes(" ")) {
        twoWordsOnly.push(countries2[i])
    }
}
console.log(twoWordsOnly);

countries2.reverse()
const reversedCountry = countries2;
for (let i = 0; i < countries2.length; i++) {
    reversedCountry[i] = reversedCountry[i][0].toUpperCase() + reversedCountry[i].substr(1);
}
console.log(reversedCountry)