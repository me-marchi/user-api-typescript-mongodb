import mongoose from 'mongoose';

// let connected: mongoose.Connection;

export class MongooseHelper {

    static async getConnection() {
        try {
            const uri = process.env.MONGODB_URI as string;
            
            mongoose.set('strictQuery', false);

            // if (connected) {
            //     return connected;
            // }

            mongoose.connect(uri, { dbName: 'users-db' })
            .then(() => {
                console.log('Connected to database');
            }).catch(error => {
                console.log(error);
            });

            const connected = mongoose.connection;
            return connected;
        } catch(error) {
            console.log(error);
        }
    }

    static async disconnect() {
        // if (!connected) {
        //     return;
        // }
        mongoose.disconnect();
    }
}


// const dataSource = new DataSource({
//     type: 'mongodb',
//     host: process.env.MONGODB_HOST,
//     port: parseInt(process.env.MONGODB_PORT as string),
//     username: process.env.MONGODB_USERNAME,
//     password: process.env.MONGODB_PASSWORD,
//     database: process.env.MONGODB_DATABASE,
//     // name: schema,
//     // schema: schema,
//     // entities: entities,
//     // synchronize: synchronize,
//     // host: 'localhost',
//     // port: 27017,
//     // database: 'test'
// });

// export class TypeOrmHelper {
//     private static async getManager(schema: string): Promise<DataSource> {
//         try {
//             const manager: MongoEntityManager = dataSource.mongoManager
//         }
//     }
// }
