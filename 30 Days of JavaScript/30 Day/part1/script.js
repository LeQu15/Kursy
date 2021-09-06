import {
    countries
} from './countries_data.js';

const h2 = document.querySelector('h2')
const nameButton = document.querySelector('button#name')
const capitalButton = document.querySelector('button#capital')
const populationButton = document.querySelector('button#population')
const input = document.querySelector('input')
const text = document.querySelector('p.text')
const popi = document.getElementById('pop')
const capi = document.getElementById('cap')
const nami = document.getElementById('nam')
const bottom = document.getElementById('sort')

bottom.addEventListener('click', function () {
    location.href = "#box2"
})

h2.textContent = h2.textContent.replace('x', countries.length)

let main = document.querySelector('main')
main.style.width = "90%"
let number
let p
let flag
let population
let capital
let languages
for (let i = 0; i < countries.length; i++) {
    number = document.createElement('div')
    p = document.createElement('p')
    flag = document.createElement('div')
    population = document.createElement('p')
    capital = document.createElement('p')
    languages = document.createElement('p')
    languages.className = 'lang'
    languages.textContent = 'Languages:' + " " + countries[i].languages.join(", ")
    capital.className = 'cap'
    capital.textContent = "Capital:" + " " + countries[i].capital
    population.className = 'pop'
    population.textContent = "Population:" + " " + Number(countries[i].population).toLocaleString("en")
    flag.className = 'flag'
    flag.style.backgroundImage = "url('" + countries[i].flag + "')"
    flag.style.backgroundSize = 'contain'
    number.className = 'number'
    p.className = 'paragraph'
    p.textContent = countries[i].name
    main.appendChild(number)
    number.appendChild(flag)
    number.appendChild(p)
    number.appendChild(capital)
    number.appendChild(languages)
    number.appendChild(population)
}

nameButton.addEventListener('click', function () {
    populationButton.classList.remove('on')
    capitalButton.classList.remove('on')
    populationButton.classList.remove('next')
    capitalButton.classList.remove('next')
    createElements()
})

capitalButton.addEventListener('click', function () {
    populationButton.classList.remove('on')
    nameButton.classList.remove('on')
    populationButton.classList.remove('next')
    nameButton.classList.remove('next')
    createElements()
})

populationButton.addEventListener('click', function () {
    nameButton.classList.remove('on')
    capitalButton.classList.remove('on')
    nameButton.classList.remove('next')
    capitalButton.classList.remove('next')
    createElements()
})
let newArray
input.addEventListener('input', createElements)

function createElements() {
    let data = input.value
    const remove = document.getElementById('container')
    while (remove.lastElementChild) {
        remove.removeChild(remove.lastElementChild)
    }
    newArray = countries.filter(str => str.name.toLowerCase().includes(data.toLowerCase()) || str.capital.toLowerCase().includes(data.toLowerCase()) || str.languages.toString().toLowerCase().includes(data.toLowerCase()) || str.population.toString().toLowerCase().includes(data.toLowerCase()) || str.population.toLocaleString("en").toLowerCase().includes(data.toLowerCase()))

    if (input.value) {
        text.textContent = newArray.length + " " + "countries satisfied the search criteria"
    } else {
        text.textContent = ''
    }

    if (nameButton.classList.contains('next')) {
        newArray = newArray.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    } else {
        if (nameButton.classList.contains('on')) {
            newArray = newArray.sort(function (a, b) {
                return b.name.localeCompare(a.name);
            });

        }
    }


    if (capitalButton.classList.contains('next')) {
        newArray = newArray.sort(function (a, b) {
            return a.capital.localeCompare(b.capital);
        });
    } else {
        if (capitalButton.classList.contains('on')) {
            newArray = newArray.sort(function (a, b) {
                return b.capital.localeCompare(a.capital);
            });

        }
    }

    if (populationButton.classList.contains('next')) {
        newArray = newArray.sort(function (a, b) {
            return a.population - b.population
        });
    } else {
        if (populationButton.classList.contains('on')) {
            newArray = newArray.sort(function (a, b) {
                return b.population - a.population;
            });

        }
    }




    for (let i = 0; i < newArray.length; i++) {
        number = document.createElement('div')
        p = document.createElement('p')
        flag = document.createElement('div')
        flag.style.backgroundImage = "url('" + newArray[i].flag + "')"
        flag.style.backgroundSize = 'contain'
        flag.className = 'flag'
        languages = document.createElement('p')
        languages.className = 'lang'
        languages.textContent = 'Languages:' + " " + newArray[i].languages.join(", ")
        population = document.createElement('p')
        capital = document.createElement('p')
        capital.className = 'cap'
        population.className = 'pop'
        number.className = 'number'
        p.className = 'paragraph'
        p.textContent = newArray[i].name
        main.appendChild(number)
        number.appendChild(flag)
        number.appendChild(p)
        if (newArray[i].capital) {
            capital.textContent = "Capital:" + " " + newArray[i].capital
            number.appendChild(capital)
        }
        number.appendChild(languages)
        if (newArray[i].population > 0) {
            population.textContent = "Population:" + " " + Number(newArray[i].population).toLocaleString("en")
            number.appendChild(population)
        }
    }
}


capitalButton.addEventListener('click', function () {
    nami.classList.add('hidden')
    capi.classList.remove('hidden')
    popi.classList.add('hidden')
    if (capitalButton.className == "next") {
        capitalButton.className = "on";
        capi.classList.remove('fa-arrow-up')
        capi.classList.add('fa-arrow-down')
    } else {
        capitalButton.className = "next";
        capi.classList.remove('fa-arrow-down')
        capi.classList.add('fa-arrow-up')
    }
    createElements()
})

nameButton.addEventListener('click', function () {
    nami.classList.remove('hidden')
    capi.classList.add('hidden')
    popi.classList.add('hidden')
    if (nameButton.className == "next") {
        nameButton.className = "on";
        nami.classList.remove('fa-arrow-up')
        nami.classList.add('fa-arrow-down')
    } else {
        nameButton.className = "next";
        nami.classList.remove('fa-arrow-down')
        nami.classList.add('fa-arrow-up')
    }
    createElements()
})

populationButton.addEventListener('click', function () {
    popi.classList.remove('hidden')
    capi.classList.add('hidden')
    nami.classList.add('hidden')
    if (populationButton.className == "next") {
        populationButton.className = "on";
        popi.classList.remove('fa-arrow-up')
        popi.classList.add('fa-arrow-down')
    } else {
        populationButton.className = "next";
        popi.classList.add('fa-arrow-up')
        popi.classList.remove('fa-arrow-down')
    }
    createElements()
})

console.log(newArray)


const langButton = document.getElementById('languages2')
const popButton = document.getElementById('population2')
const desc2 = document.querySelector('p.desc2')
const box2 = document.querySelector('div#box2')

let newcountries
input.addEventListener('input', function () {
    newcountries = countries
    let data = input.value
    newcountries = newcountries.filter(str => str.name.toLowerCase().includes(data.toLowerCase()) || str.capital.toLowerCase().includes(data.toLowerCase()) || str.languages.toString().toLowerCase().includes(data.toLowerCase()) || str.population.toString().toLowerCase().includes(data.toLowerCase()) || str.population.toLocaleString("en").toLowerCase().includes(data.toLowerCase()))
    const popularLanguages = function (n) {
        const array = newcountries.map(function (countries) {
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

    const countriesName = countries.map(function (countries) {
        return countries.name
    })

    let container2;
    let title2;
    let width2;
    let count2;
    let elementWidth2;
    let divWidth2;

    langButton.addEventListener('click', () => {
        let arrayOfNumbers = popularLanguages(10)
        const remove = document.getElementById('box2')
        while (remove.lastElementChild) {
            remove.removeChild(remove.lastElementChild)
        }
        console.log(arrayOfNumbers)
        desc2.textContent = "World languages"
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            container2 = document.createElement('div')
            container2.className = 'container'
            container2.style.width = "100%"
            container2.style.display = "flex"
            container2.style.marginBottom = "12px"
            container2.style.alignItems = "center"
            container2.style.height = '30px'

            title2 = document.createElement('p')
            title2.textContent = arrayOfNumbers[i].number
            title2.style.display = "inline-block"
            title2.style.fontFamily = "Arial"
            title2.style.fontSize = "15px"
            title2.style.margin = "0 40px 0 10%"
            title2.style.width = "40%"
            title2.style.maxWidth = '450px'
            title2.style.height = "30px"
            title2.style.lineHeight = "30px"
            title2.style.textAlign = "right"

            divWidth2 = document.createElement('div')
            divWidth2.style.display = "inline-block"
            divWidth2.style.width = "45%"
            divWidth2.style.height = "30px"

            width2 = document.createElement('div')
            width2.style.backgroundColor = "orange"
            if (i == 0) {
                width2.style.width = "100%"
            } else {
                elementWidth2 = (arrayOfNumbers[i].count / arrayOfNumbers[0].count) * 100 + "%"
                console.log(title2.textContent, elementWidth2)
                width2.style.width = elementWidth2
            }
            width2.style.height = "30px"

            count2 = document.createElement('p')
            count2.textContent = arrayOfNumbers[i].count
            count2.style.display = "inline-block"
            count2.style.fontFamily = "Arial"
            count2.style.fontSize = "20px"
            count2.style.margin = "0 10% 0 5%"
            count2.style.height = "30px"
            count2.style.lineHeight = "30px"

            box2.appendChild(container2)
            container2.appendChild(title2)
            container2.appendChild(divWidth2)
            divWidth2.appendChild(width2)
            container2.appendChild(count2)
        }
    })

    const population2 = function (n) {

        const array = newcountries.map(function (countries) {
            return countries.name
        })
        const population = newcountries.map(function (countries) {
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

    popButton.addEventListener('click', () => {
        let pop = population2(10)
        const remove = document.getElementById('box2')
        while (remove.lastElementChild) {
            remove.removeChild(remove.lastElementChild)
        }

        desc2.textContent = "World population"
        for (let i = 0; i < pop.length; i++) {
            container2 = document.createElement('div')
            container2.className = 'container'
            container2.style.width = "100%"
            container2.style.display = "flex"
            container2.style.marginBottom = "12px"
            container2.style.alignItems = "center"
            container2.style.justifyContent = 'space-between'
            container2.style.height = '30px'

            title2 = document.createElement('p')
            title2.textContent = pop[i].name
            title2.style.display = "inline-block"
            title2.style.fontFamily = "Arial"
            title2.style.fontSize = "15px"
            title2.style.margin = "0 40px 0 10%"
            title2.style.width = "40%"
            title2.style.maxWidth = '450px'
            title2.style.height = "30px"
            title2.style.lineHeight = "30px"
            title2.style.textAlign = "right"

            divWidth2 = document.createElement('div')
            divWidth2.style.display = "inline-block"
            divWidth2.style.width = "45%"
            divWidth2.style.height = "30px"

            width2 = document.createElement('div')
            width2.style.backgroundColor = "orange"
            if (i == 0) {
                width2.style.width = "100%"
            } else {
                elementWidth2 = (pop[i].population / pop[0].population) * 100 + "%"
                width2.style.width = elementWidth2
            }
            width2.style.height = "30px"

            count2 = document.createElement('p')
            count2.textContent = pop[i].population.toLocaleString(('en-US'))
            count2.style.display = "inline-block"
            count2.style.fontFamily = "Arial"
            count2.style.fontSize = "20px"
            count2.style.margin = "0 10% 0 5%"
            count2.style.height = "30px"
            count2.style.lineHeight = "30px"


            box2.appendChild(container2)
            container2.appendChild(title2)
            container2.appendChild(divWidth2)
            divWidth2.appendChild(width2)
            container2.appendChild(count2)
        }
    })
})