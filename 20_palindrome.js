// program to check if the string is palindrome or not

function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return "The string '" + string + "' is not a palindrome.";
        }
    }
    return "The string '" + string + "' is a palindrome.";
}

console.log(checkPalindrome("madam"));     
console.log(checkPalindrome("141"));       
console.log(checkPalindrome("Sunday"));    
console.log(checkPalindrome("mom"));       
console.log(checkPalindrome("listen"));    
console.log(checkPalindrome("dad"));       
