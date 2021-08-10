import {
    countries
} from './countries_data.js';

/*for (const {
        name,
        capital,
        languages,
        population,
    } of countries) {
    console.log(name, capital, population, languages)
}*/

const student = ['David', ['HTM', 'CSS', 'JS', 'React'],
    [98, 85, 90, 95]
]

let [username, skills, [, , jsScore, reactScore], ] = student

console.log(username, skills, jsScore, reactScore)

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'],
        [98, 85, 90, 95]
    ],
    ['John', ['HTM', 'CSS', 'JS', 'React'],
        [85, 80, 85, 80]
    ]
]

const convertArrayToObject = function () {
    let object = [{}]
    for (let i = 0; i < students.length; i++) {
        let [name, skills, score] = students[i]
        object[i] = {
            name: name,
            skills: skills,
            score: score
        }
    }
    return object
}

console.log(convertArrayToObject())

const newStudent = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [{
                skill: 'HTML',
                level: 10
            },
            {
                skill: 'CSS',
                level: 8
            },
            {
                skill: 'JS',
                level: 8
            },
            {
                skill: 'React',
                level: 9
            }
        ],
        backEnd: [{
                skill: 'Node',
                level: 7
            },
            {
                skill: 'GraphQL',
                level: 8
            },
        ],
        dataBase: [{
            skill: 'MongoDB',
            level: 7.5
        }, ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
newStudent.skills.frontEnd = [...newStudent.skills.frontEnd, {
    skill: 'Bootstrap',
    level: 8
}]
newStudent.skills.backEnd = [...newStudent.skills.backEnd, {
    skill: 'Express',
    level: 9
}]
newStudent.skills.dataBase = [...newStudent.skills.dataBase, {
    skill: 'SQL',
    level: 8
}]
newStudent.skills.dataScience = [...newStudent.skills.dataScience, "SQL"]
console.log(newStudent)