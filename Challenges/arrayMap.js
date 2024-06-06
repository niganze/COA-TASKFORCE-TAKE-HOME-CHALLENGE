function hasContiguousSubarraySum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Example usage
console.log(hasContiguousSubarraySum([4, 2, 7, 1, 9, 5], 17)); // Output: true

// Test cases
const testCases = [
    { arr: [4, 2, 7, 1, 9, 5], target: 17, expected: true },
    { arr: [1, 2, 3, 4, 5], target: 9, expected: true },
    { arr: [1, 2, 3, 4, 5], target: 15, expected: true },
    { arr: [1, 2, 3, 4, 5], target: 20, expected: false },
    { arr: [-1, 2, 3, -2, 5], target: 5, expected: true },
];

testCases.forEach(({ arr, target, expected }, index) => {
    const result = hasContiguousSubarraySum(arr, target);
    console.log(`Test Case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
});
