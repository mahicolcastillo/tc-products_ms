import { Request, Response }    from "express";
import { Logger as log }        from 'tslog';

const logger : log = new log(); 

const healthcheck = (req: Request, res: Response) => {
    logger.info('Healthcheck executed');
    return res.status(200).send('OK');
}

export default healthcheck;