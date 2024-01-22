# **Planejamento de API PlanejaSD**
Neste Documento iremos tratar de como deverá funciona a API do PlanejaSD
## Tecnologias
-   TypeScript
-   Express
-   jsonwebtoken
-   pg

## Rotas

### Rota de Perguntas

#### GET

**Endpoint:**
- `GET /question/:idQuestion`

**Exemplo:**
- `www.domain.com/question/1`

**Parâmetros Recebidos:**
- `idQuestion`: ID (chave primária) da questão desejada

**Cabeçalho (Header):**
- No cabeçalho, envie o código JWT de autenticação, validado por um middleware.

**Resposta:**
- Status Code: 200
- Corpo da Resposta (JSON): Texto da pergunta e suas respectivas opções.
- Exemplo: 
```json
  question = {
    text: 'Lorem Ips'
    choices: [
      {id: 1, text: 'Sim'},
      {id: 2, text: 'Não'}
    ]
  }
```

#### POST

**Endpoint:**
- `POST /question/:idQuestion`

**Exemplo:**
- `www.domain.com/question/1`

**Parâmetros Recebidos:**
- `idQuestion`: ID (chave primária) da questão desejada

**Cabeçalho (Header):**
- No cabeçalho, envie o código JWT de autenticação, validado por um middleware.

**Corpo (Body):**
- Devera ser enviado um objeto contendo o id do campo selecionado e se caso houver resposta ou justificativa também deverá ser enviado
  ```json
  {
    id: 1, 
    response: 'resposta'
  }
**Resposta:**
- Status Code: 200
- Corpo da Resposta (JSON): Texto informando sucesso a rota de sua próxima pergunta.
- Exemplo: 
```json
  {
    next: 'www.domain.com/question/1'
  }
