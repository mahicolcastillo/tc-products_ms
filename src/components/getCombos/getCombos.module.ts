import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import getCombosService     from './getCombos.service';
import OutputMessage        from '../../utils/outputMessage.util';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getCombosModule = async(headers: IncomingHttpHeaders): Promise<ResponseInterface> => {
    try {
        logger.info(`Starting module getCombos`);
        const response = await getCombosService(headers);
        
        return new OutputMessage(response).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

export default getCombosModule;