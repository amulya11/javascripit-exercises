let assert = require('assert')

/*
  Given the variable 'statement' below, write a function that reverses
  the letters in each word, but leaves the words in the same order
*/

let statement = 'Penn Mutual sells life insurance'

function reverseLetters(str) {
  // PLACE YOUR CODE BELOW
	str= str.split('').reverse().join('');
		var result = "";
        var revArr = str.split(" ");
        for(var i = revArr.length - 1; i >= 0; i--) {
            result += revArr[i] + " ";
        }
        return result.trim();

  // PLACE YOUR CODE ABOVE
}

let reversedWords = reverseLetters(statement)
assert.equal(reversedWords, 'nneP lautuM slles efil ecnarusni', 'Strings are not equal') || console.log('Success')

console.log(reversedWords)

/*
  Your console output should look like the following
  when run with "node 4_word_reversal.js":

Success
nneP lautuM slles efil ecnarusni

*/