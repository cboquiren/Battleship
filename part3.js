const rs = require("readline-sync");

rs.keyIn("Press any key to start the game. ");
let fleet = new Map();
let positions = new Set();
const ships = [
  [6, 5, "Carrier"],
  [7, 4, "Battleship"],
  [8, 3, "Cruiser"],
  [8, 3, "Submarine"],
  [9, 2, "Destroyer"],
];
let misses = new Set();

const createLetters = (num) => {
  let letter = [];
  for (let i = 0; i < num; i++) {
    letter.push(String.fromCharCode(65 + i));
  }
  return letter;
};
let rows = createLetters(10);

const randomizer = (max) => {
  return Math.floor(Math.random() * max);
};
const flip = () => {
  return Math.floor(Math.random() * 2);
};
const generateStart = (max) => {
  let row = randomizer(max);
  let column = randomizer(max) + 1;
  let check = flip();
  return [row, column, check];
};
const generateLocation = ([rowStart, columnStart, Boolean], length) => {
  let location = [];
  for (let i = 0; i < length; i++) {
    let row = Boolean ? rowStart + i : rowStart;
    let column = Boolean ? columnStart : columnStart + i;
    location.push(`${rows[row]}${column}`);
  }
  return location;
};
const verifyLocation = (arr, name, max, length) => {
  let verify = arr.map((point) => positions.has(point));
  if (verify.includes(true)) {
    placeShip([max, length, name]);
  } else {
    let ship = new Set();
    arr.forEach((point) => {
      positions.add(point);
      ship.add(point);
    });
    fleet.set(name, ship);
  }
};
const placeShip = ([max, length, name]) => {
  let test = generateLocation(generateStart(max), length);
  verifyLocation(test, name, max, length);
};
const fleetDelete = (target) => {
  for (let [name, location] of fleet) {
    location.delete(target);
    if (location.size === 0) {
      fleet.delete(name);
      console.log(`You sunk my ${name}!`);
    }
  }
};
const targetHandle = (target) => {
  if (misses.has(target)) {
    console.log("You have already picked this location! Miss");
  } else if (positions.has(target)) {
    positions.delete(target);
    misses.add(target);
    fleetDelete(target);
    console.log(
      `Hit! You have hit a ship! ${fleet.size} ship${
        fleet.size === 1 ? "" : "s"
      } remaining.`
    );
  } else {
    misses.add(target);
    console.log("You have missed!");
  }
};
const battleShip = () => {
  fleet = new Map();
  positions = new Set();
  misses = new Set();
  ships.forEach((ship) => placeShip(ship));
  console.table(fleet);
  while (fleet.size > 0) {
    let target = rs.question("Enter a location to strike, ie A1 : ", {
      limit: /([A-Z]\d0?)/gm,
      limitMessage:
        "Please enter a location with a capital letter followed by a number, ie A1 ",
    });
    targetHandle(target);
  }
};
const restart = () => {
  if (
    rs.keyInYNStrict(
      "You have destroyed all battleships! Would you like to play again? "
    )
  ) {
    battleShip();
    restart();
  }
};

battleShip();
restart();
