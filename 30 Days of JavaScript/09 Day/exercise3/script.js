import {
    countries
} from './countries_data.js';

const sortCountries = function () {
    const sortedByName = countries.sort((a, b) => a.name > b.name ? 1 : -1).map(function (countries) {
        return countries.name
    })
    console.log("Sorted by name: " + sortedByName)

    const sortedByCapital = countries.sort((a, b) => a.capital > b.capital ? 1 : -1).filter((country) => country.capital).map(function (countries) {
        return countries.name
    })
    console.log("Sorted by capital: " + sortedByCapital)

    const sortedByPopulation = countries.sort((a, b) => a.population > b.population ? 1 : -1).map(function (countries) {
        return countries.name
    })
    console.log("Sorted by population: " + sortedByPopulation)
}

sortCountries()

const popularLanguages = function (n) {

    const array = countries.map(function (countries) {
        return countries.languages
    })

    const arrayOfNumbers = []
    let count = 0;
    let number = array[0]
    let arr = []
    for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < array[i].length; y++) {
            number = array[i][y]
            arr.push(number)
        }
    }
    let lang = arr.filter(function (value, index, array) {
        return array.indexOf(value) === index
    });

    for (let i = 0; i < lang.length; i++) {
        number = lang[i]
        arr.forEach(num => (num === number && count++))
        arrayOfNumbers.push({
            number,
            count
        })
        count = 0;
    }
    arrayOfNumbers.sort((a, b) => {
        return b.count - a.count
    })
    return arrayOfNumbers.slice(0, n)
}
console.log(popularLanguages(10))

const population = function (n) {

    const array = countries.map(function (countries) {
        return countries.name
    })
    const population = countries.map(function (countries) {
        return countries.population
    })

    const arrayOfNumbers = []
    for (let i = 0; i < array.length; i++) {
        arrayOfNumbers.push({
            name: array[i],
            population: population[i]
        })
    }
    arrayOfNumbers.sort((a, b) => {
        return b.population - a.population
    })
    return arrayOfNumbers.slice(0, n)
}
console.log(population(10))