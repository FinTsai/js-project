//The .findIndex() Method

/*We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling 
Preview: Docs Loading link description
.findIndex()
 on an array will return the index of the first element that evaluates to true in the callback function.
 */

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5


