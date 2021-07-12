const btn = document.querySelector('button');

const names = ["Jagienka", "Dobrawa", "Daria", "Asia", "Kira", "Marysia", "Anastazja"];
const div = document.querySelector('div');
const prefixs = ["Wydaję mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

const nameGenerator = () => {
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    const indexName = Math.floor(Math.random() * names.length);
    div.textContent = `${prefixs[indexPrefix]}, że najlepsze imię to ${names[indexName]}`;
    console.log(indexName);
    console.log(indexPrefix);


}

btn.addEventListener('click', nameGenerator)