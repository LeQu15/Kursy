const btnID = document.querySelector('button.id');


const codesGenerator = () => {
    const chars = 'ABCDEFGIJKLMNOPRSTWUYZ123456789abcdefghijklmnoprstwuyz';
    const numberChars = window.prompt("Podaj numer znaków");
    const numberID = window.prompt("Podaj numer ID");
    for (let i = 0; i < numberID; i++) {
        let code = "";
        for (let i = 0; i < numberChars; i++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        console.log(code)
    }
}


btnID.addEventListener('click',
    codesGenerator);

//

const rgbColorGenerator = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    console.log(`rgb(${r},${g},${b})`)
}
rgbColorGenerator()

const arrayHex = []
const randomHexArray = function () {
    const charsHex = '01234567890abcdef'
    let textHex = '';
    for (let i = 0; i <= 5; i++) {
        textHex += charsHex.charAt(Math.floor(Math.random() *
            charsHex.length));
    }
    arrayHex.push("#" + textHex);
    console.log(arrayHex);
}
randomHexArray()

const arrayRGB = []
const randomRGBArray = function () {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    arrayRGB.push(`rgb(${r},${g},${b})`)
    console.log(arrayRGB)
}
randomRGBArray()

const hexToRGB = function (hex) {
    const hexRGB = parseInt(hex, 16);
    const r = (hexRGB >> 16) & 255;
    const g = (hexRGB >> 8) & 255;
    const b = hexRGB & 255;

    console.log(`rgb(${r},${g},${b})`)
}
hexToRGB("E123F2")

const hexFromRGB = function (r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    console.log(`#${r}${g}${b}`);
}
hexFromRGB(255, 120, 10)

const colorsArray = []
const generateColors = function (type, number) {
    for (let i = 0; i < number; i++) {
        if (type == "hex") {
            const charsHex = '01234567890abcdef'
            let textHex = '';
            for (let i = 0; i <= 5; i++) {
                textHex += charsHex.charAt(Math.floor(Math.random() *
                    charsHex.length));
            }
            colorsArray.push("#" + textHex);
        } else if (type == "rgb") {
            let r = Math.floor(Math.random() * 255) + 1;
            let g = Math.floor(Math.random() * 255) + 1;
            let b = Math.floor(Math.random() * 255) + 1;
            colorsArray.push(`rgb(${r},${g},${b})`)
        }

    }
    if (type == "hex" || type == "rgb") {
        console.log(colorsArray);
    } else {
        console.log("Error, wrong type");
    }
}
generateColors("hex", 3)

const animals = ["Dog", "Cat", "Parrot", "Hamster", "Turtle"]

const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
}
console.log(shuffleArray(animals));

const factorial = function (number) {
    let finalNumber = 1;
    for (let i = 1; i < number + 1; i++) {
        finalNumber = finalNumber * i
    }
    console.log(finalNumber)
}
factorial(4);

const isEmpty = function (parameter) {
    if (parameter.length > 0) {
        console.log("it's not empty")
    } else {
        console.log("it's empty")
    }
}

isEmpty(animals)

const sumAllNums = function () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4))

const numbers = [1, 6, 9, 4, 10]

const sumOfArrayItems = function (array) {
    let nums = array.every(function (element) {
        return typeof element === 'number';
    })
    if (nums) {
        console.log(
            array.reduce((a, b) => a + b, 0)
        )
    } else {
        console.log("Array zawiera niedozwolone znaki")
    }
}
sumOfArrayItems(numbers)

const average = function (array) {
    let nums = array.every(function (element) {
        return typeof element === 'number';
    })
    if (nums) {
        console.log(
            array.reduce((a, b) => a + b, 0) / array.length
        )
    } else {
        console.log("Array zawiera niedozwolone znaki")
    }
}
average(numbers)

const food = ["pizza", "burger", "cake", "chocolate", "bread", "french fries"];

const modifyArray = function (array) {
    if (array.length >= 5) {
        array[4] = "Steak"
        return array;
    } else {
        console.log("Not found")
    }
}

console.log(modifyArray(food))

const isPrime = function (number) {
    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            return false
        };
    return number > 1;
}


console.log(isPrime(3))

const isUnique = function (array) {
    return !(new Set(array)).size !== array.length;
}
console.log(isUnique(food))

const sameType = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== typeof array[0]) {
            console.log("Elementy tabeli nie są tego samego typu")
            return false;
        }
    }
    console.log("Wszystkie elementy tabeli są tego samego typu")
}
sameType(food)

const isValidVariable = function (variable) {
    if (variable.includes("$")) {
        console.log("Variable is invalid, please try something else")
    } else {
        console.log("Variable is valid")
    }
}

isValidVariable("$variable")

const sevenNumbers = [];
while (sevenNumbers.length < 7) {
    let number = Math.floor(Math.random() * 9) + 1;
    if (sevenNumbers.indexOf(number) === -1) sevenNumbers.push(number);
}
console.log(sevenNumbers);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const countriesReversed = []
const reverseCountries = function (array) {
    for (let i = 0; i < array.length; i++) {
        countriesReversed[i] = countries[i]
    }
    countriesReversed.reverse()
    console.log(countriesReversed);
}
reverseCountries(countries)