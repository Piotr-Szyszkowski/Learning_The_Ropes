function isPalindrome(line) {
   let lineStr = line.toString(10); 
   let rev = line.toString(10).split("").reverse().join("");
   return rev === lineStr;
  };

  let t1 = 123213;
  let t2 = "banab";
  /*console.log(t1.toString(10));
  console.log(t1);
  console.log(t2);  
  console.log(t2.toString(10));*/
  console.log(isPalindrome(t1));