function rotateArray(nums, k) {
    const reverse = (arr, start, end) => {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    const n = nums.length;
    k = k % n;

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);

    return nums;
}

// Test
const inputArray = [3, 8, 9, 2, 5];
const k = 3;
console.log("Rotated Array:", rotateArray(inputArray, k));
