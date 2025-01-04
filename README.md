# 📚 app-v2-gql-server

Welcome to the **app-v2-gql-server**! This is a GraphQL server built with TypeScript, Apollo Server, and TypeGraphQL. It provides a simple API for managing books. Let's dive in! 🚀

## 📖 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## 🛠️ Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/app-v2-gql-server.git
   cd app-v2-gql-server
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm run dev
   ```

## 🚀 Usage

### Development

To start the server in development mode with automatic restarts on file changes:

```sh
npm run dev

The server will run on http://localhost:4000.
```

## 📚 API

### Query: Get all books

```graphql
query {
  getAllBooks {
    id
    title
    author
  }
}

### Get a book by ID
query {
  getBookById(id: "1") {
    id
    title
    author
  }
}

###  Add a new book
mutation {
  addBook(data: { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }) {
    id
    title
    author
  }
}
```
