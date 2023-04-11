// Dungeons and Dragons Auto-Roller: Section 1

// create default attributes
const defaultAttributeScores = [15, 14, 13, 12, 10, 8];
class Player {
  constructor(characterName = "Naruto") {
    // init passed in character name
    this.name = characterName;
    // define player attributes
    this.attributes = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    };

    // return randomized array with default attribute scores
    let shuffledResult = shuffleArray(defaultAttributeScores);
    // go through attributes entires and assign an attribute 
    // entry to each element in shuffled array
    for (const [key, value] of Object.entries(this.attributes)) {
        // pop out lass number of randomized array
        let attributeValue = shuffledResult.pop();
        // assign popped number to current object key
        this.attributes[key] = attributeValue;
    }
}

  // Goal: Create a text-loading menu in the console for rolling a die
  // Inputs: None
  // Output: 'Rolling a dice...' in the console
  rollAttributes() {
    // go through the player attributes
    for (const key in this.attributes) {
        // init the results with a dice roll of four sides and six times
        let results = diceRoller(4, 6);
        results.sort(function(a, b){return a - b}); // numeric sort w/ compare function
        results.shift(); // remove the lowest die roll
        let sum = sumArrayElements(results); // sum the rolls
        this.attributes[key] = sum; // assign the sum to the current attribute
    }
  }

  // Goal: print player name and attributes
  // Input: None
  // Output: player name and attributes
  printPlayer() {
    console.log(`NAME: ${this.name}`);
    for (const [key, value] of Object.entries(this.attributes)) { // go through attribute entries
        // print attributes in a clean manner
        // instead of strength; its str - only 3 chars
        console.log(`${key.slice(0,3).toUpperCase()}: ${value}`);
    }
  }
}

// Create new players and call player attributes functions
const player01 = new Player();
player01.printPlayer();
const player02 = new Player("Son Goku");
player02.rollAttributes();
player02.printPlayer();

// Fisher-Yates algorithm for randomly sorting an array
// from: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// adapted to JS and reconfigured to return a new (non-mutated) array
function shuffleArray(targetArray) {
  // create a copy of targetArray - to prevent modification of original array
  let shuffled = Array.from(targetArray);
  // traverse through the entire array until the end
  for (let i = shuffled.length - 1; i > 0; i--) {
    // define a randomized value
    const j = Math.floor(Math.random() * (i + 1));
    // move current element to randomized location
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled; // return shuffled array
}

// Simulates dice roller that allows user to roll dice
// x number of times with y number of sides
// Inputs: int - times, int - sides
// Output: results of dice roll
function diceRoller(times, sides) {
    let results = []; // init results array
    // continue rolling dice until input number of times
    for (let i = 0; i < times; i++) {
        // push the randomized results to output array
        results.push(Math.floor(Math.random() * sides + 1));
    }

    // return output results
    return results;
}

// Find the sum of all array elements - helper function
// Input: array
// Output: sum of all array elements
function sumArrayElements(array) {
    // currentNumber stores current array index
    // total stores the updated sum for each function call
    return array.reduce((total, currentNumber) => total + currentNumber);
}