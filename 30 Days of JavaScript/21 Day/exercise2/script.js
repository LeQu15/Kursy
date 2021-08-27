const allParagraphs = document.querySelectorAll('p')

allParagraphs.forEach(title => {
    title.style.backgroundColor = "red"
    title.style.border = "2px solid black"
    title.style.color = "white"
    title.style.textAlign = "center"
})

allParagraphs.forEach((title, i) => {
    if (i % 2 === 0) {
        title.style.backgroundColor = 'green'
    } else {
        title.style.backgroundColor = 'red'
    }
})

allParagraphs[0].textContent = "First Paragraph"
allParagraphs[0].classList.add('title')
allParagraphs[0].id = "first-paragraph"

allParagraphs[1].textContent = "Second Paragraph"
allParagraphs[1].classList.add('title')
allParagraphs[1].id = "second-paragraph"

allParagraphs[2].textContent = "Third Paragraph"
allParagraphs[2].classList.add('title')
allParagraphs[2].id = "third-paragraph"

allParagraphs[3].textContent = "Fourth Paragraph"
allParagraphs[3].classList.add('title')
allParagraphs[3].id = "fourth-paragraph"