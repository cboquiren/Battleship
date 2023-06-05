/* const rs = require('readline-sync');

rs.keyIn('Press any key to start the game. ');
const battleship = () => {
  // Creates Board and determines size of board
  const createLetters = (num) => {
    let letter = [];
    for (let i = 0; i < num; i++) {
      letter.push(String.fromCharCode(65 + i));
    }
    return letter;
  }
  let rows = createLetters(3);
  
  // Randomly places set amount of ships
  let fleet = new Set();
  const placeShips = (num) => {
    for (let i = 0; i < num; i++) {
      const location = () => {
        let row = rows[Math.floor(Math.random() * rows.length)];
        let column = Math.floor(Math.random() * rows.length + 1);
        let position = `${row}${column}`;
        !fleet.has(position) ? fleet.add(position) : location();
      }
      location();
    }
  }
  placeShips(2);
  
  // Gameplay
  const misses = new Set();
  while (fleet.size > 0) {
    let target = rs.question('Enter a location to strike, ie A1 : ', {
      limit: /[A-Z]\d/gm,
      limitMessage: 'Please enter a location with a capital letter followed by a number, ie A1'
    })
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
}
battleship();

// Question Restart
if (rs.keyInYNStrict('You have destroyed all battleships! Would you like to play again? ')) {
  battleship();
} */




