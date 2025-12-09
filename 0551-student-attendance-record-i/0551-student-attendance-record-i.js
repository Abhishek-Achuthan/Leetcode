/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let lateCount =0;
    let absentCount = 0;
    let hash = {};

    for(let char of s){
        hash[char] = (!hash[char] || 0) +1
    }

    console.log(hash)

    for(let i=0 ;i<s.length ; i++) {
        if(s[i] ==='A') {
            absentCount++;
        }
    }
    let i =0;
    while(i<s.length){
        if(s[i]==='L'&&s[i+1] === 'L'){
            lateCount++;
        }else if(s[i+1] !=='L' && s[i]==='L'){
            lateCount++;
        }else if(s[i] !== 'L' && lateCount<3){
          lateCount = 0
        }

        i++
    }
    if(absentCount<2 && lateCount<3) {
        return true
    }else{
        return false
    }
};