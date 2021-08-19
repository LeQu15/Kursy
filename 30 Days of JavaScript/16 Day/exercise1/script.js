const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}

const skillsJSON = JSON.stringify(skills, undefined, 3)
console.log(skillsJSON)

const ageJSON = JSON.stringify(age, undefined, 3)
console.log(ageJSON)

const isMarriedJSON = JSON.stringify(isMarried, undefined, 3)
console.log(isMarriedJSON)

const studentJSON = JSON.stringify(student, undefined, 3)
console.log(studentJSON)