const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let sizeFont = 10;

//Pętla

const textChange = function () {
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block";
        li[i].style.fontSize = sizeFont + "px";
    }
    sizeFont++;
}

btn.addEventListener('click', textChange);

//ForEach

/* btn.addEventListener('click', function () {
    sizeFont++;
    li.forEach((liOne) => {
        liOne.style.display = "block";
        liOne.style.fontSize = sizeFont + "px";
    })
}) */