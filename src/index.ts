import express              from 'express';
import helmet               from 'helmet';
import bodyParser           from 'body-parser';
import { Logger as log }    from 'tslog';
require('express-async-errors');

import config   from "../src/config/global";
import routes   from './routes/routes';

const app = express();
const logger : log = new log(); 

const serverStart = async() => {
    try {
        app.use(bodyParser.json());
        app.use(helmet());

        routes(app);

        // app.listen(config.port, () => {
        //     logger.info(`Server listening on ${config.port}, with basepath ${config.globalPath}`);
        // });

        app.listen(process.env.PORT || 5000, () => {
            logger.info(`Server listening on ${process.env.PORT || 5000}, with basepath ${config.globalPath}`);
        });
    } catch (error) {
        logger.error('Error init server', error);
    }
}

serverStart();
