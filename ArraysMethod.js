let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

/*condiments[0] = 'Mayo';
console.log(condiments);*/

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);



const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);


const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('shopping', 'shower');
console.log(chores);


const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

const removed = chores.pop();
console.log(chores);
console.log(removed);


const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
//console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

