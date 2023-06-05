const rs = require('readline-sync');

rs.keyIn('Press any key to start the game. ');
const Battleship = () => {
    // Generates Board and determines size of board
  const createLetters = (num) => {
    let letter = [];
    for (let i = 0; i < num; i++) {
      letter.push(String.fromCharCode(65 + i));
    }
    return letter;
  }
  let rows = createLetters(10);

  // Generates random values
  const randomizer = (max) => {
    return Math.floor(Math.random() * max);
  }
  const flip = () => {
    return Math.floor(Math.random() * 2);
  }

  // Places Ships
  let fleet = new Map();
  let positions = new Set();
  const placeShip = (max, length, name) => {
    const generateStart = (max) => {
      let row = randomizer(max);
      let column = randomizer(max) + 1;
      let check = flip();
      return [row, column, check];
    }
    const generateLocation = ([rowStart, columnStart, Boolean], length) => {
      let location = [];
      for (let i = 0; i < length; i++) {
        let row = Boolean ? rowStart + i : rowStart;
        let column = Boolean ? columnStart : columnStart + i;
        location.push(`${rows[row]}${column}`);
      }
      verifyLocation(location);
    }
    const verifyLocation = (arr) => {
      let verify = arr.map(point => positions.has(point));
      if (verify.includes(true)) {
        generateLocation(generateStart(max), length);
      } else {
        let ship = new Set();
        arr.forEach(point => {
          positions.add(point);
          ship.add(point);
        });
        fleet.set(name, ship);
      }
    }
    generateLocation(generateStart(max), length);
  }
  placeShip(6, 5, 'Carrier');
  placeShip(7, 4, 'Battleship');
  placeShip(8, 3, 'Cruiser');
  placeShip(8, 3, 'Submarine');
  placeShip(9, 2, 'Destroyer');
  console.table(fleet);

  // Gameplay
  const misses = new Set();
  while (positions.size > 0) {
    let target = rs.question('Enter a location to strike, ie A1 : ', {
      limit: /([A-Z]\d0?)/gm,
      limitMessage: 'Please enter a location with a capital letter followed by a number, ie A1 '
    })
    if (misses.has(target)) {
      console.log('You have already picked this location! Miss')
    } else if (positions.has(target)) {
      positions.delete(target);
      misses.add(target);
      for (let [name, location] of fleet) {
        location.delete(target);
        if (location.size === 0) {
          fleet.delete(name);
          console.log(`You sunk my ${name}!`);
        }
      }
      console.log(`Hit! You have hit a ship! ${fleet.size} ship${fleet.size === 1 ? '' : 's'} remaining.`);
    } else {
      misses.add(target);
      console.log('You have missed!');
    }
  }
}
Battleship();

// Question Restart
if (rs.keyInYNStrict('You have destroyed all battleships! Would you like to play again? ')) {
  Battleship();
}