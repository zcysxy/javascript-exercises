const removeFromArray = function(arr, items) {
    // let args = [...arguments];
    let result = arr;
    let removeIndex;
    for (let i=1; i<arguments.length; i++) {
        removeIndex = result.indexOf(arguments[i]);
        
        if (removeIndex !== -1) {
            result.splice(removeIndex, 1)
        }
    }
    return result;
};

module.exports = removeFromArray;
