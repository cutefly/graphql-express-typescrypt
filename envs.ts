import { config } from 'dotenv'

config();

export default {
    port: process.env.PORT || 3000,
    graphqlPath: process.env.GRAPHQL_PATH || '/graphql',
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/graphql-starter',
    kafka: {
        broker: process.env.KAFKA_BROKER_URL || 'localhost:9092',
        clientId: process.env.KAFKA_CLIENT_ID || 'node-app',
    }
}