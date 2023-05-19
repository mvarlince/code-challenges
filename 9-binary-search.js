/*
Challenge: Binary Search

Problem Statement:
Given a sorted array of integers, implement the Binary Search algorithm to find the index of a specific target element. 
If the target element is not found in the array, return -1.
*/

function binarySearchSecondAttempt(arr, target) {
  let left = 0
  let right = arr.length - 1

  for (let i = left; i <= right; i++) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

const example = [1, 2, 4, 5, 8, 9]

console.log(binarySearch(example, 1))

// not binary search actually

// function binarySearch(arr, target){
//     const midPoint = (arr.length / 2)

//     for (let i = 0; i < midPoint; i++){
//         if (arr[i] === target){
//             return i
//         }
//         for (let i = midPoint; i < arr.length; i++){
//             if (arr[i] === target){
//                 return i
//             }
//         }
//     }
//     return -1
// }
