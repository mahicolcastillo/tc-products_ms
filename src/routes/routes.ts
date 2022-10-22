import { Express }          from 'express'; 
import { Logger as log }    from 'tslog';

import config               from '../config/global';
import healthcheckRoute     from '../components/healtcheck/healthcheck.route';

// const logger : log = new log(); 

const routes = (app: Express) => {
    healthcheckRoute(app, config.get("globalPath"));
}

export default routes;