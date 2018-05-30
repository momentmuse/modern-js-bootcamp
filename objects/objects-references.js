let myAccount = {
    name: 'Amy Kirasack',
    expenses: 0,
    income: 0
}

let addExpense = function(account, loss) {
    account.expenses += loss;
    // console.log(account);
}

//addIncome to the account
function addIncome(account, profit) {
    account.income += profit;
}

//resetAccount function (set to 0)
function resetAccount(account) {
    account.expenses = 0;
    account.income = 0;
}

//getAccountSummary
//Account for name has balance, # in income, # in expenses.
function getAccountSummary(account) {
    balance = account.income - account.expenses;
    return `Account for ${account.name} has $${account.income} in income and $${account.expenses} in expenses. The account balance is $${balance}.`
}


 //**TEST THE CODE**//
//addIncome
//addExpense x2
//getAccountSummary
//resetAccount
//getAccountSummary again

addIncome(myAccount, 6000)
addExpense(myAccount, 1300)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
addIncome(myAccount, 9000)
addExpense(myAccount, 1500)
console.log(getAccountSummary(myAccount))