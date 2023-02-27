/**
 * Based on Code-wars kata:
 * https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/typescript
 */
export class EvenOrOdd {

    /**
     * Returns if given number is even or odd
     * @param number int
     * @return {@link String}
     */
    static evenOrOdd(number: number): string {
        if (number % 2 == 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }
}
