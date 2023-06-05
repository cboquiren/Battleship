/* const placeShip0 = (max, length) => {
  let placement = new Set();
  const findPoints = (max, length) => {
    let position = [];
    let rowStart = randomizer(max);
    let columnStart = randomizer(max) + 1;
    let check = flip();
    for (let i = 0; i < length; i++) {
      let row = check ? rowStart + i : rowStart;
      let column = check ? columnStart : columnStart + i;
      position.push(`${rows[row]}${column}`);
    }
    return verifyPoints(position);
  }
  const verifyPoints = (arr) => {
    for (let point of arr) {
      if (fleet.has(point)) {
        placeShip(max, length);
      }
    }
    arr.forEach(point => placement.add(point))
  }
  findPoints(max, length);
  placement.forEach(point => fleet.add(point));
  console.log('placement: ', placement);
}



// placeShip(6, 5);
// placeShip(7, 4);
// console.log('fleet: ', fleet);




const placeShip1 = (max, length) => {
  const verifyShip = (arr, max) => {
    let check = arr.map(point => fleet.has(point));
    console.log(check)
    if (check.includes(true)) {
      generateShip(max, arr.length)
    } else {
      arr.forEach(point => fleet.add(point));
    }
    check.includes(true) ? generateShip(max, arr.length) : arr.forEach(point => fleet.add(point));
  }
  
  const generateShip = (max, length) => {
    let position = [];
    let rowStart = randomizer(max);
    let columnStart = randomizer(max) + 1;
    let check = flip();
    for (let i = 0; i < length; i++) {
      let row = check ? rowStart + i : rowStart;
      let column = check ? columnStart : columnStart + i;
      position.push(`${rows[row]}${column}`);
    }
    verifyShip(position, max);
  }
  generateShip(max, length);
}

// placeShip(6, 5);
// // console.log(fleet);
// placeShip(7, 4);
// console.log(fleet); */



/* let fleet = new Set();
let position = new Set();
position.add([1,2,3]);
fleet.add(position);

console.log(fleet);
console.log(fleet.size); */








/* const placeCarrier = () => {
  let position = new Set();
  let rowStart = randomizer(6);
  let columnStart = randomizer(6) + 1;
  let check = flip();
  for (let i = 0; i < 5; i++) {
    let row = check ? rowStart + i : rowStart;
    let column = check ? columnStart : columnStart + i;
    position.add(`${rows[row]}${column}`);
  }
  position.forEach(point => fleet.add(point));
}

const placeBattleship = () => {
  let position = new Set();
  let rowStart = randomizer(7);
  let columnStart = randomizer(7) + 1;
  let check = flip();
  for (let i = 0; i < 4; i++) {
    let row = check ? rowStart + i : rowStart;
    let column = check ? columnStart : columnStart + i;
    let location = `${rows[row]}${column}`;
    if (fleet.has(location)) {
      position.clear();
      placeBattleship();
    } else {
      position.add(location);
    }
  }
  position.forEach(point => fleet.add(point)); */

// let testMap = new Map();
// let testSet = new Set();
// let arr = [1,2,3];

// arr.forEach(num => testSet.add(num));

// testMap.set('check', testSet);

// testMap.forEach(set => set.delete(4));

// console.log(testMap);


// an object whose properties are objects

// an array of objects

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }


// const family = {};

// family.mother = new Person("Janet", "Jones");
// family.father = new Person("Tyrone", "Jones");
// family.daughter = new Person("Maria", "Jones");

// console.table(family);


const people = {
  'A': [`${String.fromCharCode(94)}`, '', ''],
  'B': ['', '', ''],
  'C': [, '', ''],
}

console.table(people);


const createLetters = (num) => {
    let letter = [];
    for (let i = 0; i < num; i++) {
      letter.push(String.fromCharCode(65 + i));
    }
    return letter;
  }
  let rows = createLetters(3);

  let gameBoard = {};
  const buildBoard = (arr) => {

  }