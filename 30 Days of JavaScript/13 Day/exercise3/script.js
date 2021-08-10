const numbersArray = [1, 2, 3, 4, 5]


//
const whileFunction =
    function () {
        console.time("While")
        i = 0;
        while (i < numbersArray.length) {
            console.log(numbersArray[i])
            i++
        }
        console.timeEnd("While")
    }

whileFunction()

const forFunction =
    function () {
        console.time("For")
        for (let i = 0; i < numbersArray.length; i++) {
            console.log(numbersArray[i])
        }
        console.timeEnd("For")
    }

forFunction()

const forOfFunction =
    function () {
        console.time("ForOf")
        for (let number of numbersArray) {
            number += 1;
            console.log(number)
        }
        console.timeEnd("ForOf")
    }

forOfFunction()

const forEachFunction =
    function () {
        console.time("ForEach")
        numbersArray.forEach(function (number) {
            console.log(number)
        })
        console.timeEnd("ForEach")
    }

forEachFunction()