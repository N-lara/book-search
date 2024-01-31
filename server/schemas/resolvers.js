// TODO: Define the query and mutation functionality to work with the Mongoose models.
const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// Hint: Use the functionality in the user-controller.js as a guide.
const resolvers = {
    Query: {
        user: async (parent, args) => {

            if(args.username){
                username = args.username;
                return User.findOne({ username })}
            if(args._id){
                _id = args.id;
                return User.findById({_id})
            }
          },
    },
    
    Mutation: {
        createUser: 0,
        login: 0,
        saveBook: 0,
        deleteBook: 0,
    }
};

module.exports = resolvers;
