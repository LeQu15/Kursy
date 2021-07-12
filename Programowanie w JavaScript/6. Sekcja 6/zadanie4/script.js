const btnAdd = document.querySelector('button.add');
const btnClean = document.querySelector('button.clean');
const btnAdvice = document.querySelector('button.showAdvice');
const btnOptions = document.querySelector('button.showOptions');

const adviceTab = ["Walcz!", "Nie poddawaj się!"];
const h1 = document.querySelector('h1');


const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const advice = input.value;
    if (input.value.length) {
        for (userAdvice of adviceTab) {
            if (userAdvice === advice) {
                alert("to już jest")
                return
            }
        }
        adviceTab.push(advice);
        alert(`Dodałeś: ${advice}`)
        input.value = "";
        console.log(adviceTab);
    } else {
        alert('Nie możesz dodać pustej porady')
    }
}

const cleanAll = (e) => {
    e.preventDefault();
    adviceTab.length = 0;
    document.querySelector('h1').textContent = ""
}

const showAdvice = () => {
    if (adviceTab.length) {
        const adviceTabData = Math.floor(Math.random() * adviceTab.length);
        h1.textContent = `${adviceTab[adviceTabData]}`;
    } else {
        alert('Błąd, nie umiem znaleźć żadnych porad dla ciebie')
    }
}

const showOptions = () => {
    if (adviceTab.length) {
        alert(`Dostępne opcje to: ${adviceTab}`);
    } else {
        alert('Brak dostępnych opcji');
    }
}


btnAdd.addEventListener('click', addAdvice);
btnClean.addEventListener('click', cleanAll);
btnAdvice.addEventListener('click', showAdvice);
btnOptions.addEventListener('click', showOptions);