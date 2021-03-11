/*
*************************** Chinese Zodiac ***********************
The Chinese zodiac is a repeating cycle of 12 years, with each year
being represented by an animal and its reputed attributes. The lunar calendar
is divided into cycles of 60 years each, and each year has a combination
of an animal and an element. There are 12 animals and 5 elements;
the animals change each year, and the elements change every 2 years.
The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.

Since the current calendar is Gregorian, I will only be using years from the epoch 1924.
For simplicity I am counting the year as a whole year and not from January/February to the end of the year.

##Task

Given a year, return the element and animal that year represents ("Element Animal").
For example I'm born in 1998 so I'm an "Earth Tiger".
*/
const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
function chineseZodiac(year){
  let baseYear = 1984;
  let difference = baseYear - year;
  let animal;
  let element;
  if (difference < 0) {
    difference *= -1;
    animal = animals[Math.round(difference % 12)];
    element = elements[Math.floor(difference/2 % 5)];
  } else if (difference >= 0) {
    if (Math.round(difference % 12) === 0) {
      animal = animals[0]
    } else {
    animal = animals[12 - Math.round(difference % 12)];
  };
    if (Math.round(difference/2 % 5) === 0) {
      element = elements[0];
    } else {
    element = elements[5 - Math.round(difference/2 % 5)];
    }
  }
return element + " " + animal;
};
//

//let sth = 7 % 5;
// console.log(sth);

let t1 = 1998;// --> Earth Tiger, animal - difference
let t2 = 2016;// --> Fire Monkey
let t3 = 1965;// --> Wood Snake
let t4 = 1924;// --> Wood Rat
let t5 = 1909;
console.log(chineseZodiac(1848));
//console.log(-16%5);

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
