const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./schema/schema')
const { resolvers } = require('./resolver/resolver')


async function connect(){
    // const server = new ApolloServer({
    //     typeDefs,
    //     resolvers,
    //     context: ({ req }) => ({
    //         req,
    //         pubsub
    //     })
    // })
    

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    mongoose.connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB!');
    }).catch(() => {
        console.log('Failed to connect to MongoDB!');
    });
   
    server.listen({ port }).then((res) => {
        console.log(`🚀 Server ready at ${port}  ${res.url}`);
    });
    
}

module.exports = {connect}
