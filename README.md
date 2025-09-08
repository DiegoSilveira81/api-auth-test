# 🔐 API de Autenticação Simulada (Basic, Bearer, OAuth 2.0)

Projeto Node.js com Express que simula três tipos de autenticação em uma API REST para fins de teste e aprendizado.

## 🚀 Tecnologias usadas

- Node.js
- Express

## 📂 Estrutura

- `index.js`: Arquivo principal que inicializa a aplicação e importa os módulos de autenticação.
- `basic-auth.js`: Simula autenticação HTTP Basic.
- `bearer-auth.js`: Simula autenticação via Bearer Token.
- `oauth2-auth.js`: Simula autenticação via OAuth 2.0 (com client_id e client_secret).

---

## 🔧 Como rodar localmente

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor

```bash
npm start
```

O servidor iniciará em `http://localhost:6666` (pode ajustar a porta no `index.js` se necessário).

---

## 🔐 Como testar as autenticações

### ✅ Basic Auth

- **Método**: `GET`
- **URL**: `http://localhost:6666/api/basic/data`
- **Autenticação**: Basic Auth
  - **Username**: `admin`
  - **Password**: `password1234`

---

### ✅ Bearer Token

- **Método**: `GET`
- **URL**: `http://localhost:6666/api/bearer/data`
- **Header**: `Authorization: Bearer mysecrettoken`

---

### ✅ OAuth 2.0

#### 1. Obter Token

- **Método**: `POST`
- **URL**: `http://localhost:6666/oauth2/token`
- **Body → raw → JSON**:

```json
{
  "client_id": "meu-client-id",
  "client_secret": "meu-client-secret"
}
```

#### 2. Acessar dados protegidos

- **Método**: `GET`
- **URL**: `http://localhost:6666/api/oauth2/data`
- **Header**: `Authorization: Bearer simulated-oauth2-token`

---

## 📦 Retorno simulado

Todos os endpoints de dados retornam o seguinte JSON:

```json
{
        recordType: "customer",
        birthday: "1985-03-15",
        education: "Superior Completo",
        father: "João Santos Silva",
        gender: "Feminino",
        maritalStatus: "Casada",
        mother: "Maria Santos",
        age: 38,
        contactAddresses: [
          {
            createdDate: "2023-01-15T10:30:00Z",
            street: "Rua das Flores, 123, Apto 45",
            city: "Porto Alegre",
            state: "Rio Grande do Sul",
            zipCode: "90010-000",
            country: "Brasil",
            origin: "registration",
            type: "residential"
          },
          {
            createdDate: "2023-06-20T14:15:00Z",
            street: "Av. Ipiranga, 6681, Sala 1001",
            city: "Porto Alegre",
            state: "Rio Grande do Sul",
            zipCode: "90619-900",
            country: "Brasil",
            origin: "update",
            type: "commercial"
          }
        ],
        contactPhones: [
          {
            createdDate: "2023-01-15T10:30:00Z",
            number: "51982700004",
            type: "mobile",
            origin: "registration"
          },
          {
            createdDate: "2023-03-10T16:45:00Z",
            number: "5133334455",
            type: "landline",
            origin: "update"
          }
        ],
        contactEmails: [
          {
            createdDate: "2023-01-15T10:30:00Z",
            email: "alice.santos@email.com",
            origin: "registration"
          },
          {
            createdDate: "2023-04-22T09:20:00Z",
            email: "alice.trabalho@empresa.com",
            origin: "update"
          }
        ],
        document: "374.929.370-83",
        name: "Alice Santos"
      },
```

> ⚠️ Os CPFs são válidos segundo o algoritmo de verificação, mas são fictícios.

---

## 📚 Objetivo

Essa API foi criada com propósito educacional e para testar automações e conectores REST ondemand com diferentes tipos de autenticação.