/*
Problem statement: Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.
*/

/*
We start by initializing two variables, maxSum and currentSum, to the first element of the input array nums. 
This sets the maximum and current sum to the first element of the array.

We then use a for loop to iterate through the rest of the elements of nums.

For each element nums[i], we add it to the currentSum. The currentSum variable keeps track of the maximum sum 
of any contiguous subarray that ends with the current element. 
If currentSum becomes negative at any point, we reset it to 0 because a negative sum would only decrease the maximum sum.

We update the value of maxSum to be the maximum of the old maxSum and the new currentSum. 
This is because the maximum sum of any contiguous subarray that ends at or before i might not end with i. 
So, we take the maximum of the current maxSum and the new currentSum.

Finally, we return maxSum, which is the maximum sum of any contiguous subarray in the input array.
*/

const testArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = currentSum + nums[i];

    if (currentSum < nums[i]) {
      maxSum += nums[i];
    } else {
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

console.log(maxSubarray(testArr));
