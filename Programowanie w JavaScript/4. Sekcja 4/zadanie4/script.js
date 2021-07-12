let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


const changeColor = (e) => {
    if (e.keyCode == 38 && red < 255) {
        console.log('strzałka do góry');
        red++;
        green++;
        blue++;
    }
    if (e.keyCode == 40 && red > 0) {
        console.log('strzałka w dół');
        red--;
        green--;
        blue--;
    }
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}
window.addEventListener('keydown', changeColor)