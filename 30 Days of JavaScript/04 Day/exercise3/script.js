const date = new Date()
const year = date.getFullYear()

document.querySelector('button.month').addEventListener('click', function () {
    let month = prompt('Podaj miesiąc').toLowerCase();
    if (year % 4 == 0) {
        if (month == "styczeń" || month == "marzec" || month == "maj" || month == "lipiec" || month == "sierpień" || month == "październik" || month == "grudzień") {
            console.log("Miesiąc ten ma 31 dni.")
        } else if (month == "luty") {
            console.log("Miesiąc ten ma 29 dni.")
        } else if (month == "kwiecień" || month == "czerwiec" || month == "wrzesień" || month == "listopad") {
            console.log("Miesiąc ten ma 30 dni.")
        } else {
            console.log("Podałeś nieprawidłowy miesiąc!")
        }
    } else {
        if (month == "styczeń" || month == "marzec" || month == "maj" || month == "lipiec" || month == "sierpień" || month == "październik" || month == "grudzień") {
            console.log("Miesiąc ten ma 31 dni.")
        } else if (month == "luty") {
            console.log("Miesiąc ten ma 28 dni.")
        } else if (month == "kwiecień" || month == "czerwiec" || month == "wrzesień" || month == "listopad") {
            console.log("Miesiąc ten ma 30 dni.")
        } else {
            console.log("Podałeś nieprawidłowy miesiąc!")
        }
    }
})