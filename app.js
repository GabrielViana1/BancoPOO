const Account = require("./account")
const Deposit = require("./deposit")
const Loan = require("./loan")
const Transfer = require("./transfer")
const User = require("./user")

module.exports = class App {
    static #users = []

    static findUser(email) {
        const find = this.#users.find(user => user.email === email)
        return find ?? null //Retorna null ou o usuario
    }

    static createNewUser(name, email) {
        const userExist = this.findUser(email)
        if(!userExist) {
            this.#users.push(new User(name, email))
        } else {
            console.log(userExist)
        }
    }

    static deposit(email, value) {
        const userExist = this.findUser(email)
        if(userExist) {
            const deposit = new Deposit(value)
            userExist.account.depositMoney(deposit)
        } else {
            console.log("Usuario não encontrado")
        }
    }

    static loan(email, value, InstallmentNumber) {
        const userExist = this.findUser(email)
        if(userExist) {
            const loan = new Loan(value, InstallmentNumber)
            userExist.account.loanMoney(loan)
        } else {
            console.log("Usuario não encontrado")
        }
        
    }

    static transfer(userSend, userReceive, value) {
        const findUserSend =  this.findUser(userSend)
        const findUserReceive =  this.findUser(userReceive)
        if(findUserSend && findUserReceive) {
            const transfer = new Transfer(findUserSend, findUserReceive, value)
           const sucessTransfer = findUserSend.account.transferMoney(transfer)
            if(sucessTransfer === true) {
                findUserReceive.account.receptTransfer(transfer)
            }
        } else {
            console.log("Alguns dos usuarios não existe em nosso sistema")
        }
    }

    static interestRateSet(value) {
        Loan.interestRateSet = value
    }

    get users() {
        return App.#users
    }
}





