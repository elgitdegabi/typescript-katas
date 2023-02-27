import { TwoOldestAge } from "../../../src/two-oldest-ages/two.oldest.ages";

/**
 * Unit test cases for {@link TwoOldestAge}
 */
describe ("two odlest ages unit test", () => {
    let testCases = [
        {value: null, expected: []},
        {value: undefined, expected: []},
        {value: [], expected: []},
        {value: [0, 0], expected: [0, 0]},
        {value: [5, 10], expected: [5, 10]},
        {value: [1, 3, 10, 0], expected: [3, 10]},
        {value: [1, 2, 10, 8], expected: [8, 10]},
        {value: [1, 5, 87, 45, 8, 8], expected: [45, 87]},
        {value: [2, 5, 87, 45, 8, 8], expected: [45, 87]},
        {value: [6, 5, 83, 5, 3, 18], expected: [18, 83]},
        {value: [6, 5, 83, 5, 3, 18], expected: [18, 83]},
    ];

    it.each(testCases)("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(TwoOldestAge.twoOldestAges(value));
      });
});
