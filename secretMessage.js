//Secret Message
/*Using array methods, you will transform an array of strings into a secret message!*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

let removed = secretMessage.pop();
console.log(secretMessage.length);


secretMessage.push('to', 'Program');
//add the words to and Program as separate strings to the end of the secretMessage array.

secretMessage[7] = 'right';
//Change the word easily to the word right by accessing the index and replacing it.

secretMessage.shift();
//remove the first string of the array

secretMessage.unshift('Programming');
//add the string Programming to the beginning of the array.


secretMessage.splice(6, 5, 'know');
//.splice(start, deleteCount, 'string to add')
//remove the strings get, right, the, first, time,, and replace them with the single string know,

console.log(secretMessage.join());




