# API de Vagas

Uma API REST desenvolvida com **Node.js, Express, TypeScript, Sequelize e PostgreSQL** para gerenciar candidatos, empresas e oportunidades de trabalho.

## Sobre o projeto

O projeto reúne operações de cadastro e gerenciamento dos principais recursos de uma plataforma de vagas. Candidatos podem ser associados às vagas, enquanto cada vaga pertence a uma empresa. A estrutura separa rotas, controllers, models e arquivos de banco de dados para manter o código organizado.

### Funcionalidades

- Operações CRUD para candidatos, empresas e vagas.
- Associação e remoção de candidatos em vagas.
- Relacionamentos entre empresas e vagas e entre vagas e candidatos.
- Migrations e seeds gerenciados com `sequelize-cli`.
- Exemplos de requisições no arquivo [`requests.http`](./requests.http), compatível com a extensão REST Client do VS Code.

### Tecnologias

| Tecnologia | Uso |
| --- | --- |
| Node.js e Express | Aplicação e rotas HTTP |
| TypeScript | Tipagem da aplicação |
| Sequelize | ORM, models e relacionamentos |
| PostgreSQL | Banco de dados |

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
#### executa seed específico
  > `npx sequelize-cli db:seed --seed src/database/seeders/20261019201611-create-companies-seed.js`

## Comandos Extras
#### altera versão do TypeScritp
  > `npm install -D typescript@5.8.3`

## Extensão REST Client
Este projeto está compatível para utilização da extensão REST Client, disponível no VSCode.

Utilize o arquivo **requests.http** incluso no projeto para testar e executar as chamadas da API de forma prática.
