const Deposit = require("./deposit")
const Loan =  require("./loan")
const Transfer = require("./transfer")

module.exports = class Account {
    #balance

    constructor(user) {
        this.owner = user
        this.deposit = []
        this.loan = []
        this.transfer = []
        this.#balance = 0
    }

    depositMoney(deposit) {
        this.deposit.push(deposit)
        this.#balance += deposit.value
    }

    loanMoney(loan) {
        this.loan.push(loan)
        this.#balance += loan.value 
    }

    transferMoney(tranfer) {
        if(this.owner.email === tranfer.userSent.email && this.#balance >= tranfer.value) {
            this.transfer.push(tranfer)
            this.#balance -= tranfer.value
            return true
        } else {
            console.log("Saldo insuficiente")
        }
    }

    receptTransfer(tranfer) {
        this.transfer.push(tranfer)
        this.#balance += tranfer.value
    }

    get balance() {
        return this.#balance
    }
}