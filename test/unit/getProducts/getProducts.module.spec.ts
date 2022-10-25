import getProductsModule    from '../../../src/components/getProducts/getProducts.module';
import getProductsService   from '../../../src/components/getProducts/getProducts.service';

const name = 'getProductsModule';

jest.mock('../../../src/components/getProducts/getProducts.service');

describe(name, () => {
    let headers = {test: 'test'};

    test(`${name} - OK`, async () => {
        (getProductsService as jest.MockedFunction<any>) = jest.fn().mockResolvedValue([
            {
                id: 1,
                name: 'test'
            }
        ]);

        const response = await getProductsModule(headers);
        expect(response.code).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        (getProductsService as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({});

        try {
            await getProductsModule(headers);
        } catch (error: any) {
            expect(error.code).toBe(500);
        }
    });
});