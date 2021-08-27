import {
    countries
} from './countries_data.js';

const number = document.querySelector('p.number')
const langButton = document.getElementById('languages')
const popButton = document.getElementById('population')
const desc = document.querySelector('p.desc')
const main = document.querySelector('main')

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
const arrayOfNumbers = popularLanguages(10)

const countriesName = countries.map(function (countries) {
    return countries.name
})
number.textContent = number.textContent.replace('x', countriesName.length - 1)

let container;
let title;
let width;
let count;
let elementWidth;
let divWidth;
langButton.addEventListener('click', () => {
    const remove = document.getElementById('box')
    while (remove.lastElementChild) {
        remove.removeChild(remove.lastElementChild)
    }


    desc.textContent = "10 Most Spoken languages in the world"
    for (let i = 0; i < 10; i++) {
        container = document.createElement('div')
        container.className = 'container'
        container.style.width = "100%"
        container.style.display = "flex"
        container.style.marginBottom = "12px"
        container.style.alignItems = "center"

        title = document.createElement('p')
        title.textContent = arrayOfNumbers[i].number
        title.style.display = "inline-block"
        title.style.fontFamily = "Arial"
        title.style.fontSize = "30px"
        title.style.margin = "0 1% 0 10%"
        title.style.width = "15%"
        title.style.height = "60px"
        title.style.lineHeight = "60px"

        divWidth = document.createElement('div')
        divWidth.style.display = "inline-block"
        divWidth.style.width = "45%"
        divWidth.style.height = "60px"

        width = document.createElement('div')
        width.style.backgroundColor = "orange"
        if (i == 1) {
            width.style.width = "45%"
        } else {
            elementWidth = (arrayOfNumbers[i].count / arrayOfNumbers[0].count) * 100 + "%"
            width.style.width = elementWidth
        }
        width.style.height = "60px"

        count = document.createElement('p')
        count.textContent = arrayOfNumbers[i].count
        count.style.display = "inline-block"
        count.style.fontFamily = "Arial"
        count.style.fontSize = "30px"
        count.style.margin = "0 10%"
        count.style.height = "60px"
        count.style.lineHeight = "60px"

        main.appendChild(container)
        container.appendChild(title)
        container.appendChild(divWidth)
        divWidth.appendChild(width)
        container.appendChild(count)
    }
})

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
const pop = population(10)

popButton.addEventListener('click', () => {
    const remove = document.getElementById('box')
    while (remove.lastElementChild) {
        remove.removeChild(remove.lastElementChild)
    }

    desc.textContent = "10 Most populated countries in the world"
    for (let i = 0; i < 10; i++) {
        container = document.createElement('div')
        container.className = 'container'
        container.style.width = "100%"
        container.style.display = "flex"
        container.style.marginBottom = "12px"
        container.style.alignItems = "center"

        title = document.createElement('p')
        title.textContent = pop[i].name
        title.style.display = "inline-block"
        title.style.fontFamily = "Arial"
        title.style.fontSize = "30px"
        title.style.margin = "0 1% 0 10%"
        title.style.width = "15%"
        title.style.height = "60px"
        title.style.lineHeight = "60px"

        divWidth = document.createElement('div')
        divWidth.style.display = "inline-block"
        divWidth.style.width = "45%"
        divWidth.style.height = "60px"

        width = document.createElement('div')
        width.style.backgroundColor = "orange"
        if (i == 1) {
            width.style.width = "45%"
        } else {
            elementWidth = (pop[i].population / pop[0].population) * 100 + "%"
            width.style.width = elementWidth
        }
        width.style.height = "60px"

        count = document.createElement('p')
        count.textContent = pop[i].population.toLocaleString(('en-US'))
        count.style.display = "inline-block"
        count.style.fontFamily = "Arial"
        count.style.fontSize = "30px"
        count.style.margin = "0 10%"
        count.style.height = "60px"
        count.style.lineHeight = "60px"

        main.appendChild(container)
        container.appendChild(title)
        container.appendChild(divWidth)
        divWidth.appendChild(width)
        container.appendChild(count)
    }
})