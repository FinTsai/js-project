//The .findIndex() Method

/*We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling 
Preview: Docs Loading link description
.findIndex()
 on an array will return the index of the first element that evaluates to true in the callback function.
 */

 /*
const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1
//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
*/


const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

console.log(foundAnimal);
//on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});

console.log(startsWithS);
//Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
/*can also use .charAt():
sampleString.charAt(0); // 't' 
*/


