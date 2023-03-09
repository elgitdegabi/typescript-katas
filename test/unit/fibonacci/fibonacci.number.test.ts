import { FibonacciNumber } from "../../../src/fibonacci/fibonacci.number";

/**
 * Unit test cases for {@link FibonacciNumber}
 */
describe ("fibonacci number unit test", () => {
    let basicTestCases = [
        {value: 0n, expected: 0n},
        {value: 1n, expected: 1n},
        {value: 2n, expected: 1n},
        {value: 5n, expected: 5n},
        {value: 7n, expected: 13n},
        {value: 9n, expected: 34n},
    ];

    let complexTestCases = [
        {value: 45n, expected: 1134903170n},
        {value: 85n, expected: 259695496911122585n},
        {value: 99n, expected: 218922995834555169026n},
    ];

    it.each(basicTestCases)("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(FibonacciNumber.calculate(value));
      });

    it.each([...basicTestCases, ...complexTestCases])("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(FibonacciNumber.calculateWithMemoization(value, new Map()));
      });
});
