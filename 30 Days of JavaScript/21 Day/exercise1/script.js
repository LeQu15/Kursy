console.log(document.querySelector('p'))

console.log(document.querySelector('#first-paragraph'))
console.log(document.querySelector('#second-paragraph'))
console.log(document.querySelector('#third-paragraph'))
console.log(document.querySelector('#fourth-paragraph'))

console.log(document.querySelectorAll('p'))

const allParagraphs = document.querySelectorAll('p')
for (let i = 0; i < allParagraphs.length; i++) {
    console.log(allParagraphs[i])
}

allParagraphs[3].textContent = "Fourth Paragraph"


allParagraphs[0].classList.replace('paragraph', 'new')
allParagraphs[1].className = 'new'
allParagraphs[2].setAttribute('class', 'new')
allParagraphs[3].classList.add('new')

allParagraphs[0].id = 'first-new'
allParagraphs[1].setAttribute('id', 'second-new')
allParagraphs[2].setAttribute('id', 'third-new')
allParagraphs[3].id = 'fourth-new'