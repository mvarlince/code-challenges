/*
Data structures and Algorithms


Challenge: Linear Search
Problem: You are given an array of integers and a target value. 
Your task is to write a function that finds the index of the target value in the array using the linear search algorithm. 
If the target value is not found, return -1.
*/

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i
        } 
    }
    return -1
}

const testArr = [5, 10, 3, 8, 4, 2]

console.log(linearSearch(testArr, 8))