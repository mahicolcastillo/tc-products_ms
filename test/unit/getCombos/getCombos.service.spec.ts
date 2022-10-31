import getCombosService   from '../../../src/components/getCombos/getCombos.service';
const name = 'getCombosService';

jest.mock('../../../src/models/combo.model', () => () => {
    const findAll = jest.fn().mockReturnValue(1);

    return {
        findAll
    } 
});

describe(name, () => {
    
    test(`${name} - OK`, async () => {
        const headers = {
            clientname: 'test'
        };

        const response = await getCombosService(headers);
        expect(response).toBe(1);
    });

    test(`${name} - NOK`, async () => {
        try {
            await getCombosService({});
        } catch (error: unknown) {
            expect(error).toBeTruthy();
        }
    });
});