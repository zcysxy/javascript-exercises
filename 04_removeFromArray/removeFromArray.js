const removeFromArray = function() {
    let result = arguments[0];
    let removeIndex;

    for (let i=1; i<arguments.length; i++) {
        removeIndex = result.indexOf(arguments[i]);
        result.splice(removeIndex, (removeIndex !== -1))
    }

    return result;
};

module.exports = removeFromArray;
