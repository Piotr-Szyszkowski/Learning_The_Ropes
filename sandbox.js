



/*
************************* Find the nth Digit of a Number *********************
*/
var findDigit = function(num, nth){
  if (nth <= 0) {
    return -1;
  }
  if (num < 0) {
    num *= -1;
  }
  let numStr = num.toString();
  if (numStr.length < nth) {
    return 0;
  }
  let wantedStr = numStr[numStr.length-nth]
  return Number(wantedStr);
};

console.log(findDigit(123456789, 6));


/*
*********************** Miles per gallon to kilometers per liter **************
*/
function converter (mpg) {
  let kPG = mpg * 1.609344;
  let kPL = (kPG / 4.54609188).toFixed(2);
  let hmm = kPL * 1;
  return hmm;
};
  /*let strKPL = kPL.toString();
  if (strKPL[])
  return strKPL;*/
  //code to convert miles per imperial gallon to kilometers per liter
}
/*
10/1 = 10
k
*/
//let t1 = 1.6000001
//console.log(t1[0]);

console.log(converter(12.16));// 3.54;
//*****************************************************************************
console.log("Look mummy!! I've created a file!!"); // Line created on acer...
console.log("..and now edited it with Atom on win10 PC"); // Line added on HP with Win10
