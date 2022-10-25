import getProductsService   from '../../../src/components/getProducts/getProducts.service';
import ProductModel         from '../../../src/models/productsMock.model';

const name = 'getProductsService';

describe(name, () => {
    let headers = {test: 'test'};

    test(`${name} - OK`, async () => {
        jest
        .spyOn(ProductModel, 'findAll')
        .mockResolvedValue([{
            id: 1,
            name: 'test',
        }]);

        const response = await getProductsService(headers);
        expect(response[0].id).toBe(1);
    });

    test(`${name} - NOK`, async () => {
        jest
        .spyOn(ProductModel, 'findAll')
        .mockRejectedValue({
            code: 500
        });

        try {
            await getProductsService(headers);
        } catch (error: any) {
            expect(error.code).toBe(500);
        }
    });
});