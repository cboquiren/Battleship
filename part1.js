const rs = require('readline-sync');
let fleet = new Set();
let misses = new Set();

const createLetters = (num) => {
    let letter = [];
    for (let i = 0; i < num; i++) {
      letter.push(String.fromCharCode(65 + i));
    }
    return letter;
}

let rows = createLetters(3);

const location = () => {
  let row = rows[Math.floor(Math.random() * rows.length)];
  let column = Math.floor(Math.random() * rows.length + 1);
  let position = `${row}${column}`;
  !fleet.has(position) ? fleet.add(position) : location();
}

const placeShips = (num) => {
    for (let i = 0; i < num; i++) {
      location();
    }
}

const targetHandle = (target) => {
  if (misses.has(target)) {
      console.log('You have already picked this location! Miss')
  } else if (fleet.has(target)) {
      fleet.delete(target);
      misses.add(target);
      console.log(`Hit! You have sunk a battleship! ${fleet.size} ship${fleet.size === 1 ? '' : 's'} remaining.`);
  } else {
      misses.add(target);
      console.log('You have missed!');
  }
}

const Battleship = () => {
  fleet = new Set();
  misses = new Set();
  placeShips(2);
  while (fleet.size > 0) {
    let target = rs.question('Enter a location to strike, ie A1 : ', {
      limit: /[A-Z]\d/gmi,
      limitMessage: 'Please enter a location with a capital letter followed by a number, ie A1'
    })
    targetHandle(target);
  }
}

const restart = () => {
  if (rs.keyInYNStrict('You have destroyed all battleships! Would you like to play again? ')) {
    Battleship();
    restart();
  }
}

rs.keyIn('Press any key to start the game. ');
Battleship();
restart();