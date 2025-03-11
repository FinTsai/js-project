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