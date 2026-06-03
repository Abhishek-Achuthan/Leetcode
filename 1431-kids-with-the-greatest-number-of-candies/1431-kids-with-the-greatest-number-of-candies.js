/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  let max = Math.max(...candies);
  for (let i  = 0; i < candies.length; i++) {
      let sum = candies[i] + extraCandies;

      sum >= max ? result.push(true) : result.push(false)
  }  
  return result
};