const account = {accountName: "",
balance:  -3000,
getBalance(){
    if(this.balance < 0){
        this.accountError();
        account.balance = parseFloat(prompt("Enter balance:"));
        this.getBalance();
    }else{
    console.log(this.balance)
    }
},
getAccountName(){
    if(this.accountName === ""){
        this.accountError();
        account.accountName = prompt("Enter account name:");
        this.getAccountName();
    }else{
    console.log(this.accountName)
    }
},
deposit(amount){
    
    this.balance = this.balance + amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    
},
withdraw(amount){
     if(amount > this.balance){
        console.log("Insufficient funds");
    }
     else {
        this.balance = this.balance - amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
    }
},
accountError(){
    console.log("Error: Invalid operation");
}
};
account.getBalance();
account.getAccountName();
account.deposit(parseFloat(prompt("Enter amount to deposit:")));
account.withdraw(parseFloat(prompt("Enter amount to withdraw:")));
