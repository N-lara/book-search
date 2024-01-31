//TODO: This will hold the query GET_ME, which will execute the
// me query set up using Apollo Server.
import { gql } from '@apollo/client'

export const GET_ME = gql`
    query me($username:String, $_id:ID){
        User($username:String, $_id:ID){
            _id
            username
            email
            bookCount
            savedBooks
        }
    }
`