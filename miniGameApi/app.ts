
import dotenv from 'dotenv';
dotenv.config();
import express  from 'express';
import { join } from 'path';
import path from 'path';
import Winston from './config/winston';



import databaseSetup from './startup/database';
import applicationConfig from './config/application_config';
import setRoutes from './routes';



let app: Application;


export class Application {
	app: express.Application;
	logger: any;
	
	
    public static get config(): any {
        return applicationConfig;
	}
	
    constructor() {
		this.app = express();
		this.logger = Winston
	}

    async initialize(): Promise<void> {
		Winston.info("************")
		Winston.info("* INIT APP *")
		Winston.info("************")
		
		const urlencoded = express.urlencoded;
		const json = express.json;
        await databaseSetup();
	
		this.app.use(json());
		this.app.use(urlencoded({ extended: false }));
	
		//app.use(express.static(join(path.resolve(), 'public')));
		this.app.use(express.static(join(path.resolve(), 'public'), { dotfiles: 'allow' }));
		

		this.setRoutes()
        await this.startServer(applicationConfig.httpPort);
    }


	private setRoutes() {
		setRoutes(this.app);
	}

    private async startServer(port) {
		if (process.env.NODE_ENV !== "test") {
			this.app.listen(port, () => {
				this.logger.info(`Listening on port ${port}.`);
			});
		}
    }
	

}

if (app == null) {
	app = new Application();
	app.initialize()
}

export default app;

