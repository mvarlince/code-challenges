/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/


/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    let hold = []
    for (let i = 0; i < s.length; i++){
        hold += s[i]
        for (let j = i +1; j < s.length; j++){
            if (hold[0] == s[j+1]){
                return true
            } else {
                return false
            }
        }
    }
    
};


const ser = ['()[]{}']

console.log(isValid(ser))
