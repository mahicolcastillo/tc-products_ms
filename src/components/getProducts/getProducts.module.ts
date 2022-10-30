import getProductsService   from './getProducts.service';
import { Logger as log }    from 'tslog';

import HeadersInterface     from '../../interfaces/headers.interface';
import OutputMessage        from '../../utils/outputMessage.util';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getProductsModule = async(headers: HeadersInterface): Promise<ResponseInterface> => {
    try {
        logger.info(`Entrance`);
        const response = await getProductsService(headers);
        logger.debug(`Response data: ${JSON.stringify(response)}`);
        
        return new OutputMessage(response).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

export default getProductsModule;