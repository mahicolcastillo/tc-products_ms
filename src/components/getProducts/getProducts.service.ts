import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import ProductModel             from '../../models/products.model';

const logger : log = new log({ displayFunctionName: false}); 

const getProductsService = async(headers: IncomingHttpHeaders) => {
    try {
        logger.info(`Starting service getProducts`);

        if(!headers.clientname) throw 'clientName not defined';
        const response = await ProductModel(headers.clientname as string).findAll();
        logger.debug(`Response data: ${JSON.stringify(response)}`);

        return response;
    } catch (error: unknown) {
        logger.error(error);
        throw error;
    }
}

export default getProductsService;