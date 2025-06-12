class BankBalance {
    #bal = 1000;
    deposit(amt) {
        this.#bal += amt;
        return this.#bal;
    }

    getBal() {
        return `$${this.#bal}`
    }
}
let Acc = new BankBalance();
console.log(Acc.getBal());

/*Step-by-Step Breakdown
Class Declaration

class BankBalance { ... }
You define a class called BankBalance.
Private Field

#bal = 1000;
This declares a private field called #bal and sets its initial value to 1000.
The # makes it private—it cannot be accessed from outside the class.
deposit Method

deposit(amt) { ... }
This method takes an amount (amt), adds it to #bal, and returns the new balance.
getBal Method

getBal() { ... }
This method returns the current balance as a string, prefixed with $.
Creating an Instance

let Acc = new BankBalance();
You create a new object (Acc) from the BankBalance class.
At this point, Acc.#bal is 1000.
Getting the Balance

console.log(Acc.getBal());
This calls the getBal() method on Acc, which returns "$1000", and prints it.
Key Points
Encapsulation:
The balance (#bal) is private and can only be changed or read using the class’s methods (deposit and getBal).
You cannot do Acc.#bal from outside the class—it will throw an error.

Usage:
To deposit money: Acc.deposit(500);
To get balance: Acc.getBal();

Summary:
This code demonstrates encapsulation in JavaScript using a class with a private field, allowing controlled access to the bank balance only through class methods.*/