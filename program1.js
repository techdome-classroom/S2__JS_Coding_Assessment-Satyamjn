/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    for(let c of s){
        if(c=='c' || c=='{'  || c=='['){
            stack.push(c);
        }else{
            if(!stack.length || (c==')' && stack[stack.length-1]!='('))
        }

    }
    
};

module.exports = { isValid };


