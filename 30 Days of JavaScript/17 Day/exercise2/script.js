const student = [{
    firstName: 'Anna',
    lastName: 'Kowalska',
    age: 19,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ],
    country: "Poland",
    login: "AKowalska1",
    password: "asdjaub21a"
}, {
    firstName: 'Jan',
    lastName: 'Nowak',
    age: 22,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    country: "Poland",
    login: "JNowak2",
    password: "JHASBy2su"
}]

const studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem("Student", studentJSON)
console.log(localStorage)