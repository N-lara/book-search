const typeDefs = `

type Query{
    me(username : String, _id : ID): User
}


Type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors:[String], description:String, title:String, bookId:ID, image:String, link:String): User
    removeBook(bookId:ID):User
}


type User{
    _id:ID
    username: string
    email: string
    bookCount: Int
    savedBooks: [Book]
}

type Book{
    bookId:ID
    authors:[String]
    description:string
    title:string
    image:string
    link:string
}

type Auth{
    token:ID!
    user:User
}
`

module.exports = typeDefs;
