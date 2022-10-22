import { Express }          from 'express'; 
import { Logger as log }    from 'tslog';
const logger : log = new log(); 

const routes = (app: Express) => {
    logger.info('Aqui van las rutas');
}

export default routes;