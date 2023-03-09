/**
 * Based on Google interview challenge
 */
export class LocalMinMax {

    /**
     * Get local min and max values from given int array
     *
     * @param list number[]
     * @return number[][] matrix with min and max
     */
    static getLocalMinMax(list: number[] | null | undefined): number[][] {
        let result: any = [[], []];

        if (list != null && list != undefined && list.length > 0) {
            var min = Math.min(...list);
            var max = Math.max(...list);

            result[0] = [min];
            result[1] = [max];
        }

        return result;
    }

    /**
     * Get local min and max values from given int array
     *
     * @param list number[]
     * @return number[][] matrix with min and max
     */
    static getLocalMinMaxAlternative(list: number[] | null | undefined): number[][] {
        let result: any = [[], []];

        if (list != null && list != undefined && list.length > 0) {
            list.sort((a, b) => { return a < b? -1: 1});
            result[0] = [list[0]];
            result[1] = [list[list.length - 1]];
        }

        return result;
    }
}
