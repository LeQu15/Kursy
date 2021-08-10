import {
    countries
} from './countries_data.js';

const countriesArray = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.table(countriesArray)
console.table(countries)

console.group('CountriesArray')
console.log(countriesArray)
console.log(countries)
console.groupEnd()