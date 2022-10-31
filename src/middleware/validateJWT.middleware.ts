import { NextFunction, Request, Response }  from 'express';
import jwt                                  from 'jsonwebtoken';
import { Logger as log }                    from 'tslog';

import config                               from '../config/global';

const logger : log = new log({ displayFunctionName: false}); 

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization || req.headers.Authorization;

    try {
        jwt.verify(token as string, config.tokenSecret);
        next();
    } catch (error: any) {
        logger.debug('Error in validateJWT', JSON.stringify(error));
        res.status(401).json({
            code: 401,
            payload: error.name === 'TokenExpiredError' ? 'Token expired' : 'Token invalid',
        })
    }
};

export default validateJWT;