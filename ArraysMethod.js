let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

/*condiments[0] = 'Mayo';
console.log(condiments);*/

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils); //change the word



const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);


const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('shopping', 'shower');
console.log(chores); //add 'shopping' and 'shower' the end of array


const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

const removed = chores.pop();
console.log(chores);
console.log(removed); //removed last string


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



//Nested Arrays

const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];

console.log(target);




const shoppinLists = ['milk', 'meats', ['Veg', 'Mango'], 'fruits'];

//Use the .length property to find the last element of an array.
const lastElement = shoppinLists[shoppinLists.length - 1];
console.log(lastElement);

//Use the other methods in MDN documentation not mentioned in the lesson.
console.log(shoppinLists.join());
//Take all the elements in an array and make a string.
console.log(shoppinLists.join(', '));

//Find the return value of calling .push() on an array.
console.log(shoppinLists.push());

//Nest an array within an array.
const pick = shoppinLists[2][1];
console.log(pick);







