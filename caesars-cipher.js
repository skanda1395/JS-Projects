function rot13(str) { // LBH QVQ VG!

  let result = '';
  for (let i = 0, l = str.length; i < l; i++) {
    if(/[A-Z]/.test(str[i]))
      result += String.fromCharCode(((str.charCodeAt(i) - 65 + 13) % 26) + 65);
    else
      result += str[i];
  }
  return result;
  
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
