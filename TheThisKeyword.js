const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo() {
    return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
  }
};

console.log(robot.provideInfo());

/*print
I am 1E78V2 and my current energy level is 100.
*/






//Arrow Functions and this
const robot = {
  energyLevel: 100,
  checkEnergy () {
    //The key takeaway from the example above is to avoid using arrow functions when using this in a method!
    //use a function expression
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();