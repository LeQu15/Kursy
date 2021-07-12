// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = false;

const startTimer = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = 'Pauza';
        timeInterval = setInterval(start, 10);
    } else {
        active = !active;
        btnStart.textContent = 'Start';
        clearInterval(timeInterval);
    }
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

const pauseTimer = () => {
    time = 0;
    panel.textContent = '---';
    active = false;
    btnStart.textContent = 'Start';
    clearInterval(timeInterval);
}

btnStart.addEventListener('click', startTimer)
btnReset.addEventListener('click', pauseTimer)