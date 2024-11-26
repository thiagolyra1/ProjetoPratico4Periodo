# ProjetoPratico4Periodo
Projeto prático da disciplina de **Programação com Frameworks Web** do 4º período de Sistemas para Internet - UNIPE (2024.2).

---

# Vídeo da apresentação

link do vídeo https://www.youtube.com/watch?v=YLYCA8F-UTE

## Índice
- [Descrição](#descrição)
- [Como Utilizar](#como-utilizar)
  - [Configuração do Backend](#configuração-do-backend)
  - [Configuração do Frontend](#configuração-do-frontend)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Guia de Instalação](#guia-de-instalação)
  - [Backend](#backend)
  - [Frontend](#frontend)


---

## Descrição

Este projeto é um sistema completo desenvolvido para a disciplina de **Programação com Frameworks Web**. Ele inclui:
- Um backend utilizando **Fastify** com **Prisma ORM**.
- Um frontend construído com **React** e **TypeScript**.

---

## Como Utilizar

### Configuração do Backend

1. Clone o repositório:
    ```bash
    git clone https://github.com/thiagolyra1/ProjetoPratico4Periodo.git
    ```

2. Navegue até a pasta `backend` e instale as dependências:
    ```bash
    cd ./backend
    npm install
    ```

3. Configure o banco de dados:
    - Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo:
      ```env
      DATABASE_URL="mongodb+srv://projetopratico:projeto123@clientes.lly9f.mongodb.net/clientes?retryWrites=true&w=majority&appName=clientes"
      ```

4. Gere os arquivos necessários do Prisma:
    ```bash
    npx prisma generate
    ```

5. Inicie o backend:
    ```bash
    npm run dev
    ```

### Configuração do Frontend

1. Navegue para a pasta `frontend`:
    ```bash
    cd ../frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o frontend:
    ```bash
    npm run dev
    ```

---

## Tecnologias Utilizadas

### Backend:
- **Node.js**: Versão 18.20.4.
- **Fastify**: Framework para criação de APIs rápidas e leves.
- **Prisma ORM**: Facilita a comunicação com o banco de dados MongoDB.
- **TypeScript**: Para tipagem e maior robustez no código.
- **MongoDB**: Banco de dados não relacional.

### Frontend:
- **React**: Para construção de interfaces dinâmicas.
- **Vite**: Ferramenta de build rápida e moderna.
- **Sass**: Pré-processador CSS.
- **Axios**: Para realizar requisições HTTP.
- **React Icons**: Biblioteca de ícones para React.

---

## Guia de Instalação

### Backend

1. Inicialize o projeto:
    ```bash
    npm init -y
    ```

2. Configure o TypeScript:
    ```bash
    npm install typescript --save-dev
    tsc --init
    ```

3. Instale as dependências do backend:
    ```bash
    npm install fastify @fastify/cors tsx
    npm install @types/node --save-dev
    npm install prisma --save-dev
    npm install @prisma/client
    ```

4. Inicialize o Prisma:
    ```bash
    npx prisma init
    ```

5. Mapeie os dados do banco de dados:
    ```bash
    npx prisma generate
    ```

6. Adicione os scripts no `package.json`:
    ```json
    "scripts": {
        "dev": "tsx watch src/server.ts"
    }
    ```

7. (Opcional) Teste o Prisma Studio:
    ```bash
    npx prisma studio
    ```

8. Inicie o servidor:
    ```bash
    npm run dev
    ```

### Frontend

1. Crie o projeto com Vite:
    ```bash
    npm create vite@latest frontend
    ```

2. Instale as dependências do frontend:
    ```bash
    cd ./frontend
    npm install
    npm install sass react-icons axios
    ```

3. Inicie o projeto:
    ```bash
    npm run dev
    ```git a

