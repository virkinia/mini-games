export default {
    httpPort: process.env.APP_HTTP_PORT || 3000,
    
    mongoDb: {
        test_database: process.env.APP_MONGO_DATABASE_TEST,
        database: process.env.APP_MONGO_DATABASE,
        host: process.env.APP_MONGO_HOST,
        pass: process.env.MONGO_PASS,
        port: process.env.MONGO_PORT,
        user: process.env.APP_MONGO_USER,
    },

}