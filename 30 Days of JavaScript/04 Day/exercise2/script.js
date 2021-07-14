document.querySelector('button.grade').addEventListener('click', function () {
    let score = prompt('Podaj swój wynik');
    if (+score > 79) {
        console.log("Otrzymujesz 5!")
    } else if (+score > 69 && +score < 80) {
        console.log("Otrzymujesz 4!")
    } else if (+score > 59 && +score < 70) {
        console.log("Otrzymujesz 3!")
    } else if (+score > 49 && +score < 60) {
        console.log("Otrzymujesz 2!")
    } else if (+score < 50) {
        console.log("Otrzymujesz 1!")
    } else {
        console.log("Podałeś nieprawidłowy wynik!")
    }
})

document.querySelector('button.season').addEventListener('click', function () {
    let month = prompt('Podaj miesiąc').toLowerCase();
    if (month == "marzec" || month == "kwiecień" || month == "maj") {
        console.log("Jest wiosna")
    } else if (month == "czerwiec" || month == "lipiec" || month == "sierpień") {
        console.log("Jest lato")
    } else if (month == "wrzesień" || month == "październik" || month == "listopad") {
        console.log("Jest jesień")
    } else if (month == "grudzień" || month == "styczeń" || month == "luty") {
        console.log("Jest zima")
    } else {
        console.log("Podałeś nieprawidłowy miesiąc!")
    }
})

document.querySelector('button.work').addEventListener('click', function () {
    let day = prompt('Podaj dzień').toLowerCase();
    if (day == "sobota" || day == "niedziela") {
        console.log("Jest to dzień wolny")
    } else if (day == "poniedziałek" || day == "wtorek" || day == "środa" || day == "czwartek" || day == "piątek") {
        console.log("Jest to dzień roboczy")
    } else {
        console.log("Podałeś nieprawidłowy dzień!")
    }
})