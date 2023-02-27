import { CreditCardMask } from "../../../src/creditcardmask/credit.card.mask";

/**
 * Unit test cases for {@link CreditCardMask}
 */
describe ("credit card mask unit test", () => {
    let testCases = [
        {value: null, expected: null},
        {value: undefined, expected: undefined},
        {value: "", expected: ""},
        {value: "abc", expected: "abc"},
        {value: "abcd", expected: "abcd"},
        {value: "4556364607935616", expected: "############5616"},
        {value: "64607935616", expected: "#######5616"},
        {value: "Skippy", expected: "##ippy"},
        {value: "Nananananananananananananananana Batman!", expected: "####################################man!"},
    ];

    it.each(testCases)("value: $value - expected: $expected", ({value, expected}) => {
        expect(expected).toEqual(CreditCardMask.maskify(value));
      });
});
