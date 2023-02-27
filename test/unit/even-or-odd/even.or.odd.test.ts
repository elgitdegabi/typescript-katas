import { EvenOrOdd } from "../../../src/even-or-odd/even.or.odd";

/**
 * Unit test cases for {@link EvenOrOdd}
 */
describe ("even or odd unit test", () => {
    let testCases = [
        {value: 0, expected: "Even"},
        {value: 1, expected: "Odd"},
        {value: -1, expected: "Odd"},
        {value: 2, expected: "Even"},
        {value: -2, expected: "Even"},
    ];

    it.each(testCases)("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(EvenOrOdd.evenOrOdd(value));
      });
});
