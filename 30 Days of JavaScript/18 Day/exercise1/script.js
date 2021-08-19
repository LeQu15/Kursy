const countriesAPI = 'https://restcountries.eu/rest/v2/all'

const fetchData = async () => {
    try {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        let countries = await response.json()
        console.log(countries)
        for (const country of countries) {
            console.log(country.name + " " + country.capital + " " + "[" + country.languages.map(a => a.name) + "]" + " " + country.population + " " + country.area)
        }
    } catch (err) {
        console.log(err)
    }
}
fetchData()