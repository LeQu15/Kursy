const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const p = document.querySelector('p#author')
const input = document.querySelector('input')
const button = document.querySelector('button.generate')
const div = document.querySelector('div')

div.style.display = "flex"
div.style.alignItems = "center"
div.style.justifyContent = "center"

h1.style.textAlign = "center"
h1.style.color = "#00ad06"
h1.style.fontFamily = "Arial"
h1.style.fontSize = "60px"
h1.style.marginBottom = "3px"

h2.style.textAlign = "center"
h2.style.fontFamily = "Arial"
h2.style.fontWeight = "normal"
h2.style.margin = "0"

p.style.textAlign = "center"
p.style.fontFamily = "Arial"
p.style.margin = "0 0 20px 0"
p.style.fontSize = "15px"

input.style.width = "1300px"
input.style.height = "50px"
input.style.fontSize = "25px"
input.style.border = "2px solid #00ad06"
input.style.margin = "5px"
input.style.padding = "5px"

button.style.backgroundColor = "#00ad06"
button.style.border = "2px solid #00ad06"
button.style.color = "white"
button.style.fontSize = "24px"
button.style.padding = "5px"
button.style.margin = "5px"
button.style.height = "60px"


let box = document.querySelector('div#box')
box.style.width = "70%"
box.style.margin = "0 auto"
box.style.marginTop = '50px'
let number
const errorMessage = document.querySelector('p.error')
errorMessage.style.color = "red"
errorMessage.style.fontFamily = "Arial"
errorMessage.style.fontSize = "20px"
errorMessage.style.margin = "10px 0 10px 470px"

button.addEventListener('click', () => {
    errorMessage.textContent = ""
    const remove = document.getElementById('box')
    while (remove.lastElementChild) {
        remove.removeChild(remove.lastElementChild)
    }
    divNumber = input.value
    if (divNumber) {
        if (isNaN(divNumber)) {
            errorMessage.textContent = "Input value must be a number"
        } else {
            divNumber = Number(divNumber)
            for (let i = 0; i < divNumber + 1; i++) {
                number = document.createElement('div')
                number.className = 'number'
                number.style.fontSize = '24px'
                number.style.display = "inline-block"
                number.style.margin = "5px"
                number.style.width = "200px"
                number.style.height = "70px"
                number.style.color = "white"
                number.style.textAlign = "center"
                number.style.lineHeight = "70px"
                number.style.fontFamily = "Arial"
                number.style.fontSize = "50px"
                number.textContent = i
                if (i % 2 == 0) {
                    number.style.backgroundColor = '#3ca102'
                } else if (i & 2 != 0) {
                    number.style.backgroundColor = "#ffe921"
                }
                const isPrime = num => {
                    for (let y = 2; y < num; y++)
                        if (num % y === 0) return false;
                    if (num > 1) {
                        number.style.backgroundColor = '#ff4d4d'
                    }
                }
                isPrime(i)
                box.appendChild(number)
            }
        }
    } else {
        errorMessage.textContent = "Enter number values on the input field to generate numbers"
    }

})