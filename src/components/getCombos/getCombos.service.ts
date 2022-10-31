import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import ComboModel               from '../../models/combo.model';

const logger : log = new log({ displayFunctionName: false}); 

const getCombosService = async(headers: IncomingHttpHeaders) => {
    try {
        logger.info(`Starting service getCombos`);

        if(!headers.clientname) throw 'clientName not defined';
        const response = await ComboModel(headers.clientname as string).findAll();
        logger.debug(`Response data: ${JSON.stringify(response)}`);

        return response;
    } catch (error: unknown) {
        logger.error(error);
        throw error;
    }
}

export default getCombosService;