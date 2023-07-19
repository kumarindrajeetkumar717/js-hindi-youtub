var getSeven = function() {
    return 7 ;
};

function useFunction(fn) {
     
    return fn();
}

console.log (useFunction(getSeven));