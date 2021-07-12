// 1 metoda

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["Programowanie jest super!", "Programista"]

const showMessage = (e) => {
    passwords.forEach((item, i) => {
        if (item.toLowerCase() === e.target.value.toLowerCase()) {
            document.querySelector('div').textContent = messages[i];
        }
    })
}

input.addEventListener("input", showMessage)

// 2 metoda
/* const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["Programowanie jest super!", "Programista"]

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
    console.log(password);
})

const showMessage = (e) => {
    const input = e.target.value.toLowerCase()
    passwords.forEach((password, i) => {
        if (password === input) {
            document.querySelector('div').textContent = messages[i];
        }
    })
}

input.addEventListener("input", showMessage)
*/
//3 metoda
/*
const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["Programowanie jest super!", "Programista"]
const LCPasswords = passwords.map(password => {
    return password.toLowerCase()
});
const div = document.querySelector('div');

const showMessage = (e) => {
    const inputText = e.target.value.toLowerCase();

    for (let i = 0; i < LCPasswords.length; i++) {
        if (inputText === LCPasswords[i]) {
            div.innerHTML = messages[i];
        }
    }
}

input.addEventListener("input", showMessage)

*/