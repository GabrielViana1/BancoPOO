const App = require("./app")

App.createNewUser("Gabriel Viana", "gabriel@email") //Criando usuario
App.createNewUser("João Fulano", "joão@email") //Criando usuario
App.createNewUser("Maria Ciclano", "maria@email") //Criando usuario

App.deposit("gabriel@email", 100) //Criando deposito de 100$

App.transfer("gabriel@email", "joão@email", 20) //Transferencia de Gabriel para João no valor de 20$

App.interestRateSet(10) //Adicinando 10% de juros
App.loan("maria@email", 2000, 24) //Pegando um empréstimo no valor de 2000 em 24 parcelas para pagar

console.log(App.findUser("gabriel@email"))
console.log(App.findUser("gabriel@email").account)
console.log(App.findUser("joão@email"))
console.log(App.findUser("joão@email").account)
console.log(App.findUser("maria@email"))
console.log(App.findUser("maria@email").account)
console.log(App.findUser("maria@email").account.loan[0].Installment)