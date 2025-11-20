/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
   let targetCharCode = target.charCodeAt(0);
   for(let i =0; i<letters.length ; i++) {
    if(letters[i].charCodeAt(0)>targetCharCode) {
       console.log(letters[i].charCodeAt(0))
        return letters[i]
    }
   }
   return letters[0]
};