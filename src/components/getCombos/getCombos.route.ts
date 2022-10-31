import { Express }                  from 'express';

import expressValidatorMiddleware   from '../../middleware/express-validator.middleware';
import getCombosController          from './getCombos.controller';
import routeNames                   from '../../routes/routesNames';
import validation                   from '../../middleware/getCombos.middleware';
import validateJWT                  from '../../middleware/validateJWT.middleware';

const getCombosRoute = (app: Express, globalPath: string) => {
    app.get(
        `${globalPath}/${routeNames.getCombos.name}`,
        validation,
        expressValidatorMiddleware,
        validateJWT,
        getCombosController
    );
}

export default getCombosRoute;