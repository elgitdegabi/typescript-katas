/**
 * Based on Geeks for geeks exercise:
 * https://practice.geeksforgeeks.org/problems/print-first-n-fibonacci-numbers1002/1
 */
export class FibonacciElements {

    /**
     * Returns first K fibonacci elements
     *
     * @param k number
     * @return number[]
     */
    static getElements(k: number): number[] {
        let result: any = [];

        if (k > 0 && k < 85) {
            for (let index = 0; index < k; index++) {
                if (index < 2) {
                    result[index] = 1;
                } else {
                    result[index] = result[index - 1] + result[index - 2];
                }
            }
        }

        return result;
    }
}
