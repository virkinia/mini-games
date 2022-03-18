import mongoose from 'mongoose';
import { MongoError } from 'mongodb';
import Winston from '../config/winston';

export class MongoConnector {
    _mongoConfig;

    setConfig(value): MongoConnector {
        this._mongoConfig = value;
        return this;
    }

    async connect(): Promise<string> {
        const { user, pass, srv } = this._mongoConfig;
        const url = this.getMongoURL();
        const mongoOptions = {
            useNewUrlParser: true,
            reconnectTries: 2,
            reconnectInterval: 500, // Reconnect every 500ms
            connectTimeoutMS: 5000,
            ...(srv && { user, pass }),
        };

        return new Promise<string>((resolve, reject) => {
            mongoose.connect(url, mongoOptions, (err: MongoError) => {
                if (err) {
                    Winston.error("Error connecting DB")
                    Winston.error(err)
                    return reject(err);
                }
                Winston.info("* DB connected to")
                resolve('success');
            });
        });
    }

    private getMongoURL(): string {
        const { host, database, test_database, user, pass, port, srv } = this._mongoConfig;
        const dbToUse = (process.env.NODE_ENV == 'test') ? test_database : database;
        const authPart = pass ? `${user}:${pass}@` : '';
        if (srv) {
            return `mongodb+srv://${host}/${dbToUse}?ssl=true&authSource=admin`;
        }
        return `mongodb://${authPart}${host}:${port}/${dbToUse}`;
    }
}