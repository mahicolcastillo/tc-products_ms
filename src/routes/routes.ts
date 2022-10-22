import { Express }          from 'express'; 
import { Logger as log }    from 'tslog';

import config               from '../config/global';
import healthcheckRoute     from '../components/healtcheck/healthcheck.route';
import routeNames           from './routesNames';

const logger : log = new log(); 

const routes = (app: Express) => {

    logger.info(`[${routeNames.healthcheck.verb}] ${config.get("globalPath")}/${routeNames.healthcheck.name}`)
    healthcheckRoute(app, config.get("globalPath"));
}

export default routes;