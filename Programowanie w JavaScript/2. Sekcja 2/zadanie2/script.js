document.body.style.height = 10000 + "px";
const square = document.createElement('div');
document.body.appendChild(square);
let size = 100;
let grow = true;

//Atrybuty diva
square.style.width = 100 + "%";
square.style.height = size + "px";
square.style.position = 'fixed';
square.style.left = 0;
square.style.top = 0;
square.style.backgroundColor = 'green';

const changeHeight = function () {
    if (size > window.innerHeight / 2) {
        grow = !grow;
        square.style.backgroundColor = 'red';

    } else if (size <= 0) {
        grow = !grow;
        square.style.backgroundColor = 'green';

    }

    if (grow) {
        size += 10;
    } else {
        size -= 10;
    }
    square.style.height = size + "px";
}

window.addEventListener('scroll', changeHeight);