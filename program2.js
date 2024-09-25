/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman={
       'I': 1,
       'V': 5,
        'X':10,
        'L': 50,
         'C': 100,
          'D': 500 ,
          'M':1000
    }
    let ans=0;
    let prev=0;
    
    for(let i=s.length-1;i>=0;i--){
        let current=roman[s[i]];
        if(current<prev){
            ans-=prev;
        }else{
            ans+=current;
        }
        prev=current;


    }
    return ans;
    
};


module.exports={romanToInt}