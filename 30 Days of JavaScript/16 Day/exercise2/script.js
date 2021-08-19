const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}

const studentJSON = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 3)
console.log(studentJSON)