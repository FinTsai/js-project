let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

spaceship.passengers = [{people: 'boys'}];

let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger);
//print { people: 'boys' }




//example

const passengers = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 }
];

const firstPassenger = passengers[0];
// firstPassenger is { name: 'Alice', age: 30 }

const firstPassengerName = passengers[0].name;
// firstPassengerName is 'Alice'
