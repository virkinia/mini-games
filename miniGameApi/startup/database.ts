import { Application } from '../app';
import { MongoConnector } from './mongo-connector';

export default async function databaseSetup(): Promise<string>{
    const connector = new MongoConnector();
    connector.setConfig(Application.config.mongoDb);
    return await connector.connect();
}