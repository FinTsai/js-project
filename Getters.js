/*example
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'
*/

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if(typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
      //use the typeof operator to check the type of this._energyLevel is a numebr?
    } else {
      return 'System malfunction: cannot retrieve energy level'
    };
  }
};

console.log(robot.energyLevel);
//print My current energy level is 100







//Setters
/*examle
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
person._age = 'forty-five'
console.log(person._age); // Prints forty-five





Getter (get):

Allows you to access a property.
Acts like a property but is actually a method.
Does not require parentheses when accessed.
Example:
const obj = {
  _value: 10,
  get value() {
    return this._value;
  }
};
console.log(obj.value); // 10


Setter (set):

Allows you to set or update a property.
Also acts like a property but is a method.
Requires a parameter to set the value.
Example:
const obj = {
  _value: 10,
  set value(newValue) {
    this._value = newValue;
  }
};
obj.value = 20;
console.log(obj._value); // 20


Getters are for retrieving values, while setters are for updating them.

*/



const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
//print 100


