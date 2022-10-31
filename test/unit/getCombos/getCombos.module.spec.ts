import getCombosModule    from '../../../src/components/getCombos/getCombos.module';
import getCombosService   from '../../../src/components/getCombos/getCombos.service';

const name = 'getCombosModule';

jest.mock('../../../src/components/getCombos/getCombos.service');

describe(name, () => {
    const headers = {test: 'test'};

    test(`${name} - OK`, async () => {
        (getCombosService as jest.MockedFunction<any>) = jest.fn().mockResolvedValue([
            {
                id: 1,
                name: 'test'
            }
        ]);

        const response = await getCombosModule(headers);
        expect(response.code).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        (getCombosService as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({});

        try {
            await getCombosModule(headers);
        } catch (error: any) {
            expect(error.code).toBe(500);
        }
    });
});