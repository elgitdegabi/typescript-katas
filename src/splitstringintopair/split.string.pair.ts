/**
 * Based on Code-wars kata:
 * https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/typescript
 */
export class SplitStringIntoPair {

    /**
     * Splits given string into pairs. If original string has odd length, it should be completed with _ character
     *
     * @param str string
     * @return string array of pairs
     */
    static split(str: string | null | undefined): string[] {
        if (str != null && str != undefined && str.length > 0) {
            if (str.length % 2 != 0) {
                str += "_";
            }

            let result = new Array<string>(str.length / 2);
            for (let i = 0; i < result.length; i++) {
                result[i] = str.substring(i * 2, i * 2 + 2);
            }

            return result;
        }

        return [];
    }
}
