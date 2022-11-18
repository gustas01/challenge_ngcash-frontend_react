# challenge_ngcash-frontend_react-

<h2>Tecnologias usadas</h2>
React e Typescript
<hr>

# Instruções para a execução do projeto.
OBS: O NodeJS deve estar instalado no ambiente onde será executado o projeto.
OBS2: Para a execução completa desse front, é necessário também a execução da API encontrada no endereço https://github.com/gustas01/challenge_ngcash-backend_node pois seus recursos necessitavam de um backend para funcionar da melhor forma possível.

1º passo - Com um terminal aberto na raiz do projeto, execute o comando  `npm i` para que as depências sejam instaladas.<br>
2º passo - Ainda com o terminal aberto na raiz, execute o comando `npm start` para executar o projeto.

A aplicação irá subir na porta 3000.

# Overview da aplicação
A aplicação se trata de uma simulação de carteira virtual, com sistema de login
![login](https://user-images.githubusercontent.com/50846424/202816665-bae6b762-a806-4b77-b9cd-b32175f234e5.PNG)

<br>
E com validações tanto na hora de entrar quando na de criar uma conta

![validationPasswordFail](https://user-images.githubusercontent.com/50846424/202816806-8d19f815-f6d2-4ae2-a35f-95b50a0b70dc.PNG)


E para criar conta basta entrar com userName e password, e caso passe nas validações da API, o usuário será criado e uma mensagem será exibida. <br>
![validationPasswordSuccess](https://user-images.githubusercontent.com/50846424/202816905-3ce9aedc-21f1-416a-b77c-7fed1248a52c.PNG)

Depois de logado, será apresentada para o usuário a home, que contém a tabela com todas as transações em que ele participou. E no cabeço já temos informações como o nome do usuário e seu balance (saldo) atual. Assim também como uma opção de fazer logou (Sair).<br>

![transactions](https://user-images.githubusercontent.com/50846424/202817028-6bfc2279-36fd-45fb-a23f-497c44edb132.PNG)

Podendo filtrar a tabela por Cash-In <br>
![filterCashIn](https://user-images.githubusercontent.com/50846424/202817115-f64d5b94-a42d-44fa-b9fd-3a0c6040ca37.PNG)

Por Cash-Out <br>
![filterCashOut](https://user-images.githubusercontent.com/50846424/202817179-b31b1e4c-e20e-46a5-828c-a864b3cdfb0c.PNG)

E por data <br>
![filterDate](https://user-images.githubusercontent.com/50846424/202817199-3d7e52c5-0596-431c-87b7-08ee759b8a1c.PNG)

Na Navbar à esquerda da tela, tem outra aba chamada `Transferências`, onde o usuário poderá transferir (fazer cash-out) para outro usuário, informando o valor e o user_name do usuário de destino. <br>
![cashoutvalues](https://user-images.githubusercontent.com/50846424/202817436-37fd9c05-9d5e-4f46-8c4a-84068110badf.PNG)

Logo após fazer a transferência, uma mensagem de sucesso será exibida <br>
![cashOutMessageSuccess](https://user-images.githubusercontent.com/50846424/202817495-d4a393d8-a000-49c5-9e39-4f9d7ea74016.PNG)

E é claro que também existem as validações, como não poder fazer cash-out para si mesmo, e entre outras. <br>
![cashInToYourself](https://user-images.githubusercontent.com/50846424/202817560-0cec71cc-f3d3-45c7-b17f-38c16b4900fa.PNG)
