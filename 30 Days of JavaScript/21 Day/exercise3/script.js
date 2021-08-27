const changingTitle = document.querySelector('h1')
document.querySelector('h1').style.textAlign = 'center'
document.querySelector('h1').style.fontFamily = 'Arial'

changingTitle.innerHTML = changingTitle.innerHTML.replace('2021', '<span>2021</span>')
const span = document.querySelector('span')
span.style.fontSize = '70px'

const title = document.querySelector('h2')
document.querySelector('h2').style.textAlign = 'center'
document.querySelector('h2').style.textDecoration = 'underline'
document.querySelector('h2').style.fontWeight = 'normal'
document.querySelector('ul').style.width = '70%'
document.querySelector('ul').style.height = '100%'
document.querySelector('ul').style.margin = '0 auto'

const dateDiv = document.createElement('div');
dateDiv.style.textAlign = 'center'
dateDiv.style.width = "10%"
dateDiv.style.margin = "0 auto"
dateDiv.style.fontFamily = 'Arial'
dateDiv.style.borderStyle = "solid"
dateDiv.style.borderWidth = "10px"
dateDiv.style.marginBottom = "20px"

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(dateDiv, title)

function time() {
    const date = new Date()
    const year = date.getFullYear()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

    const fullDate = monthNames[date.getMonth()] + " " + days + "," + year + " " + hour + ":" + minutes + ":" + seconds
    dateDiv.textContent = fullDate
}
time()
setInterval(time, 1000)

function randomColorDate() {
    let randomHex = Math.floor(Math.random() * 16777215).toString(16);
    randomHex = "#" + randomHex
    dateDiv.style.backgroundColor = randomHex
    dateDiv.style.borderColor = randomHex
}
randomColorDate()
setInterval(randomColorDate, 1000)

function randomColorYear() {
    let randomHex = Math.floor(Math.random() * 16777215).toString(16);
    randomHex = "#" + randomHex
    span.style.color = randomHex
}
randomColorYear()
setInterval(randomColorYear, 1000)


const allLi = document.querySelectorAll('li')
allLi.forEach(title => {
    title.style.fontSize = '20px'
    title.style.margin = '0 auto'
    title.style.listStyle = 'none'
    title.style.backgroundColor = 'green'
    title.style.border = '30px solid green'
    title.style.lineHeight = '20px'
    title.style.marginTop = '5px'
    title.style.boxSizing = 'border-box'
    title.style.fontFamily = 'Arial'
    title.style.width = '80%'
})

allLi[1].style.backgroundColor = 'yellow'
allLi[1].style.border = '30px solid yellow'

allLi[2].style.backgroundColor = 'red'
allLi[2].style.border = '30px solid red'
allLi[3].style.backgroundColor = 'red'
allLi[3].style.border = '30px solid red'
allLi[4].style.backgroundColor = 'red'
allLi[4].style.border = '30px solid red'
allLi[5].style.backgroundColor = 'red'
allLi[5].style.border = '30px solid red'
allLi[6].style.backgroundColor = 'red'
allLi[6].style.border = '30px solid red'