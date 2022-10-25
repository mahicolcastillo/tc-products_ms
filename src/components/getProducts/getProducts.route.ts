import { Express }              from 'express';

import getProductsController    from './getProducts.controller';
import routeNames               from '../../routes/routesNames';

const getProductsRoute = (app: Express, globalPath: string) => {
    app.get(
        `${globalPath}/${routeNames.getProducts.name}`, 
        getProductsController
    );
}

export default getProductsRoute;