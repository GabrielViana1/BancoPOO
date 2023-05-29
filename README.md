Projeto de Simulação de Banco em JavaScript usando POO

Descrição
Este projeto é uma simulação de um banco desenvolvida em JavaScript, utilizando os princípios da Programação Orientada a Objetos (POO). Com o objetivo de aprimorar habilidades de programação e praticar conceitos essenciais, criei um sistema completo que permite a criação de usuários, realização de transferências, solicitação de empréstimos e depósitos.

Funcionalidades
O projeto inclui as seguintes funcionalidades principais:

Criação de usuários: Os usuários podem ser registrados no banco, informando dados pessoais como nome e email.

Criação de contas bancárias: Cada usuário tem a possibilidade de criar uma conta bancária associada, que será utilizada para todas as operações financeiras.

Transferência de fundos: Os usuários podem transferir dinheiro de uma conta para outra dentro do banco. Isso possibilita a realização de transações entre os usuários cadastrados.

Solicitação de empréstimos: Os usuários podem solicitar empréstimos bancários, informando o valor desejado e as condições de pagamento. O sistema calcula automaticamente as parcelas e adiciona o valor à conta do usuário.

Depósitos: Os usuários podem fazer depósitos em suas contas bancárias, aumentando o saldo disponível.

Estrutura do Projeto
O projeto está estruturado em classes, seguindo o conceito de POO. As principais classes do projeto são:

User: Representa um usuário do banco, contendo informações pessoais como nome e email. Cada usuário possui uma conta bancária associada.

Account: Representa uma conta bancária, contendo informações como número da conta, saldo e histórico de transações. Essa classe inclui métodos para realizar transferências, receber depósitos e solicitar empréstimos.

Loan: Representa um empréstimo solicitado por um usuário, contendo informações sobre o valor, taxa de juros e período de pagamento.

Transfer: Classe responsável por executar a transferência de fundos entre contas bancárias. Possui métodos para verificar a disponibilidade de saldo e realizar a transferência em si.

Deposit: Classe responsável por efetuar o depósito de dinheiro em uma conta bancária. Permite adicionar fundos à conta especificada.

Como Executar o Projeto
Para executar o projeto em sua máquina local, siga as instruções abaixo:

Clone este repositório em seu ambiente de desenvolvimento.

Certifique-se de ter o Node.js instalado em sua máquina.

No terminal, navegue até o diretório do projeto e execute o comando npm install para instalar as dependências necessárias.

Após a instalação das dependências, execute o comando node index.js para iniciar a simulação do banco.

Conclusão
Este projeto de simulação de banco em JavaScript usando POO é uma ótima maneira de aprimorar suas habilidades de programação, aplicando conceitos essenciais em um contexto prático. Sinta-se à vontade para experimentar as funcionalidades de criação de usuários, transferências, empréstimos e depósitos, além de explorar e contribuir com o código-fonte. Seu feedback e contribuições são sempre bem-vindos!

Tags
#programação #javascript #POO #banco #desenvolvimento #aprendizado
