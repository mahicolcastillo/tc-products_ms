import { Express }          from 'express'; 
import { Logger as log }    from 'tslog';

import config               from '../config/global';
import routeNames           from './routesNames';

import healthcheckRoute from '../components/healtcheck/healthcheck.route';
import getProductsRoute from '../components/getProducts/getProducts.route';

const logger : log = new log({ displayFunctionName: false}); 

const routes = (app: Express) => {

    logger.info(`[${routeNames.healthcheck.verb}] ${config.get("globalPath")}/${routeNames.healthcheck.name}`)
    healthcheckRoute(app, config.get("globalPath"));

    logger.info(`[${routeNames.getProducts.verb}] ${config.get("globalPath")}/${routeNames.getProducts.name}`)
    getProductsRoute(app, config.get("globalPath"));
}

export default routes;