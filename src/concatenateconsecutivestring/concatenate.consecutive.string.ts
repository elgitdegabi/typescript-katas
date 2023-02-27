/**
 * Based on Code-wars kata:
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e/typescript
 */
export class ConsecutiveString {

    /**
     * @param strarr array of strings
     * @param k      minimum length to consider a string as a candidate and also quantity of strings to concatenate
     * @return concatenated k strings of length k or grater
     */
    static consecutiveString(strarr: String[], k: number) {
        let result = "";

        if (strarr.length > 0 && k > 0 && k < strarr.length) {
            for (let i = 0; i < strarr.length - k + 1; i++) {
                let  current = "";
                for (let j = i; j < i + k; j++) {
                    current += strarr[j];
                }
                if (current.length > result.length) {
                    result = current;
                }
            }
        }

        return result;
    }
}
