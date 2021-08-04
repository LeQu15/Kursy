const personAccount = {
    firstName: "Paweł",
    lastName: "Romik",
    incomes: [{
        incomeId: 'payday',
        amount: 2000,
        description: "wypłata"
    }, {
        incomeId: 'gift',
        amount: 500,
        description: "urodziny"
    }, ],
    expenses: [{
        expenseId: 'debt',
        amount: 100,
        description: "dług"
    }, {
        expenseId: 'czynsz',
        amount: 600,
        description: "rachunek"
    }, ],
    addExpense: function () {
        const id = window.prompt("Podaj ID wydatku")
        const amount = window.prompt("Podaj kwotę wydatku")
        const description = window.prompt("Podaj opis wydatku")
        let include = false;
        for (let i = 0; i < personAccount.expenses.length; i++) {
            if (id == personAccount.expenses[i].expenseId) {
                console.log("Podane ID zostało już użyte")
                include = true
                break;
            }
        }
        if (include == false) {
            personAccount.expenses.push({
                expenseId: id,
                amount: +amount,
                description: description,
            })
            console.log(personAccount.expenses)
            console.log(personAccount.totalExpense())
            console.log(personAccount.accountBalance())
            console.log(personAccount.accountInfo())
        }
    },
    addIncome: function () {
        const id = window.prompt("Podaj ID dochodu")
        const amount = window.prompt("Podaj kwotę dochodu")
        const description = window.prompt("Podaj opis dochodu")
        let include = false;
        for (let i = 0; i < personAccount.incomes.length; i++) {
            if (id == personAccount.incomes[i].incomeId) {
                console.log("Podane ID zostało już użyte")
                include = true
                break;
            }
        }
        if (include == false) {
            personAccount.incomes.push({
                incomeId: id,
                amount: +amount,
                description: description,
            })
            console.log(personAccount.incomes)
            console.log(personAccount.totalIncome())
            console.log(personAccount.accountBalance())
            console.log(personAccount.accountInfo())
        }
    },
    totalIncome: function () {
        let sum = 0;
        for (let i = 0; i < this.incomes.length; i++) {
            sum += personAccount.incomes[i].amount
        }
        sum = sum + "$"
        return sum
    },
    totalExpense: function () {
        let sum = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            sum += personAccount.expenses[i].amount
        }
        sum = sum + "$"
        return sum
    },
    accountBalance: function () {
        let sumIncome = 0;
        let sumExpense = 0;
        let sum = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            sumExpense += personAccount.expenses[i].amount
        }
        for (let i = 0; i < this.incomes.length; i++) {
            sumIncome += personAccount.incomes[i].amount
        }
        sum = sumIncome - sumExpense + "$";
        return sum
    },
    accountInfo: function () {
        let name = personAccount.firstName + " " + personAccount.lastName
        let sumIncome = 0;
        let sumExpense = 0;
        let sum = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            sumExpense += personAccount.expenses[i].amount
        }
        for (let i = 0; i < this.incomes.length; i++) {
            sumIncome += personAccount.incomes[i].amount
        }
        sum = sumIncome - sumExpense + "$";
        return [name, sum]
    },
}

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())
console.log(personAccount.accountInfo())




const users = [{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const signIn = function () {
    // Id
    let id = ""
    const chars = "abcdefghijklmnoprstwuyz1234567890"
    for (let y = 0; y < 6; y++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    //Data
    const date = new Date()
    const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
    const year = date.getFullYear();
    const hours = date.getHours();
    const hoursPM = hours < 12 ? hours : hours - 12
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const amOrPm = hours < 12 ? "AM" : "PM"
    const fullDate = `${day}/${month}/${year} ${hoursPM}:${minutes} ${amOrPm}`

    //Reszta
    const name = window.prompt("Podaj nick")
    const email = window.prompt("Podaj email")
    const password = window.prompt("Podaj hasło")
    let include = false;
    for (let i = 0; i < users.length; i++) {
        if (name == users[i].username) {
            console.log("Error")
            include = true
            break;
        }
    }
    if (include == false) {
        users.push({
            _id: id,
            username: name,
            email: email,
            password: password,
            createdAt: fullDate,
            isLoggedIn: true,
        })
        console.log(users)
    }
}

const logIn = function () {
    const username = window.prompt("Podaj nazwe użytkownika")
    const pass = window.prompt("Podaj hasło")
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username && pass == users[i].password) {
            found = true;
            window.alert(`Pomyślnie zalogowano, witaj ${username}`)
        }
    }
    if (found == false) {
        window.alert("Nie ma takiego użytkownika lub podane hasło jest niepoprawne")
    }
}

const products = [{
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [{
                userId: 'fg12cy',
                rate: 5
            },
            {
                userId: 'zwf8md',
                rate: 4.5
            }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{
            userId: 'fg12cy',
            rate: 5
        }],
        likes: ['fg12cy']
    }
]

const rate = function () {
    const id = window.prompt("Podaj nazwę produktu")
    const rate = window.prompt("Na ile oceniasz ten produkt?")
    let userId = ""
    const chars = "abcdefghijklmnoprstwuyz1234567890"
    for (let i = 0; i < 6; i++) {
        userId += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    let isIt = false;
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].name) {
            isIt = true;
        }
        if (isIt == true) {
            products[i].ratings.push({
                userId: userId,
                rate: +rate,
            })
            console.log(products)
            break;
        }
    }
    if (isIt == false) {
        console.log("Nie ma takiego przedmiotu")
    }
}

const averageRating = function () {
    const id = window.prompt("Podaj nazwę produktu")
    let isIt = false;
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].name) {
            isIt = true;
        }
        if (isIt == true) {
            for (let y = 0; y < products[i].ratings.length; y++) {
                sum += products[i].ratings[y].rate
            }
            console.log(sum / products[i].ratings.length)
            break;
        }
    }
    if (isIt == false) {
        console.log("Nie ma takiego przedmiotu")
    }
}

const likedArray = []
const likedProducts = function () {
    let id = window.prompt("Podaj nazwę produktu")
    let isIt = false;
    let index = 0;
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].name || id == "-" + products[i].name) {
            isIt = true;
        }
        if (isIt == true) {
            if (id == "-" + products[i].name) {
                index = likedArray.indexOf(id.replace("-", ""))
                likedArray.splice(index, 1)
                console.log(likedArray)
                break;
            } else {
                if (likedArray.includes(id)) {
                    console.log("To zostało już polubione")
                    break;
                } else {
                    likedArray.push(products[i].name)
                    console.log(likedArray)
                    break;
                }
            }
        }

    }
    if (isIt == false) {
        console.log("Nie ma takiego przedmiotu")
    }
}



document.querySelector('button.register').addEventListener("click", signIn)
document.querySelector('button.login').addEventListener("click", logIn)
document.querySelector('button.expense').addEventListener("click", personAccount.addExpense)
document.querySelector('button.income').addEventListener("click", personAccount.addIncome)
document.querySelector('button.rate').addEventListener("click", rate)
document.querySelector('button.averageRating').addEventListener("click", averageRating)
document.querySelector('button.like').addEventListener("click", likedProducts)