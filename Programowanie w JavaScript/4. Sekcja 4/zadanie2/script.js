const colors = function (event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${event.clientX} + ${event.clientY}`);
    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.backgroundColor = "red";
    } else if (x % 2 == 1 && y % 2 == 1) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "green";
    }
}

document.body.addEventListener('click', colors);