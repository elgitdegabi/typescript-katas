import { ConsecutiveString } from "../../../src/concatenateconsecutivestring/concatenate.consecutive.string";

/**
 * Unit test cases for {@link ConsecutiveString}
 */
describe ("concatenate consecutive string unit test", () => {
    let testCases = [
        {array: ["a", "b", "cd", "efg"], k: 2, expected: "cdefg"},
        {array: ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k: 2, expected: "folingtrashy"},
        {array: ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], k: 2, expected: "abigailtheta"},
        {array: ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], k: 1, expected: "oocccffuucccjjjkkkjyyyeehh"},
        {array: [], k: 3, expected: ""},
        {array: ["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], k: 2, expected: "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"},
        {array: ["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], k: 2, expected: "wlwsasphmxxowiaxujylentrklctozmymu"},
        {array: ["zone", "abigail", "theta", "form", "libe", "zas"], k: -2, expected: ""},
        {array: ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], k: 3, expected: "ixoyx3452zzzzzzzzzzzz"},
        {array: ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], k: 15, expected: ""},
        {array: ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], k: 0, expected: ""},
    ];

    it.each(testCases)("array: $array - k: $k", ({array, k, expected}) => {
        expect(expected).toEqual(ConsecutiveString.consecutiveString(array, k));
      });
});
