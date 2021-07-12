const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['<User1> Witam!', '<User2> Dzień dobry!', '<User1> Co sądzisz o programowaniu?', '<User2> Programowanie jest super!']
let text = 0;
let letter = -20;

const addLetter = () => {
    if (letter >= 0) {
        spnText.textContent += txt[text][letter];
    }
    letter++;
    if (letter === txt[text].length) {
        text++;
        if (text === txt.length) return;
        return setTimeout(() => {
            letter = -20;
            spnText.textContent = "";
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 50)
}

addLetter();





const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);