import getCombosController    from '../../../src/components/getCombos/getCombos.controller';
import getCombosModule        from '../../../src/components/getCombos/getCombos.module';
import { createRequest, createResponse } from 'node-mocks-http';

const name = 'getCombosController';

jest.mock('../../../src/components/getCombos/getCombos.module');

describe(name, () => {
    test(`${name} - OK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getCombosModule as jest.MockedFunction<any>) = jest.fn().mockResolvedValue({
            code: 200,
            message: 'Success',
            payload: {}    
        });

        const response = await getCombosController(req, res);
        expect(response.statusCode).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getCombosModule as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({
            code: 500,
            message: 'Internal Server Error',
            payload: {}    
        });

        try {
            await getCombosController(req, res);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});