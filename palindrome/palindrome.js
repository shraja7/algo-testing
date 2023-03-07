const palindrome = (string) => {
  //reverse the string
  //compare the reversed string to the original string
  //if they are the same, return true
  //else return false
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};

module.exports = palindrome;
