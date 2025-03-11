//Creating Object Literals


// Write your fasterShip object literal below
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};

console.log(fasterShip);
//{ 'Fuel Type': 'Turbo Fuel', color: 'silver' }




//Accessing Properties

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

console.log(crewCount, planetArray);




//Bracket Notation
/*We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.*/

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];
console.log(isActive);




//Property Assignment
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
//Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship.numEngines = 8;
//Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
delete spaceship['Secret Mission'];

console.log(spaceship);
//print 
/*Output-only Terminal
Output:
{ 'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'glorious gold',
  numEngines: 8 }
  */
  




  //Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
  //separate your methods with commas just as you would any other key-value pairs
};

alienShip.retreat();
alienShip.takeOff();

/*print

Output-only Terminal
Output:
We no longer wish to conquer your planet. It is full of dogs, which we do not care for.
Spim... Borp... Glix... Blastoff!
*/


