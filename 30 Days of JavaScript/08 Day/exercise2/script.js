import {
    countries
} from './countries_data.js';

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const bestUser = function () {
    const keys = Object.keys(users);
    let skills = Object.values(users)[0].skills
    let currentUser = keys[0];
    for (let i = 1; i < keys.length; i++) {
        if (skills.length < Object.values(users)[i].skills.length) {
            skills = Object.values(users)[i].skills
            currentUser = keys[i];
        }
    }
    console.log(currentUser)
}

bestUser()

const countUsers = function () {
    const keys = Object.keys(users);
    let log = Object.values(users)[0].isLoggedIn
    let countedUsers = 0;
    for (let i = 1; i < keys.length; i++) {
        if (log == true) {
            countedUsers++
        }
        log = Object.values(users)[i].isLoggedIn
    }
    console.log(`Aktualnie zalogowanych użytkowników jest: ${countedUsers}`)
}

countUsers()

const userMERN = function () {
    const keys = Object.keys(users);
    let skills = Object.values(users)[0].skills
    for (let i = 0; i < keys.length; i++) {
        skills = Object.values(users)[i].skills
        if (skills.includes('Node') && skills.includes('MongoDB') && skills.includes('React') && skills.includes('Express') || skills.includes('Node.js') && skills.includes('MongoDB') && skills.includes('React') && skills.includes('Express')) {
            console.log(keys[i]);
        }
    }
}

userMERN()


const copyUsers = Object.assign({
    Paweł: {
        email: 'lequ15x@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 15,
        isLoggedIn: true,
        points: 50
    }
}, users)



console.log(copyUsers)

const keys = Object.keys(users);
console.log(keys)
const values = Object.values(users);
console.log(values)

/*for (let i = 0; i < countries.length; i++) {
    console.table(countries[i].name, countries[i].capital, countries[i].population, countries[i].languages)
}*/