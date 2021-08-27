import {
    countries
} from './countries.js';

document.querySelector('h1').style.textAlign = "center"
document.querySelector('h1').style.fontSize = "60px"
document.querySelector('h1').style.letterSpacing = "10px"
document.querySelector('h1').style.fontFamily = "Arial"
document.querySelector('h1').style.marginBottom = "3px"

document.querySelector('h2').style.textAlign = "center"
document.querySelector('h2').style.fontFamily = "Arial"
document.querySelector('h2').style.margin = "0"

document.querySelector('p.title').style.textAlign = "center"
document.querySelector('p.title').style.fontFamily = "Arial"
document.querySelector('p.title').style.margin = "0"
document.querySelector('p.title').style.fontSize = "15px"
document.querySelector('p.author').style.textAlign = "center"
document.querySelector('p.author').style.fontFamily = "Arial"
document.querySelector('p.author').style.margin = "0 0 20px 0"
document.querySelector('p.author').style.fontSize = "15px"

const span = document.querySelector('span')
span.textContent = countries.length

let div = document.querySelector('div')
div.style.width = "1300px"
div.style.margin = "0 auto"
let number
for (let i = 0; i < countries.length; i++) {
    number = document.createElement('div')
    number.className = 'number'
    number.style.borderColor = "#f7f7f7"
    number.style.borderStyle = "solid"
    number.style.borderWidth = "3px"
    number.style.display = "inline-block"
    number.style.margin = "5px"
    number.style.width = "200px"
    number.style.height = "200px"
    number.style.textAlign = "center"
    number.style.lineHeight = "200px"
    number.style.fontFamily = "Arial"
    number.style.fontSize = "18px"
    number.textContent = countries[i]
    div.appendChild(number)
}