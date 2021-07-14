document.querySelector('button.age').addEventListener('click', function () {
    let age = prompt('Podaj swój wiek');
    if (+age >= 18) {
        console.log("Możesz prowadzić samochód")
    } else if (+age < 18) {
        console.log("Nie możesz prowadzić samochodu")
    } else {
        console.log("Podałeś nieprawidłową liczbę!")
    }
})

document.querySelector('button.agedif').addEventListener('click', function () {
    let yourAge = 25;
    let myAge = prompt('Podaj swój wiek');
    if (+myAge > +yourAge) {
        let ageDif = +myAge - yourAge;
        console.log(`Jesteś ode mnie starszy o ${ageDif} lat`)
    } else if (+myAge == +yourAge) {
        console.log("Mamy tyle samo lat")
    } else if (+myAge < +yourAge) {
        let ageDif = yourAge - +myAge;
        console.log(`Jesteś ode mnie młodszy o ${ageDif} lat`)
    } else {
        console.log("Podałeś nieprawidłową liczbę!")
    }
})

document.querySelector('button.ab').addEventListener('click', function () {
    let a = prompt('Podaj a');
    let b = prompt('Podaj b');
    if (+a > +b) {
        console.log(`Liczba ${a} jest większa od liczby ${b}`)
    } else if (+a == +b) {
        console.log("Liczby są równe")
    } else if (+a < +b) {
        console.log(`Liczba ${a} jest mniejsza od liczby ${b}`)
    } else {
        console.log("Podałeś nieprawidłową liczbę!")
    }
})

document.querySelector('button.numbers').addEventListener('click', function () {
    let number = prompt('Podaj liczbę');
    if (+number % 2 == 0) {
        console.log(`Liczba ${number} jest parzysta`)
    } else if (+number % 2 !== 0) {
        console.log(`Liczba ${number} jest nieparzysta`)
    }
})