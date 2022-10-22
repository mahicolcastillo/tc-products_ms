import {sum} from '../../../src/components/getProducts/getProducts.controller';

describe('Testing getProducts', () => {
    test('adds 1 + 2 to equal 3', () => {
     expect(sum(1, 2)).toBe(4);
    });
});