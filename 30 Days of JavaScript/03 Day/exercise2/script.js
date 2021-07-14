document.querySelector('button.base').addEventListener('click', function () {
    let base = prompt('Podaj podstawę');
    let height = prompt('Podaj wysokość');
    let area = 0.5 * +base * +height;
    console.log(`Pole trójkąta wynosi ${area}`);
})

document.querySelector('button.perimeter').addEventListener('click', function () {
    let a = prompt('Podaj 1 bok');
    let b = prompt('Podaj 2 bok');
    let c = prompt('Podaj 3 bok');
    let perimeter = +a + +b + +c;
    console.log(`Obwód trójkąta wynosi ${perimeter}`);
})

document.querySelector('button.rectangle').addEventListener('click', function () {
    let length = prompt('Podaj 1 bok');
    let width = prompt('Podaj 2 bok');
    let rectPerimeter = 2 * (+length + +width);
    let rectArea = +length * +width;
    console.log(`Obwód prostokąta wynosi ${rectPerimeter} a pole ${rectArea}`);
})

document.querySelector('button.circle').addEventListener('click', function () {
    let pi = 3.14;
    let radius = prompt('Podaj promień');
    let Circumference = (2 * pi * +radius).toFixed(1);
    let circArea = (pi * +radius * +radius).toFixed(1);
    console.log(`Obwód koła wynosi ${Circumference} a pole ${circArea}`);
})

let x = -3
console.log(x * x + 6 * x + 9);

document.querySelector('button.earning').addEventListener('click', function () {
    let hours = prompt('Podaj ilość godzin');
    let ratePerHour = prompt('Podaj stawkę za godzinę pracy');
    let earning = +hours * +ratePerHour;
    console.log(`Twoje miesięczne zarobki wynoszą ${earning}zł`);
})

let name = "Bartłomiej"
name.length > 7 ?
    console.log('Twoje imię jest długie') :
    console.log('Twoje imię jest krótkie');

let firstName = "Robert"
let lastName = "Nowak"
firstName.length > lastName.length ?
    console.log('Twoje imię jest dłuższe od twojego nazwiska') :
    console.log('Twoje nazwisko jest dłuższe od twojego imienia');

let myAge = 10;
let yourAge = 51;
let diff1 = yourAge - myAge;
let diff2 = myAge - yourAge;

myAge > yourAge ?
    console.log(`Jestem od ciebie młodszy o ${diff2} lat`) :
    console.log(`Jestem od ciebie starszy o ${diff1} lat`);

document.querySelector('button.car').addEventListener('click', function () {
    let ageCar = prompt('Ile masz lat?');
    ageCar >= 18 ?
        console.log('Możesz prowadzić samochód') :
        console.log('Nie możesz prowadzić samochodu');
})

document.querySelector('button.time').addEventListener('click', function () {
    let ageLife = prompt('Ile masz lat?');
    let lifespan = (+ageLife * 7 * 31 * 24 * 60 * 60) + (+ageLife * 4 * 30 * 24 * 60 * 60) + (+ageLife * 1 * 28 * 24 * 60 * 60);
    console.log(lifespan);
})

let date = new Date();
let month = date.getMonth();
let day = date.getDay();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

console.log(`${year}-${month}-${day} ${hours}:${minutes}`)
console.log(`${day}-${month}-${year} ${hours}:${minutes}`)
console.log(`${day}/${month}/${year} ${hours}:${minutes}`)