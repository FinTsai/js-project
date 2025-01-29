//The .filter() Method

/*
Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. 
However, .filter() returns an array of elements after filtering out certain elements from the original array. 
The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
The elements that cause the callback function to return true are added to the new array. 
Take a look at the following example:
*/

/*
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
*/



const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumber => {
  return randomNumber < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7
});

console.log(smallNumbers);
console.log(longFavoriteWords);

