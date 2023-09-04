class BankAccount {
    customerName;
    accountNumber;
    #balance =  0;

    constructor(customerName,balance = 0) {
       this.customerName = customerName;
       this.accountNumber = Date.now();
       this.#balance = balance
    }    

    deposit(amount) {
        this.#balance += amount;
    }
    
    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }

}




class CurrentAccount extends BankAccount {
    transactionLimit = 50000;


    constructor(customerName,balance = 0) {
        super(customerName , balance);
    }

    #calculateInterest(amount) {
        console.log('Calculating interest');
    }


    takebusinessloan(amount) {
         // Logic
           this.#calculateInterest(amount);
           console.log('Taking business loan:' + amount);
        };
}



const shaikhAccount = new CurrentAccount("shaikh a", 2000);
// shaikhAccount.setbalance('5000');
// shaikhAccount.balance = 8000;
shaikhAccount.takebusinessloan(40000);
console.log(shaikhAccount);