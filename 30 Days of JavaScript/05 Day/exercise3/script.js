import {
    countries
} from './countries.js';

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort()

let max = Math.max(...ages);
console.log(max);
let min = Math.min(...ages);
console.log(min);

console.log(ages[Math.floor(ages.length / 2)])
const averageAge = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length
console.log(averageAge);

let minAverage = Math.abs(min - averageAge);
let maxAverage = Math.abs(max - averageAge);
console.log(minAverage > maxAverage);

console.log(countries.length)
console.log(countries.slice(0, 10));
console.log(countries[Math.floor(countries.length / 2)])

const countries2 = countries.splice(0, Math.floor(countries.length / 2));
console.log(countries2)
console.log(countries);