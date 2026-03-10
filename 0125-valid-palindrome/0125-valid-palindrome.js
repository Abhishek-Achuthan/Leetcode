/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const set = new Set([
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"
    ]);
    let left  = 0 ; 
    let right = s.length -1
    while(left < right) {
        if(!set.has(s[left].toLowerCase())){
          left++;
          continue;
        }else if(!set.has(s[right].toLowerCase())){
          right--;
          continue;
        }else{
          if(s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
          }
        }
        left++;
        right--
    }
    return true
};