const input = document.querySelectorAll('input')
const button = document.querySelector('button')
const error = document.querySelector('p.error')
const box = document.querySelector('div#box')

let person
let first
let second
let third
let fourth

let firstName
let date

let country

let score

let remove
let addPoints
let removePoints
let icon

let addPointsButton
let removePointsButton
let removeButton


function createElements() {
    const removeAll = document.getElementById('box')
    while (removeAll.lastElementChild) {
        removeAll.removeChild(removeAll.lastElementChild)
    }
    leaderboard.sort(function (a, b) {
        return b.score - a.score;
    });
    for (let i = 0; i < leaderboard.length; i++) {
        person = document.createElement('div')
        person.classList.add('person')
        box.appendChild(person)
        first = document.createElement('div')
        first.classList.add('first')
        person.appendChild(first)
        second = document.createElement('div')
        second.classList.add('second')
        person.appendChild(second)
        third = document.createElement('div')
        third.classList.add('third')
        person.appendChild(third)
        fourth = document.createElement('div')
        fourth.classList.add('fourth')
        person.appendChild(fourth)

        firstName = document.createElement('p')
        firstName.classList.add('firstName')
        firstName.textContent = leaderboard[i].name + " " + leaderboard[i].lastName
        first.appendChild(firstName)
        date = document.createElement('p')
        date.textContent = leaderboard[i].date
        date.classList.add('date')
        first.appendChild(date)

        country = document.createElement('p')
        country.textContent = leaderboard[i].country
        country.classList.add('country')
        second.appendChild(country)

        score = document.createElement('p')
        score.textContent = leaderboard[i].score
        score.classList.add('score')
        third.appendChild(score)

        remove = document.createElement('p')
        remove.classList.add('remove')
        fourth.appendChild(remove)
        icon = document.createElement('i')
        icon.classList.add('fas', 'fa-trash')
        remove.appendChild(icon)

        addPoints = document.createElement('p')
        addPoints.classList.add('addPoints')
        addPoints.textContent = "+5"
        fourth.appendChild(addPoints)
        removePoints = document.createElement('p')
        removePoints.classList.add('removePoints')
        removePoints.textContent = "-5"
        fourth.appendChild(removePoints)
    }
    addPointsButton = document.getElementsByClassName('addPoints')
    for (let i = 0; i < addPointsButton.length; i++) {
        addPointsButton[i].addEventListener('click', function (e) {
            leaderboard[e].score += 5
            createElements()
        }.bind(null, i));
    }
    removePointsButton = document.getElementsByClassName('removePoints')
    for (let i = 0; i < removePointsButton.length; i++) {
        removePointsButton[i].addEventListener('click', function (e) {
            leaderboard[e].score -= 5
            if (leaderboard[e].score < 0) {
                leaderboard[e].score = 0
            }
            createElements()
        }.bind(null, i));
    }
    removeButton = document.getElementsByClassName('remove')
    for (let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', function (e) {
            leaderboard.splice(e, 1);
            createElements()
        }.bind(null, i));
    }
}

let isIt = false
button.addEventListener('click', function () {
    isIt = false
    for (let i = 0; i < input.length; i++) {
        if (input[i].value == '') {
            error.classList.remove('hidden')
            input.forEach(el => el.style.border = "1px solid red")
            isIt = true
            break;
        }
    }
    if (isIt == false) {
        error.classList.add('hidden')
        input.forEach(el => el.style.border = "1px solid #e3c4bf")
        time()
        leaderboard.push({
            name: input[0].value,
            lastName: input[1].value,
            country: input[2].value,
            score: Number(input[3].value),
            date: time(),
        })
        createElements()
    }
})

function time() {
    let today = new Date();
    const month = today.toLocaleString('default', {
        month: 'short'
    })
    let year = today.getFullYear()
    let day = today.toLocaleString('default', {
        day: "2-digit"
    })
    let time = today.toLocaleString('default', {
        hour: "2-digit",
        minute: "2-digit"
    })
    const dateTime = month + " " + day + "," + " " + year + " " + time;
    return dateTime
}


const leaderboard = [{
    name: 'Paweł',
    lastName: 'Romik',
    score: 95,
    country: 'Poland',
    date: time(),
}, {
    name: 'Jan',
    lastName: 'Nowak',
    score: 12,
    country: 'Germany',
    date: time(),
}]

createElements()