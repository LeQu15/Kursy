const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const catNames = []
fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => {
        for (const cat of data) {
            catNames.unshift(cat.name)
        }
    })
    .catch(error => console.log(error))

console.log(catNames)