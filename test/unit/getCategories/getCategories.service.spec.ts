import getCategoriesService   from '../../../src/components/getCategories/getCategories.service';
const name = 'getCategoriesService';

jest.mock('../../../src/models/category.model', () => () => {
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

        const response = await getCategoriesService(headers);
        expect(response).toBe(1);
    });

    test(`${name} - NOK`, async () => {
        try {
            await getCategoriesService({});
        } catch (error: unknown) {
            expect(error).toBeTruthy();
        }
    });
});