//factorial example
function factorial(n) {
    if(n<0){
        throw new Error('factorial is only defined non-negative integers!');
    }
    if(n==0){
        return 1;
    }
    return n* factorial(n-1);
}

module.exports = factorial;