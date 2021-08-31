const reverseString = function(str) {
    let result = '';

    /*
    // Method 1
    for (let i=0; i<str.length; i++) {
        result = str[i] + result;
    }
    */

    // Method 2
    let tempArray = str.split('');
    tempArray.reverse();
    result = tempArray.join('')

    return result;
};

module.exports = reverseString;
