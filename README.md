# Cloud Library - Back End

Backend feito para alimentar um site que tem como função cadastrar e exibir livros

## Tecnologias Usadas

Back-End:

> NodeJS, Express, Prisma ORM, Typescript

Testes:

> Jest

DevOps:
> Docker

DataBase:
> MySql

## Executando a Aplicação

A execução local pode ser dada das seguintes formas: Docker ou Node

<details>
  <summary><b>Iniciando o projeto com docker 🐳</b></summary><br>

  ***⚠️ Para garantir um bom funcionamento é necessário que tenha instalado o docker e o docker-compose nas versões 20.10.16 e 1.29 ou superior respectivamente⚠️***

  1. Clone o projeto

  ```bash
    git clone git@github.com:Pedro0505/cloud-library-backend.git
  ```

  2. Entre no diretório do projeto

  ```bash
    cd cloud-library-backend
  ```

  3. Suba os containers

  ```bash
    docker-compose -f docker-compose.dev.yml up --build -d
  ```

  5. Quando o processo dos containers estiver acabado acesse a aplicação usando o seguinte endereço

  ```bash
    http://localhost:3001
  ```

  6. Para derrubar os containers

  ```bash
    docker-compose -f docker-compose.test.yml down --rmi all --volumes --remove-orphans
  ```

</details>

<details>
  <summary><b>Node</b></summary><br>

  ***⚠️ Para rodar localmente é necessário ter o MySql instalado localmente ⚠️***

  ***Obs: Para usar localmente deve ser preenchido com as informações necessárias no '.env', conforme está escrito no '.env.example'***

  Clone o projeto

  ```bash
    git clone git@github.com:Pedro0505/cloud-library-backend.git
  ```

  Entre no diretório do projeto

  ```bash
    cd cloud-library-backend
  ```

  Instale as dependências

  ```bash
    npm install
  ```

  Inicie o servidor

  ```bash
    npm start
  ```

  Acesse a aplicação usando o seguinte endereço

  ```bash
    localhost:3001
  ```

</details>
