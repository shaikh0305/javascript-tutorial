
function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;


    this.deposit = function (amount) {
        this.balance += amount;
    }

    this.withdraw =  (amount) => {
        this.balance -= amount;
    }
}


// const shaikhAccount = new BankAccount("shaikh A", 30000 );
// const SafwanAccount = new BankAccount("shaikh S");
// shaikhAccount.deposit(5000);
// SafwanAccount.deposit(20000);
// shaikhAccount.withdraw(3300);
// console.log(shaikhAccount,SafwanAccount )


// ============================


const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');


const depositForm = document.querySelector('#depositForm');
const accountnumber = document.querySelector('#accountnumber');
const amount = document.querySelector('#amount');





accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});



depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +accountnumber.value);
    account.deposit(+amount.value);
    console.log(accounts)    
})