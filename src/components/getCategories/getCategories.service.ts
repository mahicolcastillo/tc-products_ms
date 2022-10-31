import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import CategoryModel            from '../../models/category.model';

const logger : log = new log({ displayFunctionName: false}); 

const getCategoriesService = async(headers: IncomingHttpHeaders) => {
    try {
        logger.info(`Starting service getCombos`);

        if(!headers.clientname) throw 'clientName not defined';
        const response = await CategoryModel(headers.clientname as string).findAll();
        logger.debug(`Response data: ${JSON.stringify(response)}`);

        return response;
    } catch (error: unknown) {
        logger.error(error);
        throw error;
    }
}

export default getCategoriesService;