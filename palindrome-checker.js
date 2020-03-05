exports.palindrome = function(str) {
  
  let pureStr = str.replace(/[\W_]/g, "").toLowerCase();
  
  let l = pureStr.length;
  
  for (let i = 0, j = Math.floor(l / 2); i < j; i++) {
    if(pureStr[i] != pureStr[l - 1 - i]) return "not palindrome.";
  }
  
  return "a palindrome";
  
}
