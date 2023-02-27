import { SumOddNumbers } from "../../../src/sum-of-odd-numbers/sum.odd.number";

/**
 * Unit test cases for {@link SumOddNumbers}
 */
describe ("sum of odd numbers unit test", () => {
    let testCases = [
        {value: 0, expected: 0},
        {value: 1, expected: 1},
        {value: 2, expected: 8},
        {value: 3, expected: 27},
        {value: 4, expected: 64},
        {value: 5, expected: 125},
    ];

    it.each(testCases)("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(SumOddNumbers.sumOfOddNumbers(value));
      });
});
