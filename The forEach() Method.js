
//example
groceries.forEach(groceryItem => console.log(groceryItem));


function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

/*The above example uses a function declaration but you can also use a function expression or arrow function as well.*/


const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`));

/*terate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

You may use any form of callback you prefer.*/



