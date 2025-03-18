/*example
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
*/


const robotFactory = (model, mobile) => {
  return {
    model : model,
    mobile : mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();
//print Beep Boop






//Property Value Shorthand
/*example

const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
//don’t have to repeat ourselves for property assignments!
*/


const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

//print P-501 false






//Destructured Assignment
/*example

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

//const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

//const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

*/

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;
functionality.beep();
//this shortcut and call the .beep() method on functionality


