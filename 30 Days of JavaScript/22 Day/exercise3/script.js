import {
    asabenehChallenges2020
} from './challenges_info.js';

document.querySelector('body').style.height = "2000px"

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
    let randomHex = ''
    for (let y = 0; y < 6; y++) {
        randomHex += Math.floor(Math.random() * 16).toString(16);
    }
    randomHex = "#" + randomHex
    dateDiv.style.backgroundColor = randomHex
    dateDiv.style.borderColor = randomHex
}
randomColorDate()
setInterval(randomColorDate, 1000)

function randomColorYear() {
    let randomHex = ''
    for (let y = 0; y < 6; y++) {
        randomHex += Math.floor(Math.random() * 16).toString(16);
    }
    randomHex = "#" + randomHex
    span.style.color = randomHex
}
randomColorYear()
setInterval(randomColorYear, 1000)


const challenges = document.querySelector('ul.challenges')
let challenge
let challengeTitle
let challengeStatus
let challengeDetails
let challengeSummary
let challengeUL
let challengeLi
for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
    challenge = document.createElement('li')
    challengeTitle = document.createElement('a')
    challengeStatus = document.createElement('p')
    challengeDetails = document.createElement('details')
    challengeSummary = document.createElement('summary')
    challengeUL = document.createElement('ul')
    challenge.className = 'challenge'
    challenge.style.fontSize = '24px'
    challenge.style.margin = '0 auto'
    challenge.style.listStyle = 'none'
    challenge.style.lineHeight = '24px'
    challenge.style.marginTop = '5px'
    challenge.style.boxSizing = 'border-box'
    challenge.style.fontFamily = 'Arial'
    challenge.style.width = '80%'
    challenge.style.display = 'flex'
    challenge.style.justifyContent = 'space-between'
    challenge.style.alignContent = 'center'
    challenge.style.textAlign = "right"
    if (asabenehChallenges2020.challenges[i].status == "Done") {
        challenge.style.backgroundColor = '#61ff7b'
        challenge.style.border = '30px solid #61ff7b'
        challengeTitle.style.textDecoration = 'underline'
        challengeTitle.setAttribute("href", asabenehChallenges2020.challenges[i].githubUrl)
    } else if (asabenehChallenges2020.challenges[i].status == "Ongoing") {
        challenge.style.backgroundColor = '#f6ff52'
        challenge.style.border = '30px solid #f6ff52'
        challengeTitle.style.textDecoration = 'underline'
        challengeTitle.setAttribute("href", asabenehChallenges2020.challenges[i].githubUrl)
    } else {
        challenge.style.backgroundColor = '#ff5252'
        challenge.style.border = '30px solid #ff5252'
    }
    challengeTitle.style.fontSize = '24px'
    challengeTitle.textContent = asabenehChallenges2020.challenges[i].name
    challengeTitle.style.lineHeight = '24px'
    challengeTitle.style.boxSizing = 'border-box'
    challengeTitle.style.fontFamily = 'Arial'
    challengeTitle.style.marginTop = '5px'
    challengeTitle.style.textAlign = "left"
    challengeTitle.style.color = "black"
    challengeTitle.style.display = "inline-block"
    challengeTitle.style.float = "left"
    challengeStatus.style.float = "right"


    challengeStatus.textContent = asabenehChallenges2020.challenges[i].status
    challengeStatus.style.fontSize = '24px'
    challengeStatus.style.lineHeight = '24px'
    challengeStatus.style.marginTop = '5px'
    challengeStatus.style.boxSizing = 'border-box'
    challengeStatus.style.fontFamily = 'Arial'

    challengeStatus.style.textAlign = "right"
    challengeStatus.style.color = "black"
    challengeStatus.style.display = "inline-block"

    challengeSummary.textContent = asabenehChallenges2020.topics[i]
    challengeSummary.style.fontSize = '24px'
    challengeSummary.style.lineHeight = '24px'
    challengeDetails.style.marginTop = '5px'
    challengeSummary.style.boxSizing = 'border-box'
    challengeSummary.style.fontFamily = 'Arial'
    challengeDetails.style.textAlign = "center"
    challengeSummary.style.color = "black"
    challengeDetails.style.display = "inline-block"
    challengeSummary.style.float = "center"
    for (let y = 0; y < asabenehChallenges2020.challenges[i].topics.length; y++) {
        challengeLi = document.createElement('li')
        challengeLi.textContent = asabenehChallenges2020.challenges[i].topics[y]
        if (y == 0) {
            challengeLi.style.marginTop = "20px"
        } else {
            challengeLi.style.marginTop = "10px"
        }
        challengeLi.style.width = "auto"
        challengeLi.style.textAlign = "center"
        challengeDetails.appendChild(challengeLi)
    }
    challenges.appendChild(challenge)
    challenge.appendChild(challengeTitle)
    challenge.appendChild(challengeDetails)
    challengeDetails.appendChild(challengeSummary)
    challengeDetails.appendChild(challengeUL)
    challenge.appendChild(challengeStatus)
}


const bio = document.querySelector('div.bio')
bio.style.width = "30%"
bio.style.margin = "0 auto"
const name = document.querySelector('p.name')
name.textContent = asabenehChallenges2020.author.firstName + " " + asabenehChallenges2020.author.lastName
name.style.textAlign = "center"
name.style.fontFamily = "Arial"
name.style.fontSize = "40px"
name.style.fontWeight = "bold"
name.style.margin = "20px 0 0 0"
const social = document.querySelector('div.social')
social.style.height = "60px"
const icons = document.querySelectorAll('a.icon')
for (let i = 0; i < 3; i++) {
    icons[i].innerHTML = asabenehChallenges2020.author.socialLinks[i].fontawesomeIcon
    icons[i].style.display = 'inline-block'
    icons[i].style.fontSize = "40px"
    icons[i].style.margin = "0"
    icons[0].style.margin = "0px 0 0 40%"
    icons[i].setAttribute("href", asabenehChallenges2020.author.socialLinks[i].url)
}
const about = document.querySelector('p.about')
about.textContent = asabenehChallenges2020.author.bio
about.style.fontFamily = "Arial"
about.style.fontSize = "17px"
about.style.textAlign = "center"
about.style.margin = "40px 0"

const list = document.querySelector('div.list')
list.style.width = "70%"
list.style.margin = "150px auto 150px 20%"

const allList = document.querySelectorAll('p.categories')
for (let i = 0; i < 3; i++) {
    allList[i].style.display = 'inline-block'
    allList[i].style.width = '33%'
    allList[i].style.fontFamily = "Arial"
    allList[i].style.fontWeight = "bold"
    allList[i].style.fontSize = "25px"
    allList[i].style.margin = "0 auto"
    allList[i].style.padding = "0 0 0 40px"
}
const skillsUl = document.querySelector('ul.skills')
skillsUl.style.height = "150px"
const titlesUl = document.querySelector('ul.titles')
titlesUl.style.height = "150px"
const qualificationsUl = document.querySelector('ul.qualifications')
qualificationsUl.style.height = "150px"

let titlesParagraph
for (let i = 0; i < asabenehChallenges2020.author.titles.length; i++) {
    titlesParagraph = document.createElement('li')
    titlesParagraph.className = "Paragraph"
    titlesParagraph.textContent = asabenehChallenges2020.author.titles[i]
    titlesUl.appendChild(titlesParagraph)
}

let skillsParagraph
for (let i = 0; i < asabenehChallenges2020.author.skills.length; i++) {
    skillsParagraph = document.createElement('li')
    skillsParagraph.className = "Paragraph"
    skillsParagraph.textContent = "✅" + " " + asabenehChallenges2020.author.skills[i]
    skillsUl.appendChild(skillsParagraph)
}

let qualificationsParagraph
for (let i = 0; i < asabenehChallenges2020.author.qualifications.length; i++) {
    qualificationsParagraph = document.createElement('li')
    qualificationsParagraph.className = "Paragraph"
    if (i == 0) {
        qualificationsParagraph.textContent = "📖" + " " + asabenehChallenges2020.author.qualifications[i]
    } else {
        qualificationsParagraph.textContent = "👨‍🎓" + " " + asabenehChallenges2020.author.qualifications[i]
    }
    qualificationsUl.appendChild(qualificationsParagraph)
}

const lis = document.querySelectorAll('li.Paragraph')
for (let i = 0; i < lis.length; i++) {
    lis[i].style.listStyle = "none"
    lis[i].style.fontSize = "20px"
    lis[i].style.fontFamily = 'Arial'
    lis[i].style.width = '50%'
    lis[i].textContent = lis[i].textContent.replace(',', ' ');
}

const chest = document.querySelectorAll('div.chest')
for (let i = 0; i < 3; i++) {
    chest[i].style.display = "inline-block"
    chest[i].style.width = "33%"
    chest[i].style.height = "100%"
    chest[i].style.float = "left"
}

const keywords = document.querySelector('p#keywords')
keywords.style.fontFamily = "Arial"
keywords.style.marginTop = "400px"
keywords.style.fontWeight = "bold"
keywords.style.fontSize = "25px"
keywords.style.marginLeft = "550px"

const divkey = document.querySelector('div#allwords')
divkey.style.width = "50%"
divkey.style.height = "300px"
divkey.style.margin = "0 auto"
divkey.style.boxSizing = "border-box"

let keys
let randomHex
for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
    keys = document.createElement('div')
    randomHex = ''
    for (let y = 0; y < 6; y++) {
        randomHex += Math.floor(Math.random() * 16).toString(16);
    }
    randomHex = "#" + randomHex
    keys.style.backgroundColor = randomHex
    keys.style.border = "1px solid"
    keys.style.borderColor = randomHex
    keys.style.boxSizing = "border-box"
    keys.className = 'keyword'
    keys.style.fontSize = '24px'
    keys.style.borderRadius = "25px"
    keys.style.display = "inline-block"
    keys.style.width = "auto"
    keys.style.paddingRight = "1%"
    keys.style.fontFamily = "Arial"
    keys.style.margin = "10px 5px 0 10px"
    keys.textContent = "#" + " " + asabenehChallenges2020.keywords[i]
    divkey.appendChild(keys)
}