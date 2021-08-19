const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const catNames = []
fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => {
        for (const cat of data) {
            catNames.unshift(cat.name + " " + "| average weight: " + cat.weight.metric)
        }
    })
    .catch(error => console.log(error))

console.log(catNames)

const countriesAPI = 'https://restcountries.eu/rest/v2/all'
let countryArea = []
let countryLang = []
let arr = []
fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(countries => {

        for (const country of countries) {
            countryArea.unshift({
                name: country.name,
                area: country.area
            })
        }
        countryArea.sort((a, b) => b.area - a.area)
        console.log(countryArea.slice(0, 10))

        for (const country of countries) {
            countryLang.unshift({
                name: country.name,
                langs: country.languages.map(a => a.name)
            })
        }
        const array = countryLang.map(function (countries) {
            return countries.langs
        })
        let number = array[0]
        for (let i = 0; i < array.length; i++) {
            for (let y = 0; y < array[i].length; y++) {
                number = array[i][y]
                arr.push(number)
            }
        }
        let lang = arr.filter(function (value, index, array) {
            return array.indexOf(value) === index
        });
        console.log(`Jest tu ${lang.length} różnych języków`)

    })
    .catch(error => console.log(error))