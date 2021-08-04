const name = function () {
    console.log("Paweł Romik")
}
name()

const fullName = function (name, lastName) {
    console.log(name, lastName)
}

fullName("Paweł", "Romik")

const addNumbers = function (number1, number2) {
    console.log(number1 + number2)
}

addNumbers(3, 5)

const areaOfRectangle = function (length, width) {
    console.log(length * width)
}
areaOfRectangle(5, 10)

const perimeterOfRectangle = function (length, width) {
    console.log(2 * (length + width))
}

perimeterOfRectangle(5, 10)

const volumeOfRectPrism = function (length, width, height) {
    console.log(length * width * height)
}

volumeOfRectPrism(5, 5, 5)

const areaOfCircle = function (r) {
    pi = Math.PI;
    console.log(pi * r * r)
}

areaOfCircle(3)

const circumOfCircle = function (r) {
    pi = Math.PI;
    console.log(2 * pi * r)
}
circumOfCircle(3)

const density = function (mass, volume) {
    console.log(mass / volume)
}
density(10, 5)

const speed = function (distance, time) {
    console.log(distance / time)
}
speed(200, 50);

const convertCelciusToFahrenheit = function (oC) {
    console.log((oC * 9 / 5) + 32)
}
convertCelciusToFahrenheit(20);

const BMI = function (weight, height) {
    if (weight / (height * height) < 18.5) {
        console.log("Underweight")
    } else if (weight / (height * height) >= 18.5 && weight / (height * height) <= 24.9) {
        console.log("Normal weight")
    } else if (weight / (height * height) >= 25 && weight / (height * height) <= 29.9) {
        console.log("Overweight")
    } else if (weight / (height * height) >= 30) {
        console.log("Obese");
    } else {
        console.log("Wrong number")
    }
}
BMI(20, 1)

const date = new Date();
const month = date.getMonth();

const season = function (month) {
    if (month == 11 || month == 0 || month == 1) {
        console.log("Winter")
    } else if (month == 2 || month == 3 || month == 4) {
        console.log("Spring")
    } else if (month == 5 || month == 6 || month == 7) {
        console.log("Summer")
    } else {
        console.log("Autumn")
    }
}

season(month)

const findMax = function (a, b, c) {
    console.log(Math.max(a, b, c));
}
findMax(0, 10, 52)