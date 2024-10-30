//Loops
//The For Loop

/*Create a program that loops from 5 to 10 and logs each number to the console.*/
for (let number = 5; number <= 10; number++)
  {
    console.log(number);
  }
  

//Looping in Reverse
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
//print 3 2 1 0


//Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++)
{
  console.log(`I would love to visit ${vacationSpots[i]}`)
}
/*let i = 0 sets i to 0 before the loop starts. This is the starting index of the array.

i < vacationSpots.length checks if i is less than the length of the array. The loop continues as long as this condition is true.

i++ increases i by 1 after each loop iteration. This moves to the next index in the array.

Inside the loop, vacationSpots[i] accesses the element at the current index i. This way, each element of the array is accessed one by one.*/




//Nested Loops
/*When we have a loop running inside another loop, we call that a nested loop*/

/*example
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
*/


const bobsFollowers = ['Timo', 'Bibi', 'Tom', 'Nina'];
const tinasFollowers = ['Nina', 'Timo', 'Fin'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
/*Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array
*/
/*mutualFollowers array. When a match is found, you only need to push the element once, not twice.*/




//The While Loop
/*the 
Preview: Docs A loop is a programming tool that is used to repeat a set of instructions.
while loop. To start, let’s convert a for loop into a while loop:
example

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

So you may be wondering when to use a while loop! The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
*/

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard) // print without spade
}
/*Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.*/




//do...while
/*In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.
A do...while
 statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:
 
 example

 let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
 */



