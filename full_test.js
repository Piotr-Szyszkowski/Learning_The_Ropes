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


//let sth = 7 % 5;
// console.log(sth);

let t1 = 1998;// --> Earth Tiger, animal - difference
let t2 = 2016;// --> Fire Monkey
let t3 = 1965;// --> Wood Snake
let t4 = 1924;// --> Wood Rat
let t5 = 1909;
console.log(chineseZodiac(t5));
//console.log(-16%5);
