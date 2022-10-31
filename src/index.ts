import express              from 'express';
import helmet               from 'helmet';
import bodyParser           from 'body-parser';
import { Logger as log }    from 'tslog';
require('express-async-errors');

import config   from "./config/global";
import routes   from './routes/routes';

const app = express();
const logger : log = new log({ displayFunctionName: false}); 

const serverStart = async() => {
    try {
        app.use(bodyParser.json());
        app.use(helmet());

        routes(app);

        app.listen(process.env.PORT || config.port || 3000, () => {
            logger.info(`Server listening on ${process.env.PORT || config.port ||  3000}, with basepath ${config.globalPath}`);
        });
    } catch (error) {
        logger.error('Error init server', error);
    }
}

serverStart();
