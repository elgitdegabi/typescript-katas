import { FibonacciElements } from "../../../src/fibonacci/fibonacci.elements";

/**
 * Unit test cases for {@link FibonacciElements}
 */
describe ("fibonacci elements unit test", () => {
    let testCases = [
        {value: 0, expected: []},
        {value: 1, expected: [1]},
        {value: 2, expected: [1, 1]},
        {value: 85, expected: []},
        {value: 5, expected: [1, 1, 2, 3, 5]},
        {value: 7, expected: [1, 1, 2, 3, 5, 8, 13]},
        {value: 9, expected: [1, 1, 2, 3, 5, 8, 13, 21, 34]},
    ];

    it.each(testCases)("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(FibonacciElements.getElements(value));
      });
});
