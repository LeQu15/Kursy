const btn = document.querySelector('button');
let number = 1

btn.addEventListener('click', function () {
    const li = document.createElement('li');
    const ul = document.querySelector('ul');
    if (number % 3 == 0) {
        li.classList.add('big')
    }
    li.textContent = number
    ul.appendChild(li);
    number += 2
})

/*const btn = document.querySelector('button')
let number = 1;

const addElement = function () {
    const div = document.createElement('div');
    div.textContent = number;
    if (number % 5 == 0) {
        div.classList.add('circle')
    }
    document.body.appendChild(div);
    number++
}
btn.addEventListener("click", addElement) */