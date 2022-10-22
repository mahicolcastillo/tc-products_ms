import healthcheckController from './healthcheck.controller';
import { Express } from 'express';

const healthcheckRoute = (app: Express, globalPath: string) => {
    app.get(`${globalPath}/healthcheck`, healthcheckController);
}

export default healthcheckRoute;