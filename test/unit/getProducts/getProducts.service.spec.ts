import getProductsService   from '../../../src/components/getProducts/getProducts.service';
import ProductModel         from '../../../src/models/products.model';
const name = 'getProductsService';

jest.mock('../../../src/models/products.model', () => {
    const findAll = jest.fn().mockResolvedValue([{
        id: 1,
        name: 'test',
    }]);

    return {
        findAll
    };
});

describe(name, () => {
    const headers = {test: 'test'};

    test(`${name} - OK`, async () => {
        const response: any = await getProductsService(headers);
        expect(response[0].id).toBe(1);
    });

    // test(`${name} - NOK`, async () => {
    //     try {
    //         await getProductsService(headers);
    //     } catch (error: any) {
    //         expect(error.code).toBe(500);
    //     }
    // });
});