let text = document.getElementById("box");
let string = "30 days of javascript challenge 2020 asabeneh yetayeh"
let body = document.querySelector('body')
let box = document.querySelector('#box')
string = string.split("");
for (i = 0; i < string.length; i++) {
    text.innerHTML += "<span>" + string[i] + "</span>";
}

let spans = document.querySelectorAll('span')


function randomColor() {
    for (let i = 0; i < spans.length; i++) {
        let randomHex = ''
        for (let y = 0; y < 6; y++) {
            randomHex += Math.floor(Math.random() * 16).toString(16);
        }
        randomHex = "#" + randomHex
        spans[i].style.color = randomHex
    }
}


let phase = 0


function changePhase() {
    box.animate([{
            opacity: '0'
        },
        {
            opacity: '1',
        }
    ], {
        delay: 0,
        duration: 5100,
        iterations: 1,
    });
    if (phase == 0) {
        spans[9].style.paddingRight = '0'
        spans[20].style.paddingRight = '0';
        spans[35].style.paddingRight = '0';
        body.className = ''
        body.classList.add('one')
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
            spans[i].classList.add('one')
        }
    } else if (phase == 1) {
        body.className = ''
        body.classList.add('two')
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
            spans[i].classList.add('two')
        }
    } else if (phase == 2) {
        body.className = ''
        body.classList.add('three')
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
            spans[i].classList.add('three')
        }
        spans[9].style.paddingRight = '500px'
        spans[20].style.paddingRight = '500px';
    } else if (phase == 3) {
        body.className = ''
        body.classList.add('four')
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
            spans[i].classList.add('four')
        }
    } else if (phase == 4) {
        body.className = ''
        body.classList.add('five')
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
            spans[i].classList.add('five')
        }
        spans[35].style.paddingRight = '500px';
    } else if (phase == 5) {
        body.className = ''
        body.classList.add('six')
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
            spans[i].classList.add('six')
        }
        spans[9].style.paddingRight = '0'
        spans[20].style.paddingRight = '0';
    } else if (phase == 6) {
        body.className = ''
        body.classList.add('seven')
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
            spans[i].classList.add('seven')
        }
        spans[9].style.paddingRight = '500px'
        spans[20].style.paddingRight = '500px';
    } else if (phase == 7) {
        body.className = ''
        body.classList.add('eight')
        for (let i = 0; i < spans.length; i++) {
            spans[i].className = ''
            spans[i].classList.add('eight')
        }
        spans[9].style.paddingRight = '500px'
        spans[20].style.paddingRight = '500px';
        phase = -1
    }
    randomColor()
    phase++
}
setTimeout(changePhase, 0)
setInterval(changePhase, 5000)