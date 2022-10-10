const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int 
        savedBooks: [Book]
    }

    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        title: String
    }

    type Query {
        me: User
    }

    input savedBookInput {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!) : Auth 
        login(email: String!, password: String!): Auth
        saveBook( 
            authors: [String]
            description: String
            title: String
            bookId: String
            image: String
            ) : User
        deleteBook(bookId: String!) : User
    }

    type Auth {
        token: ID!
        user: User
    }
`

module.exports = typeDefs