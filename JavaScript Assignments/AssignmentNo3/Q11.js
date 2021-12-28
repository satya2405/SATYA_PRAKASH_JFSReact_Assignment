class BankAccount{
    constructor(accountNumber, accountHolderName, accountBalance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
}

class Savings extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
    }

    withdraw(amount){
        if(this.accountBalance > 0 && this.accountBalance >= amount){
            this.accountBalance -= amount;
            console.log("Rs." + amount + " is withdrawn.");
            console.log("Current Balance: " + this.getAccountBalance);
        } else {
            console.log("You don't have sufficient balance!");
        }
    }

    get getAccountBalance(){
        return this.accountBalance;
    }
}

class Current extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
    }

    withdraw(amount){
        if(amount <= (this.accountBalance + this.odLimit)){
            this.accountBalance -= amount;
            console.log("Rs." + amount + " is withdrawn.");
            
        } else {
            console.log("You don't have suffiecient balance & od limit!");
        }
    }

    get getAccountBalance(){
        return this.accountBalance;
    }
}

const savingAcc = new Savings(151860002536, "Priyanka Yadav", 500000, true);
const currentAcc = new Current(151860002536, "John Doe", 25000, 15000);

savingAcc.withdraw(5000);
console.log("Current Account Balance: " + savingAcc.getAccountBalance);

currentAcc.withdraw(30000);
console.log("Current Account Balance: " + currentAcc.getAccountBalance);


