//The .reduce() Method

/*Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. 
Take a look at the example below:

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

Here are the values of accumulator and currentValue as we iterate through the numbers array:

Iteration	accumulator	currentValue	return value
First	        1	            2	           3
Second      	3           	4 	         7
Third	        7	            10	         17


Initial Values:

accumulator starts as the first element of the array, which is 1.
currentValue starts as the second element, which is 2.
First Iteration:

accumulator is 1, currentValue is 2.
Return value: 1 + 2 = 3.
Second Iteration:

accumulator is now 3 (the result from the previous iteration), currentValue is 4.
Return value: 3 + 4 = 7.
Third Iteration:

accumulator is 7, currentValue is 10.
Return value: 7 + 10 = 17.
After all iterations, the final value of accumulator is 17, which is why summedNums is 17.


const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117
*/


const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);

  return accumulator + currentValue
}, 10);// Add 10 as the second argument here

console.log(newSum) //output 26




