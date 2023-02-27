/**
 * Based on Code-wars kata:
 * https://www.codewars.com/kata/511f11d355fe575d2c000001/typescript
 */
export class TwoOldestAge {

    /**
     * Gets two oldest ages from given array of ages
     *
     * @param ages int array of ages
     * @return int array with two oldest ages
     */
    static twoOldestAges(ages: number[] | null | undefined): number[] {
        if (ages == null || ages == undefined || ages.length < 2) {
            return [];
        }

        let oldest = [0, 0];
        for (let i = 0; i < ages.length; i++) {
            if (ages[i] > 0) {
                for (let j = oldest.length - 1; j >= 0; j--) {
                    if (ages[i] > oldest[j]) {
                        if (j > 0) {
                            oldest[j - 1] = oldest[j];
                        }
                        oldest[j] = ages[i];
                        break;
                    }
                }
            }
        }

        return oldest;
    }
}
