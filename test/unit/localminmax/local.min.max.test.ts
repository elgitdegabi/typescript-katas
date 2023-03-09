import { LocalMinMax } from "../../../src/localminmax/local.min.max";

/**
 * Unit test cases for {@link LocalMinMax}
 */
describe ("local min max unit test", () => {
    let testCases = [
        {value: null, expected: [[], []]},
        {value: undefined, expected: [[], []]},
        {value: [], expected: [[], []]},
        {value: [1], expected: [[1], [1]]},
        {value: [1, 1], expected: [[1], [1]]},
        {value: [1, 2, 3, 4], expected: [[1], [4]]},
        {value: [4, 3, 2, 1], expected: [[1], [4]]},
    ];

    it.each(testCases)("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(LocalMinMax.getLocalMinMax(value));
        expect(expected).toEqual(LocalMinMax.getLocalMinMaxAlternative(value));
      });
});
