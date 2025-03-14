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
