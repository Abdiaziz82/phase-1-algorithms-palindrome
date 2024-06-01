function isPalindrome(string) {
  let reversedString  = string.split("").reverse().join("");
  if(string === reversedString ) {
    return true;
  }
  else {
    return false;
  }

  

}

console.log(isPalindrome( "abba"));

/* 
  Add your pseudocode here
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



