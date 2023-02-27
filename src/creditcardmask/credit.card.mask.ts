/**
 * Based on Code-wars kata:
 * https://www.codewars.com/kata/5412509bd436bd33920011bc/train/typescript
 */
export class CreditCardMask {

    /**
     * Generates a mask for given str except last 4 characters
     *
     * @param str string
     * @return string with masked values
     */
    static maskify(str: string | null | undefined) {
        if (str != null && str != undefined && str.length > 4) {
            let mask = "";
            for (let i = 0; i < str.length - 4; i++) {
                mask += "#";
            }

            return mask + str.substring(str.length - 4);
        }

        return str;;
    }
}
