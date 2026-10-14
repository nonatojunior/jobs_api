# API Rest usando Express + Sequelize + TypeScript

## Comandos
#### cria projeto e instala as dependências de desenvolvimento
  > `npm i -D typescript ts-node-dev @types/express sequelize-cli`
#### instala dependências do projeto
  > `npm i express sequelize pg dotenv`
#### cria arquivo de configuração do TypeScript
  > `npx tsc --init`
#### inicia aplicação
  > `npm run dev`
#### cria banco de dados
  > `npx sequelize-cli db:create`
#### cria migration
  > `npx sequelize-cli migration:generate --name create-candidates-table`
#### executa migration
  > `npx sequelize-cli db:migrate`
#### cria seed
  > `npx sequelize-cli seed:generate --name create-candidates-seed`
#### executa seed
  > `npx sequelize-cli db:seed:all`

## Comandos Extras
#### altera versão do TypeScritp
  > `npm install -D typescript@5.8.3`

## Extensão REST Client
Este projeto está compatível para utilização da extensão REST Client, disponível no VSCode.

Utilize o arquivo **requests.http** incluso no projeto para testar e executar as chamadas da API de forma prática.