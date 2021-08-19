let personAccount = {
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
            localStorage.setItem('AccountExpense', JSON.stringify(personAccount, ['expenses', 'expenseId', 'amount', 'description'], 4))
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
            localStorage.setItem('Account', JSON.stringify(personAccount, ['incomes', 'incomeId', 'amount', 'description'], 4))
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
localStorage.setItem('restartIncome', JSON.stringify(personAccount, ['incomes', 'incomeId', 'amount', 'description'], 4))
let restartIncome = JSON.parse(localStorage.getItem('restartIncome'))
restartIncome = restartIncome.incomes

localStorage.setItem('restartExpense', JSON.stringify(personAccount, ['expenses', 'expenseId', 'amount', 'description'], 4))
let restartExpense = JSON.parse(localStorage.getItem('restartExpense'))
restartExpense = restartExpense.expenses



if (localStorage.getItem('Account') != null) {
    let parsed = JSON.parse(localStorage.getItem('Account'))
    parsed = parsed.incomes
    personAccount.incomes = parsed
}

if (localStorage.getItem('AccountExpense') != null) {
    let parsedExpense = JSON.parse(localStorage.getItem('AccountExpense'))
    parsedExpense = parsedExpense.expenses
    personAccount.expenses = parsedExpense
}

localStorage.setItem('Account', JSON.stringify(personAccount, ['incomes', 'incomeId', 'amount', 'description'], 4))
localStorage.setItem('AccountExpense', JSON.stringify(personAccount, ['expenses', 'expenseId', 'amount', 'description'], 4))

function reset() {
    parsed = null
    localStorage.clear()
    personAccount.incomes = restartIncome
    personAccount.expenses = restartExpense
    console.log(personAccount.totalIncome())
    console.log(personAccount.accountBalance())
    console.log(personAccount.accountInfo())
}

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())
console.log(personAccount.accountInfo())

document.querySelector('button.expense').addEventListener("click", personAccount.addExpense)
document.querySelector('button.income').addEventListener("click", personAccount.addIncome)
document.querySelector('button.reset').addEventListener("click", reset)