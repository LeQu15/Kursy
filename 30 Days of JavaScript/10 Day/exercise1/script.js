const emptySet = new Set()
console.log(emptySet)

setOfNumbers = new Set()
for (let i = 0; i < 10; i++) {
    setOfNumbers.add(i)
}
console.log(setOfNumbers)

setOfNumbers.delete(0)
console.log(setOfNumbers)

setOfNumbers.clear()
console.log(setOfNumbers)

const fiveElements = ['element1', 'element2', 'element3', 'element4']
const setOfElements = new Set(fiveElements)
console.log(setOfElements)

const countries = [
    ['Finland', 7],
    ['Sweden', 6],
    ['Norway', 6],
    ['Poland', 7],
    ['Germany', 7],
    ['Russia', 6]
]
const countriesMap = new Map(countries)
console.log(countriesMap)