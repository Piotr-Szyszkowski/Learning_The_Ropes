//function rex(str) {
let regEx = /bat/
}//

let t1 = `I am Batman, the Caped Crusader of Gotham. Fatman once appeared in comics too playing poker.
          Joker is my nemesis and he plays jojo. Is Joker my nemesis. String continues, spring has come
          and sprung is the trap.
          My Batmobile has thick armour, or in american - armor.`;
let t2 = `Big Wolf and Bad Wolf and Perplexed Wolf`;
let myEx = / ?\w+ (?=Wolf)/g;
console.log(t2.match(myEx));

let t1 = "deus ex deus ex something blah itd deus ex somethinh.";
let r1 = /(deus ex)\s\2/;
console.log(t1.match(r1));

let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result);



let hello = "   Hello, World!   ";
let wsRegex = /(\s\s+)/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result);
