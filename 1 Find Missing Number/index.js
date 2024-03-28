function findMissingNumber(arr) {
    const hash = {}; // create a hash function

    // Populate the hash table with array elements as keys
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = true;
    }

    // Iterate from 1 to n to find the missing number
    for (let i = 1; i <= arr.length + 1; i++) {
        if (!hash[i]) {
            return i; // If the number is not found in the hash table, it's the missing number
        }
    }
}

// Test the function
const inputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Missing Number:", findMissingNumber(inputArray));
