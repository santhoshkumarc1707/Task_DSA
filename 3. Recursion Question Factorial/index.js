function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test
const n = 0;
console.log("Factorial of", n, ":", factorial(n));
