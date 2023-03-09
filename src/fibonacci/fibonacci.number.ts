/**
 * Based on Interview challenge:
 * Calculate Nth Fibonacci number and optimize your solution to support "big numbers"
 */
export class FibonacciNumber {

    private static MAX_SUPPORTED_VALUE = 99;

    /**
     * Returns fibonacci Nth number
     *
     * @param k bigint
     * @return bigint
     */
    static calculate(k: bigint): bigint {
        if (k < 1 || k > FibonacciNumber.MAX_SUPPORTED_VALUE) {
            return BigInt(0);
        }
        if (k <= 2) {
            return BigInt(1);
        }

        return FibonacciNumber.calculate(k - 1n) + FibonacciNumber.calculate(k - 2n);
    }

    /**
     * Returns fibonacci Nth number using memoization
     *
     * @param k bigint
     * @return bigint
     */
    static calculateWithMemoization(k: bigint, customCache: Map<bigint, bigint>): bigint {
        if (k < 1 || k > FibonacciNumber.MAX_SUPPORTED_VALUE) {
            return BigInt(0);
        }
        if (customCache.has(k)) {
            return customCache.get(k)!;
        }
        if (k <= 2) {
            customCache.set(k, 1n);
            return BigInt(1);
        }

        var current = FibonacciNumber.calculateWithMemoization(k - 1n, customCache) 
                        + FibonacciNumber.calculateWithMemoization(k - 2n, customCache);
        customCache.set(k, current);

        return current; 
    }
}
