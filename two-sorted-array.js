const array1 = [2,5,8,12,19]
const array2 = [15,60,90,200]


function sortThem(arr1, arr2 ) {
    let newArray = []
    // i want to find the longest array
    for (let i = 0; i < (arr1.length) ; i++){
        // if (arr1[i] < arr1[i+2]) {
        //     newArray.push(arr1[i])
        // } 
        for (let j = 0; j < (arr2.length); j++ ){
            // if (arr2[j] < arr1[i]) {
            //     newArray.push(arr2[j])
            // } 
            if (arr1[i] < arr1[j]){
                newArray.push(arr1[i] && arr2[j])
            } 
            // else if (arr1[j] < arr2[i]) {
            //     newArray.push(arr1[i])
            // }
        }
    }
    return newArray
}

console.log(sortThem(array1, array2))

