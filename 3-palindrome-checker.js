/*
Write a function that takes a string as input and returns true if the string is a palindrome and false otherwise. 
A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward 
and backward, ignoring spaces, punctuation, and capitalization.
*/

const isPalindrome = (text) => {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  console.log(reversedText);
  console.log(text);
  if (
    reversedText.replace(" ", "").toLowerCase() ===
    text.replace(" ", "").toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
};

const testText = "race car";

console.log(isPalindrome(testText));

// amanaPlanacanalpanamA
// AmanaplanacanalPanama
