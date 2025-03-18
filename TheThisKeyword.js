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





//Privacy
//place an underscore _ before the name of a property to mean that the property should not be altered.
/*example of using _ to prepend a property.
const bankAccount = {
  _amount: 1000
}


//Even so, it is still possible to reassign _amount:
bankAccount._amount = 1000000;

*/

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot.energyLevel = 'high';

robot.recharge();
//print Recharged! Energy is currently at high30%.

