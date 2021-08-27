document.querySelector('h1').style.textAlign = "center"
document.querySelector('h1').style.fontFamily = "Arial"
document.querySelector('h1').style.marginBottom = "3px"
document.querySelector('h2').style.textAlign = "center"
document.querySelector('h2').style.fontFamily = "Arial"
document.querySelector('h2').style.fontWeight = "normal"
document.querySelector('h2').style.textDecoration = "underline"
document.querySelector('h2').style.margin = "0"
document.querySelector('p').style.textAlign = "center"
document.querySelector('p').style.fontFamily = "Arial"
document.querySelector('p').style.textDecoration = "underline"
document.querySelector('p').style.margin = "0 0 20px 0"
document.querySelector('p').style.fontSize = "15px"


let div = document.querySelector('div')
div.style.width = "1300px"
div.style.margin = "0 auto"
let number
for (let i = 0; i < 101; i++) {
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
    number.style.fontSize = "30px"
    number.textContent = i
    if (i % 2 == 0) {
        number.style.backgroundColor = '#83fc89'
    } else if (i & 2 != 0) {
        number.style.backgroundColor = "#ffee57"
    }
    const isPrime = num => {
        for (let y = 2; y < num; y++)
            if (num % y === 0) return false;
        if (num > 1) {
            number.style.backgroundColor = '#fc8383'
        }
    }
    isPrime(i)
    div.appendChild(number)
}