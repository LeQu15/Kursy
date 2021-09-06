const tech = document.querySelector('p.tech')
const icon = document.querySelector('p.icon')
const title = document.querySelector('p.title')



const techs = ['JavaScript', 'React', 'Redux', 'Node', 'Python', 'MongoDB', 'Pandas', 'Numpy', 'HTML']
const color = ['#fff82e', '#5ee4ff', '#8f00a8', '#157000', '#011b8f', '#4fff4d', '#4063ff', '#4063ff', '#ffde96']
let i = 0;

function changeTech() {
    tech.innerHTML = techs[i]
    tech.style.color = color[i]
    tech.animate([{
            opacity: 0
        },
        {
            opacity: 1
        }
    ], {
        duration: 2500,
        iterations: 1
    });
    i++
    if (i >= techs.length) {
        i = 0
    }
}

setInterval(changeTech, 3000)
changeTech()

let y = 0
const titles = ['Instructor', 'Motivational Speaker', 'Programmer', 'Motivator', 'Motivational Speaker', 'Content Creator', 'Educator', 'Instructor', 'Motivational Speaker']
const icons = ['📖', '🔥', '💻', '🔥', '🔥', '📕', '🌱', '📖', '🔥']

function changeTitle() {
    icon.innerHTML = icons[y]
    title.innerHTML = titles[y]
    title.animate([{
            opacity: 0,
            transform: 'translateX(-30px)',
        },
        {
            opacity: 1,
            transform: 'translateX(100px)',
        }
    ], {
        duration: 3000,
        iterations: 1
    });
    y++
    if (y >= titles.length) {
        y = 0
    }
}

setInterval(changeTitle, 3000)
changeTitle()