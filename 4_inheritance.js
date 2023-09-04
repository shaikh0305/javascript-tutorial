class BankAccount {
    customerName;
    accountNumber;
    balance =  0;

    constructor(customerName,balance = 0) {
       this.customerName = customerName;
       this.accountNumber = Date.now();
       this.balance = balance
    }    

    deposit(amount) {
        this.balance += amount;
    }
    
    withdraw(amount) {
        this.balance -= amount;
    }

}




class CurrentAccount extends BankAccount {
    transactionLimit = 50000;


    constructor(customerName,balance = 0) {
        super(customerName , balance);
    }

    takebusinessloan(amount) {
            console.log('Taking business loan:' + amount);
        };
}


class SavingAccount extends BankAccount {
    transactionLimit = 20000;


    constructor(customerName,balance = 0) {
        super(customerName , balance);
    }

    takebusinessloan(amount) {
            console.log('Taking business loan:' + amount);
        };

        takePersonalLoan(amount) {
                console.log('Taking Personal loan:' + amount);
            };
            
}





const shaikhaccount = new SavingAccount ('shaikh a', 5000 );
shaikhaccount.deposit(5000);
shaikhaccount.withdraw(1000);
shaikhaccount.takePersonalLoan(5000);
console.log(shaikhaccount);  









// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

    

// };


// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// }

// BankAccount.prototype.withdraw =  function (amount)  {
//         this.balance -= amount;
//     }

// function CurrentAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// };

// CurrentAccount.prototype = Object.create(BankAccount.prototype);  

// CurrentAccount.prototype.takebusinessloan = function (amount) {
//     console.log('Taking business loan:' + amount);
// };





// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 20000;

// };

// SavingAccount.prototype = Object.create(BankAccount.prototype);  


// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking Personal loan:' + amount);
// };



// const shaikhaccount = new SavingAccount ('shaikh a', 5000 );
// shaikhaccount.deposit(5000);
// shaikhaccount.withdraw(1000);
// console.log(shaikhaccount);