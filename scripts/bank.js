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
},
exitAccount(){
    console.log("Exiting account");
    this.accountName = "";
    this.balance = -1;
}
};
function atm(){
    const message = parseFloat(
        prompt(
            "Select an option 1.) Get Balance 2.) Make Deposit 3.) Make Withdrawal 4.) Get account name 5.) Exit"
        )
    );
    switch (message) {
        case 1:
            account.getBalance();
            break;
        case 2:
            account.deposit(parseFloat(prompt("Enter amount to deposit:")));
            break;
        case 3:
            account.withdraw(parseFloat(prompt("Enter amount to withdraw:")));
            break;
        case 4:
            account.getAccountName();
            break;
        case 5:
            account.exitAccount();
            break;
        default:
            console.log("Invalid option");
    }
}
atm();