import { SplitStringIntoPair } from "../../../src/splitstringintopair/split.string.pair";

/**
 * Unit test cases for {@link SplitStringIntoPair}
 */
describe ("split string into pairs unit test", () => {
    let testCases = [
        {value: null, expected: []},
        {value: undefined, expected: []},
        {value: "", expected: []},
        {value: "a", expected: ["a_"]},
        {value: "ab", expected: ["ab"]},
        {value: "abc", expected: ["ab", "c_"]},
        {value: "abcd", expected: ["ab", "cd"]},
    ];

    it.each(testCases)("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(SplitStringIntoPair.split(value));
      });
});
