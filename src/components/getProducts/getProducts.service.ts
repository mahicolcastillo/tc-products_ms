import { Logger as log }    from 'tslog';

import HeadersInterface     from "../../interfaces/headers.interface";
import ProductModel         from '../../models/productsMock.model';

const logger : log = new log({ displayFunctionName: false}); 

const getProductsService = async(headers: HeadersInterface) => {
    try {
        logger.info(`Entrance`);
        const response = await ProductModel.findAll();

        logger.info(`Response data successfully`);
        logger.debug(`Response data: ${JSON.stringify(response)}`);

        return response;
    } catch (error) {
        logger.error(error);
        throw error;
    }
}

export default getProductsService;