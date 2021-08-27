document.querySelector('html').style.height = "100%"
document.querySelector('body').style.height = "100%"
const h1 = document.querySelector('p.text')
const h2 = document.querySelector('h2')
const div = document.querySelector('div.wrapper')
const letter = document.querySelector('span')
const center = document.querySelector('div.center')

div.style.display = "flex"
div.style.flexDirection = "column"
div.style.alignItems = "center"
div.style.justifyContent = "center"
div.style.height = "100%"

h1.style.color = "#1a1a1a"
h1.style.fontFamily = "Arial"
h1.style.fontSize = "60px"
h1.style.margin = "0"
center.style.marginBottom = "3px"
center.style.boxShadow = "1px 1px 5px #b0b0b0"
center.style.width = "40%"
center.style.textAlign = "center"
h1.style.textShadow = "2px 4px gray"
h1.style.display = "inline-block"
center.style.padding = "20px 0"

h2.style.textAlign = "center"
h2.style.fontFamily = "Arial"
h2.style.fontWeight = "normal"
h2.style.marginTop = "40px"
h2.style.fontSize = "100px"
h2.style.color = "#38ff81"
h2.style.textShadow = "2px 4px black"
h2.style.padding = "80px 60px"

letter.style.fontFamily = "Arial"
letter.style.fontWeight = "normal"
letter.style.fontSize = "60px"
letter.style.color = "#38ff81"
letter.style.textShadow = "2px 4px black"
letter.style.paddingLeft = "10px"
letter.style.display = "inline-block"
letter.style.margin = "0"


document.body.addEventListener('keydown', e => {
    h1.textContent = "You pressed"
    letter.textContent = e.key
    h2.textContent = e.keyCode
    h2.style.boxShadow = "1px 1px 5px #b0b0b0"
})