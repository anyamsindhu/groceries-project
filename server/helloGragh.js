const {ApolloServer, gql}= require('apollo-server');

schema {
query: Query
}
const typeDefs= gql`
type Query
{
greeting : String
}
`;

const resolvers=
{
Query:
{
greeting: () => 'hello new world'
}
};


const server= new ApolloServer({typeDefs, resolvers});
server.listen({port:9090});
