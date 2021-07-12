const time = () => {
    let seconds = 0;

    const changeTime = () => {
        document.body.textContent = (`${seconds} sekund`)
        seconds++
    }
    return changeTime;
}

const start = time();

setInterval(start, 1000);