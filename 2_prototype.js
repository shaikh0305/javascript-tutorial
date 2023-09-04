function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;


    // this.deposit = function (amount) {
    //     this.balance += amount;
    // }

    // this.withdraw =  (amount) => {
    //     this.balance -= amount;
    // }
}

const shaikhaccount = new BankAccount("shaikh s");
const Saccount = new BankAccount("shaikh a",20000);
// console.log(shaikhaccount,Saccount);


BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = (amount) => {
        this.balance -= amount;
    }
// Saccount.deposit(3000);
Saccount.deposit(3000);

console.log(Saccount)