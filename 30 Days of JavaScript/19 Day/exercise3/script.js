function personAccount() {
    const firstName = "Paweł"
    const lastName = "Romik"
    const incomes = [{
        incomeId: 'payday',
        amount: 2000,
        description: "wypłata"
    }, {
        incomeId: 'gift',
        amount: 500,
        description: "urodziny"
    }, ]
    const expenses = [{
        expenseId: 'debt',
        amount: 100,
        description: "dług"
    }, {
        expenseId: 'czynsz',
        amount: 600,
        description: "rachunek"
    }, ]

    function addExpense() {
        const id = window.prompt("Podaj ID wydatku")
        const amount = window.prompt("Podaj kwotę wydatku")
        const description = window.prompt("Podaj opis wydatku")
        let include = false;
        for (let i = 0; i < expenses.length; i++) {
            if (id == expenses[i].expenseId) {
                console.log("Podane ID zostało już użyte")
                include = true
                break;
            }
        }
        if (include == false) {
            expenses.push({
                expenseId: id,
                amount: +amount,
                description: description,
            })
            console.log(expenses)
            console.log(totalExpense())
            console.log(accountBalance())
            console.log(accountInfo())
        }
    }

    function addIncome() {
        const id = window.prompt("Podaj ID dochodu")
        const amount = window.prompt("Podaj kwotę dochodu")
        const description = window.prompt("Podaj opis dochodu")
        let include = false;
        for (let i = 0; i < incomes.length; i++) {
            if (id == incomes[i].incomeId) {
                console.log("Podane ID zostało już użyte")
                include = true
                break;
            }
        }
        if (include == false) {
            incomes.push({
                incomeId: id,
                amount: +amount,
                description: description,
            })
            console.log(incomes)
            console.log(totalIncome())
            console.log(accountBalance())
            console.log(accountInfo())
        }
    }

    function totalIncome() {
        let sum = 0;
        for (let i = 0; i < incomes.length; i++) {
            sum += incomes[i].amount
        }
        sum = sum + "$"
        return sum
    }

    function totalExpense() {
        let sum = 0;
        for (let i = 0; i < expenses.length; i++) {
            sum += expenses[i].amount
        }
        sum = sum + "$"
        return sum
    }

    function accountBalance() {
        let sumIncome = 0;
        let sumExpense = 0;
        let sum = 0;
        for (let i = 0; i < expenses.length; i++) {
            sumExpense += expenses[i].amount
        }
        for (let i = 0; i < incomes.length; i++) {
            sumIncome += incomes[i].amount
        }
        sum = sumIncome - sumExpense + "$";
        return sum
    }

    function accountInfo() {
        let name = firstName + " " + lastName
        let sumIncome = 0;
        let sumExpense = 0;
        let sum = 0;
        for (let i = 0; i < expenses.length; i++) {
            sumExpense += expenses[i].amount
        }
        for (let i = 0; i < incomes.length; i++) {
            sumIncome += incomes[i].amount
        }
        sum = sumIncome - sumExpense + "$";
        return [name, sum]
    }
    document.querySelector('button.income').addEventListener("click", addIncome)
    document.querySelector('button.expense').addEventListener("click", addExpense)
    return {
        totalExpense: totalExpense(),
        totalIncome: totalIncome(),
        accountInfo: accountInfo(),
        accountBalance: accountBalance(),
    }
}


const innerFunct = personAccount()

console.log(innerFunct.totalIncome)
console.log(innerFunct.totalExpense)
console.log(innerFunct.accountBalance)
console.log(innerFunct.accountInfo)