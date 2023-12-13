type User = {
  name: string;
  email: string;
  password: string;
};

class BankAccount {
  // THIS IS ENCAPSULATION
  private balance: number;
  private user: User;

  constructor(balance: number, user: User) {
    this.balance = balance;
    this.user = user;
  }

  deposit(credit: number) {
    this.balance += credit;
    return this.balance;
  }

  withdraw(debit: number) {
    if (debit > this.balance) {
      return "Insufficient balance";
    }

    this.checkBalance();
    this.balance -= debit;
    return this.balance;
  }

  private checkBalance() {
    console.log(this.user);
    return this.balance;
  }
}

const bankAccount = new BankAccount(1000, {
  name: "John Doe",
  email: "",
  password: "12345",
});

console.log(bankAccount.deposit(100));
console.log(bankAccount.withdraw(500));

// bankAccount.checkBalance(); // Error: Property 'checkBalance' is private and only accessible within class 'BankAccount'.
// console.log(bankAccount.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
