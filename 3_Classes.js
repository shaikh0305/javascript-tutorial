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


const shaikhAccount = new BankAccount("shaikh a", 5000);
shaikhAccount.deposit(5000);
shaikhAccount.withdraw(2000);



const SafwanAccount = new BankAccount("shaikh s", 5000);
SafwanAccount.deposit(5000);
SafwanAccount.withdraw(3000);

console.log(shaikhAccount,SafwanAccount);




// hello();

// function hello() {
//     console.log('hello');
// }

