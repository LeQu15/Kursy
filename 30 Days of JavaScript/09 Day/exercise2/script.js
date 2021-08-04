import {
    countries
} from './countries_data.js';

const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ' '
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    },
]

const totalPrice = function () {
    const product = products.map((product) => product.price).filter((product) => parseInt(product) == product).reduce((firstproduct, lastproduct) => firstproduct + lastproduct)
    console.log(product)
}
totalPrice()

let price = products.reduce((acc, lastproduct) => (acc + Number(lastproduct.price)), 0)

console.log(price)

const categorizeCountries = function () {
    const array = countries.map(function (countries) {
        return countries.name
    })
    const countriesWithIsland = array.filter((country) => country.includes('Island'))
    const countriesWithLand = array.filter((country) => country.includes('land'))
    const countriesEndingWithIa = array.filter((country) => country.endsWith('ia'))
    const countriesEndingWithStan = array.filter((country) => country.endsWith('stan'))
    const newArray = []
    newArray.push(countriesWithIsland, countriesWithLand, countriesEndingWithIa, countriesEndingWithStan)
    return newArray
}
console.log(categorizeCountries())

const countLetters = function () {
    const array = countries.map(function (countries) {
        return countries.name
    })
    array.sort()
    console.log(array)
    const arrayOfNumbers = []
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWYZÅ"
    let count = 0;
    let nextLetter = 0;
    let letter = chars.charAt(0)
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith(letter)) {
            count++
        } else {
            arrayOfNumbers.push({
                letter,
                count
            })
            count = 1;
            nextLetter++
            letter = chars.charAt(nextLetter)
        }
    }
    arrayOfNumbers.push({ //Last letter
        letter,
        count
    })
    return arrayOfNumbers
}

console.log(countLetters())

const firstTenCountries = function () {
    const array = []
    const ftcountries = countries.map(function (countries) {
        return countries.name
    }).splice(0, 10)
    array.push(ftcountries)
    return array
}

console.log("First ten countries: " + firstTenCountries())

const lastTenCountries = function () {
    const array = []
    const ltcountries = countries.map(function (countries) {
        return countries.name
    })
    const index = ltcountries.length - 10;
    ltcountries.splice(0, index)
    array.push(ltcountries)
    return array
}

console.log("Last ten countries: " + lastTenCountries())

const mostUsedLetter = function () {
    const array = countries.map(function (countries) {
        return countries.name
    })
    array.sort()
    console.log(array)
    const arrayOfNumbers = []
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWYZÅ"
    let count = 0;
    let mostUsedCharacter = chars.charAt(0)
    let biggestNumber = 0;
    let nextLetter = 0;
    let letter = chars.charAt(0)
    for (let i = 0; i < array.length; i++) {
        if (biggestNumber < count) {
            biggestNumber = count
            mostUsedCharacter = chars.charAt(nextLetter)
        }
        if (array[i].startsWith(letter)) {
            count++
        } else {
            count = 1;
            nextLetter++
            letter = chars.charAt(nextLetter)
        }
    }
    count = biggestNumber
    arrayOfNumbers.push(mostUsedCharacter, count)
    return arrayOfNumbers
}

console.log(mostUsedLetter())