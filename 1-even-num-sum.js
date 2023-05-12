// Challenge: Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
// Your function should be named "sumEvenNumbers" and should take an array of numbers as its only parameter.

function sumEvenNumbers(arr) {
    let sum = 0
    for (let i =0; i <= arr.length; i++){
        if( arr[i] % 2 === 0){
            sum += arr[i]
        }
    }
    return sum
  }
  
  // Example Usage:
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
  console.log(sumEvenNumbers([7, 8, 9, 10])); // Output: 18
  console.log(sumEvenNumbers([11, 13, 15, 17])); // Output: 0
  