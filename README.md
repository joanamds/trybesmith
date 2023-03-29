# Trybesmith 🗡️

Primeiro projeto utilizando TypeScript! Para este projeto foi preciso simular uma loja de produtos medievais criando uma API com endpoints para ler e escrever no banco de dados utilizando MySQL. 

## Endpoints
<table>
  <thead>
    <tr>
      <th>Método HTTP</th>
      <th>Endpoint</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/products</td>
      <td>Cadastra um novo produto</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/products</td>
      <td>Retorna a lista de todos os produtos que estão no banco de dados</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/users</td>
      <td>Cria um novo usuário e gera um token</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/login</td>
      <td> Faz um login com um usuário que está no banco de dados e retorna um token</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/orders</td>
      <td>Cadastra um novo pedido :key: </td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/orders</td>
      <td>Gera uma lista de todos os pedidos que estão no banco de dados </td>
    </tr>
  </tbody>
</table>

:key: Para o endpoint que está sinalizado com a chave é preciso utilizar um token gerado nas rotas POST /users ou POST /login no headers da requisição.


## Tecnologias usadas
Back-end:
> Desenvolvido usando: Docker, docker-compose, MySQL, Node.js, TypeScript, JSON Web Token(JWT)

## Instalando Dependências
### Com Docker
> Backend

* Primeiro instale os containers: 
```bash
docker-compose up -d
``` 

* Em seguida abra o terminal interativo do container: 
```bash
docker exec -it trybesmith bash
``` 

* Instale as dependências dentro do container: 
```bash
npm install
``` 

> Para rodar a API 

* Rode o seguinte comando dentro do container: 
```bash
npm run dev
```

### Sem Docker

* Instale as dependências [Caso existam]
```bash
npm install
``` 

* Renomeie o arquivo '.env.example' para '.env'
* Certifique-se que o MySQL está rodando com as configurações necessárias do arquivo '.env'
* Execute a aplicação com 
```bash
npm start
```

Ou: 

```bash
npm run dev
```

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://joanamds.github.io/#/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-joanamds/)
