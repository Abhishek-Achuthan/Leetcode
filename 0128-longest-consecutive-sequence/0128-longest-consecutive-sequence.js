/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

 let set = [...new Set(nums)]
 s= set.sort((a,b)=>a-b)

 let count =0
let max = 0
 for(let i=0;i<s.length;i++){
    count++
     if(max<count){
        max = count
    }
    if(s[i+1]-s[i]>1){
        count = 0
    }
 }
 return max
};