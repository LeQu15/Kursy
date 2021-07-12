const spnText = document.querySelector('span.text');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio?';
const spnCursor = document.querySelector('.cursor');

let indexText = 0;
const time = 50;

const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);