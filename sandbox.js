/*
*************************** Powers of 2 ********************
*/
function powersOfTwo(n){
  let arr = [1];
  for (let i = 1; i <= n; i++) {
    arr.push(arr[i - 1] * 2);
  }
  return arr;
};

let t1 = 4;
console.log(powersOfTwo(t1));





/*
**************** Initialize my name *************************
*/
function initializeNames(name){
  let finalArr = [];
  let nameSplt = name.split(" ");
  if (nameSplt.length < 3) {
    return name;
  } else {
    finalArr.push(nameSplt[0]);
    for (let i = 1; i < nameSplt.length - 1; i++) {
      finalArr.push(nameSplt[i][0] + ".");
    }
    finalArr.push(nameSplt[nameSplt.length - 1])
  };
  return finalArr.join(" ");
};

let t1 = 'Alice Betty Catherine Davis'; //'Alice B. C. Davis'
let t2 = 'Lois Mary Lane';//'Lois M. Lane'
let t3 = 'Jack Ryan' // 'Jack Ryan'
let t4 = 'Dimitri'// 'Dimitri'
//initializeNames(t1);
console.log(initializeNames(t3));

//***************** Removing Elements ******************************

function removeEveryOther(arr){
  for (let i = 1; i < arr.length; i++) {
    console.log(`pass number ${i}, array = ${arr}`);
    arr.splice(i, 1)
  }
  return arr;
};

let t1 = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
console.log(removeEveryOther(t1));

/*
********************* Get the Middle Character ***************************
*/
function getMiddle(s) {
  return s.length % 2 === 0 ? s[s.length / 2 -1] + s[s.length / 2]
  : s[Math.round(s.length / 2 - 1)];
};
/*
function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 -1] + s[s.length / 2]
  } else {
    return s[Math.round(s.length / 2 - 1)];
  }
}
*/
let t1 = "abrtoplm";
console.log(getMiddle(t1));
/*
******************* Are the numbers in order? ********************************
*/
function inAscOrder(arr) {
  if (arr.length == 1) {
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
};

let t1 = [ 2, 5, 7, 8, 10, 10];
console.log(inAscOrder(t1));


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
