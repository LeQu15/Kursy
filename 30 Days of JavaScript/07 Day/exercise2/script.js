const solveLinEquation = function (a, b, c) {
    console.log()
}

const printArray = function (array) {
    console.log(array)
}

const animals = ["Dog", "Cat", "Hamster"]
printArray(animals)


const date = new Date()
const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
const year = date.getFullYear();
const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

const showDateTime = function () {
    console.log(`${year}-${month}-${day} ${hour}:${minutes}`)

}
showDateTime(date)

const swapValues = function (x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log(x, y)
}

swapValues(4, 3)

const reverseArray = function (array) {
    let arr = [];
    while (array.length) {
        arr.push(array.pop());
    }
    console.log(arr)
}

reverseArray(animals)

const colors = ["red", "blue", "green"]


const capitalizeArray = function (array) {
    const newArray = array;

    for (let i = 0; i < array.length; i++) {
        newArray[i] = newArray[i][0].toUpperCase() + newArray[i].substr(1);
    }
    console.log(newArray)
}

capitalizeArray(colors)

const addItem = function (item) {
    colors.push(item);
    console.log(colors);
}

addItem("Orange")

const removeItem = function (item) {
    let index = colors.indexOf(item);
    if (index !== -1) {
        colors.splice(index, 1);
    }
    console.log(colors);
}

removeItem("Orange")

const sumOfNumbers = function (number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    console.log(sum)
}

sumOfNumbers(10)

const sumOfOdds = function (number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    console.log(sum)
}

sumOfOdds(11)

const sumOfEven = function (number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum)
}

sumOfEven(11)

const evensAndOdds = function (number) {
    let even = 0;
    let odd = 0
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            even = even + i;
        } else {
            odd = odd + i;
        }
    }
    console.log(`The number of odds are ${odd},\nThe number of evens are ${even}.`)
}
evensAndOdds(10)

const sumAllNums = function () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4))

const randomHex = function () {
    const charsHex = '01234567890abcdef'
    let textHex = '';
    for (let i = 0; i <= 5; i++) {
        textHex += charsHex.charAt(Math.floor(Math.random() *
            charsHex.length));
    }
    console.log("#" + textHex);
}
randomHex()

const randomIp = function () {
    const ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));
    console.log(ip)
}
randomIp()

const randomMac = function () {
    const charsMac = '01234567890ABCDEF'
    let textMac = '';
    for (let i = 0; i <= 5; i++) {
        textMac += charsMac.charAt(Math.floor(Math.random() *
            charsMac.length)) + charsMac.charAt(Math.floor(Math.random() *
            charsMac.length)) + ":";
    }
    textMac = textMac.slice(0, -1)
    console.log(textMac);
    console.log("");
}
randomMac()

const randomReturningHex = function () {
    const charsHex = '01234567890abcdef'
    let textHex = '';
    for (let i = 0; i <= 5; i++) {
        textHex += charsHex.charAt(Math.floor(Math.random() *
            charsHex.length));
    }
    return textHex;
}
console.log("#" + randomReturningHex())

const userIdGenerator = function () {
    const chars = '01234567890abcdefghijklmnoprstwuyzABCDEFGHIJKLMNOPRSTWUYZ'
    let text = '';
    for (let i = 0; i < 7; i++) {
        text += chars.charAt(Math.floor(Math.random() *
            chars.length));
    }
    return text;
}
console.log(userIdGenerator())