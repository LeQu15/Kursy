import {
    countries
} from './countries_data.js';

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
    console.log(`Jest tu ${lang.length} różnych języków`)

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
console.log(popularLanguages(20))