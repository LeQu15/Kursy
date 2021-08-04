const countries = ['Egypt', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Ireland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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

const multiArray = arr => {
    let result = 1;
    numbers.forEach(function (element) {
        result *= element
    })
    return result
}
console.log(multiArray(numbers));


function printCountry(country) {
    console.log(country)
}
countries.forEach(printCountry)

console.log("")

function printName(name) {
    console.log(name)
}
names.forEach(printName)

console.log("")

function printNumber(num) {
    console.log(num)
}
numbers.forEach(printNumber)

console.log("")

const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

console.log("")

const numbersSquare = numbers.map((num) => num *= num)
console.log(numbersSquare)

console.log("")

const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

console.log("")

const productsArray = Object.keys(products).map((key) => [Number(key), products[key]])
console.log(productsArray)

console.log("")

const filterLand = countries.filter((country) =>
    country.includes('land')
)
console.log(filterLand)

const sixCharactersCountry = countries.filter((country) =>
    country.length == 6
)
console.log(sixCharactersCountry)

const sixAndMoreCharactersCountry = countries.filter((country) =>
    country.length >= 6
)
console.log(sixAndMoreCharactersCountry)

const startsWithE = countries.filter((country) =>
    country.startsWith("E")
)
console.log(startsWithE)

const pricesWithValue = products.filter((product) =>
    product.price > 0
)
console.log(pricesWithValue)

const getStringLists = function (array) {
    console.log(array.filter(e => typeof e === 'string' && e !== ''))
}
getStringLists(names)

const sum = numbers.reduce((a, b) => a + b)

console.log(sum)

const countriesText = countries.reduce((a, b) => (a + ', ' + b)).replace(", Ireland", " and Ireland") + " are north European countries"

console.log(countriesText)

const someLength = names.some((name) => {
    return name.length > 7
})
console.log(someLength)

const everyLand = countries.every((country) => {
    return country.includes("land")
})
console.log(everyLand)

const findCountry = countries.find((country) => country.length == 6)
console.log(findCountry)

const findIndexCountry = countries.findIndex((country) => country.length == 6)
console.log(findIndexCountry)

const findNorway = countries.findIndex((country) => country == "Norway")
console.log(findNorway)

const findRussia = countries.findIndex((country) => country == "Russia")
console.log(findRussia)