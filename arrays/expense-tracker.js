const account = {
    name: 'Amy Kirasack',
    expenses: [
        {
         description: 'Javascript course',
         amount: 13   
        }
    ],
    income: [
        {
        description: 'Piggy bank',
        amount: 50
        }
    ],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
 //declaring variables       
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0
//Calculating totalExpenses and totalIncome
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function(profit) {
            totalIncome += profit.amount
        })
        balance = totalIncome - totalExpenses
//forEach returns the item itself. forLoop returns the index
        return `${this.name} has $${totalExpenses} in expenses and $${totalIncome} in income. The account balance is $${balance}.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addExpense('Lunch', 15)
account.addExpense('Bills', 300)
console.log(account.expenses)

account.addIncome('Job', 4000)
account.addIncome('Holiday bonus', 500)
console.log(account.income)
console.log(account.getAccountSummary())

//********PT 1*********
// each expense should have two properties
    // {description: 'string'
    // amount: num}
//create methods to put things in expenses & analyze data
    //addExpense method takes (description, amount)
    //getAccountSummary totals all expenses and prints template string `${account.name} has ${account.totalExpenses} in expenses.`

//*********PT 2*********
//1. add income array to account
//2. add income method
    //description: 'string'
    //amount: num
//3. tweak getAccountSummary
    //print `${this.name} has $${totalExpenses} in expenses and $${totalIncome} in income. The account balance is $${balance}.`

console.log('*****For functions outside of the object, uncomment the text below*****')

// const addExpense = function (description, amount) {
//     account.expenses.push({
//         description: description,
//         amount: amount
//     })
// }

// //for Loop Form
// const getAccountSummary = function() {
//     let totalExpenses = 0
//     for (var i = 0; i < account.expenses.length; i++) {
//         totalExpenses += account.expenses[i].amount
//     }
//     return `forLoop: ${account.name} has $${totalExpenses} in expenses.`
// }

// //forEach Form
// //note the arguments that forEach takes

// const getAccountSummaryEach = function() {
//     let totalExpenses = 0
//     account.expenses.forEach(function(expense) {
//         totalExpenses += expense.amount
//     })
//     return `forEach: ${account.name} has $${totalExpenses} in expenses.`
// }

// addExpense('Rent', 950)
// addExpense('Coffee', 2)
// addExpense('Lunch', 15)
// console.log(account.expenses)
// console.log(getAccountSummary())
// console.log(getAccountSummaryEach())
