const infos = document.querySelectorAll('p.info')
const inputs = document.querySelectorAll('input')

const nameInput = document.getElementById('name')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const phoneInput = document.getElementById('phone')
const bioInput = document.getElementById('bio')

const button = document.querySelector('button')



let error
button.addEventListener('click', function () {
    error = 0
    for (let i = 0; i < inputs.length; i++) {
        if (i == 0) {
            if (nameInput.value.match(/^[a-z0-9]+$/i) && nameInput.value.length > 2 && nameInput.value.length < 17) {
                nameInput.classList.remove('red')
                nameInput.classList.add('good')
                nameInput.classList.add('green')
                infos[i].classList.add('hidden')
            } else {
                nameInput.classList.add('red')
                nameInput.classList.remove('good')
                nameInput.classList.remove('green')
                infos[i].classList.remove('hidden')
                error = 1

            }
        } else if (i == 1) {
            if (lastNameInput.value.match(/^[a-z0-9]+$/i) && lastNameInput.value.length > 2 && lastNameInput.value.length < 17) {
                lastNameInput.classList.remove('red')
                lastNameInput.classList.add('good')
                lastNameInput.classList.add('green')
                infos[i].classList.add('hidden')
            } else {
                lastNameInput.classList.add('red')
                lastNameInput.classList.remove('green')
                lastNameInput.classList.remove('good')
                infos[i].classList.remove('hidden')
                error = 1

            }
        } else if (i == 2) {
            if (emailInput.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                emailInput.classList.remove('red')
                emailInput.classList.add('green')
                emailInput.classList.add('good')
                infos[i].classList.add('hidden')
            } else {
                emailInput.classList.add('red')
                emailInput.classList.remove('good')
                emailInput.classList.remove('green')
                infos[i].classList.remove('hidden')
                error = 1

            }
        } else if (i == 3) {
            if (passwordInput.value.match(/^[\w\-\s\@]+$/) && passwordInput.value.length > 5 && passwordInput.value.length < 21) {
                passwordInput.classList.remove('red')
                passwordInput.classList.add('green')
                infos[i].classList.add('hidden')
                passwordInput.classList.add('good')
            } else {
                passwordInput.classList.add('red')
                passwordInput.classList.remove('good')
                passwordInput.classList.remove('green')
                infos[i].classList.remove('hidden')
                error = 1
            }
        } else if (i == 4) {
            if (phoneInput.value.match(/^(\d{1})-(\d{1,3})-?(\d{3,4})-(\d{4})$/)) {
                phoneInput.classList.remove('red')
                phoneInput.classList.add('green')
                phoneInput.classList.add('good')
                infos[i].classList.add('hidden')
            } else {
                phoneInput.classList.add('red')
                phoneInput.classList.remove('green')
                phoneInput.classList.remove('good')
                infos[i].classList.remove('hidden')
                error = 1
            }
        } else if (i == 5) {
            if (bioInput.value.match(/^[a-z_\s\-]+$/) && bioInput.value.length > 7 && bioInput.value.length < 51) {
                bioInput.classList.remove('red')
                infos[i].classList.add('hidden')
                bioInput.classList.add('green')
                bioInput.classList.add('good')
            } else {
                bioInput.classList.add('red')
                bioInput.classList.remove('green')
                bioInput.classList.remove('good')
                infos[i].classList.remove('hidden')
                error = 1
            }
        }
    }
    if (error == 1) {
        button.classList.remove('green')
        setTimeout(function () {
            alert("Something went bad.");
        }, 100);
    } else {
        button.classList.add('green')
        setTimeout(function () {
            alert("Success!");
        }, 100);
    }
})