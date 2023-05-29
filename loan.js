const Installment = require("./installment")

module.exports = class Loan{
    static #interestRate = 1.05
    
    constructor(value, InstallmentNumber) {
        this.value = value
        this.Installment = []
        this.date = new Date()
        for(let i = 1; i <= InstallmentNumber; i++) {
            this.Installment.push(new Installment((value * Loan.#interestRate) / InstallmentNumber, i))
        }
    }

    static get interestRateGet() {
        return Loan.#interestRate
    }


    static set interestRateSet(value) {
      Loan.#interestRate = 1 + (value / 100)
    }
}