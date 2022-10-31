import getProductsService   from '../../../src/components/getProducts/getProducts.service';
const name = 'getProductsService';

jest.mock('../../../src/models/products.model', () => () => {
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

        const response = await getProductsService(headers);
        expect(response).toBe(1);
    });

    test(`${name} - NOK`, async () => {
        try {
            await getProductsService({});
        } catch (error: unknown) {
            expect(error).toBeTruthy();
        }
    });
});