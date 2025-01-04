import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {
  Arg,
  buildSchema,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

// Define the Book object type
@ObjectType()
class Book {
  @Field()
  id!: string;

  @Field()
  title!: string;

  @Field()
  author!: string;
}

// Define the BookInput input type
@InputType()
class BookInput {
  @Field()
  title!: string;

  @Field()
  author!: string;
}

//define the dataset
const dataBooks: Book[] = [
  {
    id: "0",
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: "1",
    title: "City of Glass",
    author: "Paul Auster",
  },
];

//Reolver class
@Resolver()
class BookResolver {
  @Query(() => [Book])
  getAllbooks() {
    return dataBooks;
  }

  @Query(() => Book)
  getBookById(@Arg("id") id: string) {
    return dataBooks.find((book) => book.id == id);
  }

  @Mutation(() => Book)
  addBook(@Arg("data") { title, author }: BookInput): Book {
    const newBook = {
      title: title,
      author: author,
      id: (dataBooks.length + 1).toString(),
    };

    dataBooks.push(newBook);
    return newBook;
  }
}

// build the schéma and start the server
const schema = await buildSchema({
  resolvers: [BookResolver],
});

const server = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url} 🚀 🚀`);
