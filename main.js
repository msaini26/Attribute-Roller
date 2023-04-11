// Dungeons and Dragons Auto-Roller: Section 1

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
  }

  // Goal: Create a text-loading menu in the console for rolling a die
  // Inputs: None
  // Output: 'Rolling a dice...' in the console
  rollAttributes() {
    console.log("Rolling dice...");
  }

  // Goal: print player name and attributes
  // Input: None
  // Output: player name and attributes
  printPlayer() {
    console.log(this.name);
    console.log(this.attributes);
  }
}
