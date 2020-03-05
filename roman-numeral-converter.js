function convertToRoman(num) {
  let str = '';
  let rSym = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let i = 1;
  // let rem;
  let numStr = num.toString();
  
  let build = (dig) => { 
    switch(dig) {
      case 1:
      case 2:
      case 3:
        str = rSym[i - 1].repeat(dig) + str;  
        break;
      case 4: 
        str = rSym[i - 1] + rSym[i] + str;
        break;    
      case 5: 
        str = rSym[i] + str;
        break;
      case 6:
      case 7:
      case 8:
        str = rSym[i] + rSym[i - 1].repeat(dig - 5) + str;
        break;
      case 9: 
        str = rSym[i - 1] + rSym[i + 1] + str;
        break;
    }
  };  
  
  for (let m = numStr.length; m > 0; m--, i += 2) {
    build(Number(numStr[m - 1]));
  }

  // while ((rem = num % 10) != 0) {
  //   num = Math.floor(num / 10);
  //   build(rem);
  //   i += 2;
  // }
  
  return str;

}

convertToRoman(36);
