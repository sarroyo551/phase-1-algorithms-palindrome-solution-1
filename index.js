/*function reverseString(str){
  const splitString = str.split('')

  const reverseArray = splitString.reverse()

  const joinArray = reverseArray.join('')

  return joinArray
}*/ // freecodecamp method - identical to the video walkthrough hah

/*function reverse(word) {
  const wordArray = word.split('') //splitting up chars into their own '' in an array
  const reversedWordArray = wordArray.reverse()//you can reverse arrays with reverse (only to arrays)
  const reversedWord = reversedWordArray.join('')//joining the chars and going back to a string
  return reversedWord
}*/

function reverse(word) {
  return word.split('').reverse().join('') //woahhhhhhhh
}

function isPalindrome(word) {
  if (word === reverse(word)) {
    return true
  } else {
    return false 
  }
}

/*function isPalindrome(word) {

  const reversedWord = reverse(word)

  if (word === reversedWord) {
    return true
  } else {
    return false 
  }
}*/

/* 
  -make a function that returns true if a word is a palindrome and false if not
  -that means if the word is the same as the word in reverse, i should return true
  -mom === mom // true
  -abc === cba // true
  -reverse the input string
  -check if - if the input is the same as the reversed input 
    return true
      else
    return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
