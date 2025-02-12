//Grammar Checker

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach(word => {
  count ++;
});

console.log(count);

storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord;
});
//it’s recommended to use !== for more predictable and type-safe comparisons.
//.filter() method returns a new array containing only the elements that satisfy the condition specified in the callback function. It does not modify the original array.

storyWords = storyWords.map(word => {
 return word === misspelledWord ? "beautiful" : word;
 
 /* if(word === misspelledWord) {
    return "beautiful"
  } else {
    return word;
  };
  */
});

//console.log(story);

let badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
});

storyWords[badWordIndex] = 'really';
//It was a short stop, though, because I had a really long way to go. change from freaking to really.

console.log(badWordIndex);

let lengthCheck = storyWords.every(word => {
  return word.length < 10;
});

console.log(lengthCheck);

let findWordMore10 = storyWords.findIndex(word => {
  return word.length > 10;
});

if(findWordMore10 !== -1) {
  storyWords[findWordMore10] = 'stunning';
};
/*at least one word longer than 10 characters.

Use an iterator method of your choice to access the word (there is only one) in the storyWords array that is greater than 10 characters. Then, manually replace the word in the original story string with a shorter word.

Some ideas for replacement words that can be used are: stunning, dazzling, or glorious.
*/

console.log(findWordMore10);

storyWords = storyWords.filter(word => {
  return word !== 'very';
});
//Removing the word “very”.

console.log(storyWords.join(' '));


