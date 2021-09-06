import {
    countries
} from './countries.js';

const h2 = document.querySelector('h2')
const any = document.querySelector('button#any')
const start = document.querySelector('button#start')
const input = document.querySelector('input')
const sort = document.querySelector('button#sort')
const text = document.querySelector('p.text')
const letter = document.querySelector('p.letter')
const numbers = document.querySelector('p.numbers')
const text2 = document.querySelector('p.text2')

h2.textContent = h2.textContent.replace('x', countries.length)

let main = document.querySelector('main')
main.style.width = "90%"
let number
let p
let blue
for (let i = 0; i < countries.length; i++) {
    number = document.createElement('div')
    blue = document.createElement('blue')
    p = document.createElement('p')
    number.className = 'number'
    blue.className = 'blue'
    p.className = 'paragraph'
    p.textContent = countries[i]
    main.appendChild(number)
    number.appendChild(blue)
    blue.appendChild(p)
}

any.addEventListener('click', function () {
    any.classList.add('on')
    start.classList.remove('on')
    createElements()
})

start.addEventListener('click', function () {
    start.classList.add('on')
    any.classList.remove('on')
    createElements()
})

input.addEventListener('input', createElements)

function createElements() {
    let data = input.value
    const remove = document.getElementById('container')
    while (remove.lastElementChild) {
        remove.removeChild(remove.lastElementChild)
    }
    if (any.classList.contains('on')) {
        let newArray = countries.filter(str => str.toLowerCase().includes(data.toLowerCase()))
        if (input.value) {
            text.textContent = 'Countries containing' + ' '
            letter.textContent = input.value
            numbers.textContent = newArray.length
            text2.textContent = 'are'
        } else {
            text.textContent = ''
            letter.textContent = ''
            numbers.textContent = ''
            text2.textContent = ''
        }

        if (sort.classList.contains('on')) {
            newArray.reverse()
        }
        for (let i = 0; i < newArray.length; i++) {
            number = document.createElement('div')
            blue = document.createElement('blue')
            p = document.createElement('p')
            number.className = 'number'
            blue.className = 'blue'
            p.className = 'paragraph'
            p.textContent = newArray[i]
            main.appendChild(number)
            number.appendChild(blue)
            blue.appendChild(p)
        }
    } else {
        const newArray = countries.filter(str => str.toLowerCase().startsWith(data.toLowerCase()))
        if (input.value) {
            text.textContent = 'Countries starting with' + ' '
            letter.textContent = input.value
            numbers.textContent = newArray.length
            text2.textContent = 'are'
        } else {
            text.textContent = ''
            letter.textContent = ''
            numbers.textContent = ''
            text2.textContent = ''
        }
        if (sort.classList.contains('on')) {
            newArray.reverse()
        }
        for (let i = 0; i < newArray.length; i++) {
            number = document.createElement('div')
            blue = document.createElement('blue')
            p = document.createElement('p')
            number.className = 'number'
            blue.className = 'blue'
            p.className = 'paragraph'
            p.textContent = newArray[i]
            main.appendChild(number)
            number.appendChild(blue)
            blue.appendChild(p)
        }
    }
}

sort.addEventListener('click', function () {
    sort.classList.toggle('on')
    createElements()
})