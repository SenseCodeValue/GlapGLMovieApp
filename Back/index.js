// const graphqlYoga = require('graphql-yoga'); 
//=>
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
    //configuartions
    typeDefs: "./graphql/schema.graphql",
    resolvers
});
//schema는 DB 스키마 정의 즉, 내가 사용자로 보내거나 사용자로 부터 받을 data에 대한 정보
//그냥 여기서는 무엇을 보내 줄지 무엇을 받을지에 대한 선언을 한다라고 생가가하는것이 좋겠다. 
server.start(()=>{
    return console.log("GraphQL Server Runing")
});




