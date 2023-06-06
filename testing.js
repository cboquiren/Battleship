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


// const people = {
//   'A': [`${String.fromCharCode(94)}`, '', ''],
//   'B': ['', '', ''],
//   'C': [, '', ''],
// }

// console.table(people);







// This is how to table a grid
/* let testBoard = {
  A: {1: '', 2: '', 3: ''},
  B: {1: '', 2: '', 3: ''},
  C: {1: '', 2: '', 3: ''}
}

console.table(testBoard); */

const createLetters = (num) => {
  let letters = [];
  for (let i = 0; i < num; i++) {
    letters.push(String.fromCharCode(65 + i));
  }
  return letters;
}
let rows = createLetters(10);

const columnFill = () => {
  let col = {};
  for (let i = 1; i < rows.length + 1; i++) {
    col[i] = '';
  }
  return col;
}

const board = {};

for (let letter of rows) {
  board[letter] = columnFill();
};

console.table(board);

console.log(board.A)

const fillMiss = (letter, num) => {
  board[letter][num] = 'O';
};

fillMiss('A', 3);

console.log(board.A)
console.table(board)



// regex testing

/* let test = 'A10'
let using = /([A-Z]\d0?)/gm;
let regex = new RegExp(`^([A-${rows[rows.length-1]}]([1-9]{1}|10))$`, 'gm');
([...columns])
let check = regex.test(test);
console.log(regex, check); */
