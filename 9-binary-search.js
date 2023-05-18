/*
Challenge: Binary Search

Problem Statement:
Given a sorted array of integers, implement the Binary Search algorithm to find the index of a specific target element. 
If the target element is not found in the array, return -1.
*/

// not binary search actually

const example = [1, 2, 4, 5, 8, 9]

function binarySearch(arr, target){
    const midPoint = (arr.length / 2)

    for (let i = 0; i < midPoint; i++){
        if (arr[i] === target){
            return i
        }
        for (let i = midPoint; i < arr.length; i++){
            if (arr[i] === target){
                return i
            }
        }
    }
    return -1
}

console.log(binarySearch(example, 1))


function binarySearchSecondAttempt(arr, target){
    
}