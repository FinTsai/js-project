const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

console.log(robotKeys);
//save the keys in an array which is assigned to robotKeys.
/*print
[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
*/




// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
//Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.

console.log(robotEntries);
/*print
[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]
  */



// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
//want another object that has the properties of robot but with a few additional properties
console.log(newRobot);
/*print 
{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 }
  */

