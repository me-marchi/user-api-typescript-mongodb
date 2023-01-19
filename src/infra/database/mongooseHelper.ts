import mongoose from 'mongoose';

export class MongooseHelper {

    static async getConnection(): Promise<mongoose.Connection|void> {
        try {
            const uri = process.env.MONGODB_URI as string;
            
            mongoose.set('strictQuery', false);
            
            const { connected } = mongoose.STATES;
            const connectionState = mongoose.connection.readyState;
            if (connectionState == connected) {
                return;
            }

            mongoose.connect(uri, { dbName: 'users-db' })
            .then(() => {
                console.log('Connected to database');
            }).catch(() => {
                throw new Error('Not found connection, please try again');
            });

        } catch(error) {
            throw new Error('Not found connection, please try again');
        }
    }

    static async disconnect(): Promise<void> {
        const { disconnected } = mongoose.STATES;
        const connectionState = mongoose.connection.readyState;
        if (connectionState == disconnected) {
            return;
        }

        mongoose.disconnect();
    }
}
