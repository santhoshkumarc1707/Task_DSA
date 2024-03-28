function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // Edge case: empty array

    let i = 0; // Pointer i to track unique elements
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; // Move i to the next unique element
            nums[i] = nums[j]; // Update nums[i] with the new unique element
        }
    }
    // i + 1 gives the new length of the array with duplicates removed
    return i + 1;
}

// Test the function
const inputArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
const newLength = removeDuplicates(inputArray);
console.log("New Length:", newLength);
