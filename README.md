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
[
  { "nome": "Alice Santos", "cpf": "12345678909" },
  { "nome": "Bruno Lima", "cpf": "98765432100" }
]
```

> ⚠️ Os CPFs são válidos segundo o algoritmo de verificação, mas são fictícios.

---

## 📚 Objetivo

Essa API foi criada com propósito educacional e para testar automações e conectores REST ondemand com diferentes tipos de autenticação.