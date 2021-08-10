class personAccount {
    constructor(firstName = "Paweł", lastName = "Romik", incomes = [{
        incomeId: 'payday',
        amount: 2000,
        description: "wypłata"
    }, {
        incomeId: 'gift',
        amount: 500,
        description: "urodziny"
    }], expenses = [{
        expenseId: 'debt',
        amount: 100,
        description: "dług"
    }, {
        expenseId: 'czynsz',
        amount: 600,
        description: "rachunek"
    }]) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
    }
    addExpense() {
        const id = window.prompt("Podaj ID wydatku")
        const amount = window.prompt("Podaj kwotę wydatku")
        const description = window.prompt("Podaj opis wydatku")
        let include = false;
        for (let i = 0; i < person.expenses.length; i++) {
            if (id == "" || amount == 0 || description == "") {
                console.log("Musisz podać wszystkie informacje")
                include = true
                break;
            }
            if (id == person.expenses[i].expenseId) {
                console.log("Podane ID zostało już użyte")
                include = true
                break;
            }
        }
        if (include == false) {
            person.expenses.push({
                expenseId: id,
                amount: +amount,
                description: description,
            })
            console.log(person.expenses)
            console.log(person.totalExpense())

            console.log(person.accountBalance())

            console.log(person.accountInfo())
        }
    }
    addIncome() {
        const id = window.prompt("Podaj ID dochodu")
        const amount = window.prompt("Podaj kwotę dochodu")
        const description = window.prompt("Podaj opis dochodu")
        let include = false;
        for (let i = 0; i < person.incomes.length; i++) {
            if (id == "" || amount == 0 || description == "") {
                console.log("Musisz podać wszystkie informacje")
                include = true
                break;
            }
            if (id == person.incomes[i].incomeId) {
                console.log("Podane ID zostało już użyte")
                include = true
                break;
            }
        }
        if (include == false) {
            person.incomes.push({
                incomeId: id,
                amount: +amount,
                description: description,
            })
            console.log(person.incomes)

            console.log(person.totalIncome())

            console.log(person.accountBalance())

            console.log(person.accountInfo())
        }
    }

    totalIncome() {
        let sum = 0;
        for (let i = 0; i < person.incomes.length; i++) {
            sum += person.incomes[i].amount
        }
        sum = sum + "$"
        return sum
    }

    totalExpense() {
        let sum = 0;
        for (let i = 0; i < person.expenses.length; i++) {
            sum += person.expenses[i].amount
        }
        sum = sum + "$"
        return sum
    }

    accountBalance() {
        let sumIncome = 0;
        let sumExpense = 0;
        let sum = 0;
        for (let i = 0; i < person.expenses.length; i++) {
            sumExpense += person.expenses[i].amount
        }
        for (let i = 0; i < person.incomes.length; i++) {
            sumIncome += person.incomes[i].amount
        }
        sum = sumIncome - sumExpense + "$";
        return sum
    }

    accountInfo() {
        let name = person.firstName + " " + person.lastName
        let sumIncome = 0;
        let sumExpense = 0;
        let sum = 0;
        for (let i = 0; i < person.expenses.length; i++) {
            sumExpense += person.expenses[i].amount
        }
        for (let i = 0; i < person.incomes.length; i++) {
            sumIncome += person.incomes[i].amount
        }
        sum = sumIncome - sumExpense + "$";
        return [name, sum]
    }
}

const person = new personAccount()

console.log(person.totalIncome())
console.log(person.totalExpense())
console.log(person.accountBalance())
console.log(person.accountInfo())

document.querySelector('button.expense').addEventListener("click", person.addExpense)
document.querySelector('button.income').addEventListener("click", person.addIncome)