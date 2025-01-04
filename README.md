# app-v2-gql-server
This is a GraphQL server built with TypeScript, Apollo Server, and TypeGraphQL. It provides a simple API for managing books.

## Installation

1. Clone the repository:
```sh
git clone https://github.com/your-username/app-v2-gql-server.git
cd app-v2-gql-server

2. Install dependencies:
npm install

3. Start the development serve:
npm run dev




## Example GraphQL Operations

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
